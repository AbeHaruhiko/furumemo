import firestore from '../../plugins/firestore'

const memosRef = firestore.collection('memos')

export const state = () => ({
  memos: []
})

export const mutations = {
  setMemos(state, memos) {
    state.memos = memos
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const memos = app.$firebase.firestore().collection('memos').limit(5).get()
    commit("setMemos", memos.slice(0, 10))
  }
}
