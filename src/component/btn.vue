<template>
<div>
  <input type="button" @click.prevent="add" value="btn">
  <h1>这是btn --- {{$store.getters.opt}}</h1>
</div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   methods: {
     add() {
       this.$store.commit('add');
     }
   },
   components: {

   }
 }
</script>

<style lang="less" scoped>
 
</style>