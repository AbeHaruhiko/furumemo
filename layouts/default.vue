<template>
  <v-app id="inspire">
    <drawer :show="showDrawer" @set-drawer-visibility="setDrawerVisibility"/>
    <header-toolbar :showDrawer="showDrawer" @set-drawer-visibility="setDrawerVisibility"/>
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
      @click.stop="setDonationRecDialogVisiblity(!showDonationRecDialg)"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <donation-record-dialog :show="showDonationRecDialg" @set-donation-rec-dialog-visiblity="setDonationRecDialogVisiblity"/>
    <!-- <v-dialog v-model="dialog" width="800px">
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
    </v-dialog> -->
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { namespace, State, Action } from 'vuex-class'

import Drawer from '~/components/Drawer.vue'
import HeaderToolbar from '~/components/HaederToolbar.vue'
import DonationRecordDialog from '~/components/DonationRecordDialog.vue'

@Component({
  components: {
    Drawer,
    HeaderToolbar,
    DonationRecordDialog
  }
})
export default class extends Vue {
  // @Prop({ type: Boolean }) showDrawer
  // @Prop({ type: Boolean }) showDialog

  // @authMod.Action('setUser') setUser
  // @authMod.Action('signOut') signOut
  // @Action('setDrawer') setDrawer

  showDrawer: Boolean = false
  showDonationRecDialg: Boolean = false

  setDrawerVisibility(value) {
    console.log('toggleDrawer called.')
    this.showDrawer = value
    console.log('show drawer? => ', this.showDrawer)
  }

  setDonationRecDialogVisiblity(value) {
    this.showDonationRecDialg = value
    console.log('show dialog? => ', this.showDonationRecDialg)
  }
  // items = [
  //   { icon: 'home', text: 'ホーム', to: '/' },
  //   { icon: 'list', text: '寄付状況', to: '/donation-status' }
  // ]
}
</script>
