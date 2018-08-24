import { firebaseMutations } from 'vuexfire'

export const actions = {
  setDrawer({ commit }, payload) {
    commit('setDrawer', payload)
  }
}

export const mutations = {
  ...firebaseMutations,

  setDrawer(state, payload) {
    state.drawer = payload
  }
}

export const state = function () {
  return ({ drawer: null })
}
