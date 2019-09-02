<template>
  <div id="router2">
        <h2>{{ tit }}</h2>
        <p>{{ msg2 }}</p>
        <input type="text" v-model="msg2">

        <P class="text">这是一段话</P>
        <div class="box">这是一个盒子</div>

        <child2 :send-message2="myMsg2"></child2>

        <div id="main">
            <nav v-bind:class="active" v-on:click.prevent>
                <a href="#" class="home" v-on:click="makeActive('home')">Home</a>
                <a href="#" class="projects" v-on:click="makeActive('projects')">Projects</a>
                <a href="#" class="services" v-on:click="makeActive('services')">Services</a>
                <a href="#" class="contact" v-on:click="makeActive('contact')">Contact</a>
            </nav>
            <p>You chose <b>{{active}}</b></p>
        </div>
        
        <!-- tab切换 -->
        <div class="tabBox">
            <div class="hd">
                <ul class="clearfix">
                    <li v-for="(item, index) of list" :key="item.id" :class="{active:selected==index}" @click="change(index)" >{{item.title}}</li>
                </ul>
            </div>
            <component :is="currentView"></component>
        </div>

        <!-- http://www.jb51.net/article/117622.htm -->

        

        
  </div>

</template>

<script>
    import child2 from './son2.vue'
    import Vue from 'vue' 

    // tab0
    Vue.component('item0',{
    template : '<div>1111111content</div>'
    });
    // tab1
    Vue.component('item1',{
    template : '<div>222222content</div>'
    })
    // tab2
    Vue.component('item2',{
    data(){
        return{
        message : '3'
        }
    },
    template : `<div>
        <span style="color:#f00">hello world</span>
        <p><input type="text" v-model="message"></p>
        <p>{{message}}</p>
        </div>`
    })

    export default {
        name: 'router2',
        data () {
            return {
            tit: '我是组件里的router2页面',
            msg2: '双向绑定',

            myMsg2:'my name is son2',
            active:'home',

            selected: 0,
            currentView : 'item0',
            list: [
            {
                title: 'tabnav1'
            },
            {
                title: 'tabnav2'
            },
            {
                title: 'tabnav3'
            }
            ]


            }
        },
        components:{
            child2,
        },
        methods:{
            makeActive:function(item){
                this.active = item;
            },
            change(index) {
                this.selected = index;
                this.currentView = 'item'+index; // 切换currentView
            }
        }
    }



</script>

<style lang="scss">
.text {font-size:16px;color:#3cc4a2}
.box {
    width:200px;
    height:200px;
    text-align:center;
    line-height:200px;
    background:#c0c0c0 ;
    margin:10px auto;
    box-shadow: 0 5px 10px #cccccc ;
    -webkit-box-shadow: 0 5px 10px #cccccc;
    transition: transform 0.3s;
    -webkit-transition: -webkit-transform 0.3s;
    -moz-transition: -moz-transform 0.3s;
    -o-transition: -moz-transform 0.3s;
}
.box:hover {
    transform: translateY(-5px);
    -webkit-transform: translateY(-5px);
    -moz-transform: translateY(-5px);
    -o-transform: translateY(-5px);
}

.tabNav {display:flex;justify-content:space-around;width:300px;margin:20px auto;}
.tabNav li {cursor:pointer;}
.tabNav li.active {color:#ff6600;}
/* .tabCon {display:none;} */


/*-------------------------
	The menu
--------------------------*/

#main nav{
	display:inline-block;
	margin:60px auto 45px;
	background-color:#5597b4;
	box-shadow:0 1px 1px #ccc;
	border-radius:2px;
}

#main nav a{
	display:inline-block;
	padding: 18px 30px;
	color:#fff !important;
	font-weight:bold;
	font-size:16px;
	text-decoration:none !important;
	line-height:1;
	text-transform: uppercase;
	background-color:transparent;

	-webkit-transition:background-color 0.25s;
	-moz-transition:background-color 0.25s;
	transition:background-color 0.25s;
}

#main nav a:first-child{
	border-radius:2px 0 0 2px;
}

#main nav a:last-child{
	border-radius:0 2px 2px 0;
}

#main nav.home .home,
#main nav.projects .projects,
#main nav.services .services,
#main nav.contact .contact{
	background-color:#e35885;
}

#main p{
	font-size:22px;
	font-weight:bold;
	color:#7d9098;
}

#main p b{
	color:#ffffff;
	display:inline-block;
	padding:5px 10px;
	background-color:#c4d7e0;
	border-radius:2px;
	text-transform:uppercase;
	font-size:18px;
}


/* 3 */
.tabBox {border:1px solid #cccccc;}
.hd ul {display:flex;justify-content:center;}
.hd li {margin:0 20px;cursor:pointer;}
.hd li.active {color:#e35885;font-weight:bold;}

</style>

