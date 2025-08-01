<template>
  <div class="layout-wrapper">
    <header class="header">
     <navigation/>
    </header>
    <main class="main-content">
      <router-view />
    </main>
    <el-footer class="footer">
      &copy; 2025 Game Reviews. All rights reserved.
    </el-footer>
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #121212;
  color: #fff;
  font-family: 'Orbitron', sans-serif;
}

.header {
  background-color: #1e1e2f;
  padding: 10px;
}

.title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #ff6f61;
}
.main-content {
  flex: 1;
  padding: 20px;
}

.footer {
  text-align: center;
  padding: 12px 12px;
  background-color: #1e1e2f;
  color: #ffffff;
  height: auto;
}
</style>