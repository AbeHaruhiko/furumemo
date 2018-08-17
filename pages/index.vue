<template>
  <section>
    <h1 class="header">あなたの寄付状況</h1>
    <div class="cards">
      <Card v-for="memo in list" :key="memo.id" :memo="memo"></Card>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State, Getter, namespace } from "vuex-class"
import Card from "~/components/Card.vue"
import { mapGetters, mapActions, mapState } from "vuex";

const memosMod = namespace('modules/memos')

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @memosMod.State('list') list;
  @memosMod.Action('init') init;

  created() {
    this.init()
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