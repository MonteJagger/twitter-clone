import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB6o0nBDKxcI9VVeNPO6-5SMhYueWCs0Fw",
    authDomain: "twitter-clone-26875.firebaseapp.com",
    projectId: "twitter-clone-26875",
    storageBucket: "twitter-clone-26875.firebasestorage.app",
    messagingSenderId: "1028675421292",
    appId: "1:1028675421292:web:da1eb8182bba8e57140449",
    measurementId: "G-83LBWDMNXM"
  }

// initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Services
const auth = getAuth(app)
const firestore = getFirestore(app)
const db = getStorage(app)
const analytics = getAnalytics(app)

export { auth, firestore, db, analytics }