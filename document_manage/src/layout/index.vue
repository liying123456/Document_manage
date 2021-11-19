<!-- 页面布局 -->
<template>
    <el-container direction='vertical'>
        <app-header></app-header>
        <el-main>
            主体
            <!-- <router-view></router-view> -->
        </el-main>
        <app-footer></app-footer>
    </el-container>
</template>

<script>
import AppHeader from "@/layout/components/Header/index"
import AppFooter from "@/layout/components/Footer/index";

export default{
    name: "Layout",
    components: {
        AppFooter, 
        AppHeader,
    },
}
</script>
