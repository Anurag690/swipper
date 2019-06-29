// import SQLite from 'react-native-sqlite-storage';
// import DatabaseInitialization from './DatabaseInitialization';

// class Database {
//     constructor() {
//         this.databaseName = "AppDatabase.db";
//         this.database;
//     }
  
//     // Open the connection to the database
//     open() {
//         SQLite.DEBUG(true);
//         SQLite.enablePromise(true);
//         let databaseInstance;

//         return SQLite.openDatabase({
//         name: this.databaseName,
//         location: "default"
//         })
//         .then(db => {
//             databaseInstance = db;
//             console.log("[db] Database open!");

//             // Perform any database initialization or updates, if needed
//             const databaseInitialization = new DatabaseInitialization();
//             return databaseInitialization.updateDatabaseTables(databaseInstance);
//         })
//         .then(() => {
//             this.database = databaseInstance;
//             return databaseInstance;
//         });
//     }
  
//     // Close the connection to the database
//     close() {
//       if (this.database === undefined) {
//         return Promise.reject("[db] Database was not open; unable to close.");
//       }
//       return this.database.close().then(status => {
//         console.log("[db] Database closed.");
//         this.database = undefined;
//       });
//     }
  
//     addItem(text, list) {
//       if (list === undefined) {
//         return Promise.reject(Error(`Could not add item to undefined list.`));
//       }
//       return this.getDatabase()
//         .then(db =>
//           db.executeSql("INSERT INTO ListItem (text, list_id) VALUES (?, ?);", [
//             text,
//             list.id
//           ])
//         )
//         .then(([results]) =>
//           console.log(
//             `[db] ListItem with "${text}" created successfully with id: ${
//               results.insertId
//             }`
//           )
//         );
//     }
  
//     getListItems(list, orderByDone = false) {
//       if (list === undefined) {
//         return Promise.resolve([]);
//       }
//       return this.getDatabase()
//         .then(db =>
//           db.executeSql(
//             `SELECT item_id as id, text, done FROM ListItem WHERE list_id = ? ${
//               orderByDone ? "ORDER BY done" : ""
//             };`,
//             [list.id]
//           )
//         )
//         .then(([results]) => {
//           if (results === undefined) {
//             return [];
//           }
//           const count = results.rows.length;
//           const listItems = [];
//           for (let i = 0; i < count; i++) {
//             const row = results.rows.item(i);
//             const { text, done: doneNumber, id } = row;
//             const done = doneNumber === 1 ? true : false;
  
//             console.log(`[db] List item text: ${text}, done? ${done} id: ${id}`);
//             listItems.push({ id, text, done });
//           }
//           console.log(`[db] List items for list "${list.title}":`, listItems);
//           return listItems;
//         });
//     }
  
//     updateListItem(listItem) {
//       const doneNumber = listItem.done ? 1 : 0;
//       return this.getDatabase()
//         .then(db =>
//           db.executeSql(
//             "UPDATE ListItem SET text = ?, done = ? WHERE item_id = ?;",
//             [listItem.text, doneNumber, listItem.id]
//           )
//         )
//         .then(([results]) => {
//           console.log(`[db] List item with id: ${listItem.id} updated.`);
//         });
//     }
  
//     deleteList(list) {
//       console.log(
//         `[db] Deleting list titled: "${list.title}" with id: ${list.id}`
//       );
//       return this.getDatabase()
//         .then(db => {
//           // Delete list items first, then delete the list itself
//           return db
//             .executeSql("DELETE FROM ListItem WHERE list_id = ?;", [list.id])
//             .then(() => db);
//         })
//         .then(db =>
//           db.executeSql("DELETE FROM List WHERE list_id = ?;", [list.id])
//         )
//         .then(() => {
//           console.log(`[db] Deleted list titled: "${list.title}"!`);
//           return;
//         });
//     }
//     getDatabase() {
//       if (this.database !== undefined) {
//         return Promise.resolve(this.database);
//       }
//       // otherwise: open the database first
//       return this.open();
//     }
// }

// export const database = new Database();