export default function ({ store, route, redirect }) {
  // console.log('store:')
  // console.log(store)
  // console.dir(route)
  console.log(store.getters['modules/auth/isAuthenticated'])

  if (route.path === '/custom') return
  if (!store.getters['modules/auth/isAuthenticated'] && route.path != '/') {
    // 未認証で、いま/introにいないので、introで認証を促す
    console.log('redirecting to \'/\' ......')
    redirect('/')
  }
  if (store.getters['modules/auth/isAuthenticated'] && route.path != '/donation_status') {
    // メイン画面表示
    console.log('redirecting to \'/donation_status\' ......')
    redirect('/donation_status')
  }
}
