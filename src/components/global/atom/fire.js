import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCViDIwu8LjW8cWs7akxBEq62CwJHZMawM",
    authDomain: "tipson-react.firebaseapp.com",
    databaseURL: "https://tipson-react.firebaseio.com",
    projectId: "tipson-react",
    storageBucket: "tipson-react.appspot.com",
    messagingSenderId: "578938076990"
};
const fire = firebase.initializeApp(config);
export default fire

export const provider = new firebase.auth.FacebookAuthProvider();
export const ref = firebase.database().ref()
export const auth = firebase.auth
firebase.auth().languageCode = 'zh_HK'
provider.setCustomParameters({
    'display': 'popup'
  });