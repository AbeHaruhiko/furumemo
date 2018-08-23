<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <div><nuxt-link to="/">Home</nuxt-link></div>
            <v-btn round color="primary" dark @click="startAsGuest">ゲストではじめる</v-btn>
            または
            <v-btn round color="primary" dark @click="signin">サインイン</v-btn>
         </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import {
  Vue, Component, Prop
} from "nuxt-property-decorator"
import { namespace } from "vuex-class"

import firebase from '~/plugins/firebase'
import ComponentOptions from '~/layouts/component-options-layout'

const authMod = namespace('modules/auth')

@Component ({
  layout: 'intro'
})
export default class extends Vue {
  @authMod.State('user') user
  @authMod.Action('signInAnonymously') signInAnonymously

  // @Prop({type: String}) source:String

  // drawer = null
  // data: () => ({
  //   drawer: null
  // })
  // layout = 'intro'
  // @Prop({type: String}) layout: String
  // layout: () => ('intro')

  startAsGuest() {
    console.log('startAsGuest clicked.')

    // firebase.auth().signInAnonymously().then(e => {
    //     // ログイン成功
    //     console.log(e)
    //   }).catch((error) => {
    //     // エラーメッセージ
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     console.log('エラーメッセージ', errorCode, errorMessage)
    //   });
   this.signInAnonymously()
  }

  signin() {
    console.log('signin clicked.')
  }
}
</script>