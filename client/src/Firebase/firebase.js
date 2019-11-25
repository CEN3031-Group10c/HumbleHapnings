import firebase from "firebase/app";
import "firebase/storage";

const config = require("./firebase-config");

firebase.initializeApp(config.db);

var storage = firebase.storage();

export {storage, firebase as default};
