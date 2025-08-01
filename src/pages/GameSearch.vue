<template>
  <div>
    <h2>Search Games</h2>
    <input v-model="query" placeholder="Search by title" />
    <div v-if="games.length">
      <GameCard
        v-for="game in games"
        :key="game._id"
        :game="game"
      />
    </div>
    <div v-else>
      <p>No games found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GameCard from '../components/GameCard.vue'

const query = ref('')
const games = ref([
  { _id: '1', title: 'Hades', summary: 'Roguelike dungeon crawler', genre: ['Action'], image: 'https://m.media-amazon.com/images/M/MV5BZWNhNzBmNTItMmYwOC00NjczLWIxNGItZTA1ODA2NzljOWJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
  { _id: '2', title: 'Cyberpunk 2077', summary: 'Sci-fi RPG game', genre: ['RPG'], image: 'https://m.media-amazon.com/images/M/MV5BZWNhNzBmNTItMmYwOC00NjczLWIxNGItZTA1ODA2NzljOWJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
])
</script>
