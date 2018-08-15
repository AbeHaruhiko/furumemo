import firestore from '~/plugins/firestore'
import { firebaseAction } from 'vuexfire'

const memosRef = firestore.collection('memos')

export const state = () => ({
  list: []
})

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
