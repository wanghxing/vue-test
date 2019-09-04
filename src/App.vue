<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <p>点击下面链接可切换</p>
    <router-link to="/" class="nav" active-class="u-link--Active">点我跳到HelloWorld</router-link> 
    <router-link to="/router2" class="nav" active-class="u-link--Active">点我跳到router2</router-link>
    
    <router-link to="/zhilin" class="nav" active-class="u-link--Active">点我跳到zhilin</router-link>

    <router-view></router-view> <!-- 这里是跳转内容 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin:0;
  padding:0 10px;
}
* {
  word-break: break-word;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav {text-decoration:none;border:1px solid #666666;padding:10px;margin:20px 0;}
.u-link--Active {background:powderblue;color:red;}

.nav {width:25%;}
a {display:inline-block;}

</style>