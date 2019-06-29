import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {openDatabase, DEBUG, enablePromise} from 'react-native-sqlite-storage';

import reducers from './store/reducers';
// import Router from './router';
import SwiperView from './components/SwiperView';

DEBUG(true);
enablePromise(true);

class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    var db = openDatabase({name: "UserDatabase.db"}).then(function(sqliteDb) {
      sqliteDb.transaction(function(txn) {
        txn.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
          [],
          function(tx, res) {
            console.log('item:', res.rows);
            if (res.rows.length == 0) {
              txn.executeSql('DROP TABLE IF EXISTS table_user', []);
              txn.executeSql(
                'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
                []
              );
            } else {
              console.log(res.rows.length);
            }
          }
        );
      });
    }).catch(function(err) {
      console.log(err);
    })
  }
  render() {
    return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <SwiperView/>
         </Provider>
    );
  }
}

export default App;