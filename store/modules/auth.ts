import firebase from '~/plugins/firebase'
import { User } from '@firebase/auth-types'

// export const state = () => ({
//   // todo: 2018/08/19 これがあると Do not mutate vuex store state outside mutation handlers 発生
//   // mutations のstate.user = payload と競合して？ 無限ループ
//   user: {}
// })
export const state = function() {
  // console.log('modules/auth: function for returning state started.')
  return ({ user: null })
}

export const actions = {
  signInAnonymously () {
    console.log('modules/auth/signInAnonymously called.')
    return new Promise((resolve, reject) => {
      firebase.auth().signInAnonymously()
        .then((event) => {
          console.debug(event)
          resolve()
        })
        .catch((err) => reject(err))
    })
  },

  setUser ({ commit }, payload) {
    console.log('modules/auth/actions/setUserAction called.')
    commit('setUser', payload)
  }
}

export const mutations = {
  setUser (state, payload: User) {
    console.log('modules/auth/mutations/setUser called.')
    console.dir(payload)
    // state.user = payload
    // state.user = JSON.parse(JSON.stringify(payload))
    state.user = payload ? payload.toJSON(): null
    // Object.assign(state.user, payload)
    // // https://github.com/nuxt/nuxt.js/issues/1917
    // console.log('1:' + payload[1])
    // console.log('2:' + payload[2])
    // state.user[payload[1]] = payload[2]
    // console.log('3:' + state.user[payload[1]])
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  }
}
