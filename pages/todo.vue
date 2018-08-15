<template>
  <ul>
    <li v-for="todo in todos">
      <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
  </ul>
</template>

<script lang="ts">
import { mapMutations } from 'vuex'

import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State, Getter } from "vuex-class"
import Card from "~/components/Card.vue"
import { mapGetters, mapActions } from "vuex";
// import * as memosModule from '../../store/modules/memos'

@Component({
  components: {
    Card
  },
  computed: {
    // ...memosModule.mapGetters(['items'])  // スラッシュはstoreのモジュール/getter名
    todos () { return this.$store.state.todos.list }
  },
  methods: {
    // ...memosModule.mapActions(['init']) // スラッシュはstoreのモジュール/action名
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })

  }
})
export default class extends Vue {
 }

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
//   }
// }
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
