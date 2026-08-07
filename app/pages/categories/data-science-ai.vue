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
        <span class="service-hero-tag">Data Science & AI</span>
        <h1 class="service-hero-title">
          Intelligent Systems That <br />
          <span class="service-hero-gradient">Predict and Automate.</span>
        </h1>
        <p class="service-hero-sub">
          We build custom machine learning models and AI-powered systems that help
          your business predict outcomes, automate decisions, and solve complex
          problems before they become expensive mistakes.
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
            <h2 class="service-section-title">AI That Works for Your Business</h2>
            <p class="service-section-text">
              Artificial intelligence is no longer only for large tech companies.
              We build practical, affordable AI solutions specifically designed for
              startups and growing businesses models that solve real problems and
              deliver measurable results from day one.
            </p>
            <p class="service-section-text">
              From predicting which customers are about to leave, to automating
              repetitive decisions, to detecting fraud in real time we build
              intelligent systems that work quietly in the background making your
              business smarter every day.
            </p>
            <div class="service-who-card">
              <h4 class="service-who-title">
                <Icon name="ph:users-fill" class="mr-2 text-sky-400" /> Who This Is For
              </h4>
              <ul class="service-who-list">
                <li><Icon name="ph:check-fill" class="text-green-400 mr-2" /> Startups wanting to add AI to their product</li>
                <li><Icon name="ph:check-fill" class="text-green-400 mr-2" /> Businesses losing customers they could have retained</li>
                <li><Icon name="ph:check-fill" class="text-green-400 mr-2" /> E-commerce stores needing recommendation systems</li>
                <li><Icon name="ph:check-fill" class="text-green-400 mr-2" /> Fintech companies needing fraud detection</li>
                <li><Icon name="ph:check-fill" class="text-green-400 mr-2" /> Any business wanting to automate manual decisions</li>
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
        <p class="service-section-sub">Everything we build and deploy for your business.</p>
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
          * AI projects are priced based on complexity, data volume, and deployment requirements.
          All prices are starting rates.
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
        <Icon name="ph:brain-fill" class="text-sky-300 mb-6" style="font-size:3rem" />
        <h2 class="service-cta-title">Ready to Add AI to Your Business?</h2>
        <p class="service-cta-sub">
          Book a free consultation and we will identify the highest-impact
          AI solution for your specific business.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <UButton to="/contact" size="xl" color="primary" variant="solid">
            <Icon name="ph:calendar-check-fill" class="mr-2" /> Book Free Consultation
          </UButton>
          <UButton to="/services" size="xl" variant="outline" class="service-outline-btn">
            <Icon name="ph:arrow-left-bold" class="mr-2" /> View All Services
          </UButton>
        </div>

        <a href="https://wa.me/message/W7FCOKXIRI6PN1" target="_blank" class="whatsapp-fab" title="Chat with us on WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="whatsapp-label">Chat with us</span>
    </a>
      </div>
      
    </section>

  </div>
</template>

<script setup lang="ts">
const features = [
  { icon: 'ph:brain-fill', title: 'Custom ML Models', desc: 'Machine learning models built specifically for your business problem.' },
  { icon: 'ph:trend-up-fill', title: 'Predictive Analytics', desc: 'Forecast sales, demand, and customer behavior with high accuracy.' },
  { icon: 'ph:user-minus-fill', title: 'Churn Prediction', desc: 'Identify customers likely to leave before they do and act on it.' },
  { icon: 'ph:shield-warning-fill', title: 'Fraud Detection', desc: 'Automatically detect suspicious activity and anomalies in real time.' },
  { icon: 'ph:chat-dots-fill', title: 'NLP Solutions', desc: 'Text classification, sentiment analysis, and language understanding.' },
  { icon: 'ph:rocket-launch-fill', title: 'Model Deployment', desc: 'We deploy models into your product not just notebooks on a laptop.' },
]

const deliverables = [
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
]

const process = [
  { icon: 'ph:chat-circle-dots-fill', title: 'Define', desc: 'We identify the exact business problem and what success looks like.' },
  { icon: 'ph:database-fill', title: 'Prepare', desc: 'We collect, clean, and engineer features from your data.' },
  { icon: 'ph:cpu-fill', title: 'Train', desc: 'We build, train, and evaluate multiple models to find the best performer.' },
  { icon: 'ph:rocket-launch-fill', title: 'Deploy', desc: 'We deploy the model into your product with monitoring and retraining.' },
]

const pricing = [
  {
    name: 'Starter Model',
    price: '$500',
    period: 'one-time',
    desc: 'A focused ML model solving one specific business problem.',
    featured: false,
    features: [
      'One ML model',
      'Data preparation',
      'Model training & evaluation',
      'Performance report',
      'Python script delivery',
      '14 day delivery',
    ],
  },
  {
    name: 'Business AI',
    price: '$1,200',
    period: 'one-time',
    desc: 'Full AI solution with deployment, API integration, and monitoring.',
    featured: true,
    features: [
      'Custom ML model',
      'Full data pipeline',
      'API deployment',
      'Dashboard integration',
      'Model monitoring',
      'Retraining schedule',
      '30 days support',
    ],
  },
  {
    name: 'AI Retainer',
    price: '$300',
    period: 'per month',
    desc: 'Ongoing AI model maintenance, monitoring, and continuous improvement.',
    featured: false,
    features: [
      'Monthly model retraining',
      'Performance monitoring',
      'Data drift detection',
      'Monthly insights report',
      'Priority support',
    ],
  },
]

useSeoMeta({
  title: 'Data Science & AI — NewHeaven IT Solutions',
  description: 'Custom machine learning models and AI solutions for startups and businesses. Predictive analytics, fraud detection, NLP, and more. Starting from $500.',
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
  text-decoration: none; margin-bottom: 1.5rem; transition: color 0.2s;
}
.service-back-link:hover { color: #7dd3fc; }
.service-hero-tag {
  display: block; width: fit-content; margin: 0 auto 1rem;
  background: rgba(255,255,255,0.12); color: #7dd3fc;
  font-size: 0.8rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 6px 18px; border-radius: 999px;
  border: 1px solid rgba(125,211,252,0.3); backdrop-filter: blur(8px);
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
  display: flex; align-items: center; transition: all 0.2s;
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
  padding: 4px 16px; border-radius: 999px; white-space: nowrap;
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
  .service-features-grid { grid-template-columns: 1fr; }
}
</style>
