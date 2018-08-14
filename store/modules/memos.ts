import { createNamespacedHelpers } from 'vuex'
import firestore from '~/plugins/firestore'
import { firebaseAction } from 'vuexfire'

const memosRef = firestore.collection('memos')

export interface State {
  memos: {}
}

export interface Getters {
  items: string
}

export interface Actions {
  init: {}
}

export const state = () => ({
  memos: [{amount: 10000}]
})

export const actions = {
  init: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('memos', memosRef)
  })
}

export const getters = {
  items: state => {
    return state.memos
  }
}

export const {
  mapState,
  mapGetters,
  mapActions
} = createNamespacedHelpers('memos');

export const memos = {
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions
};