<<<<<<< HEAD
<template>
    <div id="son2" class="son-container">
        <div class="tit">{{sendMessage2}}</div>

        <ul>
            <li v-for="item in items" :key="item.id"> {{item}} </li>
        </ul>

        <div v-for="item in objs" :key="item.id">{{item.text}}</div>

        <div v-for="(a,index) in b" >
            {{ parentMessage }} - {{ index }} - {{ a.message }}
        </div>

    </div>
</template>

<script>
    // import Vue from 'vue'

    export default {
        name:'child2',//必须设定name，否则无法在父组件import
        props:{
            sendMessage2:{
                type:String,
                required:true
            },
            /* sendNum2:{
                type:Number,
                required:true
            } */
        },
        data(){
            return {
                items:['message01','message02','message03'],

                objs:[{id:1,text:'meg1'},{id:2,text:'meg2'},{id:3,text:'meg3'}],

                b: [
                    { message: 'haha' },
                    { message: 'hehe' }
                ],
                parentMessage: 'Parent'
            }
        },
    }
</script>

<style>
.son-container {background:#ccc}
.tit {font-size:20px;color:#ff0000;padding:10px 0;}
</style>
=======
<template>
    <div id="son2" class="son-container">
        <div class="tit">{{sendMessage2}}</div>

        <ul>
            <li v-for="item in items" :key="item.id"> {{item}} </li>
        </ul>

        <div v-for="item in objs" :key="item.id">{{item.text}}</div>

        <div v-for="(a,index) in b" >
            {{ parentMessage }} - {{ index }} - {{ a.message }}
        </div>

    </div>
</template>

<script>
    // import Vue from 'vue'

    export default {
        name:'child2',//必须设定name，否则无法在父组件import
        props:{
            sendMessage2:{
                type:String,
                required:true
            },
            /* sendNum2:{
                type:Number,
                required:true
            } */
        },
        data(){
            return {
                items:['message01','message02','message03'],

                objs:[{id:1,text:'meg1'},{id:2,text:'meg2'},{id:3,text:'meg3'}],

                b: [
                    { message: 'haha' },
                    { message: 'hehe' }
                ],
                parentMessage: 'Parent'
            }
        },
    }
</script>

<style>
.son-container {background:#ccc}
.tit {font-size:20px;color:#ff0000;padding:10px 0;}
</style>
>>>>>>> 61e8362f42aab394c6a1cd54605bb694e3b797e7
