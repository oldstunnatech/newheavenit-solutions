<template>
  <div class="overflow-x-hidden">

    <!-- HERO SECTION -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">

  <!-- Background video -->
  <video
    class="absolute inset-0 w-full h-full object-cover z-0"
    src="https://res.cloudinary.com/lu6y4btx/video/upload/v1784833222/28115-367748176_olrl4i.mp4"
    autoplay
    loop
    muted
    playsinline
    preload="auto"
  />

  <!-- Dark overlay so text stays readable -->
  <div class="absolute inset-0 z-1 hero-overlay" />

  <!-- Hero content -->
  <div class="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">

    <div class="badge-pill animate-fade-in-down">
      <span class="pulse-dot" />
      <span>Now Accepting New Clients</span>
      <span class="pulse-dot" />
    </div>

    <h1 class="hero-title animate-fade-in-up">
      <span class="block hero-line-1 mb-3">NewHeaven IT</span>
      <span class="block gradient-text">Solutions</span>
    </h1>

    <!-- Motto -->
    <p class="hero-motto animate-fade-in-up-delay">
      Elevating Business Beyond the Horizon
    </p>

    <!-- Subheading -->
    <p class="hero-sub animate-fade-in-up-delay2">
      From professional websites to data analytics, data mining, and machine
      learning solutions — we give freelancers and businesses across Nigeria
      and the world the tools to grow smarter and compete stronger.
    </p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in-up-delay2">
      <UButton to="/services" size="xl" color="primary" variant="solid" class="hero-btn-primary">
        <Icon name="ph:sparkle-fill" class="mr-2" /> Explore Solutions
      </UButton>
      <UButton to="/contact" size="xl" variant="outline" class="hero-btn-outline">
        <Icon name="ph:rocket-launch-fill" class="mr-2" /> Let's talk
      </UButton>
    </div>

  </div>

</section>


    <!-- WHY US SECTION -->
<section class="relative py-32 px-6 overflow-hidden">

  <!-- Background video -->
  <video
    class="absolute inset-0 w-full h-full object-cover z-0"
    src="https://res.cloudinary.com/lu6y4btx/video/upload/v1784833445/132838-754950587_ddyip3.mp4"
    autoplay
    loop
    muted
    playsinline
    preload="auto"
  />

  <!-- Overlay -->
  <div class="absolute inset-0 z-1 why-video-overlay" />

  <div class="relative z-10 max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

      <!-- Left: Values -->
      <div>
        <span class="section-tag-why">Our Values</span>
        <h2 class="section-title-why">Why NewHeaven IT Solutions?</h2>

        <div class="space-y-6 mt-8">
          <div v-for="reason in reasons" :key="reason.title" class="reason-card-why">
            <div class="reason-icon-wrap-why">
              <Icon :name="reason.icon" class="reason-icon-el-why" />
            </div>
            <div>
              <h4 class="reason-title-why">{{ reason.title }}</h4>
              <p class="reason-desc-why">{{ reason.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Trust panel -->
      <div class="trust-panel">

        <!-- Headline row -->
        <div class="trust-headline-row">
          <div class="trust-headline-icon">
            <Icon name="ph:seal-check-fill" class="text-sky-500" style="font-size:2rem" />
          </div>
          <div>
            <h3 class="trust-headline-title">Trusted by Founders & Businesses</h3>
            <p class="trust-headline-sub">Nigeria · Africa · Worldwide</p>
          </div>
        </div>

        <!-- Stats row -->
        <div class="trust-stats-row">
          <div class="trust-stat-block" v-for="stat in trustStats" :key="stat.label">
            <span class="tsb-val">{{ stat.val }}</span>
            <span class="tsb-label">{{ stat.label }}</span>
          </div>
        </div>

        <div class="tp-divider" />

        <!-- Trust signals -->
        <div class="trust-signals">
          <div class="trust-signal" v-for="signal in trustSignals" :key="signal.title">
            <div class="ts-icon-wrap" :style="`background: ${signal.bg}`">
              <Icon :name="signal.icon" :style="`color: ${signal.color}`" class="ts-icon" />
            </div>
            <div class="ts-body">
              <p class="ts-title">{{ signal.title }}</p>
              <p class="ts-desc">{{ signal.desc }}</p>
            </div>
            <Icon name="ph:check-circle-fill" class="ts-check" />
          </div>
        </div>

        <div class="tp-divider" />

        <!-- Founder quote -->
        <div class="trust-commitment">
          <Icon name="ph:quotes-fill" class="trust-quote-icon" />
          <p class="trust-quote-text">
            Every project we take on is treated as a mission, not a transaction.
            Your growth is the metric we measure ourselves by.
          </p>
          <div class="trust-sig">
            <div class="trust-sig-avatar">OP</div>
            <div>
              <p class="trust-sig-name">Oguntola Pelumi</p>
              <p class="trust-sig-role">Founder, NewHeaven IT Solutions</p>
            </div>
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
   <section class="relative py-32 px-6 overflow-hidden">

  <!-- Background video -->
  <video
    class="absolute inset-0 w-full h-full object-cover z-0"
    src="https://res.cloudinary.com/lu6y4btx/video/upload/v1784833569/144555-784867402_gir6bx.mp4"
    autoplay
    loop
    muted
    playsinline
    preload="auto"
  />

  <!-- Overlay -->
  <div class="absolute inset-0 z-1 services-video-overlay" />

  <div class="relative z-10 max-w-7xl mx-auto">

    <!-- Header -->
    <div class="text-center mb-20">
      <span class="services-tag">What We Offer</span>
      <h2 class="services-title">Our Services</h2>
      <p class="services-sub">
        From professional websites to machine learning models — we cover
        the full spectrum of what your business needs to grow digitally.
      </p>
    </div>

    <!-- Service cards -->
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
   <section class="relative py-32 px-6 overflow-hidden">

  <!-- Background video -->
  <video
    class="absolute inset-0 w-full h-full object-cover z-0"
    src="https://res.cloudinary.com/lu6y4btx/video/upload/v1784833681/22183-712840599_frir9i.mp4"
    autoplay
    loop
    muted
    playsinline
    preload="auto"
  />

  <!-- Overlay -->
  <div class="absolute inset-0 z-1 cta-video-overlay" />

  <div class="relative z-10 max-w-3xl mx-auto text-center">
    <Icon
      name="ph:star-four-fill"
      class="text-yellow-300 mb-6"
      style="font-size:3rem; filter: drop-shadow(0 0 20px rgba(252,211,77,0.8))"
    />
    <h2 class="cta-video-title">
      Ready to Elevate <br/>Your Business?
    </h2>
    <p class="cta-video-sub">
      Let's build something extraordinary together. Your vision, our expertise.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <UButton to="/contact" size="xl" variant="solid" color="neutral" class="cta-btn-white">
        <Icon name="ph:handshake-fill" class="mr-2" /> Contact Us
      </UButton>
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

import { onMounted, onUnmounted, nextTick } from  'vue'


const trustStats = [
  { val: '10+', label: 'Projects' },
  { val: '100%', label: 'Satisfaction' },
  { val: '2+', label: 'Years' },
  { val: '4', label: 'Services' },
]

const trustSignals = [
  {
    icon: 'ph:shield-check-fill',
    title: 'Secure & Reliable',
    desc: 'SSL, HTTPS & industry best practices on every project',
    bg: 'rgba(5,150,105,0.1)',
    color: '#059669',
  },
  {
    icon: 'ph:clock-countdown-fill',
    title: 'Fast Response Time',
    desc: 'Every message replied to within minutes, not days',
    bg: 'rgba(3,105,161,0.1)',
    color: '#0369a1',
  },
  {
    icon: 'ph:hand-heart-fill',
    title: 'Free Consultation',
    desc: 'Talk to us first — no commitment, no strings attached',
    bg: 'rgba(225,29,72,0.1)',
    color: '#e11d48',
  },
  {
    icon: 'ph:arrows-clockwise-fill',
    title: 'Ongoing Support',
    desc: 'We don\'t disappear after delivery — we stay with you',
    bg: 'rgba(124,58,237,0.1)',
    color: '#7c3aed',
  },
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
/* ── Video overlay ── */
.hero-overlay {
  background: linear-gradient(
    180deg,
    rgba(5, 20, 50, 0.55) 0%,
    rgba(3, 105, 161, 0.45) 50%,
    rgba(5, 20, 50, 0.65) 100%
  );
}

/* ── Badge ── */
.badge-pill {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 999px;
  padding: 8px 20px;
  margin-bottom: 2rem;
  font-size: 0.875rem; font-weight: 600; color: white;
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  
}
.pulse-dot {
  width: 8px; height: 8px;
  background: #4ade80; border-radius: 50%;
  animation: pulse 2s ease infinite;
  box-shadow: 0 0 8px rgba(74,222,128,0.8);
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.6); }
  50% { box-shadow: 0 0 0 8px rgba(74,222,128,0); }
}

/* ── Hero title ── */
.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900; line-height: 1.05;
  letter-spacing: -0.03em; margin-bottom: 1rem;
}
.hero-line-1 { color: #ffffff; text-shadow: 0 2px 30px rgba(0,0,0,0.4); }
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

/* ── Motto ── */
.hero-motto {
  display: inline-block;
  font-size: 1.1rem; font-weight: 700;
  color: #4ade80;
  letter-spacing: 0.08em; font-style: italic;
  margin-bottom: 1.25rem;
  padding: 0.5rem 1.75rem;
  background: rgba(74,222,128,0.08);
  border: 1px solid rgba(74,222,128,0.25);
  border-radius: 9999px;
  box-shadow: 0 0 20px rgba(74,222,128,0.1);
  backdrop-filter: blur(8px);
}

/* ── Subheading ── */
.hero-sub {
  font-size: 1.1rem; color: rgba(255,255,255,0.85);
  max-width: 640px; margin: 0 auto 1.5rem;
  line-height: 1.8; text-shadow: 0 1px 10px rgba(0,0,0,0.3);
}

/* ── Buttons ── */
.hero-btn-primary {
  box-shadow: 0 8px 32px rgba(14,165,233,0.5);
  transition: all 0.3s;
}
.hero-btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(14,165,233,0.6);
}
.hero-btn-outline {
  border-color: rgba(255,255,255,0.6) !important;
  color: white !important;
  background: rgba(255,255,255,0.1) !important;
  backdrop-filter: blur(8px); transition: all 0.3s;
}
.hero-btn-outline:hover {
  transform: translateY(-4px);
  background: rgba(255,255,255,0.2) !important;
  border-color: white !important;
}

/* ── Scroll indicator ── */
.scroll-indicator { animation: bounce 2s ease infinite; }
.scroll-mouse {
  width: 24px; height: 40px;
  border: 2px solid rgba(255,255,255,0.5);
  border-radius: 12px;
  display: flex; justify-content: center; padding-top: 6px;
}
.scroll-wheel {
  width: 4px; height: 8px;
  background: white; border-radius: 2px;
  animation: scrollWheel 2s ease infinite; opacity: 0.8;
}
@keyframes scrollWheel {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(12px); opacity: 0; }
}
@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(6px); }
}

/* ── Fade in animations ── */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-down { animation: fadeInDown 0.8s ease both; }
.animate-fade-in-up { animation: fadeInUp 0.8s ease 0.2s both; }
.animate-fade-in-up-delay { animation: fadeInUp 0.8s ease 0.4s both; }
.animate-fade-in-up-delay2 { animation: fadeInUp 0.8s ease 0.6s both; }

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
/* ── Why Us Video Section ── */
.why-video-overlay {
  background: linear-gradient(
    135deg,
    rgba(5, 20, 50, 0.75) 0%,
    rgba(3, 105, 161, 0.65) 50%,
    rgba(5, 50, 30, 0.75) 100%
  );
}

/* Section tag & title */
.section-tag-why {
  display: inline-block;
  background: rgba(255,255,255,0.15);
  color: #7dd3fc;
  font-size: 0.8rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  padding: 6px 16px; border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.2);
  margin-bottom: 1rem;
  backdrop-filter: blur(8px);
  margin-left: 210px;
}
.section-title-why {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800; color: white;
  line-height: 1.2; margin-bottom: 1rem;
}

/* Reason cards */
.reason-card-why {
  display: flex; align-items: flex-start; gap: 1rem;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 1rem; padding: 1.25rem 1.5rem;
  backdrop-filter: blur(12px);
  transition: all 0.3s;
}
.reason-card-why:hover {
  background: rgba(255,255,255,0.14);
  transform: translateX(6px);
  border-color: rgba(125,211,252,0.4);
}
.reason-icon-wrap-why {
  width: 44px; height: 44px; flex-shrink: 0;
  background: rgba(14,165,233,0.2);
  border: 1px solid rgba(125,211,252,0.3);
  border-radius: 0.75rem;
  display: flex; align-items: center; justify-content: center;
}
.reason-icon-el-why { font-size: 1.3rem; color: #7dd3fc; }
.reason-title-why {
  font-weight: 700; color: white;
  font-size: 0.95rem; margin-bottom: 0.25rem;
}
.reason-desc-why {
  color: rgba(255,255,255,0.7);
  font-size: 0.875rem; line-height: 1.6;
}

/* ── Trust Panel ── */
.trust-panel {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 2rem; padding: 2.5rem;
  width: 100%; max-width: 420px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.2);
  backdrop-filter: blur(5px);
  margin-left: 80px;
}

/* Headline row */
.trust-headline-row {
  display: flex; align-items: center;
  gap: 1rem; margin-bottom: 1.75rem;
}
.trust-headline-icon {
  width: 52px; height: 52px;
  background: rgba(14,165,233,0.08);
  border: 1px solid rgba(186,230,253,0.8);
  border-radius: 1rem;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.trust-headline-title { color: white; font-weight: bold; }
.trust-headline-sub { color: #7dd3fc; font-weight: bold; }

/* Stats row */
.trust-stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem; margin-bottom: 1.75rem;
}
.trust-stat-block {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
}

.tsb-val {
  font-size: 1.3rem; font-weight: 900;
  color: #7dd3fc;; line-height: 1;
  margin-bottom: 0.25rem;
}
.tsb-label {
  font-size: 0.6rem; font-weight: 600;
   color: rgba(255,255,255,0.6); text-transform: uppercase;
  letter-spacing: 0.05em; line-height: 1.3;
  text-align: center;
}

/* Divider */
.tp-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #bae6fd, transparent);
  margin: 1.5rem 0;
}

/* Trust signals */
.trust-signals {
  display: flex; flex-direction: column; gap: 0.75rem;
}
.trust-signal {
  display: flex; align-items: center; gap: 0.875rem;
  padding: 0.875rem 1rem;
  border-radius: 0.875rem;
  transition: all 0.2s ease;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
}
.trust-signal:hover {
  background: rgba(255,255,255,0.14);
  border-color: rgba(125,211,252,0.4);
  transform: translateX(4px);
}
.ts-icon-wrap {
  width: 38px; height: 38px;
  border-radius: 0.6rem;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.ts-icon { font-size: 1.1rem; }
.ts-body { flex: 1; }
.ts-title {
  font-size: 0.85rem; font-weight: 700;
  color: white; margin-bottom: 0.1rem;
}
.ts-desc { font-size: 0.75rem; color: rgba(255,255,255,0.65); line-height: 1.4; }
.ts-check { color: #4ade80; font-size: 1.1rem; flex-shrink: 0; }

/* Commitment quote */
.trust-commitment { position: relative; }
.trust-quote-icon {
  font-size: 1.5rem; color: rgba(255,255,255,0.3);;
  margin-bottom: 0.5rem; display: block;
}
.trust-quote-text {
  font-size: 0.9rem; line-height: 1.7;
  color: rgba(255,255,255,0.75); font-style: italic;
  margin-bottom: 1.25rem;
}
.trust-sig { display: flex; align-items: center; gap: 0.75rem; color: white; }
.trust-sig-avatar {
  width: 40px; height: 40px; border-radius: 50%;
  background: linear-gradient(135deg, #0369a1, #0ea5e9);
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 0.8rem; color: white; flex-shrink: 0;
}
.trust-sig-name { font-size: 0.875rem; font-weight: 700; color: white; }
.trust-sig-role { font-size: 0.75rem; color: rgba(255,255,255,0.6); }
.trust-headline-icon {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
}




/* ── SERVICE CARDS ── */
/* ── Services Video Section ── */
.services-video-overlay {
  background: linear-gradient(
    160deg,
    rgba(2, 10, 30, 0.82) 0%,
    rgba(3, 69, 120, 0.72) 50%,
    rgba(2, 30, 15, 0.82) 100%
  );
}

.services-tag {
  display: inline-block;
  background: rgba(255,255,255,0.12);
  color: #7dd3fc;
  font-size: 0.8rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 6px 18px; border-radius: 999px;
  border: 1px solid rgba(125,211,252,0.3);
  margin-bottom: 1rem;
  backdrop-filter: blur(8px);
}
.services-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800; color: white;
  line-height: 1.1; margin-bottom: 1rem;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
  letter-spacing: -0.02em;
}
.services-sub {
  color: rgba(255,255,255,0.7);
  font-size: 1.05rem; line-height: 1.7;
  max-width: 560px; margin: 0 auto;
}

/* Service cards over video */
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
  background: rgba(255,255,255,0.13);
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  border-color: rgba(125,211,252,0.35);
}
.service-card-minimal:hover::before {
  transform: scaleX(1);
}
.scm-icon-wrap {
  width: 56px; height: 56px;
  flex-shrink: 0;
  background: rgba(14,165,233,0.15);
  border: 1px solid rgba(125,211,252,0.25);
  border-radius: 1rem;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 16px rgba(14,165,233,0.2);
}
.scm-icon {
  font-size: 1.75rem; color: #7dd3fc;
  filter: drop-shadow(0 0 6px rgba(125,211,252,0.4));
}
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

/* CTA button */
/* ── CTA Video Section ── */
.cta-video-overlay {
  background: linear-gradient(
    180deg,
    rgba(2, 10, 35, 0.80) 0%,
    rgba(3, 69, 120, 0.70) 50%,
    rgba(2, 10, 35, 0.85) 100%
  );
}
.cta-video-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900; color: white;
  line-height: 1.1; margin-bottom: 1.25rem;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 30px rgba(0,0,0,0.4);
}
.cta-video-sub {
  color: rgba(255,255,255,0.8);
  font-size: 1.15rem; line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 500px; margin-left: auto; margin-right: auto;
}
.cta-btn-white {
  background: white !important;
  color: #0369a1 !important;
  font-weight: 700;
  transition: all 0.3s;
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
}
.cta-btn-white:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
}

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

@media (max-width: 768px) {
  .trust-panel {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 2rem; padding: 2.5rem;
  width: 100%; max-width: 420px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.2);
  backdrop-filter: blur(5px);
  margin-left: 0px;
}
}


@media (max-width: 480px) {
  .section-tag1 { display: inline-block; background: rgba(14,165,233,0.15); color: #7dd3fc; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.3); margin-bottom: 1rem; margin-left: 80px; }


.section-tag11 {
  display: inline-block; background: rgba(14,165,233,0.1); color: #0369a1;
  font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.2); margin-bottom: 1rem;
}
.section-title1 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: #0c4a6e; line-height: 1.2; margin-bottom: 1rem; text-align: center; }
.section-sub1 { color: #64748b; font-size: 1.05rem; max-width: 560px; margin: 0 auto; line-height: 1.7; text-align: center; }

.trust-panel {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 2rem; padding: 2.5rem;
  width: 100%; max-width: 420px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.2);
  backdrop-filter: blur(5px);
  margin-left: 0px;
}

.section-tag-why {
  display: inline-block;
  background: rgba(255,255,255,0.15);
  color: #7dd3fc;
  font-size: 0.8rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  padding: 6px 16px; border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.2);
  margin-bottom: 1rem;
  backdrop-filter: blur(8px);
  margin-left: 105px;
}
.section-title-why {
  font-size: 20px;
  font-weight: 800; color: white;
  line-height: 1.2; margin-bottom: 1rem;
  margin-left: 20px;
}

}
</style>
