import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: "humblehapningsimagedatabase.appspot.com",
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID
}
console.log(firebaseConfig)

firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();

export default storage;