<template>
  <div class="card">
    <h2>{{ memo.jichitaiName }}</h2>
    <div>{{ memo.itemName }}</div>
    <div>{{ memo.amount }} 円</div>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component({})
export default class Card extends Vue {
  @Prop() memo 
}
</script>
<style scoped>
.card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
  padding: 1rem;
  margin: 0.25rem;
  border: 0.25rem solid gainsboro;
}
</style>
