<template>
 <v-alert info dismissible @input='onClose'>
   this is a succes alert that is closable
   {{ text }}
 </v-alert>
 </template>


 <script>
 export default {
   props: ['text'],
   methods: {
     onClose() {
       this.$emit('dismissed')
     }
   }
 }
 </script>
