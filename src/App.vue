<template>
<v-app>
  <v-navigation-drawer v-model="sideNav"> 
    <v-list> 
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>person</v-icon>
        </v-list-tile-action>
      <v-list-tile-content> Views Meetups</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
<v-toolbar dark class = "primary">
  <v-toolbar-title>Devmeetup</v-toolbar-title>
  <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class= "hidden-sm-and-up"></v-toolbar-side-icon>
    <v-spacer> </v-spacer>
    <v-toolbar-items class="hidden-xs-only">
    <v-btn flat>
    <v-icon left>person</v-icon>
      Views Meetups
    </v-btn>
    </v-toolbar-items>

</v-toolbar>



<main>
</main>
</v-app>
</template>
















<script>
export default {
  data () {
    return {
      sideNav: false
    }
  }
}
</script>
