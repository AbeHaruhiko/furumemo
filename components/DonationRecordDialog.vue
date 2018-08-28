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
              mask="###,###,###,###"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              prepend-icon="fa-gift"
              placeholder="返礼品"
            ></v-text-field>
          </v-flex>
          <!-- <v-flex xs12>
            <v-text-field
              prepend-icon="fa-calendar"
              placeholder="寄付日"
              mask="####/##/##"
            ></v-text-field>
          </v-flex> -->
          <v-flex xs12 sm6 md4>
            <v-menu
              ref="menuApplicatedAt"
              :close-on-content-click="false"
              v-model="menuApplicatedAt"
              :nudge-right="40"
              :return-value.sync="applicatedAt"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="applicatedAtFormatted"
                label="寄付日（申請日）"
                prepend-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker
                v-model="applicatedAt"
                @input="$refs.menuApplicatedAt.save(applicatedAt)"
                no-title
                locale="ja"
                :day-format="date => new Date(date).getDate()"
              ></v-date-picker>
            </v-menu>
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
import { Vue, Component, Prop, Emit, Watch } from 'nuxt-property-decorator'

@Component({})
export default class DonationRecordDialog extends Vue {
  @Prop() show = false

  menuApplicatedAt: boolean = false
  applicatedAt: string = ''   // date picker用
  applicatedAtFormatted: string = ''    // text field用


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

  formatDate (date): string {
    if (!date) return ''

    const [year, month, day] = date.split('-')
    return `${year}/${month}/${day}`
  }

  // date pickerで日付が選択され、applicatedAt(v-model)が変更されたら this.formatDateを呼び出してフォーマットする
  @Watch('applicatedAt')
  onDateChanged(value) {
    this.applicatedAtFormatted = this.formatDate(this.applicatedAt)
  }
}
</script>