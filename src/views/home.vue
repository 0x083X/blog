<script setup lang='ts'>
    //导入头部导航栏
    import headBar from '../components/headBar.vue'
    import leftBar from '../components/homeLeftBar.vue'
    import Article from '../components/homeArticle.vue'
</script>
<template>
    <!--头部来个固定布局-->
    <headBar></headBar>
    <!--
        内容部分包括 
        1. 侧边栏(粘性布局)
        2. 主题内容(居中)
        3. 右边内容(个性化(访客信息、人数等))
    -->
    <div class="mainBodyBox">
        <leftBar></leftBar>
        <Article></Article>
    </div>
    
</template>
<style scoped lang='less'>
    .mainBodyBox{
        display: flex;
    }
</style>