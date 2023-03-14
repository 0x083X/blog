<!--作为About Me页面左侧的自由评论区-->
<script setup lang='ts'>
    import { ref } from 'vue'
    const textarea = ref('')
</script>
<template>
    <div class="contentBox">
        
        <el-input
            resize = 'none'
            v-model="textarea"
            maxlength="80"
            placeholder="请输入,最大长度为80"
            show-word-limit
            type="textarea"
        />
    </div>
</template>
<style scoped lang='less'>
    .contentBox{
        //宽度每个各占50%,高度的话用内容拉开
        width: 50vw;
        background-color: #E5EAF3;
        border-right: 1px solid #4C4D4F;
    }
</style>