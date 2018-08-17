<template>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm12 md12>
            <v-btn round color="primary" dark @click="startAsGuest">ゲストではじめる</v-btn>
            または
            <v-btn round color="primary" dark @click="signin">サインイン</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script lang="ts">
import {
  Vue, Component, Prop
} from "nuxt-property-decorator"

@Component ({
})
export default class extends Vue {
  // @Prop({type: String}) source:String

  // drawer = null
  // data: () => ({
  //   drawer: null
  // })
  startAsGuest() {
    console.log('startAsGuest clicked.')
  }
  signin() {
    console.log('signin clicked.')
  }
}
</script>