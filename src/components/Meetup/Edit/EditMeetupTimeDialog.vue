<template>
  <v-dialog width='350px' persistent v-model="editDialog">
    <v-btn accent slot="activator">
      Edit Time
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>
                Edit Meetup Time 
            </v-card-title>
          </v-flex>
        </v-layout>
<v-divider>
</v-divider>

        <v-layout row wrap>
        <v-flex xs12>
          
        </v-flex>
        </v-layout>
      <v-time-picker v-model="editableTime" style="..." actions format ="24hr">
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

      </v-time-picker>
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
      editableDate: null
    }
  },
  methods: {
    onSaveChanges() {
      const newDate = new Date(this.meetup.date)
      const hours = this.editableDate.match(/^(\d+)/)[1]
      const minutes = this.editableDate.match(/:(\d+)/)[1]
      newDate.setHours(hours)
      newDate.setMinutes(minutes)
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        date: newDate
      })
    }
  },
  created() {
    this.editableDate = new Date(this.meetup.date).toTimeString()
  }
}
</script>

