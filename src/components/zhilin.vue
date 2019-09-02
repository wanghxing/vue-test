<<<<<<< HEAD
<template>
  <div class="zhilinPage">
      <h2 class="title">{{title}}</h2>
      <div class="box2">{{message}}</div>   


      <div class="ps">一. 接下来练习6个指令：v-if//v-show//v-else//v-for//v-bind//v-on (参考：http://web.jobbole.com/87375/)</div>
      <div class="eg">
        <p :class="tit">1. v-if 条件渲染指令，根据其后表达式的bool值进行判断是否渲染该元素；</p>
        <div id="example01">
            <p v-if="male">Male</p>
            <p v-if="female">Female</p>
            <p v-if="age>25">Age:{{age}}</p>
            <p v-if="name.indexOf('lin')>0">Name:{{name}}</p>
        </div>
        <p :class="result">v-if指令只渲染他身后表达式为true的元素；直接隐藏整个标签</p>
      </div>

      <div class="eg">
        <p :class="tit">2. v-show 根据表达式的 truthy 和 falsy 值，切换元素的 display CSS 属性。当条件变化时该指令触发过渡效果。</p>
        <div id="example02">
            <p v-show="male">Male</p>
            <p v-show="female">Female</p>
            <p v-show="age>25">Age:{{age}}</p>
            <p v-show="name.indexOf('lin')>0">Name:{{name}}</p>
        </div>
        <p :class="result"> v-show 条件渲染指令; 与v-if类似，只是会渲染其身后表达式为false的元素，而且会给这样的元素添加css代码：style="display:none";；</p>
      </div>

      <div class="eg">
        <p :class="tit">3. v-else 必须跟在v-if/v-show指令之后，不然不起作用； 前一兄弟元素必须有 v-if 或 v-else-if</p>
        <div id="example03">
            <p v-if="age3 >= 25">Age:{{age3}}</p>
            <p v-else>Name: {{name3}}</p>
            
            <p v-show="name3.indexOf('cool') == 0">Name: {{name3}}</p>
            <!-- <p v-else>Sex: {{sex3}}</p> --> 
            <!-- v-show后加v-else报错，故注释 -->
        </div>
        <p :class="result"> 如果v-if/v-show指令的表达式为true，则else元素不显示；如果v-if/v-show指令的表达式为false，则else元素显示在页面上；</p>
        <p class="result">
            使用心得：

            对于V-show，V-if如何选择，本人有以下建议：

            1、对于管理系统的权限列表的展示，这里可以使用V-if来渲染，如果使用到V-show，对于用户没有的权限，在网页的源码中，仍然能够显示出该权限，如果用V-if，网页的源码中就不会显示出该权限。（在前后台分离情况下，后台不负责渲染页面的场景。）

            2、对于前台页面的数据展示，这里推荐使用V-show，这样可以减少开发中不必要的麻烦。
        </p>
      </div>

      <div class="eg">
        <p :class="tit">
            4. v-for 指令基于一个数组渲染一个列表，它和JavaScript的遍历语法相似：
            v-for="item in items"
            items是一个数组，item是当前被遍历的数组元素。
        </p>
        <div id="example04" :class="center">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Sex</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="person in people" :key="person.id">
                        <td>{{person.name}}</td>
                        <td>{{person.age}}</td>
                        <td>{{person.sex}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p :class="result"> </p>
        
      </div>

      <div class="eg">
        <p :class="tit">
            5. v-bind 这个指令用于响应地更新 HTML 特性，比如绑定某个class元素或元素的style样式。eg,分页功能中当前页数高亮的效果，可以使用bind指令。
        </p>
        <div id="example05" :class="center">
            <ul class="pagination">
                <li v-show="current != 1" @click="current-- && goto(current)" ><a href="javascript:void(0);">上一页</a></li>
                <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
                    <a href="javascript:void(0);" >{{index}}</a>
                </li>
                <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a href="javascript:void(0);" >下一页</a></li>
            </ul>
        </div>
        <p :class="result">摘自：https://www.cnblogs.com/cqsjs/p/5772834.html?utm_source=itdadao&utm_medium=referral </p>
        
      </div>

      <div class="eg">
        <p :class="tit">
            6. v-on 用于监听指定元素的DOM事件，比如点击事件。
        </p>
        <div id="example06" :class="center">
            <input type="text" v-model="imsg">
            <button v-on:click="greet">Greet</button>
            <!-- v-on指令可以缩写为@符号-->
            <!-- <button @click="greet">Greet Again</button> -->

            <div style="margin:0 20px;"></div>

            <input type="text" v-model="imsg2">
            <button v-on:click="showTitle(imsg2,$event,'hello')">Btn</button>
            <button @click="showTitle2">btn2</button>
            <span class="text">{{ititle2}}</span>

        </div>
        <p :class="result">语法：V-on:click=“事件回调函数的名称”， 定义事件的回调函数，在vue的实例化对象的methods属性中定义</p>
        <p :class="result">注意:HTML5中不能使用v-on，换为@</p>
        
      </div>


      <div class="ps">二. 其他指令</div>
      <div class="eg">
        <p :class="tit">
            7. v-text 用于监听指定元素的DOM事件，比如点击事件。
        </p>
        <div id="example07" :class="center">

        </div>
        <p :class="result">语法：V-on:click=“事件回调函数的名称”， 定义事件的回调函数，在vue的实例化对象的methods属性中定义</p>
        
      </div>













      <!-- 最底部 -->
      <div id="Cqlsignature" style="margin:20px auto;">
        <p>此处是个性签名</p>
        <p class="Cqlsignature-name">by play</p>
      </div>
  </div>
</template>

<script>
    export default {
        name:'zhilin',
        data () {
            return {
                title:'常用指令练习',
                message:'我的样式是sass写的',
                tit:'tit',
                result:'result',
                center:'center',

                male:true,
                female:false,
                age:29,
                name:'colin',

                age3:21,
                name3:'keepcool',
                sex3:'Male',
                people:[{
                    name:'Jack',
                    age:30,
                    sex:'Male'
                },{
                    name:'Bill',
                    age:26,
                    sex:'Male'
                },{
                    name:'Tracy',
                    age:22,
                    sex:'Female'
                },{
                    name:'Chris',
                    age:36,
                    sex:'Male'
                }],

                current:1,
                showItem:5,
                allpage:13,

                imsg:"Nice meeting U",

                imsg2:"Nice meeting U too",
                ititle2:''

            }

        },
        computed:{
            pages:function(){
                var pag = [];
                if( this.current < this.showItem ) {
                    var i = Math.min(this.showItem,this.allpage);
                    while(i){
                        pag.unshift(i--);
                    }
                }else {
                    var middle = this.current -Math.floor(this.showItem / 2),
                        i = this.showItem;
                    if( middle > (this.allpage - this.showItem) ){
                        middle = (this.allpage - this.showItem) + 1
                    }
                    while(i--){
                        pag.push( middle++ );
                    }
                }
                return pag
            }
        },
        methods:{
            goto:function(index){
                if(index == this.current) return;
                this.current = index;
                //这里可以发送ajax请求
            },
            greet:function(){
                alert(this.imsg);
            },
            showTitle:function(imsg2, event, msg) {
                event.preventDefault()
                
                this.ititle2 = '快乐大本营';
                this.msg = " hello";
                this.ititle2 = this.imsg2 + this.msg;
                alert('hello' + this.ititle2 + '!')
            },
            showTitle2:function() {
                // console.log(this)
                // console.log(arguments)       传的参数都能访问到 msg, $event, 'hello'
                // 通过this访问vue实例化对象上的其他属性和方法。Data.title   data.aa
                
                this.ititle2 = '快乐大本营';
                this.ititle2 = this.imsg2;
            },
        }
    }
</script>

<style lang="scss">
$f12: 12px;

$bgCol:red;

$col_white:#ffffff;
$blue:#177bbb;
$red:red;

@mixin border-radius{
    -webkit-border-radius: 5px;
    border-radius: 5px;
}

@mixin borderBottom($w,$s,$c){
  border-bottom:$w $s $c;
}

// https://www.jianshu.com/p/680aea02eba4 (sass)
@mixin prefixer($name,$shadow) {
  @if($name=='border-radius'){
    border-radius: $shadow;
  } @else if($name=='box-shadow'){
    box-shadow:$shadow;
  }
}
@mixin box-shadow($shadow...) {
  @if length($shadow) >= 1 {
    @include prefixer(box-shadow, $shadow);
  } @else{
    $shadow:0 0 4px rgba(0,0,0,.3);
    @include prefixer(box-shadow, $shadow);
  }
}

@mixin size($width,$height){
  width: $width;
  height: $height;
}

@mixin lh($lh){
  line-height:$lh;
}

@mixin fontSize($f){
  font-size:$f;
}
/* 底部签名*/
@keyframes ants { to { background-position: 100% 100% } }

#Cqlsignature {
	padding: 1em;
	border: 1px solid transparent;
	background: linear-gradient(white, white) padding-box,
	            repeating-linear-gradient(-45deg, black 0, black 25%, transparent 0, transparent 50%) 0 / .6em .6em;
	animation: ants 15s linear infinite;
	max-width:20rem;
	
	font: 100%/1.6 Baskerville, Palatino, serif;
}
.Cqlsignature-name{
   text-align:right;
   padding-right:2rem
}

.zhilinPage {
    font-size:$f12;
    padding-top:30px;
}

.box2 {
    @include border-radius;
    @include size(200px,50px);
    @include box-shadow(0 0 1px rgba(#000,.5));
    background:$bgCol;
    color:$col_white;
    @include lh(50px);
    margin:0 auto;
}
.zhilinPage .ps {
    padding-top:20px;
    @include fontSize(14px);
}
.zhilinPage .eg {
    @include borderBottom(1px, solid, #ccc);
}
.zhilinPage .tit {
    @include fontSize(16px);
    color:$blue;
}
.zhilinPage .result {
    color:$blue;
}

.zhilinPage .center {
    display: flex;
    justify-content:center;
    width:100%;
}

// 分页
body{
font-family:"Segoe UI";
}
li{
list-style:none;
}
a{
text-decoration:none;
}
.pagination {
position: relative;

}
.pagination li{
display: inline-block;
margin:0 5px;
}
.pagination li a{
padding:.5rem 1rem;
display:inline-block;
border:1px solid #ddd;
background:#fff;

color:#0E90D2;
}
.pagination li a:hover{
background:#eee;
}
.pagination li.active a{
background:#0E90D2;
color:#fff;
}

.zhilinPage .text {padding:5px 10px;color:$red;}

</style>

=======
<template>
  <div class="zhilinPage">
      <h2 class="title">{{title}}</h2>
      <div class="box2">{{message}}</div>   


      <div class="ps">一. 接下来练习6个指令：v-if//v-show//v-else//v-for//v-bind//v-on (参考：http://web.jobbole.com/87375/)</div>
      <div class="eg">
        <p :class="tit">1. v-if 条件渲染指令，根据其后表达式的bool值进行判断是否渲染该元素；</p>
        <div id="example01">
            <p v-if="male">Male</p>
            <p v-if="female">Female</p>
            <p v-if="age>25">Age:{{age}}</p>
            <p v-if="name.indexOf('lin')>0">Name:{{name}}</p>
        </div>
        <p :class="result">v-if指令只渲染他身后表达式为true的元素；直接隐藏整个标签</p>
      </div>

      <div class="eg">
        <p :class="tit">2. v-show 根据表达式的 truthy 和 falsy 值，切换元素的 display CSS 属性。当条件变化时该指令触发过渡效果。</p>
        <div id="example02">
            <p v-show="male">Male</p>
            <p v-show="female">Female</p>
            <p v-show="age>25">Age:{{age}}</p>
            <p v-show="name.indexOf('lin')>0">Name:{{name}}</p>
        </div>
        <p :class="result"> v-show 条件渲染指令; 与v-if类似，只是会渲染其身后表达式为false的元素，而且会给这样的元素添加css代码：style="display:none";；</p>
      </div>

      <div class="eg">
        <p :class="tit">3. v-else 必须跟在v-if/v-show指令之后，不然不起作用； 前一兄弟元素必须有 v-if 或 v-else-if</p>
        <div id="example03">
            <p v-if="age3 >= 25">Age:{{age3}}</p>
            <p v-else>Name: {{name3}}</p>
            
            <p v-show="name3.indexOf('cool') == 0">Name: {{name3}}</p>
            <!-- <p v-else>Sex: {{sex3}}</p> --> 
            <!-- v-show后加v-else报错，故注释 -->
        </div>
        <p :class="result"> 如果v-if/v-show指令的表达式为true，则else元素不显示；如果v-if/v-show指令的表达式为false，则else元素显示在页面上；</p>
        <p class="result">
            使用心得：

            对于V-show，V-if如何选择，本人有以下建议：

            1、对于管理系统的权限列表的展示，这里可以使用V-if来渲染，如果使用到V-show，对于用户没有的权限，在网页的源码中，仍然能够显示出该权限，如果用V-if，网页的源码中就不会显示出该权限。（在前后台分离情况下，后台不负责渲染页面的场景。）

            2、对于前台页面的数据展示，这里推荐使用V-show，这样可以减少开发中不必要的麻烦。
        </p>
      </div>

      <div class="eg">
        <p :class="tit">
            4. v-for 指令基于一个数组渲染一个列表，它和JavaScript的遍历语法相似：
            v-for="item in items"
            items是一个数组，item是当前被遍历的数组元素。
        </p>
        <div id="example04" :class="center">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Sex</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="person in people" :key="person.id">
                        <td>{{person.name}}</td>
                        <td>{{person.age}}</td>
                        <td>{{person.sex}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p :class="result"> </p>
        
      </div>

      <div class="eg">
        <p :class="tit">
            5. v-bind 这个指令用于响应地更新 HTML 特性，比如绑定某个class元素或元素的style样式。eg,分页功能中当前页数高亮的效果，可以使用bind指令。
        </p>
        <div id="example05" :class="center">
            <ul class="pagination">
                <li v-show="current != 1" @click="current-- && goto(current)" ><a href="javascript:void(0);">上一页</a></li>
                <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
                    <a href="javascript:void(0);" >{{index}}</a>
                </li>
                <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a href="javascript:void(0);" >下一页</a></li>
            </ul>
        </div>
        <p :class="result">摘自：https://www.cnblogs.com/cqsjs/p/5772834.html?utm_source=itdadao&utm_medium=referral </p>
        
      </div>

      <div class="eg">
        <p :class="tit">
            6. v-on 用于监听指定元素的DOM事件，比如点击事件。
        </p>
        <div id="example06" :class="center">
            <input type="text" v-model="imsg">
            <button v-on:click="greet">Greet</button>
            <!-- v-on指令可以缩写为@符号-->
            <!-- <button @click="greet">Greet Again</button> -->

            <div style="margin:0 20px;"></div>

            <input type="text" v-model="imsg2">
            <button v-on:click="showTitle(imsg2,$event,'hello')">Btn</button>
            <button @click="showTitle2">btn2</button>
            <span class="text">{{ititle2}}</span>

        </div>
        <p :class="result">语法：V-on:click=“事件回调函数的名称”， 定义事件的回调函数，在vue的实例化对象的methods属性中定义</p>
        <p :class="result">注意:HTML5中不能使用v-on，换为@</p>
        
      </div>


      <div class="ps">二. 其他指令</div>
      <div class="eg">
        <p :class="tit">
            7. v-text 用于监听指定元素的DOM事件，比如点击事件。
        </p>
        <div id="example07" :class="center">

        </div>
        <p :class="result">语法：V-on:click=“事件回调函数的名称”， 定义事件的回调函数，在vue的实例化对象的methods属性中定义</p>
        
      </div>













      <!-- 最底部 -->
      <div id="Cqlsignature" style="margin:20px auto;">
        <p>此处是个性签名</p>
        <p class="Cqlsignature-name">by play</p>
      </div>
  </div>
</template>

<script>
    export default {
        name:'zhilin',
        data () {
            return {
                title:'常用指令练习',
                message:'我的样式是sass写的',
                tit:'tit',
                result:'result',
                center:'center',

                male:true,
                female:false,
                age:29,
                name:'colin',

                age3:21,
                name3:'keepcool',
                sex3:'Male',
                people:[{
                    name:'Jack',
                    age:30,
                    sex:'Male'
                },{
                    name:'Bill',
                    age:26,
                    sex:'Male'
                },{
                    name:'Tracy',
                    age:22,
                    sex:'Female'
                },{
                    name:'Chris',
                    age:36,
                    sex:'Male'
                }],

                current:1,
                showItem:5,
                allpage:13,

                imsg:"Nice meeting U",

                imsg2:"Nice meeting U too",
                ititle2:''

            }

        },
        computed:{
            pages:function(){
                var pag = [];
                if( this.current < this.showItem ) {
                    var i = Math.min(this.showItem,this.allpage);
                    while(i){
                        pag.unshift(i--);
                    }
                }else {
                    var middle = this.current -Math.floor(this.showItem / 2),
                        i = this.showItem;
                    if( middle > (this.allpage - this.showItem) ){
                        middle = (this.allpage - this.showItem) + 1
                    }
                    while(i--){
                        pag.push( middle++ );
                    }
                }
                return pag
            }
        },
        methods:{
            goto:function(index){
                if(index == this.current) return;
                this.current = index;
                //这里可以发送ajax请求
            },
            greet:function(){
                alert(this.imsg);
            },
            showTitle:function(imsg2, event, msg) {
                event.preventDefault()
                
                this.ititle2 = '快乐大本营';
                this.msg = " hello";
                this.ititle2 = this.imsg2 + this.msg;
                alert('hello' + this.ititle2 + '!')
            },
            showTitle2:function() {
                // console.log(this)
                // console.log(arguments)       传的参数都能访问到 msg, $event, 'hello'
                // 通过this访问vue实例化对象上的其他属性和方法。Data.title   data.aa
                
                this.ititle2 = '快乐大本营';
                this.ititle2 = this.imsg2;
            },
        }
    }
</script>

<style lang="scss">
$f12: 12px;

$bgCol:red;

$col_white:#ffffff;
$blue:#177bbb;
$red:red;

@mixin border-radius{
    -webkit-border-radius: 5px;
    border-radius: 5px;
}

@mixin borderBottom($w,$s,$c){
  border-bottom:$w $s $c;
}

// https://www.jianshu.com/p/680aea02eba4 (sass)
@mixin prefixer($name,$shadow) {
  @if($name=='border-radius'){
    border-radius: $shadow;
  } @else if($name=='box-shadow'){
    box-shadow:$shadow;
  }
}
@mixin box-shadow($shadow...) {
  @if length($shadow) >= 1 {
    @include prefixer(box-shadow, $shadow);
  } @else{
    $shadow:0 0 4px rgba(0,0,0,.3);
    @include prefixer(box-shadow, $shadow);
  }
}

@mixin size($width,$height){
  width: $width;
  height: $height;
}

@mixin lh($lh){
  line-height:$lh;
}

@mixin fontSize($f){
  font-size:$f;
}
/* 底部签名*/
@keyframes ants { to { background-position: 100% 100% } }

#Cqlsignature {
	padding: 1em;
	border: 1px solid transparent;
	background: linear-gradient(white, white) padding-box,
	            repeating-linear-gradient(-45deg, black 0, black 25%, transparent 0, transparent 50%) 0 / .6em .6em;
	animation: ants 15s linear infinite;
	max-width:20rem;
	
	font: 100%/1.6 Baskerville, Palatino, serif;
}
.Cqlsignature-name{
   text-align:right;
   padding-right:2rem
}

.zhilinPage {
    font-size:$f12;
    padding-top:30px;
}

.box2 {
    @include border-radius;
    @include size(200px,50px);
    @include box-shadow(0 0 1px rgba(#000,.5));
    background:$bgCol;
    color:$col_white;
    @include lh(50px);
    margin:0 auto;
}
.zhilinPage .ps {
    padding-top:20px;
    @include fontSize(14px);
}
.zhilinPage .eg {
    @include borderBottom(1px, solid, #ccc);
}
.zhilinPage .tit {
    @include fontSize(16px);
    color:$blue;
}
.zhilinPage .result {
    color:$blue;
}

.zhilinPage .center {
    display: flex;
    justify-content:center;
    width:100%;
}

// 分页
body{
font-family:"Segoe UI";
}
li{
list-style:none;
}
a{
text-decoration:none;
}
.pagination {
position: relative;

}
.pagination li{
display: inline-block;
margin:0 5px;
}
.pagination li a{
padding:.5rem 1rem;
display:inline-block;
border:1px solid #ddd;
background:#fff;

color:#0E90D2;
}
.pagination li a:hover{
background:#eee;
}
.pagination li.active a{
background:#0E90D2;
color:#fff;
}

.zhilinPage .text {padding:5px 10px;color:$red;}

</style>

>>>>>>> 61e8362f42aab394c6a1cd54605bb694e3b797e7
