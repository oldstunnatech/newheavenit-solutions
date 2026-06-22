<template>
  <div class="overflow-x-hidden">

    <!-- HERO SECTION -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">

      <!-- Deep heaven layered background -->
      <div class="absolute inset-0 heaven-bg" />

      <!-- Aurora layer -->
      <div class="absolute inset-0 aurora-layer" />

      <!-- Stars layer -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div v-for="i in 60" :key="`star-${i}`" class="star" :style="starStyle(i)" />
      </div>

      <!-- Divine light beams -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="beam beam-1" />
        <div class="beam beam-2" />
        <div class="beam beam-3" />
        <div class="beam beam-4" />
        <div class="beam beam-5" />
      </div>

      <!-- Deep background clouds (slowest, darkest) -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="cloud-layer cloud-bg-1">
          <Icon name="ph:cloud-fill" style="font-size:12rem; color: rgba(30,58,138,0.5)" />
        </div>
        <div class="cloud-layer cloud-bg-2">
          <Icon name="ph:cloud-fill" style="font-size:8rem; color: rgba(30,58,138,0.4)" />
        </div>
        <div class="cloud-layer cloud-bg-3">
          <Icon name="ph:cloud-fill" style="font-size:15rem; color: rgba(23,37,84,0.35)" />
        </div>
      </div>

      <!-- Mid clouds (medium speed, medium tone) -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="cloud-layer cloud-mid-1">
          <Icon name="ph:cloud-fill" style="font-size:7rem; color: rgba(56,189,248,0.3)" />
        </div>
        <div class="cloud-layer cloud-mid-2">
          <Icon name="ph:cloud-sun-fill" style="font-size:5rem; color: rgba(125,211,252,0.35)" />
        </div>
        <div class="cloud-layer cloud-mid-3">
          <Icon name="ph:cloud-fill" style="font-size:9rem; color: rgba(56,189,248,0.25)" />
        </div>
      </div>

      <!-- Foreground clouds (fastest, lightest) -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="cloud-layer cloud-fg-1">
          <Icon name="ph:cloud-fill" style="font-size:4rem; color: rgba(255,255,255,0.4)" />
        </div>
        <div class="cloud-layer cloud-fg-2">
          <Icon name="ph:cloud-fill" style="font-size:3rem; color: rgba(255,255,255,0.3)" />
        </div>
      </div>

      <!-- Floating orbs for depth -->
      <div class="orb orb-1" />
      <div class="orb orb-2" />
      <div class="orb orb-3" />
      <div class="orb orb-4" />

      <!-- Hero content -->
      <div class="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">

        <div class="badge-pill animate-fade-in-down">
          <span class="pulse-dot" />
          <span>Available for new projects</span>
        </div>

        <h1 class="hero-title animate-fade-in-up">
          <span class="block hero-line-1 mb-3">Elevating Business</span>
          <span class="block gradient-text">Beyond the Horizon</span>
        </h1>

        <p class="hero-sub animate-fade-in-up-delay">
          NewHeaven IT Solutions delivers world-class fullstack development, data analysis, data science,
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

        <!-- Stats with 3D depth -->
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up-delay3">
          <div v-for="(stat, i) in stats" :key="stat.label"
            class="stat-card" :style="`animation-delay: ${0.8 + i * 0.1}s`">
            <Icon :name="stat.icon" class="stat-icon-el" />
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
        <div class="scroll-mouse">
          <div class="scroll-wheel" />
        </div>
      </div>
    </section>

    <!-- SERVICES SECTION -->
    <section class="relative py-32 px-6 services-bg">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <span class="section-tag">What We Offer</span>
          <h2 class="section-title">Big Vision<br/>Real World Impact</h2>
          <p class="section-sub">We blend cutting-edge technology with creative thinking to deliver results that drive better business decisions.</p>
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
            <span class="section-tag1">Why NewHeaven</span>
            <h2 class="section-title text-left">Built Different.<br/>Delivered Better.</h2>
            <p class="section-sub text-left mb-10">
              We don't just write code — we architect solutions. Every project at NewHeaven IT is treated as a mission to elevate your business to new heights.
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
          <div class="relative flex justify-center">
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
    <!-- MISSION & VISION SECTION -->
<section class="relative py-32 px-6 mv-bg overflow-hidden">
  <div class="mv-orb mv-orb-1" />
  <div class="mv-orb mv-orb-2" />
  <div class="relative z-10 max-w-7xl mx-auto">
    <div class="text-center mb-20">
      <span class="section-tag">Our Purpose</span>
      <h2 class="section-title">Built on Belief,<br/>Driven by Vision</h2>
      <p class="section-sub">Two ideas guide every line of code and every dataset we touch.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="mv-card">
        <div class="mv-icon-wrap"><Icon name="ph:compass-fill" class="mv-icon-el" /></div>
        <span class="mv-label">Mission</span>
        <p class="mv-text">To give startups and growing businesses access to world-class software and data expertise — without the overhead of hiring a full team.</p>
        <p class="mv-text">New Heaven IT Solutions exists because most companies have to choose: hire a developer or a data person, build fast or build smart. We remove that trade-off. Every product we build comes with the data intelligence baked in from day one — not bolted on after the fact.</p>
      </div>
      <div class="mv-card">
        <div class="mv-icon-wrap"><Icon name="ph:compass-fill" class="mv-icon-u" /></div>
        <span class="mv-label">Vision</span>
        <p class="mv-text">A future where every startup, regardless of size or budget, has access to the same technical caliber as a Silicon Valley engineering team.</p>
        <p class="mv-text">We believe the gap between "great idea" and "great product" shouldn't be closed by who can afford the biggest team — it should be closed by who has access to the right expertise. New Heaven IT Solutions is built to be that access point: one partner who can take an idea from a sketch on a napkin to a live, data-informed product.</p>
      </div>
    </div>
  </div>
</section>

    <!-- TECH STACK -->
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

    <!-- CTA -->
    <section class="relative py-32 px-6 cta-section overflow-hidden">
      <div class="cta-orb orb-c1" />
      <div class="cta-orb orb-c2" />
      <div class="cta-stars">
        <div v-for="i in 30" :key="`cta-star-${i}`" class="cta-star" :style="ctaStarStyle(i)" />
      </div>
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <Icon name="ph:star-four-fill" class="text-yellow-300 mb-6" style="font-size:3rem; filter: drop-shadow(0 0 20px rgba(252,211,77,0.8))" />
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 cta-title">
          Ready to Elevate <br/>Your Business?
        </h2>
        <p class="text-sky-100 text-lg mb-10 opacity-90">
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
  { icon: 'ph:rocket-launch-fill', value: '10+', label: 'Projects Delivered' },
  { icon: 'ph:clock-countdown-fill', value: '2+', label: 'Years Experience' },
  { icon: 'ph:smiley-fill', value: '10+', label: 'Happy Clients' },
  { icon: 'ph:star-fill', value: '100%', label: 'Satisfaction Rate' },
]

const services = [
  {
    icon: 'ph:globe-hemisphere-west-fill',
    title: 'Fullstack Development',
    description: 'Modern, scalable web applications built with the latest technologies.',
    features: ['Vue / Nuxt / React', 'Node.js, Django & REST APIs', 'Cloud Deployment'],
  },
  {
    icon: 'ph:chart-bar-fill',
    title: 'Data Analysis',
    description: 'Transform raw data into powerful business insights and decisions.',
    features: ['Interactive Dashboards', 'KPI Reporting', 'Data Visualization', 'Data Mining', ' Script Automation'],
  },
  {
    icon: 'ph:brain-fill',
    title: 'Data Science & AI',
    description: 'Machine learning and AI solutions that give your business a competitive edge.',
    features: ['ML Model Development', 'Predictive Analytics', 'NLP & Automation', 'Artificial Intelligence'],
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
  { icon: 'logos:nodejs-icon', name: 'Node.js' },
  { icon: 'logos:python', name: 'Python' },
  { icon: 'logos:postgresql', name: 'PostgreSQL' },
  { icon: 'logos:supabase-icon', name: 'Supabase' },
  { icon: 'logos:mysql', name: 'MySQL' },
  { icon: 'logos:scikit-learn', name: 'Scikit-Learn' },
  { icon: 'logos:matplotlib', name: 'MatPlot Lib' },
  { icon: 'logos:powerbi', name: 'PowerBi' },
  { icon: 'logos:aws', name: 'AWS' },
  { icon: 'logos:firebase', name: 'Firebase' },
  { icon: 'logos:tailwindcss-icon', name: 'Tailwind' },
  { icon: 'logos:docker-icon', name: 'Docker' },
]

const starStyle = (i: number) => ({
  left: `${(i * 17 + 5) % 100}%`,
  top: `${(i * 23 + 10) % 100}%`,
  animationDelay: `${(i * 0.4) % 5}s`,
  animationDuration: `${2 + (i % 4)}s`,
  width: `${1 + (i % 3)}px`,
  height: `${1 + (i % 3)}px`,
  opacity: `${0.3 + (i % 5) * 0.1}`,
})

const ctaStarStyle = (i: number) => ({
  left: `${(i * 13 + 7) % 100}%`,
  top: `${(i * 19 + 5) % 100}%`,
  animationDelay: `${(i * 0.3) % 4}s`,
  animationDuration: `${2 + (i % 3)}s`,
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
/* ── DEEP HEAVEN BACKGROUND ── */
.heaven-bg {
  background: linear-gradient(180deg,
    #0a0a2e 0%,
    #0d1b4b 8%,
    #0f2d6b 18%,
    #0a4a8a 30%,
    #0369a1 45%,
    #0ea5e9 62%,
    #38bdf8 75%,
    #7dd3fc 88%,
    #bae6fd 100%
  );
  animation: heavenShift 12s ease-in-out infinite alternate;
}
@keyframes heavenShift {
  0% { filter: brightness(1) saturate(1); }
  50% { filter: brightness(1.05) saturate(1.1) hue-rotate(5deg); }
  100% { filter: brightness(1.1) saturate(1.15) hue-rotate(-3deg); }
}

/* ── AURORA LAYER ── */
.aurora-layer {
  background:
    radial-gradient(ellipse 80% 40% at 20% 20%, rgba(99,102,241,0.25) 0%, transparent 60%),
    radial-gradient(ellipse 60% 30% at 80% 15%, rgba(14,165,233,0.2) 0%, transparent 60%),
    radial-gradient(ellipse 50% 25% at 50% 5%, rgba(139,92,246,0.15) 0%, transparent 50%);
  animation: auroraMove 8s ease-in-out infinite alternate;
}
@keyframes auroraMove {
  0% { opacity: 0.6; transform: translateY(0) scaleX(1); }
  50% { opacity: 1; transform: translateY(10px) scaleX(1.05); }
  100% { opacity: 0.7; transform: translateY(-5px) scaleX(0.98); }
}

/* ── STARS ── */
.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle ease-in-out infinite;
}
@keyframes twinkle {
  0%, 100% { opacity: 0.1; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 4px rgba(255,255,255,0.8); }
}

/* ── LIGHT BEAMS ── */
.beam {
  position: absolute;
  top: -20%;
  width: 2px;
  height: 140%;
  background: linear-gradient(180deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.05) 70%, transparent 100%);
  transform-origin: top center;
  animation: beamSway 8s ease-in-out infinite;
}
.beam-1 { left: 10%; width: 80px; transform: rotate(-20deg); animation-delay: 0s; opacity: 0.4; }
.beam-2 { left: 30%; width: 50px; transform: rotate(-8deg); animation-delay: 1.5s; opacity: 0.3; }
.beam-3 { left: 50%; width: 100px; transform: rotate(2deg); animation-delay: 3s; opacity: 0.35; }
.beam-4 { left: 68%; width: 60px; transform: rotate(12deg); animation-delay: 4.5s; opacity: 0.25; }
.beam-5 { left: 85%; width: 70px; transform: rotate(22deg); animation-delay: 6s; opacity: 0.3; }
@keyframes beamSway {
  0%, 100% { opacity: 0.1; transform: rotate(var(--r, 0deg)) scaleY(0.95); }
  50% { opacity: 0.5; transform: rotate(calc(var(--r, 0deg) + 3deg)) scaleY(1.05); }
}

/* ── CLOUD LAYERS ── */
.cloud-layer { position: absolute; animation: floatCloud linear infinite; }

/* Background clouds - dark, slow */
.cloud-bg-1 { top: 5%; animation-duration: 80s; left: -20%; animation-delay: 0s; filter: blur(2px); }
.cloud-bg-2 { top: 20%; animation-duration: 95s; left: -15%; animation-delay: -30s; filter: blur(1px); }
.cloud-bg-3 { top: 2%; animation-duration: 110s; left: -25%; animation-delay: -60s; filter: blur(3px); }

/* Mid clouds */
.cloud-mid-1 { top: 25%; animation-duration: 50s; left: -15%; animation-delay: -10s; }
.cloud-mid-2 { top: 15%; animation-duration: 60s; left: -10%; animation-delay: -25s; }
.cloud-mid-3 { top: 35%; animation-duration: 70s; left: -20%; animation-delay: -40s; }

/* Foreground clouds - light, fast */
.cloud-fg-1 { top: 40%; animation-duration: 30s; left: -10%; animation-delay: -5s; }
.cloud-fg-2 { top: 30%; animation-duration: 38s; left: -8%; animation-delay: -15s; }

@keyframes floatCloud {
  from { transform: translateX(-200px); }
  to { transform: translateX(110vw); }
}

/* ── DEPTH ORBS ── */
.orb { position: absolute; border-radius: 50%; filter: blur(60px); animation: orbPulse ease-in-out infinite; pointer-events: none; }
.orb-1 { width: 500px; height: 500px; top: -100px; left: -100px; background: radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%); animation-duration: 8s; animation-delay: 0s; }
.orb-2 { width: 400px; height: 400px; top: 20%; right: -80px; background: radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%); animation-duration: 10s; animation-delay: 2s; }
.orb-3 { width: 300px; height: 300px; bottom: 10%; left: 20%; background: radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%); animation-duration: 12s; animation-delay: 4s; }
.orb-4 { width: 350px; height: 350px; bottom: 0; right: 20%; background: radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%); animation-duration: 9s; animation-delay: 1s; }
@keyframes orbPulse {
  0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.6; }
  33% { transform: scale(1.1) translate(20px, -20px); opacity: 0.8; }
  66% { transform: scale(0.95) translate(-10px, 15px); opacity: 0.5; }
}

/* ── HERO TEXT ── */
.hero-title { font-size: clamp(2.5rem, 7vw, 5.5rem); font-weight: 900; line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.03em; }
.hero-line-1 { color: #ffffff; text-shadow: 0 2px 30px rgba(0,0,0,0.3), 0 0 60px rgba(99,102,241,0.3); }
.gradient-text {
  background: linear-gradient(90deg, #fcd34d, #fb923c, #f472b6, #a78bfa, #60a5fa, #34d399);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  background-size: 300%; animation: rainbowMove 5s ease infinite;
  filter: drop-shadow(0 0 30px rgba(252,211,77,0.4));
}
@keyframes rainbowMove {
  0% { background-position: 0%; }
  50% { background-position: 100%; }
  100% { background-position: 0%; }
}
.hero-sub { font-size: 1.15rem; color: rgba(255,255,255,0.85); max-width: 600px; margin: 0 auto; line-height: 1.8; text-shadow: 0 1px 10px rgba(0,0,0,0.2); }

/* ── BADGE ── */
.badge-pill { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); border-radius: 999px; padding: 8px 20px; margin-bottom: 2rem; font-size: 0.875rem; font-weight: 600; color: white; backdrop-filter: blur(12px); box-shadow: 0 4px 20px rgba(0,0,0,0.2); }
.pulse-dot { width: 8px; height: 8px; background: #4ade80; border-radius: 50%; animation: pulse 2s ease infinite; box-shadow: 0 0 8px rgba(74,222,128,0.8); }
@keyframes pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.6); } 50% { box-shadow: 0 0 0 8px rgba(74,222,128,0); } }

/* ── BUTTONS ── */
.hero-btn-primary { box-shadow: 0 8px 32px rgba(14,165,233,0.5); transition: all 0.3s; }
.hero-btn-primary:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(14,165,233,0.6); }
.hero-btn-outline { border-color: rgba(255,255,255,0.6) !important; color: white !important; background: rgba(255,255,255,0.1) !important; backdrop-filter: blur(8px); transition: all 0.3s; }
.hero-btn-outline:hover { transform: translateY(-4px); background: rgba(255,255,255,0.2) !important; border-color: white !important; }

/* ── STATS ── */
.stat-card { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 1.5rem; padding: 1.5rem 1rem; backdrop-filter: blur(16px); transition: all 0.3s; animation: fadeInUp 0.6s ease both; box-shadow: 0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2); }
.stat-card:hover { transform: translateY(-8px) scale(1.03); box-shadow: 0 20px 50px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3); background: rgba(255,255,255,0.15); }
.stat-icon-el { font-size: 1.75rem; color: #7dd3fc; margin-bottom: 0.5rem; display: block; filter: drop-shadow(0 0 8px rgba(125,211,252,0.6)); }
.stat-value { font-size: 2rem; font-weight: 800; color: white; text-shadow: 0 2px 10px rgba(0,0,0,0.2); }
.stat-label { font-size: 0.8rem; color: black; margin-top: 0.25rem; }

/* ── SCROLL MOUSE ── */
.scroll-indicator { animation: bounce 2s ease infinite; }
.scroll-mouse { width: 24px; height: 40px; border: 2px solid rgba(255,255,255,0.5); border-radius: 12px; display: flex; justify-content: center; padding-top: 6px; }
.scroll-wheel { width: 4px; height: 8px; background: white; border-radius: 2px; animation: scrollWheel 2s ease infinite; opacity: 0.8; }
@keyframes scrollWheel { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(12px); opacity: 0; } }
@keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(6px); } }

/* ── SECTIONS ── */
.services-bg { background: linear-gradient(180deg, #0f172a 0%, #0c2340 30%, #0a3a5c 60%, #0369a1 100%); }
.why-bg { background: linear-gradient(180deg, #0369a1 0%, #0ea5e9 40%, #38bdf8 70%, #bae6fd 100%); }
.tech-bg { background: linear-gradient(180deg, #bae6fd 0%, #e0f2fe 50%, #f0f9ff 100%); }
.cta-section { background: linear-gradient(135deg, #0a0a2e 0%, #0d1b4b 30%, #0f2d6b 60%, #0369a1 100%); }

/* ── SECTION LABELS ── */
.section-tag { display: inline-block; background: rgba(14,165,233,0.15); color: #7dd3fc; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.3); margin-bottom: 1rem; }
.section-tag1 { display: inline-block; background: rgba(14,165,233,0.15); color: #7dd3fc; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.3); margin-bottom: 1rem; margin-left: 200px; }
.section-title { font-size: clamp(3rem, 4vw, 2rem); font-weight: 800; color: white; line-height: 1.2; margin-bottom: 1rem; text-align: center; text-shadow: 0 2px 20px rgba(0,0,0,0.3); }
.section-sub { color: rgba(255,255,255,0.7); font-size: 1.05rem; max-width: 560px; margin: 0 auto; line-height: 1.7; text-align: center; }

/* ── SERVICE CARDS ── */
.service-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 1.5rem; padding: 2.5rem 2rem; backdrop-filter: blur(16px); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); animation: fadeInUp 0.6s ease both; box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
.service-card:hover { transform: translateY(-12px) scale(1.02); box-shadow: 0 30px 60px rgba(0,0,0,0.3); border-color: rgba(125,211,252,0.4); background: rgba(255,255,255,0.1); }
.service-icon-wrap { width: 64px; height: 64px; background: linear-gradient(135deg, rgba(14,165,233,0.3), rgba(99,102,241,0.3)); border-radius: 1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 4px 20px rgba(14,165,233,0.2); }
.service-icon-el { font-size: 2rem; color: #7dd3fc; }
.service-title { font-size: 1.3rem; font-weight: 700; color: white; margin-bottom: 0.75rem; }
.service-desc { color: rgba(255,255,255,0.65); font-size: 0.95rem; line-height: 1.7; margin-bottom: 1rem; }
.service-features { list-style: none; padding: 0; margin-bottom: 1.5rem; }
.service-features li { color: #7dd3fc; font-size: 0.875rem; padding: 4px 0; font-weight: 500; display: flex; align-items: center; }
.service-link { color: #38bdf8; font-weight: 600; font-size: 0.9rem; text-decoration: none; display: inline-flex; align-items: center; transition: all 0.2s; }
.service-link:hover { color: white; gap: 6px; }

/* ── WHY US ── */
.reason-card { display: flex; gap: 1rem; align-items: flex-start; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 1rem; padding: 1.25rem 1.5rem; transition: all 0.3s; }
.reason-card:hover { transform: translateX(8px); box-shadow: 0 10px 30px rgba(0,0,0,0.2); background: rgba(255,255,255,0.12); }
.reason-icon-wrap { width: 48px; height: 48px; flex-shrink: 0; background: linear-gradient(135deg, rgba(14,165,233,0.3), rgba(99,102,241,0.3)); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.15); }
.reason-icon-el { font-size: 1.5rem; color: #7dd3fc; }
.reason-title { font-weight: 700; color: white; margin-bottom: 0.25rem; }
.reason-desc { color: rgba(255,255,255,0.65); font-size: 0.9rem; line-height: 1.6; }

/* ── FLOATING CARDS ── */
.floating-card { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); border-radius: 1.5rem; padding: 2rem; backdrop-filter: blur(16px); box-shadow: 0 20px 60px rgba(0,0,0,0.25); }
.main-card { animation: float 4s ease-in-out infinite; text-align: center; min-width: 240px; }
.side-card-1 { position: absolute; top: -20px; right: -20px; padding: 1rem 1.5rem; display: flex; align-items: center; animation: float 4s ease-in-out infinite 1s; }
.side-card-2 { position: absolute; bottom: -20px; left: -20px; padding: 1rem 1.5rem; display: flex; align-items: center; animation: float 4s ease-in-out infinite 2s; }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }

/* ── MISSION & VISION ── */
.mv-bg { background: linear-gradient(180deg, #0a3a5c 0%, #0369a1 40%, #0c2340 100%); }
.mv-orb { position: absolute; border-radius: 50%; filter: blur(70px); pointer-events: none; animation: orbPulse ease-in-out infinite; }
.mv-orb-1 { width: 450px; height: 450px; top: -120px; right: -100px; background: radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%); animation-duration: 10s; }
.mv-orb-2 { width: 380px; height: 380px; bottom: -100px; left: -80px; background: radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%); animation-duration: 12s; animation-delay: 2s; }
.mv-card { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 1.5rem; padding: 2.5rem 2.25rem; backdrop-filter: blur(16px); box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.15); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); animation: fadeInUp 0.6s ease both; }
.mv-card:hover { transform: translateY(-8px); box-shadow: 0 24px 50px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.2); border-color: rgba(125,211,252,0.4); background: rgba(255,255,255,0.1); }
.mv-icon-wrap { width: 64px; height: 64px; background: linear-gradient(135deg, rgba(14,165,233,0.3), rgba(99,102,241,0.3)); border-radius: 1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 4px 20px rgba(14,165,233,0.2); }
.mv-icon-el { font-size: 2rem; color: #7dd3fc; filter: drop-shadow(0 0 8px rgba(125,211,252,0.5)); }
.mv-label { display: block; font-size: 0.85rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #7dd3fc; margin-bottom: 1rem; }
.mv-text { color: rgba(255,255,255,0.8); font-size: 1rem; line-height: 1.8; margin-bottom: 1rem; }
.mv-text:last-child { margin-bottom: 0; }

/* ── TECH GRID ── */
.tech-grid { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-top: 2.5rem; }
.tech-pill { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.7); border: 1px solid #bae6fd; border-radius: 999px; padding: 10px 20px; font-size: 0.9rem; font-weight: 600; color: #0369a1; transition: all 0.3s; }
.tech-pill:hover { background: white; transform: translateY(-3px); box-shadow: 0 8px 20px rgba(14,165,233,0.15); border-color: #38bdf8; }

/* ── CTA ── */
.cta-stars { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
.cta-star { position: absolute; width: 2px; height: 2px; background: white; border-radius: 50%; animation: twinkle ease-in-out infinite; }
.cta-orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }
.orb-c1 { width: 500px; height: 500px; background: rgba(99,102,241,0.2); top: -150px; left: -150px; animation: orbPulse 10s ease-in-out infinite; }
.orb-c2 { width: 400px; height: 400px; background: rgba(14,165,233,0.2); bottom: -100px; right: -100px; animation: orbPulse 12s ease-in-out infinite 3s; }
.cta-title { text-shadow: 0 2px 30px rgba(0,0,0,0.3); }
.cta-btn-white { background: white !important; color: #0369a1 !important; font-weight: 700; transition: all 0.3s; box-shadow: 0 8px 30px rgba(0,0,0,0.2); }
.cta-btn-white:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.3); }
.cta-btn-outline { border-color: rgba(255,255,255,0.5) !important; color: white !important; background: rgba(255,255,255,0.08) !important; transition: all 0.3s; }
.cta-btn-outline:hover { background: rgba(255,255,255,0.15) !important; transform: translateY(-4px); border-color: white !important; }

/* ── ANIMATIONS ── */
@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in-down { animation: fadeInDown 0.8s ease both; }
.animate-fade-in-up { animation: fadeInUp 0.8s ease 0.2s both; }
.animate-fade-in-up-delay { animation: fadeInUp 0.8s ease 0.4s both; }
.animate-fade-in-up-delay2 { animation: fadeInUp 0.8s ease 0.6s both; }
.animate-fade-in-up-delay3 { animation: fadeInUp 0.8s ease 0.8s both; }


@media (max-width: 480px) {
  .section-tag1 { display: inline-block; background: rgba(14,165,233,0.15); color: #7dd3fc; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.3); margin-bottom: 1rem; margin-left: 80px; }
}
</style>
