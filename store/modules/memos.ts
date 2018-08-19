import firestore from '~/plugins/firestore'
import { firebaseAction } from 'vuexfire'

const memosRef = firestore.collection('memos')

export const state = () => ({
  list: []
})
// export const state = function () {
//   console.log('modules/memos: function for returning state started.')
//   return 
//   ({
//   list: []
// })
// }

export const actions = {
  init: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('list', memosRef) // ここでStateのlistと紐付けられる
  })
}

export const getters = {
  items: state => {
    return state.memos
  }
}
