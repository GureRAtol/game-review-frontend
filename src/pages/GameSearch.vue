<template>
  <div class="search-container">
    <el-row justify="center" class="mb-4">
      <el-col :xs="24" :sm="16" :md="12" :lg="8">
        <el-input
          v-model="query"
          placeholder="Search games by title"
          prefix-icon="el-icon-search"
          size="large"
          clearable
          class="search-input"
        />
      </el-col>
    </el-row>
    <br>
    <el-row :gutter="20" justify="center">
      <el-col
        v-for="game in filteredGames"
        :key="game._id"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
      >
        <GameCard :game="game" />
      </el-col>
    </el-row>

    <div v-if="!filteredGames.length" class="no-results">
      <el-empty description="No games found" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { ElInput, ElRow, ElCol, ElEmpty } from 'element-plus'
import sanityClient from '../client/sanityClient'
import GameCard from '../components/GameCard.vue'

const games = ref([])
const query = ref('')

onMounted(async () => {
  const result = await sanityClient.fetch(`*[_type == "review"]{
    _id,
    title,
    summary,
    slug,
    image {
      asset->{url}
    }
  }`)
  games.value = result.map(g => ({
    ...g,
    image: g.image?.asset?.url || ''
  }))
})

const filteredGames = computed(() =>
  games.value.filter(game =>
    game.title.toLowerCase().includes(query.value.toLowerCase())
  )
)
</script>

<style scoped>
.search-container {
  padding: 30px 10px;
  min-height: 100vh;
  background-color: #121212;
  color: white;
  font-family: 'Orbitron', sans-serif;
}

.no-results {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
</style>
