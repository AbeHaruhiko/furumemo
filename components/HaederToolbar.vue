<template>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="blue darken-3"
    dark
    app
    fixed
  >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="setDrawerVisibility(!showDrawer)"></v-toolbar-side-icon>
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
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'nuxt-property-decorator'
import { namespace, State, Action } from 'vuex-class'
import firebase from '~/plugins/firebase'
import authChanged from '~/plugins/firebaseAuthChanged'

const authMod = namespace('modules/auth')

@Component({})
export default class HeaderToolbar extends Vue {
  @authMod.Action('setUser') setUser
  @authMod.Action('signOut') signOut

  @Prop({ type: Boolean}) showDrawer

  // @Action('setDrawer') setDrawer

  // @State('drawer') drawer

  // toggleDrawer() {
  //   this.showDrawer = !this.showDrawer
  // }

  @Emit()
  setDrawerVisibility(value) {
    console.log('this method will emit parents set-drawer-visibility.')
    // this.$emit('click-toggle-drawer')
  }

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

