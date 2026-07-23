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
  <span>Welcome To</span><span class="pulse-dot" />
</div>

<h1 class="hero-title animate-fade-in-up">
  <span class="block hero-line-1 mb-3">NewHeaven IT</span>
  <span class="block gradient-text">Solutions</span>
</h1>

<!-- Motto — styled differently from subheading -->
<p class="hero-motto animate-fade-in-up-delay">
  Elevating Business Beyond the Horizon
</p>

<!-- Subheading — expands on the motto -->
<p class="hero-sub animate-fade-in-up-delay2">
  From professional websites to data analytics, data mining, and machine learning solutions we give freelancers and businesses across Nigeria and the world the tools to grow smarter and compete stronger.
</p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in-up-delay2">
          <UButton to="/services" size="xl" color="primary" variant="solid" class="hero-btn-primary">
            <Icon name="ph:sparkle-fill" class="mr-2" /> Explore Solutions
          </UButton>
          <UButton to="/contact" size="xl" variant="outline" class="hero-btn-outline">
            <Icon name="ph:rocket-launch-fill" class="mr-2" /> Let's talk
          </UButton>
        </div>

        <!-- Stats with 3D depth -->
        <!-- <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up-delay3">
          <div v-for="(stat, i) in stats" :key="stat.label"
            class="stat-card" :style="`animation-delay: ${0.8 + i * 0.1}s`">
            <Icon :name="stat.icon" class="stat-icon-el" />
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div> -->
      </div>

      <!-- Scroll indicator -->
      <!-- <div class="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
        <div class="scroll-mouse">
          <div class="scroll-wheel" />
        </div>
      </div> -->
    </section>


    <!-- WHY US SECTION -->
    <section class="relative py-32 px-6 why-bg">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span class="section-tag1">Our Values</span>
            <h2 class="section-title text-left">Why NewHeaven IT Solutions?<br/></h2>
            <!-- <p class="section-sub text-left mb-10">
              We bring to your business what you need to take it to the next level.
            </p> -->

            <div class="space-y-6 mt-8">
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


          <div class="trust-visual">

  <!-- Main trust card -->
  <div class="trust-main-card">
    <div class="trust-card-header">
      <div class="trust-avatar-group">
        <div class="trust-avatar" style="background: linear-gradient(135deg, #0369a1, #0ea5e9)">O</div>
        <div class="trust-avatar" style="background: linear-gradient(135deg, #059669, #34d399)">S</div>
        <div class="trust-avatar" style="background: linear-gradient(135deg, #7c3aed, #a78bfa)">M</div>
        <div class="trust-avatar" style="background: linear-gradient(135deg, #dc2626, #f87171)">A</div>
      </div>
      <div>
        <p class="trust-client-text">Trusted by founders & businesses</p>
        <div class="trust-stars">
          <Icon v-for="i in 5" :key="i" name="ph:star-fill" class="text-yellow-400" />
          <span class="trust-rating">5.0</span>
        </div>
      </div>
    </div>

    <div class="trust-divider" />

    <!-- Stats grid -->
    <div class="trust-stats-grid">
      <div class="trust-stat">
        <span class="trust-stat-val">10+</span>
        <span class="trust-stat-label">Projects Delivered</span>
      </div>
      <div class="trust-stat">
        <span class="trust-stat-val">100%</span>
        <span class="trust-stat-label">Satisfaction Rate</span>
      </div>
      <div class="trust-stat">
        <span class="trust-stat-val">2+</span>
        <span class="trust-stat-label">Years Experience</span>
      </div>
      <div class="trust-stat">
        <span class="trust-stat-val">4</span>
        <span class="trust-stat-label">Core Services</span>
      </div>
    </div>

    <div class="trust-divider" />

    <!-- Latest activity -->
    <div class="trust-activity">
      <div class="trust-activity-dot" />
      <p class="trust-activity-text">New project started today</p>
    </div>
  </div>

  <!-- Side trust badges -->
  <div class="trust-badge trust-badge-1">
    <div class="trust-badge-icon">
      <Icon name="ph:shield-check-fill" class="text-green-500" />
    </div>
    <div>
      <p class="trust-badge-title">Secure & Reliable</p>
      <p class="trust-badge-sub">SSL, HTTPS & best practices</p>
    </div>
  </div>

  <div class="trust-badge trust-badge-2">
    <div class="trust-badge-icon">
      <Icon name="ph:clock-countdown-fill" class="text-sky-500" />
    </div>
    <div>
      <p class="trust-badge-title">Fast Response</p>
      <p class="trust-badge-sub">Reply within minutes</p>
    </div>
  </div>

  <div class="trust-badge trust-badge-3">
    <div class="trust-badge-icon">
      <Icon name="ph:hand-heart-fill" class="text-rose-500" />
    </div>
    <div>
      <p class="trust-badge-title">Free Consultation</p>
      <p class="trust-badge-sub">No strings attached</p>
    </div>
  </div>

</div>



        </div>
      </div>
    </section>

    <!-- PROCESS SECTION -->
    <section class="py-24 px-6 process-bg">
      <div class="max-w-5xl mx-auto text-center">
        <span class="section-tag11">How We Work</span>
        <h2 class="section-title1">Our Simple 4-Step Process</h2>
        <p class="section-sub1 mb-16">Clear, transparent, and collaborative from start to finish.</p>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
          <div v-for="(step, i) in steps" :key="step.title" class="step-card">
            <div class="step-number">{{ i + 1 }}</div>
            <Icon :name="step.icon" class="step-icon" />
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES SECTION -->
    <section class="relative py-32 px-6 services-bg">
  <div class="max-w-7xl mx-auto">

    <!-- Header -->
    <div class="text-center mb-20">
      <span class="section-tag">What We Offer</span>
      <h2 class="section-title">Our Services</h2>
      <p class="section-sub">
        From professional websites to machine learning models — we cover
        the full spectrum of what your business needs to grow digitally.
      </p>
    </div>

    <!-- Service cards — title + description only -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div
        v-for="(service, i) in services"
        :key="service.title"
        class="service-card-minimal"
        :style="`animation-delay: ${i * 0.15}s`"
      >
        <div class="scm-icon-wrap">
          <Icon :name="service.icon" class="scm-icon" />
        </div>
        <div class="scm-content">
          <h3 class="scm-title">{{ service.title }}</h3>
          <p class="scm-desc">{{ service.description }}</p>
        </div>
      </div>
    </div>

    <!-- Single CTA -->
    <div class="text-center">
      <NuxtLink to="/services" class="services-cta-btn">
        <Icon name="ph:list-bullets-fill" class="mr-2" />
        Explore All Services
        <Icon name="ph:arrow-right-bold" class="ml-2" />
      </NuxtLink>
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
            <Icon name="ph:handshake-fill" class="mr-2" /> Contact Us
          </UButton>
          <!-- <UButton to="/pricing" size="xl" variant="outline" class="cta-btn-outline">
            <Icon name="ph:tag-fill" class="mr-2" /> View Pricing
          </UButton> -->
        </div>
      </div>
    </section>

    <!-- WhatsApp FAB -->
    <a href="https://wa.me/9035993262" target="_blank" class="whatsapp-fab" title="Chat with us on WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="whatsapp-label">Chat with us</span>
    </a>


  </div>
</template>

<script setup lang="ts">

import { onMounted, onUnmounted } from 'vue'

const stats = [
  { icon: 'ph:rocket-launch-fill', value: '10+', label: 'Projects Delivered' },
  { icon: 'ph:clock-countdown-fill', value: '2+', label: 'Years Experience' },
  { icon: 'ph:smiley-fill', value: '10+', label: 'Happy Clients' },
  { icon: 'ph:star-fill', value: '100%', label: 'Satisfaction Rate' },
]

const services = [
  {
    icon: 'ph:globe-hemisphere-west-fill',
    title: 'Website Development',
    description: 'Professional, modern websites built to represent your brand and convert visitors into clients.',
  },
  {
    icon: 'ph:chart-bar-fill',
    title: 'Data Mining',
    description: 'We extract, collect, and structure the right data from the right sources so your startup stops guessing and starts making decisions backed by real market intelligence.',
  },
  {
    icon: 'ph:chart-bar-fill',
    title: 'Data Analysis',
    description: 'We turn your raw, messy data into clear visuals and actionable insights so you know exactly what is working, what is not, and where to focus next to grow your business.',
  },
  {
    icon: 'ph:brain-fill',
    title: 'Data Science & AI',
  description: 'We build intelligent machine learning models and AI-powered systems that help your startup predict outcomes, automate decisions, and solve complex business problems before they become expensive mistakes.',
  },
]

const reasons = [
  {
    icon: 'ph:target-fill',
    title: 'Results Over Deliverables',
    desc: 'We don\'t measure success by what we shipped. We measure it by what changed in your business after we did.',
  },
  {
    icon: 'ph:certificate-fill',
    title: 'Excellence Without Compromise',
    desc: 'Every website we build, every dataset we analyze, and every model we train is held to the highest standard because your business deserves nothing less.',
  },
  {
    icon: 'ph:eye-fill',
    title: 'Radical Transparency',
    desc: 'Clear timelines, honest communication, and no hidden surprises. You always know exactly where your project stands and why every decision was made.',
  },
  {
    icon: 'ph:handshake-fill',
    title: 'Partnership, Not Transactions',
    desc: 'We think like co-founders, not contractors. Your goals become our goals from the first conversation to the final delivery and beyond.',
  },
  
]

const steps = [
  { icon: 'ph:chats-circle-fill', title: 'Discovery', desc: 'We learn about your business, goals, and challenges in a free consultation call.', },
  { icon: 'ph:blueprint-fill', title: 'Planning', desc: 'We map out the solution, tech stack, timeline and deliverables together.', },
  { icon: 'ph:code-fill', title: 'Build', desc: 'We develop, test, and iterate with regular updates and transparent communication.', },
  { icon: 'ph:rocket-launch-fill', title: 'Launch', desc: 'We deploy, hand over, and provide ongoing support to ensure everything runs perfectly.', },
]

const techs = [
  { icon: 'logos:vue', name: 'Vue.js' },
  { icon: 'logos:nuxt-icon', name: 'Nuxt' },
  { icon: 'logos:typescript-icon', name: 'TypeScript' },
  { icon: 'logos:nodejs-icon', name: 'Node.js' },
  { icon: 'logos:python', name: 'Python' },
  { icon: 'logos:django', name: 'Django' },
  { icon: 'logos:postgresql', name: 'PostgreSQL' },
  { icon: 'logos:supabase-icon', name: 'Supabase' },
  { icon: 'logos:mysql', name: 'MySQL' },
  { icon: 'simple-icons:scikitlearn', name: 'Scikit-Learn' },
  { icon: 'logos:matplotlib', name: 'MatPlot Lib' },
  { icon: 'simple-icons:powerbi', name: 'PowerBi' },
  { icon: 'logos:numpy', name: 'Numpy' },
  { icon: 'logos:pandas', name: 'Pandas' },
  { icon: 'logos:tailwindcss-icon', name: 'Tailwind' },
  { icon: 'logos:github', name: 'Github' },
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

// Store handlers so we can remove them properly
let handleMouseMove: ((e: MouseEvent) => void) | null = null
let handleMouseLeave: (() => void) | null = null

onMounted(() => {
  const heroSection = document.querySelector('.hero-section') as HTMLElement
  const cursorGlow  = document.getElementById('cursor-glow')
  const cursorRing  = document.getElementById('cursor-ring')

  if (heroSection && cursorGlow && cursorRing) {
    let glowX = 0, glowY = 0
    let ringX = 0, ringY = 0
    let rafId: number

    handleMouseMove = (e: MouseEvent) => {
      const rect = heroSection.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      glowX = x
      glowY = y

      cursorGlow.style.left = `${x}px`
      cursorGlow.style.top  = `${y}px`
      cursorGlow.style.transform = `translate(-50%, -50%)`
      cursorGlow.style.opacity   = '1'

      cancelAnimationFrame(rafId)
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t

      const animateRing = () => {
        ringX = lerp(ringX, glowX, 0.12)
        ringY = lerp(ringY, glowY, 0.12)
        cursorRing.style.left = `${ringX}px`
        cursorRing.style.top  = `${ringY}px`
        cursorRing.style.transform = `translate(-50%, -50%)`
        cursorRing.style.opacity   = '1'

        if (Math.abs(ringX - glowX) > 0.5 || Math.abs(ringY - glowY) > 0.5) {
          rafId = requestAnimationFrame(animateRing)
        }
      }
      rafId = requestAnimationFrame(animateRing)

      const moveX = (x / rect.width  - 0.5) * 30
      const moveY = (y / rect.height - 0.5) * 30
      const orb1 = document.querySelector('.orb-1') as HTMLElement
      const orb2 = document.querySelector('.orb-2') as HTMLElement
      const orb3 = document.querySelector('.orb-3') as HTMLElement
      if (orb1) orb1.style.transform = `translate(${moveX * 0.6}px, ${moveY * 0.6}px)`
      if (orb2) orb2.style.transform = `translate(${-moveX * 0.4}px, ${-moveY * 0.4}px)`
      if (orb3) orb3.style.transform = `translate(${moveX * 0.3}px, ${moveY * 0.8}px)`

      const headlineWrap = document.querySelector('.hero-headline-wrap') as HTMLElement
      if (headlineWrap) {
        const tiltX = (y / rect.height - 0.5) * -6
        const tiltY = (x / rect.width  - 0.5) *  6
        headlineWrap.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
      }
    }

    handleMouseLeave = () => {
      cursorGlow.style.opacity = '0'
      cursorRing.style.opacity = '0'
      const orb1 = document.querySelector('.orb-1') as HTMLElement
      const orb2 = document.querySelector('.orb-2') as HTMLElement
      const orb3 = document.querySelector('.orb-3') as HTMLElement
      const headlineWrap = document.querySelector('.hero-headline-wrap') as HTMLElement
      if (orb1) orb1.style.transform = ''
      if (orb2) orb2.style.transform = ''
      if (orb3) orb3.style.transform = ''
      if (headlineWrap) headlineWrap.style.transform = ''
    }

    heroSection.addEventListener('mousemove', handleMouseMove)
    heroSection.addEventListener('mouseleave', handleMouseLeave)
  }
})

onUnmounted(() => {
  const heroSection = document.querySelector('.hero-section') as HTMLElement
  if (heroSection && handleMouseMove && handleMouseLeave) {
    heroSection.removeEventListener('mousemove', handleMouseMove)
    heroSection.removeEventListener('mouseleave', handleMouseLeave)
  }
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
  background: linear-gradient(90deg, #60a5fa, #34d399);
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

.hero-motto {
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 700;
  color: #4ade80;
  letter-spacing: 0.08em;
  font-style: italic;
  margin-bottom: 1.25rem;
  padding: 0.5rem 1.75rem;
  background: rgba(74, 222, 128, 0.08);
  border: 1px solid rgba(74, 222, 128, 0.25);
  border-radius: 9999px;
  box-shadow:
    0 0 20px rgba(74, 222, 128, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
}

.animate-fade-in-up-delay2 {
  animation: fadeInUp 0.8s ease 0.6s both;
}

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
.section-tag { display: inline-block; background: rgba(14,165,233,0.15); color: #04DF72; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.3); margin-bottom: 1rem; }
.section-tag1 { display: inline-block; background: rgba(14,165,233,0.15); color: #7dd3fc; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.3); margin-bottom: 1rem; margin-left: 200px; }
.section-title { font-size: clamp(3rem, 4vw, 2rem); font-weight: 800; color: white; line-height: 1.2; margin-bottom: 1rem; text-align: center; text-shadow: 0 2px 20px rgba(0,0,0,0.3); }
.section-sub { color: rgba(255,255,255,0.7); font-size: 1.05rem; max-width: 560px; margin: 0 auto; line-height: 1.7; text-align: center; }

.section-tag11 {
  display: inline-block; background: rgba(14,165,233,0.1); color: #0369a1;
  font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.2); margin-bottom: 1rem;
}
.section-title1 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: #0c4a6e; line-height: 1.2; margin-bottom: 1rem; text-align: center; }
.section-sub1 { color: #64748b; font-size: 1.05rem; max-width: 560px; margin: 0 auto; line-height: 1.7; text-align: center; }


/* STEPS */
.step-card {
  background: rgba(255,255,255,0.7); border: 1px solid #bae6fd;
  border-radius: 1.5rem; padding: 2rem 1.5rem; text-align: center;
  transition: all 0.3s; position: relative;
}
.step-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(14,165,233,0.15); border-color: #38bdf8; }
.step-number {
  position: absolute; top: -16px; left: 50%; transform: translateX(-50%);
  width: 32px; height: 32px; background: linear-gradient(135deg, #0369a1, #0ea5e9);
  color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 0.9rem;
}
.step-icon { font-size: 2.5rem; color: #0369a1; margin: 0.5rem 0 1rem; display: block; }
.step-title { font-size: 1.1rem; font-weight: 700; color: #0c4a6e; margin-bottom: 0.5rem; }
.step-desc { color: #64748b; font-size: 0.875rem; line-height: 1.6; }

/* ── TRUST VISUAL ── */
.trust-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 420px;
  width: 100%;
}

.trust-main-card {
  background: rgba(255,255,255,0.95);
  border: 1px solid #bae6fd;
  border-radius: 1.75rem;
  padding: 2rem;
  width: 100%;
  max-width: 320px;
  box-shadow: 0 30px 60px rgba(14,165,233,0.15);
  animation: float 4s ease-in-out infinite;
  backdrop-filter: blur(12px);
  z-index: 2;
}

/* Avatar group */
.trust-card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}
.trust-avatar-group {
  display: flex;
}
.trust-avatar {
  width: 36px; height: 36px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 0.85rem; color: white;
  border: 2px solid white;
  margin-left: -8px;
}
.trust-avatar:first-child { margin-left: 0; }
.trust-client-text {
  font-size: 0.8rem; font-weight: 600;
  color: #0c4a6e; margin-bottom: 0.25rem;
}
.trust-stars {
  display: flex; align-items: center; gap: 2px;
  font-size: 0.85rem;
}
.trust-rating {
  font-size: 0.8rem; font-weight: 700;
  color: #92400e; margin-left: 4px;
}

/* Divider */
.trust-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #bae6fd, transparent);
  margin: 1rem 0;
}

/* Stats grid */
.trust-stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.trust-stat {
  display: flex; flex-direction: column;
  align-items: center; text-align: center;
  padding: 0.75rem;
  background: rgba(14,165,233,0.05);
  border: 1px solid rgba(186,230,253,0.6);
  border-radius: 0.75rem;
}
.trust-stat-val {
  font-size: 1.4rem; font-weight: 900;
  color: #0369a1; line-height: 1;
  margin-bottom: 0.25rem;
}
.trust-stat-label {
  font-size: 0.65rem; font-weight: 600;
  color: #64748b; text-transform: uppercase;
  letter-spacing: 0.05em; line-height: 1.3;
  text-align: center;
}

/* Activity indicator */
.trust-activity {
  display: flex; align-items: center; gap: 0.5rem;
}
.trust-activity-dot {
  width: 8px; height: 8px;
  border-radius: 50%; background: #4ade80;
  box-shadow: 0 0 8px rgba(74,222,128,0.8);
  animation: pulse 2s ease infinite;
  flex-shrink: 0;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.6); }
  50% { box-shadow: 0 0 0 6px rgba(74,222,128,0); }
}
.trust-activity-text {
  font-size: 0.8rem; font-weight: 600;
  color: #475569;
}

/* Trust badges */
.trust-badge {
  position: absolute;
  display: flex; align-items: center; gap: 0.6rem;
  background: rgba(255,255,255,0.95);
  border: 1px solid #bae6fd;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  box-shadow: 0 8px 24px rgba(14,165,233,0.12);
  backdrop-filter: blur(8px);
  min-width: 180px;
}
.trust-badge-icon {
  width: 36px; height: 36px;
  background: rgba(14,165,233,0.08);
  border-radius: 0.6rem;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; flex-shrink: 0;
}
.trust-badge-title {
  font-size: 0.8rem; font-weight: 700;
  color: #0c4a6e; margin-bottom: 0.1rem;
}
.trust-badge-sub {
  font-size: 0.7rem; color: #64748b;
}
.trust-badge-1 {
  top: 0px; right: -20px;
  animation: float 3.5s ease-in-out infinite 0.3s;
}
.trust-badge-2 {
  bottom: 60px; left: -20px;
  animation: float 3.5s ease-in-out infinite 0.8s;
}
.trust-badge-3 {
  bottom: -10px; right: 10px;
  animation: float 3.5s ease-in-out infinite 1.2s;
}

@media (max-width: 768px) {
  .trust-badge { position: static; margin-top: 1rem; }
  .trust-visual { flex-direction: column; min-height: auto; gap: 1rem; }
}


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

/* ── Minimal Service Cards ── */
.service-card-minimal {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 1.5rem;
  padding: 2rem;
  backdrop-filter: blur(16px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.service-card-minimal::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, #0369a1, #0ea5e9, #059669);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.service-card-minimal:hover {
  background: rgba(255,255,255,0.12);
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  border-color: rgba(125,211,252,0.3);
}
.service-card-minimal:hover::before {
  transform: scaleX(1);
}
.scm-icon-wrap {
  width: 56px; height: 56px;
  flex-shrink: 0;
  background: linear-gradient(135deg, rgba(14,165,233,0.2), rgba(99,102,241,0.2));
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 1rem;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 16px rgba(14,165,233,0.2);
}
.scm-icon { font-size: 1.75rem; color: #7dd3fc; }
.scm-content { flex: 1; }
.scm-title {
  font-size: 1.2rem; font-weight: 800;
  color: white; margin-bottom: 0.6rem;
  letter-spacing: -0.02em;
}
.scm-desc {
  font-size: 0.95rem; line-height: 1.7;
  color: rgba(255,255,255,0.65);
}

/* ── Services CTA Button ── */
.services-cta-btn {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #0369a1, #0ea5e9);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 30px rgba(14,165,233,0.35);
  letter-spacing: 0.02em;
}
.services-cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(14,165,233,0.5);
}

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


/* ── WhatsApp FAB ── */
.whatsapp-fab {
  position: fixed; bottom: 2rem; right: 2rem; z-index: 1000;
  background: #25d366; color: white;
  border-radius: 9999px;
  padding: 0.85rem 1.25rem;
  display: flex; align-items: center; gap: 0.5rem;
  box-shadow: 0 4px 24px rgba(37,211,102,0.4);
  text-decoration: none; font-weight: 600; font-size: 0.875rem;
  transition: transform 0.2s, box-shadow 0.2s;
}
.whatsapp-fab:hover { transform: translateY(-3px) scale(1.05); box-shadow: 0 8px 32px rgba(37,211,102,0.5); }
.whatsapp-label { display: block; }



@media (max-width: 480px) {
  .section-tag1 { display: inline-block; background: rgba(14,165,233,0.15); color: #7dd3fc; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.3); margin-bottom: 1rem; margin-left: 80px; }


.section-tag11 {
  display: inline-block; background: rgba(14,165,233,0.1); color: #0369a1;
  font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.2); margin-bottom: 1rem;
}
.section-title1 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: #0c4a6e; line-height: 1.2; margin-bottom: 1rem; text-align: center; }
.section-sub1 { color: #64748b; font-size: 1.05rem; max-width: 560px; margin: 0 auto; line-height: 1.7; text-align: center; }




}
</style>
