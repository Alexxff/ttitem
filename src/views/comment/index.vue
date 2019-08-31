<template>
<el-card >
    <bread-crumb slot='header'>
    <template slot='title' >评论列表</template>
    </bread-crumb>
    <!--表格组件-->
    <el-table>
        <el-table-column width="500" label="标题"></el-table-column>
        <el-table-column label="评论状态"></el-table-column>
        <el-table-column label="总评论数"></el-table-column>
        <el-table-column label="粉丝评论数"></el-table-column>
        <el-table-column label="操作"></el-table-column>
    </el-table>
</el-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
