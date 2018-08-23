export default function ({ store, route, redirect }) {
  console.log('middleware/router-auth called.')
  // console.log('store:')
  // console.log(store)
  // console.dir(route)
  console.log('isAuthenticated => ', store.getters['modules/auth/isAuthenticated'])
  console.log('route-auth: ' + route)

  if (!store.getters['modules/auth/isAuthenticated'] && route.path != '/') {
    // 未認証で、いま/introにいないので、introで認証を促す
    console.log('route-auth: ' + 'redirecting to \'/\' ......')
    redirect('/')
  }
  if (store.getters['modules/auth/isAuthenticated'] && route.path != '/donation-status') {
    // メイン画面表示
    console.log('route-auth: ' + 'redirecting to \'/donation-status\' ......')
    redirect('/donation-status')
  }
}
