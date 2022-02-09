import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {

  apiKey: "AIzaSyAs6j3AF99y_7kCpVUmc1Fvk-RANrENqDA",

  authDomain: "react2022-db.firebaseapp.com",

  projectId: "react2022-db",

  storageBucket: "react2022-db.appspot.com",

  messagingSenderId: "588065305929",

  appId: "1:588065305929:web:2a5894fd5d96d59cd25698",

  measurementId: "G-TGPJG0B06P"

}

firebase.initializeApp(config)
 export const auth = firebase.auth()
 export const firestore = firebase.firestore()

 const provider = new firebase.auth.GoogleAuthProvider()
 //trigger the google popup to select accounts
 provider.setCustomParameters({ propmt : 'select_account'})
//we'll use similar ones for facebook accounts and such
 export const signInWithGoogle = () => auth.signInWithPopup(provider)

 export default firebase //in case we want the whole library