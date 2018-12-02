
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBqnza3VpEO52zJ54PUBKrW1u7Je1IFFzQ",
    authDomain: "shop-be137.firebaseapp.com",
    databaseURL: "https://shop-be137.firebaseio.com",
    projectId: "shop-be137",
    storageBucket: "shop-be137.appspot.com",
    messagingSenderId: "987407020481"
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;