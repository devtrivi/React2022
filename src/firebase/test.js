import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore'

const firestore = firebase.firestore()

//firestore.collection('users').doc('gatrivi').collection('cartItems').doc('0KGJqUTC6IYfn9ZR9ZKA')
firestore.doc('/users/')