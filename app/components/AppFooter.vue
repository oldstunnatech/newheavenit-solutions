<template>
  <footer class="border-t py-12 mt-20" style="background: rgba(186, 230, 253, 0.4); border-color: #bae6fd;">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Logo + tagline -->
      <div class="flex flex-col items-center gap-3 mb-8">
        <img
          src="/IMG_8334.PNG"
          alt="NewHeaven IT Solutions"
          class="h-10 w-auto object-contain"
        />
        <p class="text-slate-500 text-sm">Elevating Business Through Technology</p>
      </div>

      <!-- Nav links -->
      <div class="flex flex-wrap justify-center gap-6 mb-8">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to"
          class="text-sky-700 text-sm font-medium hover:text-sky-500 transition-colors">
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- Social icons -->
      <div class="flex justify-center gap-4 mb-8">
        <a href="https://github.com/oldstunnatech" target="_blank" rel="noopener noreferrer" class="social-btn">
          <Icon name="ph:github-logo-fill" />
        </a>
        <a href="https://www.linkedin.com/in/newheaven-it-solutions-a6b1b2309" target="_blank" rel="noopener noreferrer" class="social-btn">
          <Icon name="ph:linkedin-logo-fill" />
        </a>
        <a href="https://x.com/NewHeavenIT" target="_blank" rel="noopener noreferrer" class="social-btn">
          <Icon name="ph:x-logo-fill" />
        </a>
      </div>

      <!-- Copyright -->
      <p class="text-slate-400 text-xs text-center">
        © {{ new Date().getFullYear() }} NewHeaven IT Solutions. All rights reserved.
      </p>

    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
]
</script>

<style scoped>
.social-btn {
  width: 38px; height: 38px;
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid #bae6fd;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #0369a1; font-size: 1.1rem;
  transition: all 0.3s; text-decoration: none;
}
.social-btn:hover {
  background: #0369a1;
  color: white;
  transform: translateY(-3px);
}
</style>