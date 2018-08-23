export default function ({ store, route, redirect }) {
  // console.log('store:')
  // console.log(store)
  // console.dir(route)
  console.log(store.getters['modules/auth/isAuthenticated'])
  if (!store.getters['modules/auth/isAuthenticated'] && route.path != '/intro') {
    // 未認証で、いま/introにいないので、introで認証を促す
    console.log('redirecting to \'/intro\' ......')
    redirect('/intro')
  }
  if (store.getters['modules/auth/isAuthenticated'] && route.path != '/') {
    // メイン画面表示
    console.log('redirecting to \'/\' ......')
    redirect('/')
  }
}
