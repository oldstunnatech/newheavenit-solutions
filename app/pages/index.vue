<template>
  <div class="overflow-x-hidden">

    <!-- HERO SECTION -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 hero-bg" />
      <div class="absolute inset-0 overflow-hidden">
        <div class="light-ray ray-1" />
        <div class="light-ray ray-2" />
        <div class="light-ray ray-3" />
      </div>
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="cloud cloud-1"><Icon name="ph:cloud-fill" class="text-white/40" style="font-size:5rem" /></div>
        <div class="cloud cloud-2"><Icon name="ph:cloud-fill" class="text-white/25" style="font-size:3rem" /></div>
        <div class="cloud cloud-3"><Icon name="ph:cloud-sun-fill" class="text-white/30" style="font-size:4rem" /></div>
        <div class="cloud cloud-4"><Icon name="ph:cloud-fill" class="text-white/20" style="font-size:2.5rem" /></div>
      </div>
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div v-for="i in 20" :key="i" class="particle" :style="particleStyle(i)" />
      </div>

      <div class="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <div class="badge-pill animate-fade-in-down">
          <span class="pulse-dot" />
          <span>Available for new projects</span>
        </div>

        <h1 class="hero-title animate-fade-in-up">
          <span class="block text-slate-800 mb-2">Where Innovation</span>
          <span class="block gradient-text">Meets the Sky</span>
        </h1>

        <p class="hero-sub animate-fade-in-up-delay">
          NewHeaven IT Solutions delivers world-class fullstack development, data analysis,
          and AI-powered solutions. We build digital experiences that elevate your business
          beyond the horizon.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in-up-delay2">
          <UButton to="/services" size="xl" color="primary" variant="solid" class="hero-btn-primary">
            <Icon name="ph:sparkle-fill" class="mr-2" /> Explore Services
          </UButton>
          <UButton to="/contact" size="xl" variant="outline" class="hero-btn-outline">
            <Icon name="ph:rocket-launch-fill" class="mr-2" /> Start a Project
          </UButton>
        </div>

        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up-delay3">
          <div v-for="stat in stats" :key="stat.label" class="stat-card">
            <Icon :name="stat.icon" class="stat-icon-el" />
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
        <Icon name="ph:caret-down-bold" class="text-sky-700 text-3xl opacity-60" />
      </div>
    </section>

    <!-- SERVICES SECTION -->
    <section class="relative py-32 px-6 services-bg">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <span class="section-tag">What We Offer</span>
          <h2 class="section-title">Heavenly Solutions <br/>for Earthly Problems</h2>
          <p class="section-sub">We blend cutting-edge technology with creative thinking to deliver results that matter.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(service, i) in services" :key="service.title"
            class="service-card" :style="`animation-delay: ${i * 0.15}s`">
            <div class="service-icon-wrap">
              <Icon :name="service.icon" class="service-icon-el" />
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-desc">{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="f in service.features" :key="f">
                <Icon name="ph:diamond-fill" class="text-sky-400 mr-1" style="font-size:0.6rem" />
                {{ f }}
              </li>
            </ul>
            <NuxtLink to="/services" class="service-link">
              Learn more <Icon name="ph:arrow-right-bold" class="ml-1" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY US SECTION -->
    <section class="relative py-32 px-6 why-bg">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span class="section-tag">Why NewHeaven</span>
            <h2 class="section-title text-left">Built Different. <br/>Delivered Better.</h2>
            <p class="section-sub text-left mb-10">
              We don't just write code — we architect solutions. Every project at NewHeaven IT
              is treated as a mission to elevate your business to new heights.
            </p>
            <div class="space-y-6">
              <div v-for="reason in reasons" :key="reason.title" class="reason-card">
                <div class="reason-icon-wrap">
                  <Icon :name="reason.icon" class="reason-icon-el" />
                </div>
                <div>
                  <h4 class="reason-title">{{ reason.title }}</h4>
                  <p class="reason-desc">{{ reason.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="floating-card main-card">
              <Icon name="ph:trophy-fill" class="text-yellow-400 mb-4" style="font-size:3.5rem" />
              <p class="text-sky-800 font-bold text-xl">Top-Rated IT Partner</p>
              <p class="text-slate-500 text-sm mt-2">Trusted by startups and enterprises alike</p>
              <div class="flex gap-1 mt-4 justify-center">
                <Icon v-for="i in 5" :key="i" name="ph:star-fill" class="text-yellow-400 text-xl" />
              </div>
            </div>
            <div class="floating-card side-card-1">
              <Icon name="ph:lightning-fill" class="text-sky-500 text-2xl" />
              <span class="text-sky-700 font-semibold ml-2">Fast Delivery</span>
            </div>
            <div class="floating-card side-card-2">
              <Icon name="ph:shield-check-fill" class="text-green-500 text-2xl" />
              <span class="text-sky-700 font-semibold ml-2">Secure & Reliable</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TECH STACK SECTION -->
    <section class="py-24 px-6 tech-bg">
      <div class="max-w-5xl mx-auto text-center">
        <span class="section-tag">Tech Stack</span>
        <h2 class="section-title">Powered by the Best</h2>
        <div class="tech-grid">
          <div v-for="tech in techs" :key="tech.name" class="tech-pill">
            <Icon :name="tech.icon" class="text-xl" />
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="relative py-32 px-6 cta-bg overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="cta-orb orb-1" />
        <div class="cta-orb orb-2" />
      </div>
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <Icon name="ph:star-four-fill" class="text-yellow-300 mb-6" style="font-size:3rem" />
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Elevate <br/>Your Business?
        </h2>
        <p class="text-sky-100 text-lg mb-10">
          Let's build something extraordinary together. Your vision, our expertise.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton to="/contact" size="xl" variant="solid" color="neutral" class="cta-btn-white">
            <Icon name="ph:handshake-fill" class="mr-2" /> Get a Free Consultation
          </UButton>
          <UButton to="/pricing" size="xl" variant="outline" class="cta-btn-outline">
            <Icon name="ph:tag-fill" class="mr-2" /> View Pricing
          </UButton>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const stats = [
  { icon: 'ph:rocket-launch-fill', value: '50+', label: 'Projects Delivered' },
  { icon: 'ph:clock-countdown-fill', value: '3+', label: 'Years Experience' },
  { icon: 'ph:smiley-fill', value: '20+', label: 'Happy Clients' },
  { icon: 'ph:star-fill', value: '100%', label: 'Satisfaction Rate' },
]

const services = [
  {
    icon: 'ph:globe-hemisphere-west-fill',
    title: 'Fullstack Development',
    description: 'Modern, scalable web applications built with the latest technologies.',
    features: ['Vue / Nuxt / React', 'Node.js & REST APIs', 'Cloud Deployment'],
  },
  {
    icon: 'ph:chart-bar-fill',
    title: 'Data Analysis',
    description: 'Transform raw data into powerful business insights and decisions.',
    features: ['Interactive Dashboards', 'KPI Reporting', 'Data Visualization'],
  },
  {
    icon: 'ph:brain-fill',
    title: 'Data Science & AI',
    description: 'Machine learning and AI solutions that give your business a competitive edge.',
    features: ['ML Model Development', 'Predictive Analytics', 'NLP & Automation'],
  },
]

const reasons = [
  { icon: 'ph:target-fill', title: 'Results-Driven Approach', desc: 'Every solution is built around your business goals and measurable outcomes.' },
  { icon: 'ph:lightbulb-fill', title: 'Innovation First', desc: 'We stay ahead of the curve, using the latest tools and methodologies.' },
  { icon: 'ph:handshake-fill', title: 'True Partnership', desc: 'We work alongside you — not just for you — throughout the entire journey.' },
]

const techs = [
  { icon: 'logos:vue', name: 'Vue.js' },
  { icon: 'logos:nuxt-icon', name: 'Nuxt' },
  { icon: 'logos:typescript-icon', name: 'TypeScript' },
  { icon: 'logos:python', name: 'Python' },
  { icon: 'logos:nodejs-icon', name: 'Node.js' },
  { icon: 'logos:postgresql', name: 'PostgreSQL' },
  { icon: 'logos:supabase-icon', name: 'Supabase' },
  { icon: 'logos:tensorflow', name: 'TensorFlow' },
  { icon: 'logos:aws', name: 'AWS' },
  { icon: 'logos:firebase', name: 'Firebase' },
  { icon: 'logos:tailwindcss-icon', name: 'Tailwind' },
  { icon: 'logos:docker-icon', name: 'Docker' },
]

const particleStyle = (i: number) => ({
  left: `${(i * 17 + 5) % 100}%`,
  top: `${(i * 23 + 10) % 100}%`,
  animationDelay: `${(i * 0.3) % 4}s`,
  animationDuration: `${3 + (i % 4)}s`,
  width: `${4 + (i % 6)}px`,
  height: `${4 + (i % 6)}px`,
})

useSeoMeta({
  title: 'NewHeaven IT Solutions — Fullstack, Data & AI',
  ogTitle: 'NewHeaven IT Solutions — Fullstack, Data & AI',
  description: 'Fullstack development, data analysis, and data science solutions that transform your business.',
  ogDescription: 'Fullstack development, data analysis, and data science solutions that transform your business.',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.hero-bg {
  background: linear-gradient(180deg, #0ea5e9 0%, #38bdf8 20%, #7dd3fc 45%, #bae6fd 70%, #e0f2fe 100%);
  animation: skyShift 10s ease-in-out infinite alternate;
}
@keyframes skyShift {
  0% { filter: brightness(1) hue-rotate(0deg); }
  100% { filter: brightness(1.08) hue-rotate(8deg); }
}
.light-ray { position: absolute; top: -10%; height: 120%; background: linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%); border-radius: 999px; animation: rayPulse 6s ease-in-out infinite; }
.ray-1 { left: 20%; transform: rotate(-15deg); width: 60px; opacity: 0.3; animation-delay: 0s; }
.ray-2 { left: 50%; transform: rotate(5deg); width: 40px; opacity: 0.2; animation-delay: 2s; }
.ray-3 { left: 75%; transform: rotate(20deg); width: 80px; opacity: 0.25; animation-delay: 4s; }
@keyframes rayPulse { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.4; } }
.cloud { position: absolute; animation: floatCloud linear infinite; }
.cloud-1 { top: 15%; animation-duration: 30s; left: -10%; }
.cloud-2 { top: 30%; animation-duration: 45s; animation-delay: -10s; left: -15%; }
.cloud-3 { top: 10%; animation-duration: 35s; animation-delay: -20s; left: -10%; }
.cloud-4 { top: 45%; animation-duration: 55s; animation-delay: -5s; left: -10%; }
@keyframes floatCloud { from { transform: translateX(-150px); } to { transform: translateX(110vw); } }
.particle { position: absolute; background: white; border-radius: 50%; opacity: 0; animation: sparkle ease-in-out infinite; }
@keyframes sparkle { 0%, 100% { opacity: 0; transform: scale(0.5) translateY(0); } 50% { opacity: 0.8; transform: scale(1) translateY(-15px); } }
.hero-title { font-size: clamp(2.5rem, 7vw, 5rem); font-weight: 900; line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.02em; }
.gradient-text { background: linear-gradient(90deg, #0c4a6e, #0369a1, #0ea5e9, #22d3ee, #059669); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; background-size: 200%; animation: gradientMove 4s ease infinite; }
@keyframes gradientMove { 0% { background-position: 0%; } 50% { background-position: 100%; } 100% { background-position: 0%; } }
.hero-sub { font-size: 1.15rem; color: #1e40af; max-width: 600px; margin: 0 auto; line-height: 1.8; opacity: 0.85; }
.badge-pill { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.5); border: 1px solid rgba(56,189,248,0.5); border-radius: 999px; padding: 8px 20px; margin-bottom: 2rem; font-size: 0.875rem; font-weight: 600; color: #0369a1; backdrop-filter: blur(8px); }
.pulse-dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; animation: pulse 2s ease infinite; }
@keyframes pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); } 50% { box-shadow: 0 0 0 8px rgba(34,197,94,0); } }
.hero-btn-primary { box-shadow: 0 8px 32px rgba(14,165,233,0.4); transition: all 0.3s; }
.hero-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(14,165,233,0.5); }
.hero-btn-outline { border-color: #0369a1 !important; color: #0369a1 !important; background: rgba(255,255,255,0.5) !important; backdrop-filter: blur(8px); transition: all 0.3s; }
.hero-btn-outline:hover { transform: translateY(-3px); background: white !important; }
.stat-card { background: rgba(255,255,255,0.55); border: 1px solid rgba(186,230,253,0.8); border-radius: 1.5rem; padding: 1.5rem 1rem; backdrop-filter: blur(12px); transition: all 0.3s; animation: fadeInUp 0.6s ease both; }
.stat-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(14,165,233,0.15); }
.stat-icon-el { font-size: 1.75rem; color: #0ea5e9; margin-bottom: 0.5rem; display: block; }
.stat-value { font-size: 2rem; font-weight: 800; color: #0369a1; }
.stat-label { font-size: 0.8rem; color: #64748b; margin-top: 0.25rem; }
.scroll-indicator { animation: bounce 2s ease infinite; }
@keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(8px); } }
.services-bg { background: linear-gradient(180deg, #e0f2fe 0%, #f0f9ff 50%, #ecfdf5 100%); }
.why-bg { background: linear-gradient(180deg, #ecfdf5 0%, #f0f9ff 50%, #e0f2fe 100%); }
.tech-bg { background: linear-gradient(180deg, #e0f2fe 0%, #eff6ff 100%); }
.cta-bg { background: linear-gradient(135deg, #0369a1 0%, #0ea5e9 40%, #059669 100%); }
.section-tag { display: inline-block; background: rgba(14,165,233,0.1); color: #0369a1; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.2); margin-bottom: 1rem; }
.section-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: #0c4a6e; line-height: 1.2; margin-bottom: 1rem; text-align: center; }
.section-sub { color: #64748b; font-size: 1.05rem; max-width: 560px; margin: 0 auto; line-height: 1.7; text-align: center; }
.service-card { background: rgba(255,255,255,0.7); border: 1px solid #bae6fd; border-radius: 1.5rem; padding: 2.5rem 2rem; backdrop-filter: blur(12px); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); animation: fadeInUp 0.6s ease both; }
.service-card:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 30px 60px rgba(14,165,233,0.15); border-color: #38bdf8; }
.service-icon-wrap { width: 64px; height: 64px; background: linear-gradient(135deg, #e0f2fe, #bae6fd); border-radius: 1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
.service-icon-el { font-size: 2rem; color: #0369a1; }
.service-title { font-size: 1.3rem; font-weight: 700; color: #0c4a6e; margin-bottom: 0.75rem; }
.service-desc { color: #64748b; font-size: 0.95rem; line-height: 1.7; margin-bottom: 1rem; }
.service-features { list-style: none; padding: 0; margin-bottom: 1.5rem; }
.service-features li { color: #0369a1; font-size: 0.875rem; padding: 4px 0; font-weight: 500; display: flex; align-items: center; }
.service-link { color: #0ea5e9; font-weight: 600; font-size: 0.9rem; text-decoration: none; display: inline-flex; align-items: center; transition: all 0.2s; }
.service-link:hover { color: #0369a1; }
.reason-card { display: flex; gap: 1rem; align-items: flex-start; background: rgba(255,255,255,0.6); border: 1px solid #bae6fd; border-radius: 1rem; padding: 1.25rem 1.5rem; transition: all 0.3s; }
.reason-card:hover { transform: translateX(8px); box-shadow: 0 10px 30px rgba(14,165,233,0.1); }
.reason-icon-wrap { width: 48px; height: 48px; flex-shrink: 0; background: linear-gradient(135deg, #e0f2fe, #bae6fd); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; }
.reason-icon-el { font-size: 1.5rem; color: #0369a1; }
.reason-title { font-weight: 700; color: #0c4a6e; margin-bottom: 0.25rem; }
.reason-desc { color: #64748b; font-size: 0.9rem; line-height: 1.6; }
.floating-card { background: rgba(255,255,255,0.8); border: 1px solid #bae6fd; border-radius: 1.5rem; padding: 2rem; backdrop-filter: blur(12px); box-shadow: 0 20px 60px rgba(14,165,233,0.1); }
.main-card { animation: float 4s ease-in-out infinite; text-align: center; }
.side-card-1 { position: absolute; top: -20px; right: -20px; padding: 1rem 1.5rem; display: flex; align-items: center; animation: float 4s ease-in-out infinite 1s; }
.side-card-2 { position: absolute; bottom: -20px; left: -20px; padding: 1rem 1.5rem; display: flex; align-items: center; animation: float 4s ease-in-out infinite 2s; }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
.tech-grid { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-top: 2.5rem; }
.tech-pill { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.7); border: 1px solid #bae6fd; border-radius: 999px; padding: 10px 20px; font-size: 0.9rem; font-weight: 600; color: #0369a1; transition: all 0.3s; }
.tech-pill:hover { background: white; transform: translateY(-3px); box-shadow: 0 8px 20px rgba(14,165,233,0.15); border-color: #38bdf8; }
.cta-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.3; }
.orb-1 { width: 400px; height: 400px; background: white; top: -100px; left: -100px; }
.orb-2 { width: 300px; height: 300px; background: #86efac; bottom: -50px; right: -50px; }
.cta-btn-white { background: white !important; color: #0369a1 !important; font-weight: 700; transition: all 0.3s; }
.cta-btn-white:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(0,0,0,0.2); }
.cta-btn-outline { border-color: white !important; color: white !important; transition: all 0.3s; }
.cta-btn-outline:hover { background: rgba(255,255,255,0.1) !important; transform: translateY(-3px); }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in-down { animation: fadeInDown 0.8s ease both; }
.animate-fade-in-up { animation: fadeInUp 0.8s ease 0.2s both; }
.animate-fade-in-up-delay { animation: fadeInUp 0.8s ease 0.4s both; }
.animate-fade-in-up-delay2 { animation: fadeInUp 0.8s ease 0.6s both; }
.animate-fade-in-up-delay3 { animation: fadeInUp 0.8s ease 0.8s both; }
</style>
