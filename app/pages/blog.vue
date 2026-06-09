<template>
  <div class="overflow-x-hidden">

    <!-- HERO -->
    <section class="relative py-36 px-6 overflow-hidden blog-hero">
      <div class="absolute inset-0 overflow-hidden">
        <div class="light-ray ray-1" />
        <div class="light-ray ray-2" />
        <div class="light-ray ray-3" />
      </div>
      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <span class="section-tag animate-fade-in-down">Blog</span>
        <h1 class="page-title animate-fade-in-up">
          Insights, Tutorials & <br />
          <span class="gradient-text">Tech Deep Dives</span>
        </h1>
        <p class="page-sub animate-fade-in-up-delay">
          Practical articles on fullstack development, data science, AI, and growing
          your business with technology — written from real experience.
        </p>

        <!-- Search -->
        <div class="search-wrap animate-fade-in-up-delay">
          <Icon name="ph:magnifying-glass-bold" class="search-icon" />
          <input v-model="search" type="text" placeholder="Search articles..."
            class="search-input" />
        </div>
      </div>
    </section>

    <!-- CATEGORIES -->
    <section class="py-8 px-6 categories-bg border-b border-sky-100">
      <div class="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
        <button v-for="cat in categories" :key="cat"
          class="cat-btn" :class="activeCategory === cat ? 'cat-btn-active' : ''"
          @click="activeCategory = cat">
          {{ cat }}
        </button>
      </div>
    </section>

    <!-- FEATURED POST -->
    <section v-if="!search && activeCategory === 'All'" class="py-16 px-6 section-light">
      <div class="max-w-6xl mx-auto">
        <span class="section-tag">Featured</span>
        <div class="featured-card">
          <div class="featured-image">
            <div class="featured-image-inner">
              <Icon name="ph:article-fill" class="text-sky-200" style="font-size:6rem" />
            </div>
          </div>
          <div class="featured-content">
            <div class="flex gap-2 mb-4">
              <span class="post-tag">Data Science</span>
              <span class="post-tag">AI</span>
            </div>
            <h2 class="featured-title">Building Your First ML Pipeline: From Raw Data to Production</h2>
            <p class="featured-excerpt">
              A step-by-step guide to building a machine learning pipeline that actually works in production.
              We cover data ingestion, preprocessing, model training, evaluation, and deployment using
              Python, Scikit-learn, and FastAPI.
            </p>
            <div class="post-meta">
              <Icon name="ph:user-circle-fill" class="text-sky-400" />
              <span>Pelumi Joshua</span>
              <span class="meta-dot">·</span>
              <Icon name="ph:calendar-fill" class="text-sky-400" />
              <span>June 1, 2025</span>
              <span class="meta-dot">·</span>
              <Icon name="ph:clock-fill" class="text-sky-400" />
              <span>12 min read</span>
            </div>
            <UButton color="primary" variant="solid" size="lg" class="mt-6">
              <Icon name="ph:book-open-fill" class="mr-2" /> Read Article
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- POSTS GRID -->
    <section class="py-16 px-6 section-light">
      <div class="max-w-6xl mx-auto">
        <div v-if="filteredPosts.length > 0">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="post in filteredPosts" :key="post.title" class="post-card">
              <div class="post-image">
                <Icon :name="post.icon" class="post-image-icon" />
              </div>
              <div class="post-body">
                <div class="flex gap-2 mb-3">
                  <span v-for="tag in post.tags" :key="tag" class="post-tag">{{ tag }}</span>
                </div>
                <h3 class="post-title">{{ post.title }}</h3>
                <p class="post-excerpt">{{ post.excerpt }}</p>
                <div class="post-meta mt-4">
                  <Icon name="ph:calendar-fill" class="text-sky-400" />
                  <span>{{ post.date }}</span>
                  <span class="meta-dot">·</span>
                  <Icon name="ph:clock-fill" class="text-sky-400" />
                  <span>{{ post.readTime }}</span>
                </div>
                <NuxtLink to="#" class="post-link mt-4">
                  Read More <Icon name="ph:arrow-right-bold" class="ml-1" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <div v-else class="empty-state">
          <Icon name="ph:magnifying-glass-fill" class="text-sky-300 mb-4" style="font-size:4rem" />
          <h3 class="text-xl font-bold text-sky-800 mb-2">No articles found</h3>
          <p class="text-slate-500">Try a different search term or category.</p>
          <UButton color="primary" variant="outline" class="mt-4"
            @click="search = ''; activeCategory = 'All'">
            Clear filters
          </UButton>
        </div>
      </div>
    </section>

    <!-- NEWSLETTER -->
    <section class="relative py-32 px-6 cta-bg overflow-hidden">
      <div class="cta-orb orb-1" />
      <div class="cta-orb orb-2" />
      <div class="relative z-10 max-w-2xl mx-auto text-center">
        <Icon name="ph:newspaper-fill" class="text-yellow-300 mb-6" style="font-size:3rem" />
        <h2 class="text-4xl font-bold text-white mb-4">Stay in the Loop</h2>
        <p class="text-sky-100 text-lg mb-8">
          Get the latest articles on web development, data science, and AI delivered to your inbox.
        </p>
        <div class="newsletter-form">
          <input v-model="newsletterEmail" type="email" placeholder="your@email.com"
            class="newsletter-input" />
          <UButton color="primary" variant="solid" size="lg" class="newsletter-btn"
            @click="subscribeNewsletter">
            <Icon name="ph:paper-plane-tilt-fill" class="mr-2" />
            Subscribe
          </UButton>
        </div>
        <p v-if="newsletterSuccess" class="text-green-300 mt-4 font-semibold">
          ✓ You're subscribed! Welcome aboard.
        </p>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const search = ref('')
const activeCategory = ref('All')
const newsletterEmail = ref('')
const newsletterSuccess = ref(false)

const categories = ['All', 'Fullstack', 'Data Science', 'AI & ML', 'Business', 'Tutorials']

const allPosts = [
  {
    icon: 'ph:globe-hemisphere-west-fill',
    title: 'Building Scalable Nuxt 3 Apps with Supabase',
    excerpt: 'Learn how to build production-ready Nuxt applications with Supabase as your backend — authentication, database, storage, and real-time features.',
    tags: ['Fullstack', 'Tutorials'],
    date: 'May 28, 2025',
    readTime: '8 min read',
  },
  {
    icon: 'ph:chart-bar-fill',
    title: 'Data Visualization Best Practices for Business Dashboards',
    excerpt: 'How to design dashboards that actually get used — choosing the right chart types, color palettes, and KPIs that drive decisions.',
    tags: ['Data Science', 'Business'],
    date: 'May 15, 2025',
    readTime: '6 min read',
  },
  {
    icon: 'ph:brain-fill',
    title: 'Getting Started with NLP in Python: A Practical Guide',
    excerpt: 'Build your first NLP pipeline using spaCy and HuggingFace Transformers. Text classification, named entity recognition, and sentiment analysis.',
    tags: ['AI & ML', 'Tutorials'],
    date: 'May 5, 2025',
    readTime: '10 min read',
  },
  {
    icon: 'ph:currency-dollar-fill',
    title: 'How to Price Your Tech Services as a Freelancer',
    excerpt: 'Stop undercharging. A practical framework for pricing your development and data science services to attract better clients.',
    tags: ['Business'],
    date: 'Apr 22, 2025',
    readTime: '5 min read',
  },
  {
    icon: 'ph:database-fill',
    title: 'PostgreSQL Performance Tuning: The Definitive Guide',
    excerpt: 'Indexing strategies, query optimization, connection pooling, and monitoring techniques to make your Postgres database blazing fast.',
    tags: ['Fullstack', 'Tutorials'],
    date: 'Apr 10, 2025',
    readTime: '14 min read',
  },
  {
    icon: 'ph:robot-fill',
    title: 'Integrating OpenAI API into Your Nuxt Application',
    excerpt: 'Step-by-step guide to building AI-powered features in your Nuxt app — chatbots, content generation, and intelligent search.',
    tags: ['AI & ML', 'Fullstack'],
    date: 'Mar 30, 2025',
    readTime: '9 min read',
  },
]

const filteredPosts = computed(() => {
  return allPosts.filter(post => {
    const matchesSearch = !search.value ||
      post.title.toLowerCase().includes(search.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.value.toLowerCase())
    const matchesCategory = activeCategory.value === 'All' ||
      post.tags.includes(activeCategory.value)
    return matchesSearch && matchesCategory
  })
})

const subscribeNewsletter = () => {
  if (!newsletterEmail.value) return
  newsletterSuccess.value = true
  newsletterEmail.value = ''
}

useSeoMeta({
  title: 'Blog — NewHeaven IT Solutions',
  description: 'Practical articles on fullstack development, data science, AI, and growing your business with technology.',
})
</script>

<style scoped>
.blog-hero { background: linear-gradient(180deg, #0ea5e9 0%, #38bdf8 30%, #bae6fd 70%, #e0f2fe 100%); }
.light-ray { position: absolute; top: -10%; height: 120%; background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%); border-radius: 999px; animation: rayPulse 6s ease-in-out infinite; }
.ray-1 { left: 20%; transform: rotate(-15deg); width: 60px; opacity: 0.3; }
.ray-2 { left: 50%; transform: rotate(5deg); width: 40px; opacity: 0.2; animation-delay: 2s; }
.ray-3 { left: 75%; transform: rotate(20deg); width: 80px; opacity: 0.25; animation-delay: 4s; }
@keyframes rayPulse { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.4; } }
.section-light { background: linear-gradient(180deg, #e0f2fe 0%, #f0f9ff 50%, #ecfdf5 100%); }
.categories-bg { background: #f0f9ff; }
.cta-bg { background: linear-gradient(135deg, #0369a1 0%, #0ea5e9 40%, #059669 100%); }

.section-tag { display: inline-block; background: rgba(14,165,233,0.1); color: #0369a1; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.2); margin-bottom: 1rem; }
.page-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; color: #0c4a6e; line-height: 1.1; margin: 1rem 0; letter-spacing: -0.02em; }
.gradient-text { background: linear-gradient(90deg, #0c4a6e, #0369a1, #0ea5e9, #059669); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; background-size: 200%; animation: gradientMove 4s ease infinite; }
@keyframes gradientMove { 0% { background-position: 0%; } 50% { background-position: 100%; } 100% { background-position: 0%; } }
.page-sub { color: #1e40af; font-size: 1.1rem; max-width: 600px; margin: 0 auto; line-height: 1.8; opacity: 0.85; }

.search-wrap { position: relative; max-width: 480px; margin: 2rem auto 0; }
.search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #0369a1; font-size: 1.1rem; }
.search-input { width: 100%; padding: 14px 16px 14px 44px; background: rgba(255,255,255,0.7); border: 1.5px solid rgba(186,230,253,0.8); border-radius: 999px; font-size: 0.95rem; color: #0c4a6e; outline: none; backdrop-filter: blur(8px); transition: all 0.2s; }
.search-input:focus { background: white; border-color: #0ea5e9; box-shadow: 0 0 0 3px rgba(14,165,233,0.1); }

.cat-btn { padding: 8px 20px; background: rgba(255,255,255,0.7); border: 1.5px solid #bae6fd; border-radius: 999px; font-size: 0.875rem; font-weight: 600; color: #0369a1; cursor: pointer; transition: all 0.2s; }
.cat-btn:hover { background: white; border-color: #38bdf8; }
.cat-btn-active { background: #0369a1 !important; color: white !important; border-color: #0369a1 !important; }

.featured-card { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; background: rgba(255,255,255,0.8); border: 1px solid #bae6fd; border-radius: 2rem; overflow: hidden; margin-top: 1.5rem; transition: all 0.3s; }
.featured-card:hover { box-shadow: 0 30px 60px rgba(14,165,233,0.12); transform: translateY(-4px); }
@media (max-width: 768px) { .featured-card { grid-template-columns: 1fr; } }
.featured-image { background: linear-gradient(135deg, #0369a1, #0ea5e9, #059669); display: flex; align-items: center; justify-content: center; min-height: 300px; }
.featured-image-inner { opacity: 0.5; }
.featured-content { padding: 2.5rem 2.5rem 2.5rem 0; display: flex; flex-direction: column; justify-content: center; }
@media (max-width: 768px) { .featured-content { padding: 2rem; } }
.featured-title { font-size: 1.5rem; font-weight: 800; color: #0c4a6e; line-height: 1.3; margin-bottom: 1rem; }
.featured-excerpt { color: #475569; font-size: 0.95rem; line-height: 1.8; }

.post-tag { background: rgba(14,165,233,0.1); color: #0369a1; border: 1px solid rgba(14,165,233,0.2); border-radius: 999px; padding: 3px 10px; font-size: 0.75rem; font-weight: 600; }
.post-meta { display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: #94a3b8; }
.meta-dot { color: #cbd5e1; }

.post-card { background: rgba(255,255,255,0.8); border: 1px solid #bae6fd; border-radius: 1.5rem; overflow: hidden; transition: all 0.3s; }
.post-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(14,165,233,0.12); border-color: #38bdf8; }
.post-image { background: linear-gradient(135deg, #e0f2fe, #bae6fd); display: flex; align-items: center; justify-content: center; height: 140px; }
.post-image-icon { font-size: 3.5rem; color: #0369a1; opacity: 0.6; }
.post-body { padding: 1.5rem; }
.post-title { font-size: 1rem; font-weight: 700; color: #0c4a6e; line-height: 1.4; margin-bottom: 0.5rem; }
.post-excerpt { color: #64748b; font-size: 0.875rem; line-height: 1.7; }
.post-link { display: inline-flex; align-items: center; color: #0ea5e9; font-weight: 600; font-size: 0.875rem; text-decoration: none; transition: all 0.2s; }
.post-link:hover { color: #0369a1; gap: 6px; }

.empty-state { text-align: center; padding: 4rem 0; }

.cta-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.3; }
.orb-1 { width: 400px; height: 400px; background: white; top: -100px; left: -100px; }
.orb-2 { width: 300px; height: 300px; background: #86efac; bottom: -50px; right: -50px; }

.newsletter-form { display: flex; gap: 12px; max-width: 480px; margin: 0 auto; }
.newsletter-input { flex: 1; padding: 12px 20px; background: rgba(255,255,255,0.2); border: 1.5px solid rgba(255,255,255,0.4); border-radius: 999px; font-size: 0.95rem; color: white; outline: none; backdrop-filter: blur(8px); }
.newsletter-input::placeholder { color: rgba(255,255,255,0.6); }
.newsletter-input:focus { background: rgba(255,255,255,0.3); border-color: white; }
.newsletter-btn { flex-shrink: 0; border-radius: 999px !important; }

@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in-down { animation: fadeInDown 0.8s ease both; }
.animate-fade-in-up { animation: fadeInUp 0.8s ease 0.2s both; }
.animate-fade-in-up-delay { animation: fadeInUp 0.8s ease 0.4s both; }
</style>
