import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

const config = {
    apiKey: "AIzaSyDQ2leh8_DQLLmYpEeKgmAHDEkq8SIPD7E",
    authDomain: "yt-notes.firebaseapp.com",
    databaseURL: "https://yt-notes.firebaseio.com",
    storageBucket: "yt-notes.appspot.com",
    messagingSenderId: "145698927067"
};

firebase.initializeApp(config);

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('component'));
