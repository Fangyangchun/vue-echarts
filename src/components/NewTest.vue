<template>
    <h6>hello, {{ message }}</h6>
</template>

<script>
export default {
  name: 'NewTest',
  data () {
    return {
      message: '这是一个内嵌组件！'
    }
  }
}
</script>

<style scoped>
    h1 {
    font-weight: normal;
    }
</style>
