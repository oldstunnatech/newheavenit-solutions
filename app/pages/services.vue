<template>
  <div class="overflow-x-hidden">

    <!-- HERO -->
    <section class="relative py-36 px-6 overflow-hidden">

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

  <!-- Overlay -->
  <div class="absolute inset-0 z-1 services-hero-overlay" />

  <div class="relative z-10 max-w-4xl mx-auto text-center">
    <span class="section-tag animate-fade-in-down">What We Offer</span>
    <h1 class="page-title animate-fade-in-up">
      Everything your business needs <br />
      <span class="gradient-text">to grow digitally.</span>
    </h1>
    <p class="page-sub animate-fade-in-up-delay">
      Four focused services. One dedicated partner. Whether you need a
      professional website, mined data, sharp analytics, or a machine
      learning model — we build it right, the first time.
    </p>
  </div>

</section>

    <!-- MAIN SERVICES -->
    <section class="relative py-24 px-6 overflow-hidden">

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
  <div class="absolute inset-0 z-1 main-services-overlay" />

  <div class="relative z-10 max-w-7xl mx-auto">
    <div v-for="(service, i) in mainServices" :key="service.title"
      class="service-row" :class="i % 2 === 1 ? 'flex-row-reverse' : ''">

      <!-- Text -->
      <div class="service-text">
        <div class="service-icon-wrap-v">
          <Icon :name="service.icon" class="service-icon-el-v" />
        </div>
        <span class="service-tag-v">{{ service.tag }}</span>
        <h2 class="service-heading-v">{{ service.title }}</h2>
        <p class="service-desc-v">{{ service.description }}</p>
        <ul class="service-list-v">
          <li v-for="item in service.items" :key="item">
            <Icon name="ph:check-circle-fill" class="check-icon-v" />
            {{ item }}
          </li>
        </ul>
        <UButton :to="'/contact'" color="primary" variant="solid" size="lg" class="mt-6 service-cta">
          <Icon name="ph:arrow-right-bold" class="mr-2" /> Get Started
        </UButton>
      </div>

      <!-- Visual card -->
      <!-- Visual image -->
<div class="service-visual">
  <div class="service-img-wrap">
    <img
      :src="service.image"
      :alt="service.title"
      class="service-img"
    />
    <div class="service-img-overlay" />
    <div class="service-img-badge">
      <Icon name="ph:star-fill" class="text-yellow-400 mr-1" />
      {{ service.badge }}
    </div>
  </div>
</div>

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
  <div class="absolute inset-0 z-1 services-cta-overlay" />

  <div class="relative z-10 max-w-3xl mx-auto text-center">
    <Icon
      name="ph:rocket-launch-fill"
      class="text-yellow-300 mb-6"
      style="font-size:3rem; filter: drop-shadow(0 0 20px rgba(252,211,77,0.6))"
    />
    <h2 class="text-4xl md:text-5xl font-bold text-white mb-6"
      style="text-shadow: 0 2px 30px rgba(0,0,0,0.4)">
      Not sure which solutions <br />you need?
    </h2>
    <p class="text-sky-100 text-lg mb-10 opacity-90">
      Contact us for a free consultation. Together, we will find the right path.
    </p>
    <UButton to="/contact" size="xl" class="cta-btn-white">
      <Icon name="ph:calendar-check-fill" class="mr-2" /> Book Free Consultation
    </UButton>
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
const mainServices = [
  {
    tag: 'Web Development',
    icon: 'ph:globe-hemisphere-west-fill',
    title: 'Website Development',
    image: '/annie-spratt-QckxruozjRg-unsplash.jpg',
    description: 'Professional, modern websites built to represent your brand and convert visitors into clients. We design and build websites that not only look great but are built to function, rank, and grow with your business.',
    items: [
      'Custom Website Design',
      'Responsive Mobile-First Layout',
      'Landing Page Development',
      'E-Commerce Website',
      'Business Portfolio Website',
      'Website Speed Optimization',
      'SEO-Ready Structure',
      'Contact Form Integration',
      'Website Maintenance & Updates',
      'Domain & Hosting Setup',
      'SSL Certificate Configuration',
      'Content Management System (CMS)',
    ],
    visualLabel: 'website.vue',
    visualLines: [
      { icon: 'ph:paint-brush-fill', text: 'Custom design applied ✓', width: 90 },
      { icon: 'ph:device-mobile-fill', text: 'Mobile responsive ✓', width: 80 },
      { icon: 'ph:rocket-launch-fill', text: 'Deployed & live ✓', width: 85 },
      { icon: 'ph:lock-fill', text: 'SSL configured ✓', width: 70 },
    ],
    badge: 'Production Ready',
  },
  {
    tag: 'Data Mining',
    icon: 'ph:magnifying-glass-fill',
    title: 'Data Mining',
    image: '/pexels-kampus-6248987.jpg',
    description: 'We extract, collect, and structure the right data from the right sources so your startup stops guessing and starts making decisions backed by real market intelligence.',
    items: [
      'Competitor Price & Product Monitoring',
      'B2B Lead Generation & Extraction',
      'Market Research Data Collection',
      'Social Media Data Mining',
      'Customer Sentiment Analysis',
      'Industry Trend Tracking',
      'E-Commerce Product Data Scraping',
      'Automated Data Collection Scripts',
      'Data Cleaning & Structuring',
      'Delivered in Excel, CSV or Dashboard',
    ],
    visualLabel: 'mining.py',
    visualLines: [
      { icon: 'ph:magnifying-glass-fill', text: 'Scraping 1,200 records...', width: 88 },
      { icon: 'ph:funnel-fill', text: 'Data cleaned & structured ✓', width: 75 },
      { icon: 'ph:export-fill', text: 'Exported to CSV & Excel ✓', width: 82 },
      { icon: 'ph:check-circle-fill', text: 'B2B leads ready ✓', width: 70 },
    ],
    badge: 'Market Intelligence',
  },
  {
    tag: 'Data & Analytics',
    icon: 'ph:chart-bar-fill',
    title: 'Data Analysis',
    image: '/path-digital-tR0jvlsmCuQ-unsplash.jpg',

    description: 'We turn your raw, messy data into clear visuals and actionable insights so you know exactly what is working, what is not, and where to focus next to grow your business.',
    items: [
      'Sales & Revenue Analysis',
      'Customer Behavior Analysis',
      'Interactive Dashboard Design',
      'KPI Tracking & Reporting',
      'Market & Competitor Analysis',
      'Financial Data Analysis',
      'Product Performance Analysis',
      'Google Analytics & Social Media Insights',
      'Monthly & Weekly Business Reports',
      'Excel, Power BI & Python Reports',
      'Data Cleaning & Preparation',
      'Actionable Recommendations',
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
    title: 'Data Science & AI',
    image: '/pexels-yankrukov-7693692.jpg',
    description: 'We build intelligent machine learning models and AI-powered systems that help your startup predict outcomes, automate decisions, and solve complex business problems before they become expensive mistakes.',
    items: [
      'Custom Machine Learning Model Development',
      'Sales & Demand Forecasting',
      'Customer Churn Prediction',
      'Fraud & Anomaly Detection',
      'Natural Language Processing (NLP)',
      'Sentiment Analysis & Text Classification',
      'Recommendation Systems',
      'Computer Vision & Image Recognition',
      'Predictive Analytics & Forecasting',
      'AI-Powered Business Automation',
      'Model Deployment & Integration',
      'Model Performance Monitoring & Retraining',
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

/* ── Services Hero Video ── */
.services-hero-overlay {
  background: linear-gradient(
    180deg,
    rgba(2, 10, 35, 0.65) 0%,
    rgba(3, 69, 120, 0.55) 50%,
    rgba(2, 10, 35, 0.70) 100%
  );
}

.section-tag {
  display: inline-block; background: rgba(14,165,233,0.1); color: white;
  font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.2); margin-bottom: 1rem;
}
.section-title { font-size: clamp(2rem, 5vw, 3rem); font-weight: 800; color: white; line-height: 1.2; margin-bottom: 1rem; text-align: center; }
.section-sub { color: white; font-size: 1.05rem; max-width: 560px; margin: 0 auto; line-height: 1.7; text-align: center; }

.page-title {
  font-size: clamp(2.5rem, 4vw, 4.5rem); font-weight: 900;
  color: white; line-height: 1.1; margin: 1rem 0; letter-spacing: -0.02em;
}
.gradient-text {
background: linear-gradient(180deg, #0ea5e9 0%, #38bdf8 30%, #bae6fd 70%, #e0f2fe 100%);  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  background-size: 200%; animation: gradientMove 4s ease infinite;
}
@keyframes gradientMove {
  0% { background-position: 0%; } 50% { background-position: 100%; } 100% { background-position: 0%; }
}
.page-sub { color: white; font-size: 1.1rem; max-width: 600px; margin: 0 auto; line-height: 1.8; opacity: 0.85; }

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


/* ── Main Services Video Section ── */
.main-services-overlay {
  background: linear-gradient(
    135deg,
    rgba(2, 10, 35, 0.80) 0%,
    rgba(3, 69, 120, 0.70) 50%,
    rgba(2, 30, 15, 0.80) 100%
  );
}

/* Service tag */
.service-tag-v {
  display: inline-block;
  background: rgba(255,255,255,0.12);
  color: #7dd3fc;
  font-size: 0.8rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  padding: 6px 16px; border-radius: 999px;
  border: 1px solid rgba(125,211,252,0.3);
  margin-bottom: 1rem;
  backdrop-filter: blur(8px);
}

/* Service heading & desc */
.service-heading-v {
  font-size: 2rem; font-weight: 800;
  color: white; margin: 0.75rem 0 1rem;
  line-height: 1.2;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
.service-desc-v {
  color: rgba(255,255,255,0.75);
  font-size: 1rem; line-height: 1.8;
  margin-bottom: 1.5rem;
}

/* Service icon */
.service-icon-wrap-v {
  width: 72px; height: 72px;
  background: rgba(14,165,233,0.15);
  border: 1px solid rgba(125,211,252,0.3);
  border-radius: 1.25rem;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.25rem;
  box-shadow: 0 8px 24px rgba(14,165,233,0.2);
}
.service-icon-el-v {
  font-size: 2.25rem; color: #7dd3fc;
  filter: drop-shadow(0 0 8px rgba(125,211,252,0.5));
}

/* Service list */
.service-list-v {
  list-style: none; padding: 0;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 0.6rem; margin-bottom: 1rem;
}
.service-list-v li {
  display: flex; align-items: center;
  gap: 8px; color: rgba(255,255,255,0.85);
  font-size: 0.9rem; font-weight: 500;
}
.check-icon-v {
  color: #4ade80; font-size: 1.1rem; flex-shrink: 0;
}

/* Visual card */
.visual-card-v {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 1.5rem; overflow: hidden;
  backdrop-filter: blur(16px);
  box-shadow: 0 30px 60px rgba(0,0,0,0.3);
  transition: all 0.4s;
}
.visual-card-v:hover {
  transform: translateY(-8px);
  box-shadow: 0 40px 80px rgba(0,0,0,0.4);
  border-color: rgba(125,211,252,0.3);
}
.visual-header-v {
  background: rgba(255,255,255,0.08);
  padding: 1rem 1.5rem;
  display: flex; align-items: center; gap: 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.visual-label-v {
  font-size: 0.85rem; font-weight: 600;
  color: #7dd3fc; font-family: monospace;
}
.visual-body-v {
  padding: 1.5rem;
  display: flex; flex-direction: column; gap: 1rem;
}
.visual-line-v {
  display: flex; align-items: center;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(125,211,252,0.15);
  border-radius: 0.5rem; padding: 0.75rem 1rem;
  font-size: 0.85rem; color: #7dd3fc;
  font-family: monospace; font-weight: 500;
}
.visual-badge-v {
  margin: 0 1.5rem 1.5rem;
  display: inline-flex; align-items: center;
  background: rgba(254,243,199,0.15);
  border: 1px solid rgba(252,211,77,0.3);
  border-radius: 999px;
  padding: 6px 16px;
  font-size: 0.8rem; font-weight: 700;
  color: #fcd34d;
}

/* Dots */
.dot { width: 12px; height: 12px; border-radius: 50%; }
.red { background: #f87171; }
.yellow { background: #fbbf24; }
.green { background: #4ade80; }

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


/* ── Service Images ── */
.service-img-wrap {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.4);
  transition: all 0.4s ease;
  aspect-ratio: 4 / 3;
}
.service-img-wrap:hover {
  transform: translateY(-8px);
  box-shadow: 0 40px 80px rgba(0,0,0,0.5);
}
.service-img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}
.service-img-wrap:hover .service-img {
  transform: scale(1.05);
}
.service-img-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(
    180deg,
    transparent 40%,
    rgba(2, 10, 35, 0.7) 100%
  );
}
.service-img-badge {
  position: absolute;
  bottom: 1.25rem; left: 1.25rem;
  display: inline-flex; align-items: center;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 999px;
  padding: 6px 16px;
  font-size: 0.8rem; font-weight: 700;
  color: white;
  backdrop-filter: blur(12px);
}


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

/* ── Services CTA Video ── */
.services-cta-overlay {
  background: linear-gradient(
    180deg,
    rgba(2, 10, 35, 0.80) 0%,
    rgba(3, 69, 120, 0.70) 50%,
    rgba(2, 10, 35, 0.85) 100%
  );
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
</style>
