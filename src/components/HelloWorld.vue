<<<<<<< HEAD
<template>
  <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>woxiwangjingchanengjinkuaipoan,huairennenggoujinkuaishenzhiyifa,wodeqiannengkuaishuhuilai</h2>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a
            href="http://router.vuejs.org/"
            target="_blank"
          >
            vue-router
          </a>
        </li>
        <li>
          <a
            href="http://vuex.vuejs.org/"
            target="_blank"
          >
            vuex
          </a>
        </li>
        <li>
          <a
            href="http://vue-loader.vuejs.org/"
            target="_blank"
          >
            vue-loader
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vuejs/awesome-vue"
            target="_blank"
          >
            awesome-vue
          </a>
        </li>
      </ul>

      <hr>
      <!-- http://www.cnblogs.com/luxiaoxing/p/7586630.html -->

      <h1 class="parent">我是父亲</h1>

      <ul v-for="(item, index) in myObj" :key="item.id">
        <li>{{item.name}}</li>
      </ul>

      <input type="text" v-model="myMsg">

      <!-- <input type="text" v-model="myNum"> -->
      <br>

      <!-- <child v-bind:send-message="myMsg"></child> -->
      <child :send-message="myMsg" :send-num="myNum" :send-obj="myObj"></child>

      
  </div>
</template>

<script>
import child from './son1.vue'

export default {
  name: 'HelloWorld',
  data () {
    //初始化obj
  var obj = {
   msg:"HelloWorld lllll",

   myMsg:'hello,my son!',
   myNum:123,
   myObj:[]
  };
//延时返回myObj，模拟ajax的延时情况
  setTimeout(function(){
   obj['myObj'] = [{id:1,name:'jack'},{id:2,name:'tom'}];

  },2000);
  return obj;
 },
  components:{child}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
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

.parent {color:#177bbb;font-weight:bold;}
</style>
=======
<template>
  <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>woxiwangjingchanengjinkuaipoan,huairennenggoujinkuaishenzhiyifa,wodeqiannengkuaishuhuilai</h2>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a
            href="http://router.vuejs.org/"
            target="_blank"
          >
            vue-router
          </a>
        </li>
        <li>
          <a
            href="http://vuex.vuejs.org/"
            target="_blank"
          >
            vuex
          </a>
        </li>
        <li>
          <a
            href="http://vue-loader.vuejs.org/"
            target="_blank"
          >
            vue-loader
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vuejs/awesome-vue"
            target="_blank"
          >
            awesome-vue
          </a>
        </li>
      </ul>

      <hr>
      <!-- http://www.cnblogs.com/luxiaoxing/p/7586630.html -->

      <h1 class="parent">我是父亲</h1>

      <ul v-for="(item, index) in myObj" :key="item.id">
        <li>{{item.name}}</li>
      </ul>

      <input type="text" v-model="myMsg">

      <!-- <input type="text" v-model="myNum"> -->
      <br>

      <!-- <child v-bind:send-message="myMsg"></child> -->
      <child :send-message="myMsg" :send-num="myNum" :send-obj="myObj"></child>

      
  </div>
</template>

<script>
import child from './son1.vue'

export default {
  name: 'HelloWorld',
  data () {
    //初始化obj
  var obj = {
   msg:"HelloWorld lllll",

   myMsg:'hello,my son!',
   myNum:123,
   myObj:[]
  };
//延时返回myObj，模拟ajax的延时情况
  setTimeout(function(){
   obj['myObj'] = [{id:1,name:'jack'},{id:2,name:'tom'}];

  },2000);
  return obj;
 },
  components:{child}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
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

.parent {color:#177bbb;font-weight:bold;}
</style>
>>>>>>> 61e8362f42aab394c6a1cd54605bb694e3b797e7
