import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
  apiKey: "AIzaSyAoxjJbZfP30IKJJL76Jz6c3qOQcNDC7xw",
  authDomain: "cart-cf824.firebaseapp.com",
  databaseURL: "https://cart-cf824.firebaseio.com",
  projectId: "cart-cf824",
  storageBucket: "cart-cf824.appspot.com",
  messagingSenderId: "456198956220",
  appId: "1:456198956220:web:77564111699ad481bc5cb9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

