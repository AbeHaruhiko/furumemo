<template>
  <v-app id="inspire">
    <drawer></drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">ふるめも</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-menu offset-y left>
        <v-btn
          slot="activator"
          dark
          icon
        >
          <v-avatar size="32px" tile>
            <v-icon dark>account_circle</v-icon>
          </v-avatar>
        </v-btn>

        <v-list>
          <v-list-tile
            v-for="(item, i) in account_menu_items"
            :key="i"
            @click="item.click_action"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <nuxt />
        </v-layout>
      </v-container>
    </v-content>
    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click.stop="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Create contact
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-avatar size="40px" class="mr-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="Name"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                prepend-icon="business"
                placeholder="Company"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="Job title"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mail"
                placeholder="Email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
                mask="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="notes"
                placeholder="Notes"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import firebase from '~/plugins/firebase'
import authChanged from '~/plugins/firebaseAuthChanged'
import { namespace, State, Action } from 'vuex-class'

const authMod = namespace('modules/auth')

import Drawer from '~/components/Drawer.vue'

@Component({
  props: {},
  components: {
    Drawer
  }
})
export default class extends Vue {
  @authMod.Action('setUser') setUser
  @authMod.Action('signOut') signOut
  @Action('setDrawer') setDrawer

  @State('drawer') drawer

  toggleDrawer() {
    this.setDrawer(!this.drawer)
  }

  dialog = false

  items = [
    { icon: 'home', text: 'ホーム', to: '/' },
    { icon: 'list', text: '寄付状況', to: '/donation-status' }
  ]
  account_menu_items = [{ title: 'ログアウト', click_action: this.logout }]

  async logout() {
    console.log('/laytous/default/logout called.')
    console.log('currentUser =>', firebase.auth().currentUser)
    await this.signOut()
    await authChanged(this.$store)
    console.log('currentUser =>', firebase.auth().currentUser)
    this.$router.push('/')
  }
}
</script>
