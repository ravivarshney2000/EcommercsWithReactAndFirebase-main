import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCWN5MPBBDrWjcXFxl-6E76HJ7xte0543g",
    authDomain: "shoppingcart-7632d.firebaseapp.com",
    databaseURL: "https://shoppingcart-7632d-default-rtdb.firebaseio.com",
    projectId: "shoppingcart-7632d",
    storageBucket: "shoppingcart-7632d.appspot.com",
    messagingSenderId: "968732708357",
    appId: "1:968732708357:web:6e524e6883f1ba3a3e166c",
    measurementId: "G-W4BYJP5R0J"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }