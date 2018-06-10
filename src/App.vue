<template>
<div>
  <Box></Box>
  <hr>
  <Header></Header>
  <hr>
  <Btn></Btn>
</div>
</template>

<script>
import Box from './component/box.vue'
import Header from './component/header.vue'
import Btn from './component/btn.vue'
 export default {
   data () {
     return {

     }
   },
   components: {
     Box,
     Header,
     Btn
   }
 }
</script>

<style lang="less" scoped>
 
</style>