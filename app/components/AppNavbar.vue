<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
]

const mobileOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  mobileOpen.value = false
})
</script>

<template>
  <header class="fixed top-0 w-full z-50 backdrop-blur-md border-b shadow-sm"
    style="background: rgba(224, 242, 254, 0.92); border-color: #bae6fd;">
    <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2" @click="mobileOpen = false">
        <img src="/IMG_8334.PNG" alt="NewHeaven IT Solutions" class="h-10 w-auto object-contain">
      </NuxtLink>

      <!-- Desktop links -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="text-slate-500 text-sm font-medium transition-colors hover:text-sky-600"
            active-class="text-sky-700 font-semibold"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Desktop CTA -->
      <UButton to="/contact" color="primary" variant="solid" size="sm" class="hidden md:flex">
        Get In Touch
      </UButton>

      <!-- Mobile hamburger -->
      <button class="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-sky-200 bg-white/70"
        @click="mobileOpen = !mobileOpen">
        <Icon :name="mobileOpen ? 'ph:x-bold' : 'ph:list-bold'" class="text-sky-700 text-xl" />
      </button>
    </nav>

    <!-- Mobile menu -->
    <transition name="slide-down">
      <div v-if="mobileOpen" class="md:hidden mobile-menu">
        <ul class="flex flex-col gap-1 p-4">
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="mobile-link"
              active-class="mobile-link-active"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
        <div class="px-4 pb-4">
          <UButton to="/contact" color="primary" variant="solid" size="lg" class="w-full"
            @click="mobileOpen = false">
            <Icon name="ph:paper-plane-tilt-fill" class="mr-2" /> Get In Touch
          </UButton>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.mobile-menu {
  background: rgba(224, 242, 254, 0.97);
  border-top: 1px solid #bae6fd;
  backdrop-filter: blur(12px);
}
.mobile-link {
  display: block;
  padding: 12px 16px;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: #0369a1;
  text-decoration: none;
  transition: all 0.2s;
}
.mobile-link:hover {
  background: rgba(14, 165, 233, 0.1);
  color: #0c4a6e;
}
.mobile-link-active {
  background: rgba(14, 165, 233, 0.15);
  color: #0c4a6e;
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
