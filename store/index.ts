import firestore from '~/plugins/firestore'

export const state = () => ({
  people: [],
  memos: []
})

export const mutations = {
  setPeople(state, people) {
    state.people = people
  },
  setMemos(state, memos) {
    state.memos = memos
  }

}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    // const people = await app.$axios.$get(
    //   "./random-data.json"
    // )
    // commit("setPeople", people.slice(0, 10))
    const memosRef = firestore.collection('memos')
    const memos = await memosRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data())
        })
      })
    console.log(memos)
    commit("setMemos", memos)
  }
}
