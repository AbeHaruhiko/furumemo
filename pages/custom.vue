<template>
  <div>
    hoge
  </div>
</template>

<script lang="ts">
import {
  Vue, Component, Prop
} from "nuxt-property-decorator"
import ComponentOptions from '~/layouts/component-options-layout'

@Component({
  layout: 'red'
})
export default class extends Vue {
  // layout: 'red'
  // layout (context) {
  //   return 'red'
  // }
}
</script>