<template>
  <div>
    <h2>Search Games</h2>
    <input v-model="query" placeholder="Search by title" />
    
    <div v-if="filteredGames.length">
      <GameCard
        v-for="game in filteredGames"
        :key="game._id"
        :game="{
          ...game,
          image: game?.image?.asset?.url || ''
        }"
      />
    </div>

    <div v-else>
      <p>No games found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import sanityClient from '../client/sanityClient'
import GameCard from '../components/GameCard.vue'

const games = ref([])
const query = ref('')

// Fetch all games
onMounted(async () => {
  const result = await sanityClient.fetch(`*[_type == "review"]{
    _id,
    title,
    summary,
    slug,
    rating,
    platform,
    genre,
    content,
    image{
      asset->{url}
    }
  }`)
  games.value = result
})

const filteredGames = computed(() => {
  return games.value.filter(game =>
    game.title.toLowerCase().includes(query.value.toLowerCase())
  )
})
</script>
