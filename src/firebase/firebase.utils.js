import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyAs6j3AF99y_7kCpVUmc1Fvk-RANrENqDA',

  authDomain: 'react2022-db.firebaseapp.com',

  projectId: 'react2022-db',

  storageBucket: 'react2022-db.appspot.com',

  messagingSenderId: '588065305929',

  appId: '1:588065305929:web:2a5894fd5d96d59cd25698',

  measurementId: 'G-TGPJG0B06P',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user: ', error.messsage)
    }
  }
  return userRef
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
//trigger the google popup to select accounts
provider.setCustomParameters({ propmt: 'select_account' })
//we'll use similar ones for facebook accounts and such
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase //in case we want the whole library
