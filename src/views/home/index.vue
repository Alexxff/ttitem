<template>
  <el-container>
    <el-aside style='width:200px;height:100vh;background-color:#2e2f32'>
      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <el-header>头部区域</el-header>
      <el-main>中间区域</el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
export default {
  components: {
    'layout-aside': layoutAside
  }
}
</script>

<style>

</style>
