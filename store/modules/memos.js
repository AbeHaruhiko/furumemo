import firestore from '@/plugins/firestore'

const memosRef = firestore.collection('memos')

export default {
  namespaced: true,
  unsubscribe: null,
  state () {
    return {
      data: []
    }
  },
  mutations: {
    init (state, payload) {
      state.data = payload
    },
    add (state, payload) {
      state.data.push(payload)
    },
    set (state, payload) {
      const index = state.data.findIndex(memo => memo.id === payload.id)
      if (index !== -1) {
        state.data[index] = payload
      }
    },
    remove (state, payload) {
      const index = state.data.findIndex(memo => memo.id === payload.id)
      if (index !== -1) {
        state.data.splice(index, 1)
      }
    }
  },
  // 2. コンポーネントはゲッターを通してステートを監視する
  getters: {
    data (state) {
      return state.data
    }
  },
  actions: {
    clear ({ commit }) {
      commit('init', [])
    },
    // 1. リスナーの起動
    startListener ({ commit }) {
      if (this.unsubscribe) {
        console.warn('listener is running. ', this.unsubscribe)
        this.unsubscribe()
        this.unsubscribe = null
      }
      // 3. Firestoreからデータを検索する
      this.unsubscribe = memosRef.orderBy('applicationDate', 'asc').onSnapshot(querySnapshot => {

        // 6. データが更新されるたびに呼び出される
        querySnapshot.docChanges.forEach(change => {

          const payload = {
            id: change.doc.id,
            amount: change.doc.data().amount,
            itemName: change.doc.data().itemName,
            jichitaiName: change.doc.data().jichitaiName,
            applicationDate: change.doc.data().applicationDate
          }

          // 4. ミューテーションを通してステートを更新する
          if (change.type === 'added') {
            commit('add', payload)
          } else if (change.type === 'modified') {
            commit('set', payload)
          } else if (change.type === 'removed') {
            commit('remove', payload)
          }
        })
      },
      (error) => {
        console.error(error.name)
      })
    },
    // 8. リスナーの停止
    stopListener () {
      if (this.unsubscribe) {
        console.log('listener is stopping. ', this.unsubscribe)
        this.unsubscribe()
        this.unsubscribe = null
      }
    },
    addMemo ({ commit }, payload) {
      memosRef.add(payload)
        .then(doc => {
          // Do not mutate vuex store state outside mutation handlers.
        })
        .catch(err => {
          console.error('Error adding document: ', err)
        })
    },
    deleteMemo ({ commit }, payload) {
      memosRef.doc(payload.id).delete()
        .then(() => {
          // Do not mutate vuex store state outside mutation handlers.
        })
        .catch(err => {
          console.error('Error removing document: ', err)
        })
    }
  }
}