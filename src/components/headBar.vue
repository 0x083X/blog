<script setup lang='ts'>
    import { onMounted, ref, Ref, setTransitionHooks, vModelCheckbox } from 'vue'
    //页面距离顶端的位置
    let scrollY:number = 0 
    //判断是否需要改变头部导航栏的背景颜色
    let changeHeadBgcColor:Ref<boolean> = ref(false)
    //判断是否需要出现回到顶部
    let backToHead:Ref<boolean> = ref(false)
    //写一个监听导航栏变化的函数
    window.addEventListener('scroll',()=>{
        scrollY = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        if(scrollY < 130){
            changeHeadBgcColor.value = false
            backToHead.value = false
        }
        else if(scrollY > 130 && scrollY < 800){
            changeHeadBgcColor.value = true
            backToHead.value = false
        }
        else {
            changeHeadBgcColor.value = true
            backToHead.value = true
        }
    },true)
    //回到顶部的动画
    function backToHeadFun(){
        let timer = setInterval(function(){
            //减小的速度
            let speed:number = Math.floor(scrollY/7) > 10 ? Math.floor(scrollY/9) : 10
            document.documentElement.scrollTop = scrollY - speed
            scrollY = document.documentElement.scrollTop
            if(scrollY == 0){
                clearInterval(timer)
            }
        },10)
    }
</script>
<template>
    <div class="contentBox">
        <el-menu
            :default-active="'2'"
            :class="['el-menu-demo',{bgc:changeHeadBgcColor}]"
            mode="horizontal"
            router
        >
            <el-menu-item index="home">Home LOGO</el-menu-item>    
            <div class="flex-grow" />
            <el-menu-item index="Article">Article</el-menu-item>
            <el-menu-item index="About">About Me</el-menu-item>
            <el-menu-item index="Project">Project</el-menu-item>
            <div>黑白切换</div>
            <div>中英文</div>
            <div>微信图片</div> 
            <div>github</div>
        </el-menu> 
    </div>
    <div class="backToHead" v-if="backToHead" @click="backToHeadFun">
        回到顶部
    </div>
    
</template>
<style scoped lang='less'>
    .contentBox{
        //消除 fixed的影响(对flex、对布局)
        // box-sizing: border-box;
        //如果使用了vw，会让底部有滚动条
        width: 100%;
        height: 60px;
        .bgc{
            background-color: red;
        }
        .el-menu-demo{
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 60px;
            align-items: center;
            //通过中间设置一个div设置flex-grow加大div的占地空间，将后面的el-menu都挤到右边
            .flex-grow {
                flex-grow: 1;
            }
            .el-menu-item{
                //禁用复制文字
                user-select: none;
                &:hover{
                    color: red;
                }
            }
            div {
                display: inline-flex;
                // position: relative;
                justify-content: center;
                align-items: center;
                //空间不够的时候内容还是横向排列
                white-space:nowrap;
                margin: 0 5px;
                padding: 0 2px;
                &:nth-last-child(1){
                    margin-right: 30px;
                }
            }
        }
    }
    .backToHead{
        width: 40px;
        height: 40px;
        background-color: pink;
        position: fixed;
        bottom: 50px;
        right: 30px;
    }
</style>