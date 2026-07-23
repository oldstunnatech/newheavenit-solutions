<template>
  <div class="min-h-screen text-slate-800"
    style="background: linear-gradient(160deg, #bae6fd 0%, #e0f2fe 30%, #f0f9ff 60%, #dcfce7 100%); background-attachment: fixed;">
    <AppNavbar />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const playAllVideos = () => {
  // Try immediately
  triggerPlay()
  // Try again after 300ms
  setTimeout(triggerPlay, 300)
  // Try again after 800ms as final fallback
  setTimeout(triggerPlay, 800)
}

const triggerPlay = () => {
  const videos = document.querySelectorAll<HTMLVideoElement>('video')
  videos.forEach((video) => {
    video.muted = true
    if (video.paused) {
      video.load()
      video.play().catch(() => {})
    }
  })
}

// Run on first load
onMounted(() => {
  playAllVideos()
})

// Run every time the route path changes
watch(() => route.path, () => {
  playAllVideos()
})
</script>