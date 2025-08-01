<template>
  <div v-if="game">
    <h2>{{ game.title }}</h2>
    <img :src="game?.image?.asset?.url" alt="Game Cover" />
    <p><strong>Genres:</strong> {{ game.genre.join(', ') }}</p>
    <p><strong>Platform:</strong> {{ game.platform }}</p>
    <p><strong>Rating:</strong> {{ game.rating }}</p>
    <p><strong>Summary:</strong> {{ game.summary }}</p>
    <p><strong>Review:</strong> {{ game.content }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import sanityClient from '../client/sanityClient'

const route = useRoute()
const game = ref(null)

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
      image{
        asset->{url}
      }
    }`,
    { slug }
  )
  game.value = result
})
</script>
