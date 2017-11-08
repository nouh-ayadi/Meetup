<template>
<v-app>
  <v-navigation-drawer v-model="sideNav"> 
    <v-list> 
      <v-list-tile 
      v-for="item in menuItems" 
      :key="item.title"
      :to="item.link">
        <v-list-tile-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-tile-action>
      <v-list-tile-content> {{item.title}}</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
<v-toolbar dark class = "primary">
  <v-toolbar-title> <v-btn large router to="/" class ="primary">Devmeetup</v-btn></v-toolbar-title>
  <v-toolbar-side-icon @click="sideNav = !sideNav" class= "hidden-sm-and-up"></v-toolbar-side-icon>
    <v-spacer> </v-spacer>
    <v-toolbar-items class="hidden-xs-only">
    <v-btn flat 
    v-for ="item in menuItems" 
    :key ="item.title"
    :to="item.link">
    <v-icon left dark>{{item.icon}}</v-icon>
    {{item.title}}
    </v-btn>
    </v-toolbar-items>

</v-toolbar>



<main>
  <router-view> </router-view>
</main>
</v-app>
</template>
















<script>
export default {
  data() {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems() {
      let menuItems = [
        {icon: 'face', title: 'Sign up', link: '/Signup'},
        {icon: 'lock-open', title: 'Sign in', link: '/Signin'}
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
        {icon: 'supervisor_account', title: 'Views Meetups', link: '/meetups'},
        {icon: 'room', title: 'Organize Meetup', link: '/meetups/new'},
        {icon: 'person', title: 'Profile', link: '/Profile'}
        ]
      }
      return menuItems
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }
}
</script>
