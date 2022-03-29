import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyAeruFobgOf4EEEIzRU9UImjFupJ-zI9b0',
  authDomain: 'chat-web-app-fccf6.firebaseapp.com',
  projectId: 'chat-web-app-fccf6',
  storageBucket: 'chat-web-app-fccf6.appspot.com',
  messagingSenderId: '891880887658',
  appId: '1:891880887658:web:6fff5e39128be492068113',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
