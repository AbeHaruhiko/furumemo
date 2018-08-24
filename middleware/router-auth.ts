export default function ({ store, route, redirect }) {
  console.log('isAuthenticated => ', store.getters['modules/auth/isAuthenticated'])
  console.log('route-auth: ' + route)

  if (!store.getters['modules/auth/isAuthenticated'] && route.path != '/') {
    // 未認証で、いま/introにいないのでTOPで認証を促す
    console.log('redirecting to \'/\' ......')
    redirect('/')
  }
  if (store.getters['modules/auth/isAuthenticated'] && route.path != '/donation-status') {
    // メイン画面表示
    console.log('route-auth: ' + 'redirecting to \'/donation-status\' ......')
    redirect('/donation-status')
  }
}
