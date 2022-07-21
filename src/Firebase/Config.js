import Firebase from "firebase";

const initializeFirebase = () =>{

    const firebaseConfig = {
        apiKey: "AIzaSyBcLDEe9DmVlhxV_I73DMO712I-Yuu9XZs",
        authDomain: "hb-roma.firebaseapp.com",
        projectId: "hb-roma",
        storageBucket: "hb-roma.appspot.com",
        messagingSenderId: "242269292530",
        appId: "1:242269292530:web:4016cfadf807c54beb0d6b",
        measurementId: "G-P9MPZEYWVX"
    };

    if (!Firebase.apps.length) {
        Firebase.initializeApp(firebaseConfig);
    }
   
};


export default {initializeFirebase} ;
