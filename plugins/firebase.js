import firebase from 'firebase'

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
}

// initializeApp が複数回呼ばれると "Firebase App named '[DEFAULT]' already exists" が発生するので
// apps がすでにあるか判定
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase;
