import firebase from '~/plugins/firebase'

function authChanged (context) {
  console.log('plubing/firebaseAuthChanged/authChanged calld.(not changed yet.')

  const { store } = context

  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('auth changed.')
      console.log('user =>', user)
      // resolve(user || false)
      // if (user) {
        resolve(store.module.auth.commit('setUser', user))
      // } else {
      //   resolve()
      // }
    })
  })
}
export default authChanged