import firebase from "firebase/app";
import "firebase/storage";
require('dotenv').load();

var firebaseConfig = {
        apiKey: "AIzaSyD__LTezaxAoVDpFch92GSLHIPxCO5OWKc",
        authDomain: "humblehapningsimagedatabase.firebaseapp.com",
        databaseURL: "https://humblehapningsimagedatabase.firebaseio.com",
        projectId: "humblehapningsimagedatabase",
        storageBucket: "humblehapningsimagedatabase.appspot.com",
        messagingSenderId: "834145157074",
        appId: "1:834145157074:web:0829b0422a56a8a57c520b",
        measurementId: "G-02JC5CCH8Q"
}

firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();

export default storage;