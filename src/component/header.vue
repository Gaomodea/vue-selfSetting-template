<template>
  <div>
    <h1>这是header--{{$store.state.count}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是header"
    };
  },
  components: {}
};
</script>

<style lang="less" scoped>

</style>