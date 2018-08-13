import firebase from 'firebase'
import 'firebase/firestore'

const config = {
}

// initializeApp が複数回呼ばれると "Firebase App named '[DEFAULT]' already exists" が発生するので
// apps がすでにあるか判定
const firestore = !firebase.apps.length 
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();

firestore.settings({timestampsInSnapshots: true});

export default firestore;
