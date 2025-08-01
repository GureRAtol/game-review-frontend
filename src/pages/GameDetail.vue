<template>
  <el-row justify="center" style="margin-top: 20px">
    <el-col :xs="22" :sm="20" :md="16" :lg="12">
      <el-card shadow="always">
        <template #header>
          <h2>{{ game?.title }}</h2>
        </template>

        <el-descriptions
          :column="1"
          border
          style="margin-bottom: 20px"
          class="detail"
        >
          <el-descriptions-item label="Genres" >
           <el-tag
            v-for="(title, index) in formattedGenres"
            :key="index"
            type="success"
            class="mr-1"
          >
            {{ title }}
          </el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="Platform">
            {{ game?.platform || 'N/A' }}
          </el-descriptions-item>
          <el-descriptions-item label="Rating">
            {{ game?.rating || 'N/A' }}/10
          </el-descriptions-item>
        </el-descriptions>

        <el-image
          v-if="game?.image?.asset?.url"
          :src="game.image.asset.url"
          fit="cover"
          style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px"
          lazy
        >
          <template #error>
            <div class="image-fallback">
              <span>No Image Available</span>
            </div>
          </template>
        </el-image>
        <p style="margin-bottom: 20px" class="detail">{{ game?.summary || 'No summary available.' }}</p>
      
        <el-divider />

        <h3>Review</h3>
          <p class="detail">{{ game?.content || 'No review content.' }}</p>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import sanityClient from '../client/sanityClient'

const route = useRoute()
const game = ref(null)

const genreMap = {
  action: 'Action',
  adventure: 'Adventure',
  rpg: 'RPG',
  horror: 'Horror',
  strategy: 'Strategy',
  shooter: 'Shooter',
  platformer: 'Platformer',
  puzzle: 'Puzzle',
  sports: 'Sports',
  simulation: 'Simulation',
  scifi: 'Sci-Fi',
  survival: 'Survival',
  other: 'Other'
}

const formattedGenres = computed(() => {
  if (!game.value?.genre) return []
  return game.value.genre.map((g) => genreMap[g] || g)
})


onMounted(async () => {
  const slug = route.params.id
  const result = await sanityClient.fetch(
    `*[_type == "review" && slug.current == $slug][0]{
      _id,
      title,
      summary,
      slug,
      rating,
      platform,
      genre,
      content,
      image {
        asset -> { url }
      }
    }`,
    { slug }
  )
  game.value = result
})
</script>

<style scoped>
.image-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-color: #eee;
  color: #999;
  font-size: 16px;
  border-radius: 8px;
}

.detail{
    font-family: 'Share Tech Mono', monospace;
}
</style>
