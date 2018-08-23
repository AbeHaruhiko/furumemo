import firebase from '~/plugins/firebase'

// nuxt.config.jsに登録することで、ルートの Vue.js アプリケーションがインスタンス化される前に実行される
// firebase.auth().onAuthStateChangedがイベント登録され、認証状態が変わるたびに実行され、storeの更新およびrecirectが行われる。
function authChanged ({ store, redirect, route }) {
  console.log('plubing/firebaseAuthChanged/authChanged calld.(not changed yet.')

  // return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('auth changed.')
      console.log('user =>', user)
      store.dispatch('modules/auth/setUser', user)
      if (user) {
        console.log('redirecting to \'/\' ......')
        redirect('/custom')
      } else {
        console.log('redirecting to \'/intro\' ......')
        redirect('/intro')
      }      
      // resolve()
    })
  // })
}
export default authChanged