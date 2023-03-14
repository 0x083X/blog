<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import headBar from '../components/headBar.vue'
import comment from '../components/comment.vue'
let loading: Ref<boolean> = ref(true)
const currentDate = new Date().toDateString()
onMounted(() => {
    // loading.value = false //控制骨屏架的显示
    setTimeout(() => {
        loading.value = false
    }, 2000);
})
</script>
<template>
    <headBar></headBar>
    <!--
                                                            分成左右两个部分,左边是自由的留言区,右边是个人的信息
                                                        -->
    <div class="contentBox">
        <comment></comment>
        <div class="userInfo">
            <button @click="loading = !loading">change</button>
            <!--使用骨屏架？-->
            <el-skeleton :loading="loading" animated>
                <template #template>
                    <el-skeleton-item variant="h1"
                        style="margin-top: 40px; width: 10vw; margin-left: 20vw; height: 60px;" />
                    <div style="padding: 14px">
                        <el-skeleton-item variant="h3" style="width: 50%" />
                        <div style="
                                                        display: flex;
                                                        align-items: center;
                                                        justify-items: space-between;
                                                        margin-top: 16px;
                                                        height: 16px;
                                                        ">
                            <el-skeleton-item variant="text" style="margin-right: 16px" />
                            <el-skeleton-item variant="text" style="width: 30%" />
                        </div>
                    </div>
                </template>
                <template #default>
                    <!--骨屏架显示的内容-->
                    <el-card>
                        <div class="defaultSkeletonOutBox">
                            <h1
                                style="width:10vw; height: 60px; margin-left: 18vw; margin-top: 30px; text-align: center; line-height: 60px;">
                                欢迎!</h1>
                            <div class="defaultSkeletonContentBox" style="display:flex; flex-direction: column; ">
                                <span style="margin: 4px 0 14px; ">22222</span>
                                <span>222</span>
                            </div>
                        </div>
                    </el-card>
                </template>
            </el-skeleton>
        </div>
    </div>
</template>
<style scoped lang='less'>
.contentBox {
    display: flex;

    .userInfo {
        width: 50vw;
        background-color: #A3A6AD;

        .el-card {
            .defaultSkeletonOutBox {}
        }

    }
}
</style>