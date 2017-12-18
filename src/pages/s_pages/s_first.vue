<template>
  <div class="hello">
    <h5 class="page-header">这里是s_first页面</h5>
    <p @click="jump(1)">点击事件1</p>
    <p @click="jump(2)">点击事件2</p>
    <p @click="jump(3)">点击事件3</p>
    <p @click="jump(4)">点击事件4</p>
  </div>
</template>

<script>
export default {
  name: 'first',
  data () {
    return {
      
    }
  },
  methods:{
    jump(n){
      this.$router.push({
        path:'/detail',
        query:{id:n}
      })
    }
  }
}
</script>

<style scoped>

</style>
