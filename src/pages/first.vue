<template>
  <div class="hello">
    <h1 class="page-header">这里是first页面</h1>
    <search @transferData="getVal"></search>
    <div v-if="resultShow.length>0" class="search-match">
    	<p>搜索框传值匹配的值：{{resultShow}}</p>
    </div>
    <lunbo/>
    <ul class="first-cates">
      <li>
        <router-link :class="{'active':first_activeIndex=='0-a'}" to="/first/s_first">s_first</router-link>
      </li>
      <li>
        <router-link :class="{'active':first_activeIndex=='0-b'}" to="/first/s_second">s_second</router-link>
      </li>
      <li>
        <router-link :class="{'active':first_activeIndex=='0-c'}" to="/first/s_third">s_third</router-link>
      </li>
      <li>
        <router-link :class="{'active':first_activeIndex=='0-d'}" to="/first/s_four">s_four</router-link>
      </li>
    </ul>
    <router-view/>
    <slider/>
  </div>
</template>

<script>
import lunbo from '@/components/lunbo'
import slider from '@/components/slider'
import search from '@/components/search'
export default {
  name: 'first',
  data () {
    return {
      first_activeIndex:'0-a',
      resultArr:[
      	{
      		id:1,
      		result:'A'
      	},
      	{
      		id:2,
      		result:'B'
      	},
      	{
      		id:3,
      		result:'C'
      	},
      	{
      		result:'没有搜结果'
      	}
      ],
      resultShow:''
    }
  },
  components:{lunbo,slider,search},
  watch:{
    '$route':'calc'
  },
  methods:{
    indexActive(path){
      switch(path){
        case '/first/s_first':
          return '0-a'
          break;
        case '/first/s_second':
          return '0-b'
          break;
        case '/first/s_third':
          return '0-c'
          break;
        case '/first/s_four':
          return '0-d'
          break;
      }
    },
    calc(){
      var path=this.$route.path
      var activeIndex=this.indexActive(path)
      if(activeIndex.indexOf('0-')>-1)
        this.first_activeIndex=activeIndex
    },
    getVal:function(data){
    	console.log(data)
    	console.log(this.trim(data))
    	console.log(this.trim(data).length)
    	if(data.length==0){
    		this.resultShow=''
    	}else{
	    	var time=0
	    	for(var i=0;i<this.resultArr.length;i++){
	    		if(this.resultArr[i].id==data){
	    			this.resultShow=this.resultArr[i].result
	    		}else{
	    			time++
	    		}
	    	}
	    	if(time==this.resultArr.length){
	    		this.resultShow=this.resultArr[this.resultArr.length-1].result
	    	}
    	}
    },
    trim(str){
    	//return str.replace(/^\s+|\s+$/ig,'')
    	return str.replace(/\s/ig,'')
    }
  }
}
</script>

<style scoped>
.first-cates{background-color:lightGreen;height:40px;line-height:40px;}
.first-cates li{width:20%;margin:0;}
a{color:red;text-decoration:none;}
.first-cates li a.active{font-size:20px;color:#000;}
.search-match{padding:20px;}
</style>
