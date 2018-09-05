import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCViDIwu8LjW8cWs7akxBEq62CwJHZMawM",
    authDomain: "tipson-react.firebaseapp.com",
    databaseURL: "https://tipson-react.firebaseio.com",
    projectId: "tipson-react",
    storageBucket: "tipson-react.appspot.com",
    messagingSenderId: "578938076990"
};
firebase.initializeApp(config);

export default firebase;