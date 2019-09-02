<<<<<<< HEAD
<template>
 <div class="sub-container">
    <h3>我是儿子</h3>

    <div>我从父亲那边接收过来的信息：</div>
    <div>字符串：{{sendMessage}}</div>
    <div>数字：{{sendNum}}</div>

    <div>是否可以子影响父呢？</div>
    <input type="text" v-model="sendMessage">
    <!-- <input type="text" v-model="sendNum"> -->

     <ul v-for="item of sonList" :key="item.id">
      <li>{{item.name}}</li>
    </ul>
 </div>
</template>

<script>
//子组件
export default {
 name:'child',//必须设定name，否则无法在父组件import
 props:{
   sendMessage:{
     type:String,
     required:true
   },
   sendNum:{
     type:Number,
     required:true
   },
   sendObj:{
     validator:function(val){
       if(Object.prototype.toString.call(val) === '[object Array]' || Object.prototype.toString.call(val) === '[object Object]'){
         return true;
       }
     }
   }
 },
 data(){
  //  同步
  /* var parentObj = this.sendObj;//获取父组件传来的json
  var childObj = JSON.parse(JSON.stringify(parentObj));//复制一份，避免污染父组件的数据
  childObj.push({id:3,name:'mike'});//追加一个对象
  return {
    sonList:childObj
  }; */

// watch 异步
  return {
    sonList:null
  };
 },
 watch:{//监控父组件sendObj的变化
  sendObj(newval,oldval){

   if(newval !== oldval){

    var newobj =JSON.parse(JSON.stringify(newval));//复制一份，避免污染父组件的数据
    /* 
    parse用于从一个字符串中解析出json对象
    stringify()用于从一个对象解析出字符串
    */
    newobj.push({id:3,name:'mike'});//追加一个对象
    this.sonList = newobj;//将新值赋予data的list(即sonList)
   }

  }
 }
}
</script>

<style>
.sub-container{
 background: rgb(229, 229, 252);
 color:#177bbb;
}
</style>
=======
<template>
 <div class="sub-container">
    <h3>我是儿子</h3>

    <div>我从父亲那边接收过来的信息：</div>
    <div>字符串：{{sendMessage}}</div>
    <div>数字：{{sendNum}}</div>

    <div>是否可以子影响父呢？</div>
    <input type="text" v-model="sendMessage">
    <!-- <input type="text" v-model="sendNum"> -->

     <ul v-for="item of sonList" :key="item.id">
      <li>{{item.name}}</li>
    </ul>
 </div>
</template>

<script>
//子组件
export default {
 name:'child',//必须设定name，否则无法在父组件import
 props:{
   sendMessage:{
     type:String,
     required:true
   },
   sendNum:{
     type:Number,
     required:true
   },
   sendObj:{
     validator:function(val){
       if(Object.prototype.toString.call(val) === '[object Array]' || Object.prototype.toString.call(val) === '[object Object]'){
         return true;
       }
     }
   }
 },
 data(){
  //  同步
  /* var parentObj = this.sendObj;//获取父组件传来的json
  var childObj = JSON.parse(JSON.stringify(parentObj));//复制一份，避免污染父组件的数据
  childObj.push({id:3,name:'mike'});//追加一个对象
  return {
    sonList:childObj
  }; */

// watch 异步
  return {
    sonList:null
  };
 },
 watch:{//监控父组件sendObj的变化
  sendObj(newval,oldval){

   if(newval !== oldval){

    var newobj =JSON.parse(JSON.stringify(newval));//复制一份，避免污染父组件的数据
    /* 
    parse用于从一个字符串中解析出json对象
    stringify()用于从一个对象解析出字符串
    */
    newobj.push({id:3,name:'mike'});//追加一个对象
    this.sonList = newobj;//将新值赋予data的list(即sonList)
   }

  }
 }
}
</script>

<style>
.sub-container{
 background: rgb(229, 229, 252);
 color:#177bbb;
}
</style>
>>>>>>> 61e8362f42aab394c6a1cd54605bb694e3b797e7
