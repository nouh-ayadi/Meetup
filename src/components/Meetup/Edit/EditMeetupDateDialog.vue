<template>
  <v-dialog width='350px' persistent v-model="editDialog">
    <v-btn accent slot="activator">
      Edit Date
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>
                Edit Meetup Date 
            </v-card-title>
          </v-flex>
        </v-layout>
<v-divider>
</v-divider>

        <v-layout row wrap>
        <v-flex xs12>
          
        </v-flex>
        </v-layout>
      <v-date-picker v-model="editableDate" style="..." actions>
        <template slot-scope ="{save, cancel}">
          <v-btn 
           class="blue--text darken-1"
           flat @click.native="editDialog=false">
           Close
           </v-btn>

            <v-btn 
           class="blue--text darken-1"
           flat @click.native="onSaveChanges=false">
           Save
           </v-btn>

        </template>
      </v-date-picker>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetup'],
  data() {
    return {
      editDialog: false,
      editableTime: null
    }
  },
  methods: {
    onSaveChanges() {
      const newDate = new Date(this.meetup.date)
      const newDay = new Date(this.editableDate).getUTCDate()
      const newMonth = new Date(this.editableDate).getUTCMonth()
      const newYear = new Date(this.editableDate).getUTCFullYear()
      newDate.setUTCDate(newDay)
      newDate.getUTCMonth(newMonth)
      newDate.getUTCFullYear(newYear)
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        date: newDate
      })
    }
  },
  created() {
    this.editableTime = new Date(this.meetup.date)
  }
}
</script>

