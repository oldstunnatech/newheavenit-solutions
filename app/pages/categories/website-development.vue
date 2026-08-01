<template>
  <div class="overflow-x-hidden">

    <!-- HERO -->
    <section class="relative py-36 px-6 overflow-hidden">
      <video
        class="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/lu6y4btx/video/upload/q_auto,f_auto/v1784833222/28115-367748176_olrl4i.mp4"
        autoplay loop muted playsinline preload="auto"
      />
      <div class="absolute inset-0 z-1 service-hero-overlay" />
      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <NuxtLink to="/services" class="service-back-link">
          <Icon name="ph:arrow-left-bold" class="mr-1" /> Back to Services
        </NuxtLink>
        <span class="service-hero-tag">Web Development</span>
        <h1 class="service-hero-title">
          Professional Websites <br />
          <span class="service-hero-gradient">Built to Convert.</span>
        </h1>
        <p class="service-hero-sub">
          We design and build modern, fast, and responsive websites that represent
          your brand and turn visitors into paying clients.
        </p>
        <UButton to="/contact" size="xl" color="primary" variant="solid" class="mt-8">
          <Icon name="ph:calendar-check-fill" class="mr-2" /> Book Free Consultation
        </UButton>
      </div>
    </section>

    <!-- WHAT IT IS -->
    <section class="relative py-24 px-6 overflow-hidden">
      <video
        class="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/lu6y4btx/video/upload/q_auto,f_auto/v1784833569/144555-784867402_gir6bx.mp4"
        autoplay loop muted playsinline preload="none"
      />
      <div class="absolute inset-0 z-1 service-section-overlay" />
      <div class="relative z-10 max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span class="service-section-tag">What We Build</span>
            <h2 class="service-section-title">More Than Just a Website</h2>
            <p class="service-section-text">
              Your website is your most powerful sales tool working for you 24 hours
              a day, 7 days a week. We build websites that don't just look great, they
              perform, load fast, rank on Google, and convert visitors into clients.
            </p>
            <p class="service-section-text">
              Every website we build is mobile-first, SEO-ready, and designed with
              your specific business goals in mind — not a generic template.
            </p>
            <div class="service-who-card">
              <h4 class="service-who-title">
                <Icon name="ph:users-fill" class="mr-2 text-sky-400" /> Who This Is For
              </h4>
              <ul class="service-who-list">
                <li><Icon name="ph:check-fill" class="text-green-400 mr-2" /> Startups launching their first product</li>
                <li><Icon name="ph:check-fill" class="text-green-400 mr-2" /> Small businesses with no online presence</li>
                <li><Icon name="ph:check-fill" class="text-green-400 mr-2" /> Freelancers who need a portfolio site</li>
                <li><Icon name="ph:check-fill" class="text-green-400 mr-2" /> Businesses with an outdated website</li>
                <li><Icon name="ph:check-fill" class="text-green-400 mr-2" /> E-commerce stores ready to sell online</li>
              </ul>
            </div>
          </div>
          <div class="service-features-grid">
            <div v-for="feature in features" :key="feature.title" class="service-feature-card">
              <div class="service-feature-icon">
                <Icon :name="feature.icon" class="text-sky-300" style="font-size:1.5rem" />
              </div>
              <h4 class="service-feature-title">{{ feature.title }}</h4>
              <p class="service-feature-desc">{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DELIVERABLES -->
    <section class="relative py-24 px-6 overflow-hidden">
      <video
        class="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/lu6y4btx/video/upload/q_auto,f_auto/v1784833681/22183-712840599_frir9i.mp4"
        autoplay loop muted playsinline preload="none"
      />
      <div class="absolute inset-0 z-1 service-section-overlay" />
      <div class="relative z-10 max-w-5xl mx-auto text-center">
        <span class="service-section-tag">What You Get</span>
        <h2 class="service-section-title">Full Deliverables</h2>
        <p class="service-section-sub">Everything included in every website we build.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          <div v-for="item in deliverables" :key="item" class="service-deliverable-card">
            <Icon name="ph:diamond-fill" class="text-sky-400 mr-2" style="font-size:0.7rem" />
            {{ item }}
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="relative py-24 px-6 overflow-hidden">
      <video
        class="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/lu6y4btx/video/upload/q_auto,f_auto/v1784833222/28115-367748176_olrl4i.mp4"
        autoplay loop muted playsinline preload="none"
      />
      <div class="absolute inset-0 z-1 service-section-overlay" />
      <div class="relative z-10 max-w-5xl mx-auto text-center">
        <span class="service-section-tag">How It Works</span>
        <h2 class="service-section-title">Our Process</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div v-for="(step, i) in process" :key="step.title" class="service-step-card">
            <div class="service-step-number">{{ i + 1 }}</div>
            <Icon :name="step.icon" class="service-step-icon" />
            <h4 class="service-step-title">{{ step.title }}</h4>
            <p class="service-step-desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <section class="relative py-24 px-6 overflow-hidden">
      <video
        class="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/lu6y4btx/video/upload/q_auto,f_auto/v1784833569/144555-784867402_gir6bx.mp4"
        autoplay loop muted playsinline preload="none"
      />
      <div class="absolute inset-0 z-1 service-section-overlay" />
      <div class="relative z-10 max-w-5xl mx-auto text-center">
        <span class="service-section-tag">Investment</span>
        <h2 class="service-section-title">Pricing</h2>
        <p class="service-section-sub">Transparent pricing. No hidden fees.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div v-for="plan in pricing" :key="plan.name"
            class="service-pricing-card"
            :class="plan.featured ? 'service-pricing-featured' : ''"
          >
            <div v-if="plan.featured" class="service-pricing-badge">Most Popular</div>
            <h3 class="service-pricing-name">{{ plan.name }}</h3>
            <div class="service-pricing-price">
              <span class="service-pricing-amount">{{ plan.price }}</span>
              <span class="service-pricing-period">{{ plan.period }}</span>
            </div>
            <p class="service-pricing-desc">{{ plan.desc }}</p>
            <ul class="service-pricing-features">
              <li v-for="f in plan.features" :key="f">
                <Icon name="ph:check-circle-fill" class="text-green-400 mr-2" />
                {{ f }}
              </li>
            </ul>
            <UButton to="/contact" :color="plan.featured ? 'primary' : 'white'" variant="solid" size="lg" class="w-full mt-6">
              Get Started
            </UButton>
          </div>
        </div>
        <p class="service-pricing-note">
          * All prices are starting rates. Final price depends on project scope.
          Custom quotes available for larger projects.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-32 px-6 overflow-hidden">
      <video
        class="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/lu6y4btx/video/upload/q_auto,f_auto/v1784833681/22183-712840599_frir9i.mp4"
        autoplay loop muted playsinline preload="none"
      />
      <div class="absolute inset-0 z-1 service-cta-overlay" />
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <Icon name="ph:globe-hemisphere-west-fill" class="text-sky-300 mb-6" style="font-size:3rem" />
        <h2 class="service-cta-title">Ready to Build Your Website?</h2>
        <p class="service-cta-sub">
          Book a free 30-minute consultation and we will map out exactly
          what your business needs — no commitment required.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <UButton to="/contact" size="xl" color="primary" variant="solid">
            <Icon name="ph:calendar-check-fill" class="mr-2" /> Book Free Consultation
          </UButton>
          <UButton to="/services" size="xl" variant="outline" class="service-outline-btn">
            <Icon name="ph:arrow-left-bold" class="mr-2" /> View All Services
          </UButton>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const features = [
  { icon: 'ph:paint-brush-fill', title: 'Custom Design', desc: 'Unique designs tailored to your brand identity no generic templates.' },
  { icon: 'ph:device-mobile-fill', title: 'Mobile First', desc: 'Fully responsive on all devices phones, tablets, and desktops.' },
  { icon: 'ph:rocket-launch-fill', title: 'Fast Loading', desc: 'Optimized for speed so visitors never leave because of slow load times.' },
  { icon: 'ph:magnifying-glass-fill', title: 'SEO Ready', desc: 'Built with proper structure so Google can find and rank your site.' },
  { icon: 'ph:lock-fill', title: 'SSL Secured', desc: 'HTTPS encryption on every site we build security from day one.' },
  { icon: 'ph:wrench-fill', title: 'Easy to Manage', desc: 'CMS integration so you can update your content without a developer.' },
]

const deliverables = [
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
]

const process = [
  { icon: 'ph:chat-circle-dots-fill', title: 'Discovery', desc: 'We learn about your business, goals, and what you need from your website.' },
  { icon: 'ph:pencil-ruler-fill', title: 'Design', desc: 'We create a custom design that matches your brand and impresses your visitors.' },
  { icon: 'ph:code-fill', title: 'Build', desc: 'We develop your site with clean code, fast performance, and SEO best practices.' },
  { icon: 'ph:rocket-launch-fill', title: 'Launch', desc: 'We deploy, test, and hand over your fully live website ready to convert clients.' },
]

const pricing = [
  {
    name: 'Starter',
    price: '$200',
    period: 'one-time',
    desc: 'Perfect for freelancers and small businesses getting online for the first time.',
    featured: false,
    features: [
      '5-page website',
      'Mobile responsive',
      'Contact form',
      'Basic SEO setup',
      'SSL certificate',
      '1 round of revisions',
    ],
  },
  {
    name: 'Business',
    price: '$500',
    period: 'one-time',
    desc: 'For growing businesses that need a professional, full-featured website.',
    featured: true,
    features: [
      '10-page website',
      'Custom design',
      'CMS integration',
      'Advanced SEO',
      'Speed optimization',
      'Contact form + WhatsApp',
      '3 rounds of revisions',
      '1 month free support',
    ],
  },
  {
    name: 'E-Commerce',
    price: '$1,000',
    period: 'one-time',
    desc: 'Full online store with product management and payment integration.',
    featured: false,
    features: [
      'Full e-commerce store',
      'Payment integration',
      'Product management',
      'Order tracking',
      'Mobile optimized checkout',
      '3 months free support',
    ],
  },
]

useSeoMeta({
  title: 'Website Development — NewHeaven IT Solutions',
  description: 'Professional website development for startups and businesses. Custom design, mobile-first, SEO-ready. Starting from $200.',
})
</script>

<style scoped>
.service-hero-overlay {
  background: linear-gradient(180deg, rgba(2,10,35,0.72) 0%, rgba(3,69,120,0.62) 50%, rgba(2,10,35,0.78) 100%);
}
.service-section-overlay {
  background: linear-gradient(160deg, rgba(2,10,35,0.82) 0%, rgba(3,69,120,0.72) 50%, rgba(2,30,15,0.82) 100%);
}
.service-cta-overlay {
  background: linear-gradient(180deg, rgba(2,10,35,0.85) 0%, rgba(3,69,120,0.75) 50%, rgba(2,10,35,0.88) 100%);
}
.service-back-link {
  display: inline-flex; align-items: center;
  color: rgba(255,255,255,0.6); font-size: 0.85rem;
  text-decoration: none; margin-bottom: 1.5rem;
  transition: color 0.2s;
}
.service-back-link:hover { color: #7dd3fc; }
.service-hero-tag {
  display: inline-block;
  background: rgba(255,255,255,0.12);
  color: #7dd3fc; font-size: 0.8rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 6px 18px; border-radius: 999px;
  border: 1px solid rgba(125,211,252,0.3);
  margin-bottom: 1.25rem; backdrop-filter: blur(8px);
  display: block; width: fit-content; margin: 0 auto 1rem;
}
.service-hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900; color: white; line-height: 1.1;
  margin: 1rem 0; letter-spacing: -0.02em;
  text-shadow: 0 2px 30px rgba(0,0,0,0.4);
}
.service-hero-gradient {
  background: linear-gradient(90deg, #7dd3fc, #4ade80, #a78bfa);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}
.service-hero-sub {
  color: rgba(255,255,255,0.80); font-size: 1.1rem;
  max-width: 560px; margin: 0 auto; line-height: 1.8;
}
.service-section-tag {
  display: inline-block;
  background: rgba(255,255,255,0.12); color: #7dd3fc;
  font-size: 0.8rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 6px 18px; border-radius: 999px;
  border: 1px solid rgba(125,211,252,0.3);
  margin-bottom: 1rem; backdrop-filter: blur(8px);
}
.service-section-title {
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 800; color: white; line-height: 1.2;
  margin-bottom: 1rem; text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
.service-section-sub {
  color: rgba(255,255,255,0.7); font-size: 1rem; line-height: 1.7;
  max-width: 500px; margin: 0 auto;
}
.service-section-text {
  color: rgba(255,255,255,0.75); font-size: 1rem;
  line-height: 1.8; margin-bottom: 1rem;
}
.service-who-card {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 1rem; padding: 1.5rem;
  backdrop-filter: blur(12px); margin-top: 1.5rem;
}
.service-who-title {
  font-size: 1rem; font-weight: 700; color: white;
  margin-bottom: 1rem; display: flex; align-items: center;
}
.service-who-list {
  list-style: none; padding: 0;
  display: flex; flex-direction: column; gap: 0.6rem;
}
.service-who-list li {
  display: flex; align-items: center;
  color: rgba(255,255,255,0.8); font-size: 0.9rem;
}
.service-features-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
}
.service-feature-card {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 1rem; padding: 1.25rem;
  backdrop-filter: blur(12px); transition: all 0.3s;
}
.service-feature-card:hover {
  background: rgba(255,255,255,0.12);
  border-color: rgba(125,211,252,0.3);
  transform: translateY(-4px);
}
.service-feature-icon {
  width: 42px; height: 42px;
  background: rgba(14,165,233,0.15);
  border: 1px solid rgba(125,211,252,0.2);
  border-radius: 0.75rem;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 0.75rem;
}
.service-feature-title {
  font-size: 0.9rem; font-weight: 700; color: white; margin-bottom: 0.3rem;
}
.service-feature-desc {
  font-size: 0.8rem; color: rgba(255,255,255,0.65); line-height: 1.5;
}
.service-deliverable-card {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 0.75rem; padding: 0.875rem 1rem;
  color: rgba(255,255,255,0.85); font-size: 0.875rem;
  backdrop-filter: blur(12px);
  display: flex; align-items: center;
  transition: all 0.2s;
}
.service-deliverable-card:hover {
  background: rgba(255,255,255,0.12);
  border-color: rgba(125,211,252,0.3);
}
.service-step-card {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 1.5rem; padding: 2rem 1.5rem;
  text-align: center; backdrop-filter: blur(14px);
  transition: all 0.3s; position: relative;
}
.service-step-card:hover {
  background: rgba(255,255,255,0.12);
  border-color: rgba(125,211,252,0.3);
  transform: translateY(-6px);
}
.service-step-number {
  position: absolute; top: -16px; left: 50%;
  transform: translateX(-50%);
  width: 34px; height: 34px;
  background: linear-gradient(135deg, #0369a1, #0ea5e9);
  color: white; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 0.9rem;
  box-shadow: 0 4px 16px rgba(14,165,233,0.5);
}
.service-step-icon {
  font-size: 2.5rem; color: #7dd3fc;
  margin: 0.75rem 0 1rem; display: block;
  filter: drop-shadow(0 0 8px rgba(125,211,252,0.5));
}
.service-step-title {
  font-size: 1rem; font-weight: 700; color: white; margin-bottom: 0.5rem;
}
.service-step-desc {
  color: rgba(255,255,255,0.65); font-size: 0.85rem; line-height: 1.6;
}
.service-pricing-card {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 1.5rem; padding: 2rem;
  backdrop-filter: blur(16px); position: relative;
  transition: all 0.3s; text-align: left;
}
.service-pricing-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}
.service-pricing-featured {
  background: rgba(3,105,161,0.3);
  border-color: rgba(125,211,252,0.4);
  box-shadow: 0 8px 32px rgba(14,165,233,0.2);
}
.service-pricing-badge {
  position: absolute; top: -14px; left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #0369a1, #0ea5e9);
  color: white; font-size: 0.75rem; font-weight: 700;
  padding: 4px 16px; border-radius: 999px;
  white-space: nowrap;
}
.service-pricing-name {
  font-size: 1.1rem; font-weight: 800; color: white; margin-bottom: 1rem;
}
.service-pricing-price {
  display: flex; align-items: baseline; gap: 0.25rem; margin-bottom: 0.75rem;
}
.service-pricing-amount {
  font-size: 2.5rem; font-weight: 900; color: #7dd3fc; line-height: 1;
}
.service-pricing-period {
  font-size: 0.85rem; color: rgba(255,255,255,0.5);
}
.service-pricing-desc {
  color: rgba(255,255,255,0.65); font-size: 0.875rem;
  line-height: 1.6; margin-bottom: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.service-pricing-features {
  list-style: none; padding: 0;
  display: flex; flex-direction: column; gap: 0.6rem;
}
.service-pricing-features li {
  display: flex; align-items: center;
  color: rgba(255,255,255,0.8); font-size: 0.875rem;
}
.service-pricing-note {
  color: rgba(255,255,255,0.4); font-size: 0.8rem;
  margin-top: 2rem; font-style: italic;
}
.service-cta-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900; color: white; line-height: 1.1;
  margin-bottom: 1rem; text-shadow: 0 2px 30px rgba(0,0,0,0.4);
}
.service-cta-sub {
  color: rgba(255,255,255,0.8); font-size: 1.1rem; line-height: 1.7;
  max-width: 500px; margin: 0 auto;
}
.service-outline-btn {
  border-color: rgba(255,255,255,0.5) !important;
  color: white !important;
  background: rgba(255,255,255,0.08) !important;
}
.service-outline-btn:hover {
  background: rgba(255,255,255,0.18) !important;
}
@media (max-width: 768px) {
  .service-features-grid { grid-template-columns: 1fr; }
}
</style>
