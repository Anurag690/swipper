import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';

import { loadPosts } from '../store/actions';
import Posts from './Posts';

class SwiperView extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.loadPosts();
    }
    render() {
        return (
            <Swiper style={styles.wrapper} 
                showsButtons={true} 
                loop={false}
                // onIndexChanged={}
            >
                <View style={styles.slide1}>
                  <Posts posts={this.props.posts}/>
                </View>
                <View style={styles.slide2}>
                  <Posts posts={this.props.posts}/>
                </View>
                <View style={styles.slide3}>
                  <Posts posts={this.props.posts}/>
                </View>
            </Swiper>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    slide1: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
});

const mapStateToProps = (state) => {
    return {posts: state.commonReducer.posts};
}

export default connect(mapStateToProps, {loadPosts})(SwiperView);