<script setup lang="ts">
const links = [
  { label: 'Home', to: '/', icon: 'ph:house-fill' },
  { label: 'Solutions', to: '/services', icon: 'ph:stack-fill', children: [
    { label: 'Website Development', to: '/categories/website-development', icon: 'ph:globe-hemisphere-west-fill', desc: 'Professional websites built to convert' },
    { label: 'Data Mining', to: '/categories/data-mining', icon: 'ph:magnifying-glass-fill', desc: 'Extract intelligence from any source' },
    { label: 'Data Analysis', to: '/categories/data-analysis', icon: 'ph:chart-bar-fill', desc: 'Turn raw data into actionable insights' },
    { label: 'Data Science & AI', to: '/categories/data-science-ai', icon: 'ph:brain-fill', desc: 'ML models that predict and automate' },
  ]},
  { label: 'About', to: '/about', icon: 'ph:info-fill' },
  // { label: 'Blog', to: '/blog', icon: 'ph:newspaper-fill' },
  { label: 'Contact', to: '/contact', icon: 'ph:envelope-fill' },
  { label: 'Get a Quote', to: '/get-a-quote', icon: 'ph:calculator-fill' },
]

const mobileOpen = ref(false)
const dropdownOpen = ref(false)
const mobileServicesOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  mobileOpen.value = false
  dropdownOpen.value = false
  mobileServicesOpen.value = false
})

// Close dropdown when clicking outside
const navRef = ref<HTMLElement | null>(null)
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (navRef.value && !navRef.value.contains(e.target as Node)) {
      dropdownOpen.value = false
    }
  })
})
onUnmounted(() => {
  document.removeEventListener('click', () => {})
})
</script>

<template>
  <header
    class="fixed top-0 w-full z-50 backdrop-blur-md border-b shadow-sm"
    style="background: rgba(224, 242, 254, 0.92); border-color: #bae6fd;"
    ref="navRef"
  >
    <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2" @click.prevent="() => { dropdownOpen = false; navigateTo(child.to) }">
        <img src="/IMG_8334.PNG" alt="NewHeaven IT Solutions" class="h-10 w-auto object-contain" />
      </NuxtLink>

      <!-- Desktop links -->
      <ul class="hidden md:flex flex-row items-center gap-1">
        <li v-for="link in links" :key="link.to" class="relative">

          <!-- Solutions link with dropdown -->
          <template v-if="link.children">
           <div class="flex items-center">
  <!-- Solutions text navigates to /services -->
  <NuxtLink
    to="/services"
    class="nav-link"
    :class="route.path.startsWith('/services') ? 'nav-link-active' : ''"
    style="border-radius: 0.625rem 0 0 0.625rem; padding-right: 0.25rem;"
  >
    <Icon :name="link.icon" class="nav-link-icon" />
    <span>{{ link.label }}</span>
  </NuxtLink>

  <!-- Arrow only toggles dropdown -->
  <button
    class="nav-link"
    :class="route.path.startsWith('/services') ? 'nav-link-active' : ''"
    style="border-radius: 0 0.625rem 0.625rem 0; padding-left: 0.25rem; padding-right: 0.5rem;"
    @click.stop="dropdownOpen = !dropdownOpen"
  >
    <Icon
      name="ph:caret-down-bold"
      class="nav-caret"
      :class="dropdownOpen ? 'rotate-180' : ''"
    />
  </button>
</div>

            <!-- Dropdown menu -->
            <transition name="dropdown">
              <div v-if="dropdownOpen" class="nav-dropdown">
                <!-- Header -->
                <div class="nav-dropdown-header">
                  <p class="nav-dropdown-title">Our Services</p>
                  <NuxtLink to="/services" class="nav-dropdown-all" @click="dropdownOpen = false">
                    View all <Icon name="ph:arrow-right-bold" class="ml-1" />
                  </NuxtLink>
                </div>
                <!-- Service items -->
                <div class="nav-dropdown-grid">
                  <NuxtLink
                  v-for="child in link.children"
                  :key="child.to"
                  :to="child.to"
                  class="nav-dropdown-item"
                  :class="route.path === child.to ? 'nav-dropdown-item-active' : ''"
                  >
                    <div class="nav-dropdown-icon">
                      <Icon :name="child.icon" class="text-sky-600" style="font-size:1.1rem" />
                    </div>
                    <div>
                      <p class="nav-dropdown-label">{{ child.label }}</p>
                      <p class="nav-dropdown-desc">{{ child.desc }}</p>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </transition>
          </template>

          <!-- Regular link -->
          <NuxtLink
            v-else
            :to="link.to"
            class="nav-link"
            active-class="nav-link-active"
          >
            <Icon :name="link.icon" class="nav-link-icon" />
            <span>{{ link.label }}</span>
          </NuxtLink>

        </li>
      </ul>

      <!-- Desktop CTA -->
      <UButton
        to="/contact"
        color="primary"
        variant="solid"
        size="sm"
        class="hidden md:flex"
      >
        Get In Touch
      </UButton>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-sky-200 bg-white/70"
        @click="mobileOpen = !mobileOpen"
      >
        <Icon
          :name="mobileOpen ? 'ph:x-bold' : 'ph:list-bold'"
          class="text-sky-700 text-xl"
        />
      </button>
    </nav>

    <!-- Mobile menu -->
    <transition name="slide-down">
      <div v-if="mobileOpen" class="md:hidden mobile-menu">
        <ul class="flex flex-col gap-1 p-4">
          <li v-for="link in links" :key="link.to">

            <!-- Solutions with expandable submenu -->
            <template v-if="link.children">
              <div class="flex items-center justify-between w-full">
                <NuxtLink
                  :to="link.to"
                  class="mobile-link flex-1"
                  :class="route.path.startsWith('/services') ? 'mobile-link-active' : ''"
                  @click="mobileOpen = false"
                >
                  <Icon :name="link.icon" class="mobile-link-icon" />
                  <span>{{ link.label }}</span>
                </NuxtLink>
                <button
                  class="mobile-chevron-btn"
                  @click.stop="mobileServicesOpen = !mobileServicesOpen"
                  :aria-expanded="mobileServicesOpen"
                >
                  <Icon
                    name="ph:caret-down-bold"
                    class="w-4 h-4 transition-transform duration-200"
                    :class="mobileServicesOpen ? 'rotate-180' : ''"
                  />
                </button>
              </div>

              <!-- Mobile submenu -->
              <transition name="slide-down">
                <ul v-if="mobileServicesOpen" class="mobile-submenu">
                  <li v-for="child in link.children" :key="child.to">
                    <NuxtLink
                      :to="child.to"
                      class="mobile-submenu-link"
                      :class="route.path === child.to ? 'mobile-submenu-active' : ''"
                      @click="mobileOpen = false; mobileServicesOpen = false"
                    >
                      <Icon :name="child.icon" class="text-sky-500 flex-shrink-0" style="font-size:1rem" />
                      <div>
                        <p class="font-semibold text-sky-800">{{ child.label }}</p>
                        <p class="text-xs text-slate-500 mt-0.5">{{ child.desc }}</p>
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/services"
                      class="mobile-submenu-link mobile-submenu-all"
                      @click="mobileOpen = false; mobileServicesOpen = false"
                    >
                      <Icon name="ph:grid-four-fill" class="text-sky-500 flex-shrink-0" style="font-size:1rem" />
                      <p class="font-semibold text-sky-700">View All Services</p>
                    </NuxtLink>
                  </li>
                </ul>
              </transition>
            </template>

            <!-- Regular mobile link -->
            <NuxtLink
              v-else
              :to="link.to"
              class="mobile-link"
              active-class="mobile-link-active"
              @click="mobileOpen = false"
            >
              <Icon :name="link.icon" class="mobile-link-icon" />
              <span>{{ link.label }}</span>
            </NuxtLink>

          </li>
        </ul>
        <div class="px-4 pb-4">
          <UButton
            to="/contact"
            color="primary"
            variant="solid"
            size="lg"
            class="w-full"
            @click="mobileOpen = false"
          >
            <Icon name="ph:paper-plane-tilt-fill" class="mr-2" /> Get In Touch
          </UButton>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
/* ── Desktop nav links ── */
.nav-link {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.5rem 0.875rem; border-radius: 0.625rem;
  font-size: 0.875rem; font-weight: 700; color: #0369a1;
  text-decoration: none; transition: all 0.2s ease;
  letter-spacing: 0.01em; cursor: pointer;
  background: none; border: none; font-family: inherit;
}
.nav-link:hover { background: rgba(14,165,233,0.1); color: #0c4a6e; }
.nav-link-active { background: rgba(14,165,233,0.15); color: #0c4a6e; }
.nav-link-icon { font-size: 1rem; flex-shrink: 0; }
.nav-caret {
  font-size: 0.75rem; transition: transform 0.2s ease; margin-left: 2px;
}

/* ── Dropdown ── */
.nav-dropdown {
  position: absolute; top: calc(100% + 8px); left: 50%;
  transform: translateX(-50%);
  width: 420px;
  background: white;
  border: 1px solid #bae6fd;
  border-radius: 1.25rem;
  box-shadow: 0 20px 60px rgba(14,165,233,0.15), 0 4px 16px rgba(0,0,0,0.08);
  overflow: hidden; z-index: 100;
}
.nav-dropdown-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 1.25rem 0.75rem;
  border-bottom: 1px solid #e0f2fe;
}
.nav-dropdown-title {
  font-size: 0.75rem; font-weight: 700; color: #64748b;
  text-transform: uppercase; letter-spacing: 0.08em;
}
.nav-dropdown-all {
  display: inline-flex; align-items: center;
  font-size: 0.8rem; font-weight: 600; color: #0369a1;
  text-decoration: none; transition: color 0.2s;
}
.nav-dropdown-all:hover { color: #0ea5e9; }
.nav-dropdown-grid {
  padding: 0.75rem;
  display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;
}
.nav-dropdown-item {
  display: flex; align-items: flex-start; gap: 0.75rem;
  padding: 0.875rem; border-radius: 0.875rem;
  text-decoration: none; transition: all 0.2s;
  border: 1px solid transparent;
}
.nav-dropdown-item:hover {
  background: #f0f9ff; border-color: #bae6fd;
}
.nav-dropdown-item-active {
  background: #e0f2fe; border-color: #7dd3fc;
}
.nav-dropdown-icon {
  width: 38px; height: 38px; flex-shrink: 0;
  background: linear-gradient(135deg, #e0f2fe, #bae6fd);
  border-radius: 0.625rem;
  display: flex; align-items: center; justify-content: center;
}
.nav-dropdown-label {
  font-size: 0.875rem; font-weight: 700; color: #0c4a6e;
  margin-bottom: 0.2rem; line-height: 1.3;
}
.nav-dropdown-desc {
  font-size: 0.75rem; color: #64748b; line-height: 1.4;
}

/* ── Dropdown animation ── */
.dropdown-enter-active, .dropdown-leave-active {
  transition: all 0.2s ease;
}
.dropdown-enter-from, .dropdown-leave-to {
  opacity: 0; transform: translateX(-50%) translateY(-8px);
}

/* ── Mobile menu ── */
.mobile-menu {
  background: rgba(224, 242, 254, 0.97);
  border-top: 1px solid #bae6fd;
  backdrop-filter: blur(12px);
}
.mobile-link {
  display: flex; align-items: center; gap: 0.75rem;
  padding: 12px 16px; border-radius: 0.75rem;
  font-size: 1rem; font-weight: 700; color: #0369a1;
  text-decoration: none; transition: all 0.2s;
}
.mobile-link:hover { background: rgba(14,165,233,0.1); color: #0c4a6e; }
.mobile-link-active { background: rgba(14,165,233,0.15); color: #0c4a6e; }
.mobile-link-icon { font-size: 1.2rem; flex-shrink: 0; color: #0ea5e9; }
.mobile-chevron-btn {
  padding: 0.5rem 0.75rem; color: #0369a1;
  background: none; border: none; cursor: pointer;
  border-radius: 0.5rem; transition: all 0.2s;
}
.mobile-chevron-btn:hover { background: rgba(14,165,233,0.1); }

/* ── Mobile submenu ── */
.mobile-submenu {
  list-style: none; padding: 0;
  margin: 0.25rem 0 0.5rem 1rem;
  border-left: 2px solid #bae6fd;
  padding-left: 0.75rem;
  display: flex; flex-direction: column; gap: 0.25rem;
}
.mobile-submenu-link {
  display: flex; align-items: flex-start; gap: 0.75rem;
  padding: 0.75rem; border-radius: 0.75rem;
  text-decoration: none; transition: all 0.2s;
}
.mobile-submenu-link:hover { background: rgba(14,165,233,0.08); }
.mobile-submenu-active { background: rgba(14,165,233,0.12); }
.mobile-submenu-all {
  border-top: 1px solid #e0f2fe; margin-top: 0.25rem; padding-top: 0.75rem;
}

/* ── Slide animation ── */
.slide-down-enter-active, .slide-down-leave-active { transition: all 0.3s ease; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
