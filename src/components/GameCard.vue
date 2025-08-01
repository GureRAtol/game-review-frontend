<template>
  <el-card class="game-card" shadow="hover" body-style="{ padding: '0' }">
    <el-image
      :src="game.image"
      fit="cover"
      style="width: 100%; height: auto;border-radius: 10px;"
      :alt="game.title"
      lazy
    >
      <template #error>
        <div class="image-slot">
          <span>No Image</span>
        </div>
      </template>
    </el-image>

    <div class="card-content">
      <h3>{{ game.title }}</h3>
      <p class="summary">{{ game.summary }}</p>
      <router-link :to="`/game/${game.slug.current}`">
        <el-button type="primary" size="small" plain>Read More</el-button>
      </router-link>
    </div>
  </el-card>
</template>

<script setup>
defineProps({
  game: Object
})
</script>

<style scoped>
.game-card {
  margin: 1rem;
  border-radius: 10px;
  overflow: hidden;
  background-color: #2c2c3e;
  color: #fff;
  max-width: 350px;
  transition: transform 0.3s;
}

.game-card:hover {
  transform: scale(1.03);
}

.card-content {
  padding: 16px;
}

.image-slot {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: #444;
  color: #ccc;
  font-size: 14px;
}
.summary {
  color: #ccc;
  font-size: 0.9rem;
  min-height: 60px;
  font-family: 'Share Tech Mono', monospace;
}
</style>
