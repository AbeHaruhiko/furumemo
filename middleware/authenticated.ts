export default function ({ store, route, redirect }) {
  console.log('store:')
  console.log(store)
  if (!store.getters['modules/auth/isAuthenticated'] && route.to != '/intro') {
    redirect('/intro')
  }
  if (store.getters['modules/auth/isAuthenticated'] && route.to != '/') {
    // メイン画面表示
    redirect('/')
  }
}
