<template>
  <div id="app">
  	<ul class="fixed-top flex-row">
      <li>
        <router-link :class="{'active':activeIndex==0}" to="/">first</router-link>
      </li>
      <li>
        <router-link :class="{'active':activeIndex==1}" to="/second">second</router-link>
      </li>
      <li>
        <router-link :class="{'active':activeIndex==2}" to="/third">third</router-link>
      </li>
      <li>
        <router-link :class="{'active':activeIndex==3}" to="/four">four</router-link>
      </li>
      <li>
        <router-link :class="{'active':activeIndex==4}" to="/five">five</router-link>
      </li>
    </ul>
    <div class="zhanwei-fixed-top"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
  	return{
  		activeIndex:0
  	}
  },
  mounted(){

  },
  watch:{
  	'$route':'calc'
  },
  methods:{
  	indexActive(path){
  		switch(path){
	  		case '/first':
	  		case '/detail':
	  			return 0
	  			break;
	  		case '/second':
	  			return 1
	  			break;
	  		case '/third':
	  			return 2
	  			break;
	  		case '/four':
	  			return 3
	  			break;
	  		case '/five':
	  			return 4
	  			break;
	  		case '/first/s_first':
	  		case '/first/s_second':
	  		case '/first/s_third':
	  		case '/first/s_four':
	  			return 0
	  			break;
	  	}
  	},
  	calc(){
  		var path=this.$route.path
  		this.activeIndex=this.indexActive(path)
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{margin:0;padding:0;}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.fixed-top{position:fixed;top:0;left:0;z-index:999;width:100%;height:50px;line-height:50px;background-color:#fff;box-shadow:0 2px 3px #ccc;}
.flex-row{display:flex;flex-direction:row;align-items:center;justify-content:space-between;}
.fixed-top li{width:20%;text-align:center;}
.fixed-top li a.active{color:red;}
.fixed-top li a{display:inline-block;width:100%;height:100%;}
.zhanwei-fixed-top{width:100%;height:50px;}
.page-header{background-color:#eee;height:100px;line-height:100px;}

</style>
