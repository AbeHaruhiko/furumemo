<template>
  <v-dialog v-model="showDialog" width="800px">
    <v-card>
      <v-card-title
        class="grey lighten-4 py-4 title"
      >
        寄付記録を登録する
      </v-card-title>
      <v-container grid-list-sm class="pa-4">
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
              prepend-icon="place"
              placeholder="寄付先自治体名"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              prepend-icon="money"
              placeholder="金額"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              type="tel"
              prepend-icon="fa-gift"
              placeholder="返礼品"
              mask="phone"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              prepend-icon="fa-calendar"
              placeholder="寄付日"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              prepend-icon="notes"
              placeholder="備考"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn flat color="primary">詳細入力</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="setDonationRecDialogVisiblity(false)">キャンセル</v-btn>
        <v-btn flat @click="setDonationRecDialogVisiblity(false)">登録</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'

@Component({})
export default class DonationRecordDialog extends Vue {
  @Prop() show = false

  // v-model="showDialog"とするためのgetter, setter
  get showDialog() {
    return this.show
  }
  set showDialog(value) {
    // setterでは@Emitが使えない。
    // this.$emit('set-donation-rec-dialog-visiblity', value)
    this.setDonationRecDialogVisiblity(value)
  }

  @Emit()
  setDonationRecDialogVisiblity(value) {
    console.log('this method will emit parents set-donation-rec-dialog-visiblity')
  }
}
</script>