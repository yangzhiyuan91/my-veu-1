<template>
  <div class="hello">
    <h5 class="page-header">这里是详情页面</h5>
    <p>{{$route.query.id}}</p>
  </div>
</template>

<script>
export default {
  name: 'first',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>
