<template>
  <div class="overflow-x-hidden">

    <!-- HERO -->
    <section class="relative py-36 px-6 overflow-hidden pricing-hero">
      <div class="absolute inset-0 overflow-hidden">
        <div class="light-ray ray-1" />
        <div class="light-ray ray-2" />
        <div class="light-ray ray-3" />
      </div>
      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <span class="section-tag animate-fade-in-down">Pricing</span>
        <h1 class="page-title animate-fade-in-up">
          Transparent Pricing, <br />
          <span class="gradient-text">Zero Surprises</span>
        </h1>
        <p class="page-sub animate-fade-in-up-delay">
          Choose the package that fits your needs. All plans include a free consultation
          and dedicated support throughout delivery.
        </p>

        <!-- Toggle -->
        <div class="billing-toggle animate-fade-in-up-delay">
          <button :class="billing === 'monthly' ? 'toggle-active' : 'toggle-inactive'"
            @click="billing = 'monthly'">Monthly</button>
          <button :class="billing === 'onetime' ? 'toggle-active' : 'toggle-inactive'"
            @click="billing = 'onetime'">One-Time</button>
        </div>
      </div>
    </section>

    <!-- PRICING CARDS -->
    <section class="py-24 px-6 section-light">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="plan in plans" :key="plan.name"
            class="pricing-card" :class="plan.popular ? 'pricing-card-popular' : ''">
            <!-- Popular badge -->
            <div v-if="plan.popular" class="popular-badge">
              <Icon name="ph:star-fill" class="mr-1" /> Most Popular
            </div>

            <div class="plan-icon-wrap">
              <Icon :name="plan.icon" class="plan-icon" />
            </div>
            <h3 class="plan-name">{{ plan.name }}</h3>
            <p class="plan-desc">{{ plan.desc }}</p>

            <div class="plan-price">
              <span class="price-currency">$</span>
              <span class="price-amount">{{ billing === 'monthly' ? plan.monthlyPrice : plan.onetimePrice }}</span>
              <span class="price-period">{{ billing === 'monthly' ? '/mo' : ' once' }}</span>
            </div>

            <ul class="plan-features">
              <li v-for="feature in plan.features" :key="feature.text"
                class="plan-feature" :class="!feature.included ? 'feature-disabled' : ''">
                <Icon :name="feature.included ? 'ph:check-circle-fill' : 'ph:x-circle-fill'"
                  :class="feature.included ? 'text-green-500' : 'text-slate-300'" />
                {{ feature.text }}
              </li>
            </ul>

            <UButton
              :color="plan.popular ? 'primary' : 'neutral'"
              :variant="plan.popular ? 'solid' : 'outline'"
              size="lg" class="w-full plan-btn"
              :loading="loadingPlan === plan.name"
              @click="handleCheckout(plan)">
              <Icon name="ph:arrow-right-bold" class="mr-2" />
              {{ plan.cta }}
            </UButton>
          </div>
        </div>

        <!-- Money back -->
        <div class="guarantee-banner">
          <Icon name="ph:shield-check-fill" class="text-green-500 text-2xl flex-shrink-0" />
          <div>
            <p class="font-bold text-sky-800">100% Satisfaction Guarantee</p>
            <p class="text-slate-500 text-sm">Not happy with the first milestone? Get a full refund — no questions asked.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- COMPARISON TABLE -->
    <section class="py-24 px-6 compare-bg">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <span class="section-tag">Compare</span>
          <h2 class="section-title">What's Included in Each Plan</h2>
        </div>
        <div class="compare-table">
          <div class="compare-header">
            <div class="compare-feature-col">Feature</div>
            <div v-for="plan in plans" :key="plan.name"
              class="compare-plan-col" :class="plan.popular ? 'text-sky-600 font-bold' : ''">
              {{ plan.name }}
            </div>
          </div>
          <div v-for="row in compareRows" :key="row.feature" class="compare-row">
            <div class="compare-feature-col">{{ row.feature }}</div>
            <div v-for="(val, i) in row.values" :key="i" class="compare-plan-col">
              <Icon v-if="val === true" name="ph:check-circle-fill" class="text-green-500" />
              <Icon v-else-if="val === false" name="ph:x-circle-fill" class="text-slate-300" />
              <span v-else class="text-sky-700 font-semibold text-sm">{{ val }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CUSTOM PROJECT CTA -->
    <section class="py-24 px-6 section-light">
      <div class="max-w-4xl mx-auto">
        <div class="custom-card">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="flex-1">
              <Icon name="ph:buildings-fill" class="text-sky-500 mb-4" style="font-size:2.5rem" />
              <h3 class="text-2xl font-800 font-bold text-sky-900 mb-2">Need a Custom Enterprise Solution?</h3>
              <p class="text-slate-500">Large-scale projects, dedicated teams, custom SLAs, and white-label options available for enterprise clients.</p>
            </div>
            <div class="flex flex-col gap-3 flex-shrink-0">
              <UButton to="/contact" color="primary" variant="solid" size="lg">
                <Icon name="ph:chat-circle-dots-fill" class="mr-2" /> Talk to Us
              </UButton>
              <UButton to="/services" color="neutral" variant="outline" size="lg">
                <Icon name="ph:list-bullets-fill" class="mr-2" /> View Services
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const billing = ref('onetime')
const loadingPlan = ref('')

const plans = [
  {
    name: 'Starter',
    icon: 'ph:rocket-launch-fill',
    desc: 'Perfect for small businesses and individuals needing a professional web presence.',
    monthlyPrice: '100',
    onetimePrice: '500',
    popular: false,
    cta: 'Get Started',
    priceId: '',
    features: [
      { text: 'Up to 5 pages', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Contact form', included: true },
      { text: 'SEO basics', included: true },
      { text: 'Deploy to Vercel', included: true },
      { text: 'Custom dashboard', included: false },
      { text: 'Data analysis', included: false },
      { text: 'AI integration', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    name: 'Professional',
    icon: 'ph:briefcase-fill',
    desc: 'For growing businesses that need a full-featured web app with data insights.',
    monthlyPrice: '300',
    onetimePrice: '1500',
    popular: true,
    cta: 'Get Started',
    priceId: '',
    features: [
      { text: 'Unlimited pages', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Contact form + CRM', included: true },
      { text: 'Full SEO setup', included: true },
      { text: 'Deploy to Vercel', included: true },
      { text: 'Custom dashboard', included: true },
      { text: 'Data analysis', included: true },
      { text: 'AI integration', included: false },
      { text: 'Priority support', included: true },
    ],
  },
  {
    name: 'Enterprise',
    icon: 'ph:buildings-fill',
    desc: 'Full-stack solution with AI/ML integration and dedicated ongoing support.',
    monthlyPrice: '500',
    onetimePrice: '3000',
    popular: false,
    cta: 'Contact Us',
    priceId: '',
    features: [
      { text: 'Unlimited pages', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Contact form + CRM', included: true },
      { text: 'Full SEO setup', included: true },
      { text: 'Deploy to Vercel', included: true },
      { text: 'Custom dashboard', included: true },
      { text: 'Data analysis', included: true },
      { text: 'AI integration', included: true },
      { text: 'Priority support', included: true },
    ],
  },
]

const compareRows = [
  { feature: 'Pages', values: ['Up to 5', 'Unlimited', 'Unlimited'] },
  { feature: 'Responsive Design', values: [true, true, true] },
  { feature: 'SEO Optimization', values: ['Basic', 'Full', 'Full + Advanced'] },
  { feature: 'Contact Form', values: [true, true, true] },
  { feature: 'Custom Dashboard', values: [false, true, true] },
  { feature: 'Data Analysis', values: [false, true, true] },
  { feature: 'AI/ML Integration', values: [false, false, true] },
  { feature: 'Priority Support', values: [false, true, true] },
  { feature: 'Revisions', values: ['2', '5', 'Unlimited'] },
  { feature: 'Delivery Time', values: ['1–2 weeks', '3–5 weeks', '6–12 weeks'] },
]

const handleCheckout = async (plan: any) => {
  if (plan.name === 'Enterprise') {
    navigateTo('/contact')
    return
  }
  loadingPlan.value = plan.name
  try {
    const { data } = await $fetch('/api/checkout', {
      method: 'POST',
      body: {
        planName: plan.name,
        billing: billing.value,
        price: billing.value === 'monthly' ? plan.monthlyPrice : plan.onetimePrice,
      },
    })
    if (data?.url) window.location.href = data.url
  } catch (err) {
    navigateTo('/contact')
  } finally {
    loadingPlan.value = ''
  }
}

useSeoMeta({
  title: 'Pricing — NewHeaven IT Solutions',
  description: 'Transparent pricing for fullstack development, data analysis, and AI solutions.',
})
</script>

<style scoped>
.pricing-hero { background: linear-gradient(180deg, #0ea5e9 0%, #38bdf8 30%, #bae6fd 70%, #e0f2fe 100%); }
.light-ray { position: absolute; top: -10%; height: 120%; background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%); border-radius: 999px; animation: rayPulse 6s ease-in-out infinite; }
.ray-1 { left: 20%; transform: rotate(-15deg); width: 60px; opacity: 0.3; }
.ray-2 { left: 50%; transform: rotate(5deg); width: 40px; opacity: 0.2; animation-delay: 2s; }
.ray-3 { left: 75%; transform: rotate(20deg); width: 80px; opacity: 0.25; animation-delay: 4s; }
@keyframes rayPulse { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.4; } }
.section-light { background: linear-gradient(180deg, #e0f2fe 0%, #f0f9ff 50%, #ecfdf5 100%); }
.compare-bg { background: linear-gradient(180deg, #ecfdf5 0%, #e0f2fe 100%); }
.section-tag { display: inline-block; background: rgba(14,165,233,0.1); color: #0369a1; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.2); margin-bottom: 1rem; }
.section-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: #0c4a6e; line-height: 1.2; margin-bottom: 1rem; text-align: center; }
.page-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; color: #0c4a6e; line-height: 1.1; margin: 1rem 0; letter-spacing: -0.02em; }
.gradient-text { background: linear-gradient(90deg, #0c4a6e, #0369a1, #0ea5e9, #059669); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; background-size: 200%; animation: gradientMove 4s ease infinite; }
@keyframes gradientMove { 0% { background-position: 0%; } 50% { background-position: 100%; } 100% { background-position: 0%; } }
.page-sub { color: #1e40af; font-size: 1.1rem; max-width: 600px; margin: 0 auto; line-height: 1.8; opacity: 0.85; }

.billing-toggle { display: inline-flex; background: rgba(255,255,255,0.5); border: 1px solid #bae6fd; border-radius: 999px; padding: 4px; margin-top: 2rem; gap: 4px; }
.toggle-active { background: #0369a1; color: white; border-radius: 999px; padding: 8px 24px; font-weight: 700; font-size: 0.9rem; transition: all 0.2s; }
.toggle-inactive { color: #0369a1; border-radius: 999px; padding: 8px 24px; font-weight: 600; font-size: 0.9rem; transition: all 0.2s; cursor: pointer; }
.toggle-inactive:hover { background: rgba(14,165,233,0.1); }

.pricing-card { background: rgba(255,255,255,0.8); border: 1px solid #bae6fd; border-radius: 2rem; padding: 2.5rem 2rem; position: relative; transition: all 0.3s; }
.pricing-card:hover { transform: translateY(-8px); box-shadow: 0 30px 60px rgba(14,165,233,0.15); }
.pricing-card-popular { border-color: #0369a1; border-width: 2px; background: white; box-shadow: 0 20px 60px rgba(14,165,233,0.15); transform: scale(1.03); }
.pricing-card-popular:hover { transform: scale(1.03) translateY(-8px); }
.popular-badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: linear-gradient(90deg, #0369a1, #0ea5e9); color: white; border-radius: 999px; padding: 4px 16px; font-size: 0.8rem; font-weight: 700; white-space: nowrap; display: flex; align-items: center; }
.plan-icon-wrap { width: 56px; height: 56px; background: linear-gradient(135deg, #e0f2fe, #bae6fd); border-radius: 1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem; }
.plan-icon { font-size: 1.75rem; color: #0369a1; }
.plan-name { font-size: 1.3rem; font-weight: 800; color: #0c4a6e; margin-bottom: 0.5rem; }
.plan-desc { color: #64748b; font-size: 0.875rem; line-height: 1.6; margin-bottom: 1.5rem; }
.plan-price { display: flex; align-items: baseline; gap: 2px; margin-bottom: 1.5rem; }
.price-currency { font-size: 1.5rem; font-weight: 700; color: #0369a1; }
.price-amount { font-size: 3rem; font-weight: 900; color: #0c4a6e; line-height: 1; }
.price-period { font-size: 0.9rem; color: #94a3b8; font-weight: 500; }
.plan-features { list-style: none; padding: 0; margin-bottom: 2rem; display: flex; flex-direction: column; gap: 10px; }
.plan-feature { display: flex; align-items: center; gap: 8px; font-size: 0.875rem; color: #334155; font-weight: 500; }
.feature-disabled { color: #cbd5e1; }
.plan-btn { transition: all 0.3s !important; }
.plan-btn:hover { transform: translateY(-2px); }

.guarantee-banner { display: flex; align-items: center; gap: 1rem; background: rgba(240,253,244,0.8); border: 1px solid #86efac; border-radius: 1.25rem; padding: 1.25rem 1.5rem; margin-top: 3rem; }

.compare-table { background: rgba(255,255,255,0.8); border: 1px solid #bae6fd; border-radius: 1.5rem; overflow: hidden; }
.compare-header { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; background: linear-gradient(90deg, #e0f2fe, #bae6fd); padding: 1rem 1.5rem; font-size: 0.875rem; font-weight: 700; color: #0c4a6e; }
.compare-row { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; padding: 1rem 1.5rem; border-top: 1px solid #e0f2fe; transition: background 0.2s; }
.compare-row:hover { background: rgba(224,242,254,0.3); }
.compare-feature-col { font-size: 0.875rem; color: #334155; font-weight: 500; }
.compare-plan-col { display: flex; justify-content: center; align-items: center; font-size: 0.875rem; color: #64748b; }

.custom-card { background: rgba(255,255,255,0.8); border: 2px solid #bae6fd; border-radius: 2rem; padding: 3rem; backdrop-filter: blur(12px); }

@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in-down { animation: fadeInDown 0.8s ease both; }
.animate-fade-in-up { animation: fadeInUp 0.8s ease 0.2s both; }
.animate-fade-in-up-delay { animation: fadeInUp 0.8s ease 0.4s both; }
</style>
