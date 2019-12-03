import firebase from "firebase/app";
import "firebase/storage";

const config = require("./firebase-config");

var firebaseConfig = {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        databaseURL: process.env.databaseURL,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        measurementId: process.env.measurementId
}

firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();

export default storage;