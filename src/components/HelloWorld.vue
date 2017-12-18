<template>
  <div class="hello">
    <ul class="fixed-top flex-row">
      <li>
        <router-link to="/">first</router-link>
      </li>
      <li>
        <router-link to="/second">second</router-link>
      </li>
      <li>
        <router-link to="/third">third</router-link>
      </li>
      <li>
        <router-link to="/four">four</router-link>
      </li>
      <li>
        <router-link to="/five">five</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
.fixed-top li a{display:inline-block;width:100%;height:100%;}
</style>
