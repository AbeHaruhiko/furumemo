<template>
  <section>
    <h1 class="header">Nuxt TypeScript Starter</h1>
    <div class="cards">
      <div v-for="memo in memos" :key="memo.id">memo.itemName</div>
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
import { mapGetters, mapActions } from "vuex";
import * as memos from '~/store/modules/memos'

@Component({
  components: {
    Card
  },
  computed: {
    ...memos.mapGetters({ memosGetter: 'memos/memos' })  // スラッシュはstoreのモジュール/getter名
  },
  methods: {
    ...memos.mapActions({ memosInit: 'memos/init' }) // スラッシュはstoreのモジュール/action名
  }
})
export default class extends Vue {
  @State people;
  @State memos;

  memosInit: () => void
  memosGetter

  created() {
    this.memosInit()
    this.memosGetter
  }
 }
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