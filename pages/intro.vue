<template>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm12 md12>
            <div><nuxt-link to="/">Home</nuxt-link></div>
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
import { namespace } from "vuex-class"

import firebase from '~/plugins/firebase'
import authChanged from '~/plugins/firebaseAuthChanged'

const authMod = namespace('modules/auth')

@Component ({
})
export default class extends Vue {
    @authMod.State('user') user
    @authMod.Action('signInAnonymously') signInAnonymously
    @authMod.Action('setUser') setUser

  // @Prop({type: String}) source:String

  // drawer = null
  // data: () => ({
  //   drawer: null
  // })
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

  async mounted() {
    let user
    console.log('pages/intro/mounted called.')
    user = await authChanged()
    this.setUser(user)
  }
}
</script>