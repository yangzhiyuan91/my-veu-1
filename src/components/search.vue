
<!-------------------------------home页轮播图swiper--------------------------->

<template>
  <div class="hello">
    <input class="search-input" placeholder="请输入要搜索的关键词" type="search" v-model="inputVal" @keyup="inputChange">
  </div>
</template>
<script>
  

  export default {
    name: 'search',
    data () {
      return {
        inputVal:''
      }
    },
    computed: {

    },
    mounted () {

    },
    methods:{
      inputChange:function(){
        this.$emit('transferData',this.inputVal)
      }
    }
  }
</script>
<style scoped>
.search-input{
  width:100%;
  height:40px;
  line-height:40px;
  border:0;
  padding:0 10px;
}
</style>
