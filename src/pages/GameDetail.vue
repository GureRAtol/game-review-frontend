<template>
  <div v-if="game">
    <h2>{{ game.title }}</h2>
    <img :src="game.image" alt="" />
    <p><strong>Genres:</strong> {{ game.genre.join(', ') }}</p>
    <p><strong>Summary:</strong> {{ game.summary }}</p>
    <p>{{ game.content }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()    
const game = ref(null)

onMounted(() => {
  const dummyData = {
    1: {
      title: 'Hades',
      summary: 'Roguelike dungeon crawler',
      content: 'Hades is a masterpiece of design...',
      genre: ['Action', 'Roguelike'],
      image: 'https://m.media-amazon.com/images/M/MV5BZWNhNzBmNTItMmYwOC00NjczLWIxNGItZTA1ODA2NzljOWJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    },
    2: {
      title: 'Hades',
      summary: 'Roguelike dungeon crawler',
      content: 'Hades is a masterpiece of design...',
      genre: ['Action', 'Roguelike'],
      image: 'https://m.media-amazon.com/images/M/MV5BZWNhNzBmNTItMmYwOC00NjczLWIxNGItZTA1ODA2NzljOWJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    },
  }

  game.value = dummyData[route.params.id]
})
</script>
