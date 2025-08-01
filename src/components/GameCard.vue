<template>
  <div class="card">
    <img :src="game.image" alt="cover" height="200px"/>
    <h3>{{ game.title }}</h3>
    <p>{{ game.summary }}</p>
    <router-link :to="`/game/${game.slug.current}`">Read More</router-link>
  </div>
</template>

<script setup>
defineProps({
  game: Object
})
</script>
