<!-- HTML -->
<template>
    <el-row>
        <el-col :span="24">
            <div>
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="1">Processing Center</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">Workspace</template>
                            <el-menu-item index="2-1">item one</el-menu-item>
                            <el-menu-item index="2-2">item two</el-menu-item>
                            <el-menu-item index="2-3">item three</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="3"><a href="" target="_blank">Orders</a></el-menu-item>
                    </el-menu>
            </div>
        </el-col>
    </el-row>
</template>

<!-- JAVASCRIPT -->

<script>
  export default {
     data() {
       return {
         activeIndex: '1',
       };
     },
     methods: {
       handleSelect(key, keyPath) {
         console.log(key, keyPath);
       }
     }
  }
</script>

<!-- CSS STYLES -->

<style scoped="">

</style>
