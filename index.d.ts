declare module '*.vue' {
  import Vue from 'vue'
  const _default: Vue
  export default _default
}

import Vue from 'vue'

declare module 'vue/types/options' {
  export interface ComponentOptions<V extends Vue> {
    layout?: any
  }
}
declare module 'vue/types/vue' {
  export interface Vue {
    $loading: any
  }
}
