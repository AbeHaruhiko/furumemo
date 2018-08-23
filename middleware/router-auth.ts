export default function ({ store, route, redirect }) {
  // console.log('store:')
  // console.log(store)
  // console.dir(route)
  console.log('isAuthenticated => ', store.getters['modules/auth/isAuthenticated'])

  if (!store.getters['modules/auth/isAuthenticated'] && route.path != '/') {
    // 未認証で、いま/introにいないので、introで認証を促す
    console.log('redirecting to \'/\' ......')
    redirect('/')
  }
  if (store.getters['modules/auth/isAuthenticated'] && route.path != '/donation-status') {
    // メイン画面表示
    console.log('redirecting to \'/donation-status\' ......')
    redirect('/donation-status')
  }
}
