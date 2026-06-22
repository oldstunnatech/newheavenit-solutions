<template>
  <div class="overflow-x-hidden">

    <!-- HERO -->
    <section class="relative py-36 px-6 overflow-hidden services-hero">
      <div class="absolute inset-0 overflow-hidden">
        <div class="light-ray ray-1" />
        <div class="light-ray ray-2" />
        <div class="light-ray ray-3" />
      </div>
      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <span class="section-tag animate-fade-in-down">What We Offer</span>
        <h1 class="page-title animate-fade-in-up">
          Services Built for <br />
          <span class="gradient-text">Real Business Growth</span>
        </h1>
        <p class="page-sub animate-fade-in-up-delay">
          From sleek web applications to advanced AI models — NewHeaven IT Solutions
          covers every layer of your digital transformation journey.
        </p>
      </div>
    </section>

    <!-- MAIN SERVICES -->
    <section class="py-24 px-6 section-light">
      <div class="max-w-7xl mx-auto">
        <div v-for="(service, i) in mainServices" :key="service.title"
          class="service-row" :class="i % 2 === 1 ? 'flex-row-reverse' : ''">
          <!-- Text -->
          <div class="service-text">
            <div class="service-icon-wrap">
              <Icon :name="service.icon" class="service-icon-el" />
            </div>
            <span class="section-tag">{{ service.tag }}</span>
            <h2 class="service-heading">{{ service.title }}</h2>
            <p class="service-desc">{{ service.description }}</p>
            <ul class="service-list">
              <li v-for="item in service.items" :key="item">
                <Icon name="ph:check-circle-fill" class="check-icon" />
                {{ item }}
              </li>
            </ul>
            <UButton :to="'/contact'" color="primary" variant="solid" size="lg" class="mt-6 service-cta">
              <Icon name="ph:arrow-right-bold" class="mr-2" /> Get Started
            </UButton>
          </div>

          <!-- Visual card -->
          <div class="service-visual">
            <div class="visual-card">
              <div class="visual-header">
                <div class="visual-dots">
                  <span class="dot red" /><span class="dot yellow" /><span class="dot green" />
                </div>
                <span class="visual-label">{{ service.visualLabel }}</span>
              </div>
              <div class="visual-body">
                <div v-for="line in service.visualLines" :key="line.text"
                  class="visual-line" :style="`width: ${line.width}%`">
                  <Icon :name="line.icon" class="text-sky-400 mr-2 flex-shrink-0" />
                  <span>{{ line.text }}</span>
                </div>
              </div>
              <div class="visual-badge">
                <Icon name="ph:star-fill" class="text-yellow-400 mr-1" />
                {{ service.badge }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS SECTION -->
    <section class="py-24 px-6 process-bg">
      <div class="max-w-5xl mx-auto text-center">
        <span class="section-tag">How We Work</span>
        <h2 class="section-title">Our Simple 4-Step Process</h2>
        <p class="section-sub mb-16">Clear, transparent, and collaborative from start to finish.</p>

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

    <!-- ADD-ONS -->
    <section class="py-24 px-6 section-light">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="section-tag">Add-Ons</span>
          <h2 class="section-title">Extra Services</h2>
          <p class="section-sub">Complement your core project with these powerful extras.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="addon in addons" :key="addon.title" class="addon-card">
            <Icon :name="addon.icon" class="addon-icon" />
            <h4 class="addon-title">{{ addon.title }}</h4>
            <p class="addon-desc">{{ addon.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-32 px-6 cta-bg overflow-hidden">
      <div class="cta-orb orb-1" />
      <div class="cta-orb orb-2" />
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <Icon name="ph:rocket-launch-fill" class="text-yellow-300 mb-6" style="font-size:3rem" />
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Not Sure Which Service <br />You Need?
        </h2>
        <p class="text-sky-100 text-lg mb-10">
          Book a free 30-minute consultation and we'll map out exactly what your business needs.
        </p>
        <UButton to="/contact" size="xl" class="cta-btn-white">
          <Icon name="ph:calendar-check-fill" class="mr-2" /> Book Free Consultation
        </UButton>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const mainServices = [
  {
    tag: 'Web Development',
    icon: 'ph:globe-hemisphere-west-fill',
    title: 'Fullstack Web Development',
    description: 'We design and build high-performance web applications from front to back. Whether you need a SaaS platform, a corporate site, or a custom internal tool — we deliver clean, scalable, and maintainable code.',
    items: [
      'Custom Vue / Nuxt / React applications',
      'RESTful & GraphQL API development',
      'Database design & optimization',
      'Cloud deployment (AWS, Vercel, Supabase)',
      'Authentication & role-based access',
      'Performance optimization & SEO',
    ],
    visualLabel: 'app.vue',
    visualLines: [
      { icon: 'ph:code-bold', text: 'defineNuxtConfig({ ... })', width: 90 },
      { icon: 'ph:database-fill', text: 'Supabase connected ✓', width: 75 },
      { icon: 'ph:cloud-arrow-up-fill', text: 'Deployed to Vercel ✓', width: 80 },
      { icon: 'ph:lock-fill', text: 'Auth configured ✓', width: 65 },
    ],
    badge: 'Production Ready',
  },
  {
    tag: 'Data & Analytics',
    icon: 'ph:chart-bar-fill',
    title: 'Data Analysis & Visualization',
    description: 'Turn your raw data into clear, actionable insights. We build interactive dashboards, automated reports, and data pipelines that help you make smarter decisions faster.',
    items: [
      'Interactive dashboards (Plotly, D3, Power BI)',
      'KPI tracking & automated reports',
      'Data cleaning & transformation',
      'SQL & NoSQL query optimization',
      'Business intelligence consulting',
      'Excel / Google Sheets automation',
      'Data Mining and Extraction',
    ],
    visualLabel: 'dashboard.py',
    visualLines: [
      { icon: 'ph:chart-line-up-fill', text: 'Revenue +34% this quarter', width: 85 },
      { icon: 'ph:users-fill', text: 'User growth: 1,240 new', width: 70 },
      { icon: 'ph:trend-up-fill', text: 'Conversion rate: 8.4%', width: 80 },
      { icon: 'ph:check-circle-fill', text: 'Report auto-generated ✓', width: 75 },
    ],
    badge: 'Insight Driven',
  },
  {
    tag: 'AI & Machine Learning',
    icon: 'ph:brain-fill',
    title: 'Data Science & AI Solutions',
    description: 'Leverage the power of machine learning and artificial intelligence to automate processes, predict outcomes, and unlock new opportunities hidden in your data.',
    items: [
      'Custom ML model development',
      'Predictive analytics & forecasting',
      'Natural Language Processing (NLP)',
      'Computer vision solutions',
      'AI integration into existing apps',
      'Model deployment & monitoring',
    ],
    visualLabel: 'model.py',
    visualLines: [
      { icon: 'ph:brain-fill', text: 'Model accuracy: 97.3%', width: 90 },
      { icon: 'ph:robot-fill', text: 'NLP pipeline active ✓', width: 75 },
      { icon: 'ph:trend-up-fill', text: 'Prediction confidence: high', width: 82 },
      { icon: 'ph:check-circle-fill', text: 'Deployed to production ✓', width: 70 },
    ],
    badge: 'AI Powered',
  },
]

const steps = [
  { icon: 'ph:chats-circle-fill', title: 'Discovery', desc: 'We learn about your business, goals, and challenges in a free consultation call.', },
  { icon: 'ph:blueprint-fill', title: 'Planning', desc: 'We map out the solution, tech stack, timeline and deliverables together.', },
  { icon: 'ph:code-fill', title: 'Build', desc: 'We develop, test, and iterate with regular updates and transparent communication.', },
  { icon: 'ph:rocket-launch-fill', title: 'Launch', desc: 'We deploy, hand over, and provide ongoing support to ensure everything runs perfectly.', },
]

const addons = [
  { icon: 'ph:magnifying-glass-fill', title: 'SEO Optimization', desc: 'Technical SEO, meta tags, sitemaps and structured data to rank higher on Google.' },
  { icon: 'ph:devices-fill', title: 'Responsive Design', desc: 'Pixel-perfect interfaces that look stunning on every screen size.' },
  { icon: 'ph:shield-check-fill', title: 'Security Audit', desc: 'Vulnerability assessment, HTTPS setup, and security best practices.' },
  { icon: 'ph:chart-pie-slice-fill', title: 'Analytics Setup', desc: 'Google Analytics, Plausible, or custom tracking configured for your needs.' },
  { icon: 'ph:envelope-fill', title: 'Email Automation', desc: 'Transactional emails, newsletters, and drip campaigns with Resend or SendGrid.' },
  { icon: 'ph:wrench-fill', title: 'Maintenance & Support', desc: 'Monthly retainer packages for updates, bug fixes, and feature additions.' },
]

useSeoMeta({
  title: 'Services — NewHeaven IT Solutions',
  description: 'Fullstack development, data analysis, and AI/ML services tailored for your business.',
})
</script>

<style scoped>
.services-hero {
  background: linear-gradient(180deg, #0ea5e9 0%, #38bdf8 30%, #bae6fd 70%, #e0f2fe 100%);
}
.light-ray {
  position: absolute; top: -10%; height: 120%;
  background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%);
  border-radius: 999px; animation: rayPulse 6s ease-in-out infinite;
}
.ray-1 { left: 20%; transform: rotate(-15deg); width: 60px; opacity: 0.3; animation-delay: 0s; }
.ray-2 { left: 50%; transform: rotate(5deg); width: 40px; opacity: 0.2; animation-delay: 2s; }
.ray-3 { left: 75%; transform: rotate(20deg); width: 80px; opacity: 0.25; animation-delay: 4s; }
@keyframes rayPulse {
  0%, 100% { opacity: 0.1; } 50% { opacity: 0.4; }
}
.section-light { background: linear-gradient(180deg, #e0f2fe 0%, #f0f9ff 50%, #ecfdf5 100%); }
.process-bg { background: linear-gradient(180deg, #ecfdf5 0%, #e0f2fe 100%); }
.cta-bg { background: linear-gradient(135deg, #0369a1 0%, #0ea5e9 40%, #059669 100%); }

.section-tag {
  display: inline-block; background: rgba(14,165,233,0.1); color: #0369a1;
  font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.2); margin-bottom: 1rem;
}
.section-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: #0c4a6e; line-height: 1.2; margin-bottom: 1rem; text-align: center; }
.section-sub { color: #64748b; font-size: 1.05rem; max-width: 560px; margin: 0 auto; line-height: 1.7; text-align: center; }

.page-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900;
  color: #0c4a6e; line-height: 1.1; margin: 1rem 0; letter-spacing: -0.02em;
}
.gradient-text {
  background: linear-gradient(90deg, #0c4a6e, #0369a1, #0ea5e9, #059669);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  background-size: 200%; animation: gradientMove 4s ease infinite;
}
@keyframes gradientMove {
  0% { background-position: 0%; } 50% { background-position: 100%; } 100% { background-position: 0%; }
}
.page-sub { color: #1e40af; font-size: 1.1rem; max-width: 600px; margin: 0 auto; line-height: 1.8; opacity: 0.85; }

/* SERVICE ROWS */
.service-row {
  display: flex; flex-direction: column; gap: 4rem; align-items: center;
  margin-bottom: 8rem;
}
@media (min-width: 768px) {
  .service-row { flex-direction: row; }
  .service-row.flex-row-reverse { flex-direction: row-reverse; }
}
.service-text { flex: 1; }
.service-icon-wrap {
  width: 72px; height: 72px;
  background: linear-gradient(135deg, #e0f2fe, #bae6fd);
  border-radius: 1.25rem; display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.25rem; box-shadow: 0 8px 24px rgba(14,165,233,0.2);
}
.service-icon-el { font-size: 2.25rem; color: #0369a1; }
.service-heading { font-size: 2rem; font-weight: 800; color: #0c4a6e; margin: 0.75rem 0 1rem; line-height: 1.2; }
.service-desc { color: #475569; font-size: 1rem; line-height: 1.8; margin-bottom: 1.5rem; }
.service-list { list-style: none; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; }
.service-list li { display: flex; align-items: center; gap: 8px; color: #334155; font-size: 0.9rem; font-weight: 500; }
.check-icon { color: #0ea5e9; font-size: 1.1rem; flex-shrink: 0; }
.service-cta { transition: all 0.3s; }
.service-cta:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(14,165,233,0.3); }

/* VISUAL CARD */
.service-visual { flex: 1; }
.visual-card {
  background: rgba(255,255,255,0.8); border: 1px solid #bae6fd;
  border-radius: 1.5rem; overflow: hidden; backdrop-filter: blur(12px);
  box-shadow: 0 30px 60px rgba(14,165,233,0.12); transition: all 0.4s;
}
.visual-card:hover { transform: translateY(-8px); box-shadow: 0 40px 80px rgba(14,165,233,0.18); }
.visual-header {
  background: linear-gradient(90deg, #e0f2fe, #bae6fd);
  padding: 1rem 1.5rem; display: flex; align-items: center; gap: 1rem;
  border-bottom: 1px solid #bae6fd;
}
.visual-dots { display: flex; gap: 6px; }
.dot { width: 12px; height: 12px; border-radius: 50%; }
.red { background: #f87171; } .yellow { background: #fbbf24; } .green { background: #4ade80; }
.visual-label { font-size: 0.85rem; font-weight: 600; color: #0369a1; font-family: monospace; }
.visual-body { padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
.visual-line {
  display: flex; align-items: center;
  background: linear-gradient(90deg, rgba(14,165,233,0.08), transparent);
  border: 1px solid rgba(186,230,253,0.6);
  border-radius: 0.5rem; padding: 0.75rem 1rem;
  font-size: 0.85rem; color: #0369a1; font-family: monospace; font-weight: 500;
  animation: slideIn 0.5s ease both;
}
@keyframes slideIn {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}
.visual-badge {
  margin: 0 1.5rem 1.5rem;
  display: inline-flex; align-items: center;
  background: linear-gradient(90deg, #fef9c3, #fef3c7);
  border: 1px solid #fcd34d; border-radius: 999px;
  padding: 6px 16px; font-size: 0.8rem; font-weight: 700; color: #92400e;
}

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

/* ADDONS */
.addon-card {
  background: rgba(255,255,255,0.7); border: 1px solid #bae6fd;
  border-radius: 1.25rem; padding: 1.75rem;
  transition: all 0.3s;
}
.addon-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(14,165,233,0.12); border-color: #38bdf8; }
.addon-icon { font-size: 2rem; color: #0369a1; margin-bottom: 1rem; display: block; }
.addon-title { font-size: 1rem; font-weight: 700; color: #0c4a6e; margin-bottom: 0.5rem; }
.addon-desc { color: #64748b; font-size: 0.875rem; line-height: 1.6; }

/* CTA */
.cta-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.3; }
.orb-1 { width: 400px; height: 400px; background: white; top: -100px; left: -100px; }
.orb-2 { width: 300px; height: 300px; background: #86efac; bottom: -50px; right: -50px; }
.cta-btn-white { background: white !important; color: #0369a1 !important; font-weight: 700; transition: all 0.3s; }
.cta-btn-white:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(0,0,0,0.2); }

/* ANIMATIONS */
@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in-down { animation: fadeInDown 0.8s ease both; }
.animate-fade-in-up { animation: fadeInUp 0.8s ease 0.2s both; }
.animate-fade-in-up-delay { animation: fadeInUp 0.8s ease 0.4s both; }
</style>
