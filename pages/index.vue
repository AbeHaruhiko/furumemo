<template>
  <section>
    <h1 class="header">Nuxt TypeScript Starter</h1>
    <div class="cards">
      <div v-for="memo in list" :key="memo.id">{{memo.itemName}}</div>
      <Card v-for="person in people" :key="person.id" :person="person"></Card>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State, Getter } from "vuex-class"
import Card from "~/components/Card.vue"
import { mapGetters, mapActions, mapState } from "vuex";
import * as memosModule from '~/store/memos'

@Component({
  components: {
    Card
  },
  computed: {
    ...memosModule.mapGetters(['items']),  // スラッシュはstoreのモジュール/getter名
    ...memosModule.mapState(['list'])
  },
  methods: {
    ...memosModule.mapActions(['init']) // スラッシュはstoreのモジュール/action名
  }
})
export default class extends Vue {
  // @State list;

  init: () => any

  created() {
    this.init()
  }
 }

// import { mapMutations } from 'vuex'

// export default {
//   computed: {
//     todos () { return this.$store.state.todos.list }
//   },
//   methods: {
//     addTodo (e) {
//       this.$store.commit('todos/add', e.target.value)
//       e.target.value = ''
//     },
//     ...mapMutations({
//       toggle: 'todos/toggle'
//     })
//   },
//   created: () => {
//     this.addTodo('hoge')
//   }
// }
</script>
<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>