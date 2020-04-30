import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase.initializeApp(
  { apiKey: 'AIzaSyBat87rpMCQdMEg4dXQbkURHMDfR_UeaGQ',
    authDomain: 'model-340b0.firebaseapp.com',
    databaseURL: 'https://model-340b0.firebaseio.com',
    projectId: 'model-340b0',
    storageBucket: 'model-340b0.appspot.com',
    messagingSenderId: '606616504213',
    appId: '1:606616504213:web:fa153f6ece989ac03c189c',
    measurementId: 'G-CZ3FRV765J'}
).database()

export const chatsToolRef = db.ref('chatsTool') // export => 輸出
export const chatsWorkRef = db.ref('chatsWork') // export => 輸出
export const chatsTeachRef = db.ref('chatsTeach') // export => 輸出
