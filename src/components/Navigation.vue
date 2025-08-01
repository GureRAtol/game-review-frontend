<template>
   <h1 class="title">Game Reviews</h1>
      <el-menu
        mode="horizontal"
        background-color="#1e1e2f"
        text-color="#90caf9"
        active-text-color="#ffd04b"
        class="el-menu-demo"
      >
        <el-menu-item index="1">
          <el-icon><HomeFilled /></el-icon>
          <router-link to="/">Home</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><Search /></el-icon>
          <router-link to="/search">Search</router-link>
        </el-menu-item>
      </el-menu>
</template>

<script setup>
import { HomeFilled, Search } from '@element-plus/icons-vue'
</script>

<style scoped>

.el-menu-demo {
  justify-content: center;
  border-bottom: none;
}

.el-menu-item a {
  color: inherit;
  text-decoration: none;
  margin-left: 8px;
}

</style>