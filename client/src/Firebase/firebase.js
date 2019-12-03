import firebase from "firebase/app";
import "firebase/storage";

const config = require("./firebase-config");

var firebaseConfig = {
        apiKey: config.db.apiKey,
        authDomain: config.db.authDomain,
        databaseURL: config.db.databaseURL,
        projectId: config.db.projectId,
        storageBucket: config.db.storageBucket,
        messagingSenderId: config.db.messagingSenderId,
        appId: config.db.appId,
        measurementId: config.db.measurementId
}

firebase.initializeApp(firebaseConfig);
console.log(firebaseConfig)

var storage = firebase.storage();

export default storage;