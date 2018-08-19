import firebase from '~/plugins/firebase'

function authChanged () {
  console.log('plubing/firebaseAuthChanged/authChanged calld.(not changed yet.')
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('auth changed.')
      resolve(user || false)
    })
  })
}
export default authChanged