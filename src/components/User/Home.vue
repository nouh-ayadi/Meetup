<template>
<v-container>
   <v-layout row wrap class ="mb-2">
                            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                            <v-btn large router to="/meetups" class ="red"> Explore Meetups</v-btn>
                            </v-flex>
 
                    <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                    <v-btn large router to="/meetup/new" class ="red">Organize Meetups</v-btn> 
                    </v-flex>  
   </v-layout>

   <v-layout row wrap class ="mt-2">
   <v-flex xs12>         

    <v-carousel style="cursor: pointer;">
      <v-carousel-item
         v-for="(item,i) in items"
         v-bind:src="item.src" 
         :key="i"
         @click="onLoadMeetup">
         <div class ="title">
             {{ i.title }}
         </div>
      </v-carousel-item>
    </v-carousel>
               
   </v-flex>
   </v-layout>
</v-container>
</template>


<script>

export default {
  data () {
    return {
      items: [
        {src: 'https://1645110239.rsc.cdn77.org/image/s900/q80/mm/befr/movies12043/photos-movie/6/le-monde-fantastique-d-oz.20170228032355.jpg', id: 'eigeige122', title: 'Meetup i Trump'},
        {src: 'http://s1.1zoom.me/big3/550/371375-sepik.jpg'},
        {src: 'https://img00.deviantart.net/ea73/i/2005/093/a/2/monde_imaginaire_2_by_jeanpepe.jpg'}
      ]
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>











<style scoped>
.title {
    position:absolute;
    bottom:50px;
    background-color: rgba(0,0,0,0,.5);
    color:white;
    font-size:2em;
    padding:30px;
}
</style>
