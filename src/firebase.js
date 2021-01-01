import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyAZh14widcM0mvL-2k5cPmInCQBgYOE7gs",
    authDomain: "facebook-messenger-clone-6495c.firebaseapp.com",
    projectId: "facebook-messenger-clone-6495c",
    storageBucket: "facebook-messenger-clone-6495c.appspot.com",
    messagingSenderId: "778033274633",
    appId: "1:778033274633:web:7b82d84b1bdeba0155fdd8",
    measurementId: "G-JHDWF1TXRP"
  
})
const db = firebaseApp.firestore()


export default db