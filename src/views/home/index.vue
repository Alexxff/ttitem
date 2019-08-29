<template>
  <el-container>
    <el-aside style='width:200px;height:100vh;background-color:#2e2f32'>
      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <el-main>中间区域</el-main>
    </el-container>
  </el-container>
</template>

<script>
// import layoutAside from '../../components/home/layout-aside'
// import layoutHeader from '../../components/home/layout-header'
export default {
  // components: {
  // 'layout-aside': layoutAside,
  // 'layout-header': layoutHeader
  // }
}
</script>

<style>

</style>
