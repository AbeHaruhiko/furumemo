import { createNamespacedHelpers } from 'vuex'
import firestore from '~/plugins/firestore'
import { firebaseAction } from 'vuexfire'

const memosRef = firestore.collection('memos')

export const state = () => ({
  memos: []
})

export const actions = {
  init: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('memos', memosRef)
  })
}

export const getters = {
  memos: state => {
    return state.memos
  }
}

export const {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} = createNamespacedHelpers('memos');

export const memos = {
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions
};