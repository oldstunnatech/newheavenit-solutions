<template>
  <div class="overflow-x-hidden">

    <!-- HERO -->
    <section class="relative py-36 px-6 overflow-hidden">
      <video
        class="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/lu6y4btx/video/upload/q_auto,f_auto/v1784833222/28115-367748176_olrl4i.mp4"
        autoplay loop muted playsinline preload="auto"
      />
      <div class="absolute inset-0 z-1 quote-hero-overlay" />
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <span class="quote-hero-tag">Free Instant Quote</span>
        <h1 class="quote-hero-title">
          How much will your <br />
          <span class="quote-hero-gradient">project cost?</span>
        </h1>
        <p class="quote-hero-sub">
          Answer 4 simple questions and get an instant price estimate
          for your project no commitment, no hidden fees.
        </p>
      </div>
    </section>

    <!-- CALCULATOR -->
    <section class="relative py-24 px-6 overflow-hidden">
      <video
        class="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/lu6y4btx/video/upload/q_auto,f_auto/v1784833569/144555-784867402_gir6bx.mp4"
        autoplay loop muted playsinline preload="none"
      />
      <div class="absolute inset-0 z-1 quote-calc-overlay" />
      <div class="relative z-10 max-w-3xl mx-auto">

        <!-- Progress bar -->
        <div class="quote-progress-wrap">
          <div class="quote-progress-bar" :style="`width: ${(step / totalSteps) * 100}%`" />
        </div>
        <p class="quote-step-label">Step {{ step }} of {{ totalSteps }}</p>

        <div v-if="rateUpdated" class="quote-rate-badge">
            <Icon name="ph:currency-ngn-fill" class="mr-1" />
            Live rate: $1 = ₦{{ exchangeRate.toLocaleString('en-NG') }}
            <span class="quote-rate-dot" />
            </div>

        <!-- Step 1 — Select Service -->
        <div v-if="step === 1" class="quote-card">
          <h2 class="quote-card-title">What service do you need?</h2>
          <p class="quote-card-sub">Select the service that best fits your needs.</p>
          <div class="quote-options-grid">
            <button
              v-for="s in services"
              :key="s.id"
              class="quote-option"
              :class="form.service === s.id ? 'quote-option-active' : ''"
              @click="form.service = s.id; form.package = ''"
            >
              <Icon :name="s.icon" class="quote-option-icon" />
              <span class="quote-option-label">{{ s.label }}</span>
              <span class="quote-option-desc">{{ s.desc }}</span>
            </button>
          </div>
          <div class="quote-nav">
            <span />
            <UButton
              color="primary" variant="solid" size="lg"
              :disabled="!form.service"
              @click="step = 2"
            >
              Next <Icon name="ph:arrow-right-bold" class="ml-2" />
            </UButton>
          </div>
        </div>

        <!-- Step 2 — Select Package -->
        <div v-if="step === 2" class="quote-card">
          <h2 class="quote-card-title">Which package fits best?</h2>
          <p class="quote-card-sub">Choose the option that matches your project scope.</p>
          <div class="quote-packages">
            <button
              v-for="pkg in currentPackages"
              :key="pkg.id"
              class="quote-package"
              :class="form.package === pkg.id ? 'quote-package-active' : ''"
              @click="form.package = pkg.id"
            >
              <div class="quote-package-header">
                <span class="quote-package-name">{{ pkg.name }}</span>
                <div class="quote-package-price">
                  <span class="quote-package-usd">{{ pkg.usd }}</span>
                  <span class="quote-package-ngn">{{ pkg.ngn }}</span>
                </div>
              </div>
              <p class="quote-package-desc">{{ pkg.desc }}</p>
            </button>
          </div>
          <div class="quote-nav">
            <UButton variant="ghost" @click="step = 1">
              <Icon name="ph:arrow-left-bold" class="mr-2" /> Back
            </UButton>
            <UButton
              color="primary" variant="solid" size="lg"
              :disabled="!form.package"
              @click="step = 3"
            >
              Next <Icon name="ph:arrow-right-bold" class="ml-2" />
            </UButton>
          </div>
        </div>

        <!-- Step 3 — Timeline -->
        <div v-if="step === 3" class="quote-card">
          <h2 class="quote-card-title">When do you need this done?</h2>
          <p class="quote-card-sub">Your timeline helps us plan resources accordingly.</p>
          <div class="quote-options-grid">
            <button
              v-for="t in timelines"
              :key="t.id"
              class="quote-option"
              :class="form.timeline === t.id ? 'quote-option-active' : ''"
              @click="form.timeline = t.id"
            >
              <Icon :name="t.icon" class="quote-option-icon" />
              <span class="quote-option-label">{{ t.label }}</span>
              <span class="quote-option-desc">{{ t.desc }}</span>
            </button>
          </div>
          <div class="quote-nav">
            <UButton variant="ghost" @click="step = 2">
              <Icon name="ph:arrow-left-bold" class="mr-2" /> Back
            </UButton>
            <UButton
              color="primary" variant="solid" size="lg"
              :disabled="!form.timeline"
              @click="step = 4"
            >
              Next <Icon name="ph:arrow-right-bold" class="ml-2" />
            </UButton>
          </div>
        </div>

        <!-- Step 4 — Contact Details -->
        <div v-if="step === 4" class="quote-card">
          <h2 class="quote-card-title">Where should we send your quote?</h2>
          <p class="quote-card-sub">Enter your details to receive your full price estimate.</p>
          <div class="space-y-4 mt-6">
            <div class="quote-field">
              <label class="quote-label">
                <Icon name="ph:user-fill" class="mr-1" /> Full Name *
              </label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Your full name"
                class="quote-input"
              />
            </div>
            <div class="quote-field">
              <label class="quote-label">
                <Icon name="ph:envelope-fill" class="mr-1" /> Email Address *
              </label>
              <input
                v-model="form.email"
                type="email"
                placeholder="you@company.com"
                class="quote-input"
              />
            </div>
            <div class="quote-field">
              <label class="quote-label">
                <Icon name="ph:phone-fill" class="mr-1" /> Phone Number
              </label>
              <input
                v-model="form.phone"
                type="tel"
                placeholder="+234 xxx xxx xxxx"
                class="quote-input"
              />
            </div>
            <div class="quote-field">
              <label class="quote-label">
                <Icon name="ph:chat-text-fill" class="mr-1" /> Tell us more about your project
              </label>
              <textarea
                v-model="form.message"
                rows="3"
                placeholder="Brief description of what you need..."
                class="quote-input resize-none"
              />
            </div>
          </div>
          <p v-if="formError" class="quote-error">{{ formError }}</p>
          <div class="quote-nav mt-6">
            <UButton variant="ghost" @click="step = 3">
              <Icon name="ph:arrow-left-bold" class="mr-2" /> Back
            </UButton>
            <UButton
              color="primary" variant="solid" size="lg"
              :loading="loading"
              @click="submitQuote"
            >
              <Icon name="ph:sparkle-fill" class="mr-2" />
              {{ loading ? 'Calculating...' : 'Get My Quote' }}
            </UButton>
          </div>
        </div>

        <!-- Step 5 — Quote Result -->
        <div v-if="step === 5" class="quote-card quote-result-card">
          <div class="quote-result-header">
            <Icon name="ph:check-circle-fill" class="text-green-400" style="font-size:3rem" />
            <h2 class="quote-result-title">Your Estimate is Ready!</h2>
            <p class="quote-result-greeting">Hi {{ form.name }}, here is your personalised quote:</p>
          </div>

          <div class="quote-result-box">
            <div class="quote-result-service">
              <Icon :name="selectedService?.icon" class="text-sky-300 mr-2" style="font-size:1.5rem" />
              <span>{{ selectedService?.label }} — {{ selectedPackage?.name }}</span>
            </div>
            <div class="quote-result-divider" />
            <div class="quote-result-price">
              <div class="quote-result-price-main">
                <span class="quote-result-usd">{{ selectedPackage?.usd }}</span>
                <span class="quote-result-label">USD</span>
              </div>
              <div class="quote-result-price-alt">
                <span class="quote-result-ngn">{{ selectedPackage?.ngn }}</span>
                <span class="quote-result-label">NGN</span>
              </div>
            </div>
            <div class="quote-result-divider" />
            <div class="quote-result-details">
              <div class="quote-result-detail">
                <Icon name="ph:clock-fill" class="text-sky-400 mr-2" />
                <span>Timeline: {{ selectedTimeline?.label }}</span>
              </div>
              <div class="quote-result-detail">
                <Icon name="ph:envelope-fill" class="text-sky-400 mr-2" />
                <span>Quote sent to: {{ form.email }}</span>
              </div>
              <div class="quote-result-detail">
                <Icon name="ph:info-fill" class="text-yellow-400 mr-2" />
                <span>Final price confirmed after free consultation</span>
              </div>
            </div>
          </div>

          <div class="quote-result-actions">
            <UButton to="/contact" color="primary" variant="solid" size="xl" class="w-full">
              <Icon name="ph:calendar-check-fill" class="mr-2" /> Book Free Consultation
            </UButton>
            <UButton
              variant="ghost"
              class="w-full quote-restart-btn"
              @click="resetQuote"
            >
              <Icon name="ph:arrow-counter-clockwise-bold" class="mr-2" /> Get Another Quote
            </UButton>
          </div>
        </div>

      </div>
    </section>

    <!-- WHY GET A QUOTE -->
    <section class="relative py-24 px-6 overflow-hidden">
      <video
        class="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/lu6y4btx/video/upload/q_auto,f_auto/v1784833681/22183-712840599_frir9i.mp4"
        autoplay loop muted playsinline preload="none"
      />
      <div class="absolute inset-0 z-1 quote-calc-overlay" />
      <div class="relative z-10 max-w-5xl mx-auto text-center">
        <span class="quote-hero-tag">Why Get a Quote</span>
        <h2 class="quote-section-title">Transparent pricing. No surprises.</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div v-for="reason in reasons" :key="reason.title" class="quote-reason-card">
            <Icon :name="reason.icon" class="quote-reason-icon" />
            <h4 class="quote-reason-title">{{ reason.title }}</h4>
            <p class="quote-reason-desc">{{ reason.desc }}</p>
          </div>
        </div>
      </div>
    </section>
 <!-- WhatsApp FAB -->
    <a href="https://wa.me/message/W7FCOKXIRI6PN1" target="_blank" class="whatsapp-fab" title="Chat with us on WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="whatsapp-label">Chat with us</span>
    </a>

  </div>
</template>

<script setup lang="ts">

// Live exchange rate
const exchangeRate = ref(1364.40) // fallback default
const rateUpdated = ref('')

const fetchExchangeRate = async () => {
  try {
    const data = await $fetch('/api/exchange-rate')
    exchangeRate.value = data.rate
    rateUpdated.value = data.updated
  } catch (err) {
    console.error('Exchange rate fetch failed, using fallback')
  }
}

onMounted(() => {
  fetchExchangeRate()
})


const supabase = useSupabaseClient()

const step = ref(1)
const totalSteps = 4
const loading = ref(false)
const formError = ref('')

const form = reactive({
  service: '',
  package: '',
  timeline: '',
  name: '',
  email: '',
  phone: '',
  message: '',
})

const services = [
  { id: 'website', label: 'Website Development', icon: 'ph:globe-hemisphere-west-fill', desc: 'Professional websites & e-commerce' },
  { id: 'mining', label: 'Data Mining', icon: 'ph:magnifying-glass-fill', desc: 'Extract data from any source' },
  { id: 'analysis', label: 'Data Analysis', icon: 'ph:chart-bar-fill', desc: 'Dashboards & business insights' },
  { id: 'ai', label: 'Data Science & AI', icon: 'ph:brain-fill', desc: 'ML models & AI solutions' },
]

const toNgn = (usdAmount: number) => {
  const ngn = Math.round(usdAmount * exchangeRate.value)
  return '₦' + ngn.toLocaleString('en-NG')
}

const packages = computed(() => ({
  website: [
    { id: 'basic', name: 'Basic Website', usd: '$200', ngn: toNgn(200), desc: '5-page website, mobile responsive, contact form, basic SEO' },
    { id: 'business', name: 'Business Website', usd: '$500', ngn: toNgn(500), desc: '10-page website, custom design, CMS, advanced SEO, 1 month support' },
    { id: 'ecommerce', name: 'E-Commerce Store', usd: '$1,000', ngn: toNgn(1000), desc: 'Full online store, payment integration, product management' },
  ],
  mining: [
    { id: 'onetime', name: 'One-Time Extract', usd: '$100', ngn: toNgn(100), desc: 'Single extraction job, up to 5,000 records, Excel/CSV delivery' },
    { id: 'business', name: 'Business Extract', usd: '$250', ngn: toNgn(250), desc: 'Multiple sources, up to 25,000 records, full cleaning & dashboard' },
    { id: 'recurring', name: 'Recurring Pipeline', usd: '$150/mo', ngn: toNgn(150) + '/mo', desc: 'Automated data collection running on a weekly or monthly schedule' },
  ],
  analysis: [
    { id: 'quick', name: 'Quick Analysis', usd: '$150', ngn: toNgn(150), desc: 'Focused analysis of one business area, key insights report' },
    { id: 'business', name: 'Business Intelligence', usd: '$350', ngn: toNgn(350), desc: 'Full analysis, interactive dashboard, competitor benchmarking' },
    { id: 'monthly', name: 'Monthly Reports', usd: '$120/mo', ngn: toNgn(120) + '/mo', desc: 'Ongoing monthly analysis, KPI tracking, growth trend reports' },
  ],
  ai: [
    { id: 'starter', name: 'Starter Model', usd: '$500', ngn: toNgn(500), desc: 'One ML model, data preparation, training & evaluation, Python delivery' },
    { id: 'business', name: 'Business AI', usd: '$1,200', ngn: toNgn(1200), desc: 'Full AI solution, API deployment, dashboard integration, 30 days support' },
    { id: 'retainer', name: 'AI Retainer', usd: '$300/mo', ngn: toNgn(300) + '/mo', desc: 'Monthly model retraining, performance monitoring, priority support' },
  ],
}))

const timelines = [
  { id: 'urgent', label: 'Urgent', icon: 'ph:lightning-fill', desc: 'Need it within 1 week' },
  { id: 'normal', label: 'Standard', icon: 'ph:clock-fill', desc: '2 - 4 weeks' },
  { id: 'flexible', label: 'Flexible', icon: 'ph:calendar-fill', desc: 'More than a month' },
]

const reasons = [
  { icon: 'ph:eye-fill', title: 'Full Transparency', desc: 'See exactly what you will pay before committing no hidden fees, no surprises.' },
  { icon: 'ph:handshake-fill', title: 'No Commitment', desc: 'Getting a quote is completely free and does not obligate you to anything.' },
  { icon: 'ph:lightning-fill', title: 'Instant Estimate', desc: 'Get your price range in under 2 minutes no waiting for a callback.' },
]

const currentPackages = computed(() => packages.value[form.service] || [])
const selectedService = computed(() => services.find(s => s.id === form.service))
const selectedPackage = computed(() => currentPackages.value.find(p => p.id === form.package))
const selectedTimeline = computed(() => timelines.find(t => t.id === form.timeline))

const submitQuote = async () => {
  if (!form.name.trim() || !form.email.trim()) {
    formError.value = 'Please enter your name and email to receive your quote.'
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    formError.value = 'Please enter a valid email address.'
    return
  }

  loading.value = true
  formError.value = ''

  try {
    await supabase.from('quotes').insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      service: selectedService.value?.label,
      package: selectedPackage.value?.name,
      price_usd: selectedPackage.value?.usd,
      price_ngn: selectedPackage.value?.ngn,
      timeline: selectedTimeline.value?.label,
      message: form.message || null,
    })

    await $fetch('/api/quote', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        service: selectedService.value?.label,
        package: selectedPackage.value?.name,
        priceUsd: selectedPackage.value?.usd,
        priceNgn: selectedPackage.value?.ngn,
        timeline: selectedTimeline.value?.label,
      },
    }).catch(() => {})

    step.value = 5
  } catch (err) {
    formError.value = 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}

const resetQuote = () => {
  step.value = 1
  Object.assign(form, { service: '', package: '', timeline: '', name: '', email: '', phone: '', message: '' })
  formError.value = ''
}

useSeoMeta({
  title: 'Get a Quote — NewHeaven IT Solutions',
  description: 'Get an instant price estimate for your website, data analytics, data mining, or AI project. Free, no commitment.',
})
</script>

<style scoped>
/* ── Overlays ── */
.quote-hero-overlay {
  background: linear-gradient(180deg, rgba(2,10,35,0.72) 0%, rgba(3,69,120,0.62) 50%, rgba(2,10,35,0.78) 100%);
}
.quote-calc-overlay {
  background: linear-gradient(160deg, rgba(2,10,35,0.85) 0%, rgba(3,69,120,0.78) 50%, rgba(2,10,35,0.88) 100%);
}

/* ── Hero ── */
.quote-hero-tag {
  display: inline-block;
  background: rgba(255,255,255,0.12); color: #7dd3fc;
  font-size: 0.8rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 6px 18px; border-radius: 999px;
  border: 1px solid rgba(125,211,252,0.3);
  margin-bottom: 1.25rem; backdrop-filter: blur(8px);
}
.quote-hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900; color: white; line-height: 1.1;
  margin: 1rem 0; letter-spacing: -0.02em;
  text-shadow: 0 2px 30px rgba(0,0,0,0.4);
}
.quote-hero-gradient {
  background: linear-gradient(90deg, #7dd3fc, #4ade80, #a78bfa);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}
.quote-hero-sub {
  color: rgba(255,255,255,0.80); font-size: 1.1rem;
  max-width: 560px; margin: 0 auto; line-height: 1.8;
}

/* ── Progress ── */
.quote-progress-wrap {
  background: rgba(255,255,255,0.1);
  border-radius: 999px; height: 4px;
  margin-bottom: 0.75rem; overflow: hidden;
}
.quote-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #0369a1, #0ea5e9);
  border-radius: 999px;
  transition: width 0.4s ease;
}
.quote-step-label {
  color: rgba(255,255,255,0.5); font-size: 0.8rem;
  font-weight: 600; text-align: right;
  margin-bottom: 1.5rem; letter-spacing: 0.05em;
}

/* ── Card ── */
.quote-card {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 2rem; padding: 2.5rem;
  backdrop-filter: blur(16px);
  box-shadow: 0 30px 60px rgba(0,0,0,0.3);
}
.quote-card-title {
  font-size: 1.5rem; font-weight: 800; color: white;
  margin-bottom: 0.5rem;
}
.quote-card-sub {
  color: rgba(255,255,255,0.6); font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

/* ── Service options ── */
.quote-options-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.quote-option {
  display: flex; flex-direction: column; align-items: center;
  text-align: center; gap: 0.5rem;
  background: rgba(255,255,255,0.06);
  border: 1.5px solid rgba(255,255,255,0.12);
  border-radius: 1.25rem; padding: 1.5rem 1rem;
  cursor: pointer; transition: all 0.2s;
}
.quote-option:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(125,211,252,0.4);
}
.quote-option-active {
  background: rgba(14,165,233,0.2) !important;
  border-color: #0ea5e9 !important;
  box-shadow: 0 0 20px rgba(14,165,233,0.2);
}
.quote-option-icon { font-size: 2rem; color: #7dd3fc; }
.quote-option-label {
  font-size: 0.9rem; font-weight: 700; color: white;
}
.quote-option-desc {
  font-size: 0.75rem; color: rgba(255,255,255,0.55); line-height: 1.4;
}

/* ── Packages ── */
.quote-packages {
  display: flex; flex-direction: column; gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.quote-package {
  background: rgba(255,255,255,0.06);
  border: 1.5px solid rgba(255,255,255,0.12);
  border-radius: 1rem; padding: 1.25rem 1.5rem;
  cursor: pointer; transition: all 0.2s; text-align: left;
}
.quote-package:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(125,211,252,0.4);
}
.quote-package-active {
  background: rgba(14,165,233,0.2) !important;
  border-color: #0ea5e9 !important;
  box-shadow: 0 0 20px rgba(14,165,233,0.15);
}
.quote-package-header {
  display: flex; justify-content: space-between;
  align-items: flex-start; margin-bottom: 0.5rem;
}
.quote-package-name {
  font-size: 1rem; font-weight: 700; color: white;
}
.quote-package-price {
  display: flex; flex-direction: column; align-items: flex-end; gap: 0.1rem;
}
.quote-package-usd {
  font-size: 1.1rem; font-weight: 900; color: #7dd3fc; line-height: 1;
}
.quote-package-ngn {
  font-size: 0.75rem; color: rgba(255,255,255,0.5);
}
.quote-package-desc {
  font-size: 0.8rem; color: rgba(255,255,255,0.6); line-height: 1.5;
}

/* ── Fields ── */
.quote-field { display: flex; flex-direction: column; gap: 0.4rem; }
.quote-label {
  font-size: 0.85rem; font-weight: 600; color: #7dd3fc;
  display: flex; align-items: center;
}
.quote-input {
  width: 100%; padding: 12px 16px;
  background: rgba(255,255,255,0.08);
  border: 1.5px solid rgba(255,255,255,0.15);
  border-radius: 0.75rem;
  font-size: 0.9rem; color: white; outline: none;
  transition: all 0.2s;
}
.quote-input::placeholder { color: rgba(255,255,255,0.35); }
.quote-input:focus {
  border-color: #0ea5e9;
  box-shadow: 0 0 0 3px rgba(14,165,233,0.15);
  background: rgba(255,255,255,0.12);
}
.quote-error {
  color: #fca5a5; font-size: 0.85rem;
  margin-top: 0.5rem; font-weight: 500;
}

/* ── Nav ── */
.quote-nav {
  display: flex; justify-content: space-between;
  align-items: center; margin-top: 1.5rem;
}

/* ── Result ── */
.quote-result-card { text-align: center; }
.quote-result-header {
  display: flex; flex-direction: column;
  align-items: center; gap: 0.5rem; margin-bottom: 2rem;
}
.quote-result-title {
  font-size: 1.75rem; font-weight: 800; color: white;
}
.quote-result-greeting {
  color: rgba(255,255,255,0.7); font-size: 0.95rem;
}
.quote-result-box {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(125,211,252,0.3);
  border-radius: 1.25rem; padding: 1.5rem;
  margin-bottom: 1.5rem; text-align: left;
}
.quote-result-service {
  display: flex; align-items: center;
  font-size: 1rem; font-weight: 700; color: #7dd3fc;
  margin-bottom: 1rem;
}
.quote-result-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  margin: 1rem 0;
}
.quote-result-price {
  display: flex; gap: 2rem; align-items: center;
}
.quote-result-price-main, .quote-result-price-alt {
  display: flex; flex-direction: column; gap: 0.15rem;
}
.quote-result-usd {
  font-size: 2rem; font-weight: 900; color: #4ade80; line-height: 1;
}
.quote-result-ngn {
  font-size: 1.25rem; font-weight: 700; color: #7dd3fc; line-height: 1;
}
.quote-result-label {
  font-size: 0.7rem; color: rgba(255,255,255,0.4);
  text-transform: uppercase; letter-spacing: 0.1em;
}
.quote-result-details {
  display: flex; flex-direction: column; gap: 0.6rem;
}
.quote-result-detail {
  display: flex; align-items: center;
  font-size: 0.875rem; color: rgba(255,255,255,0.75);
}
.quote-result-actions {
  display: flex; flex-direction: column; gap: 0.75rem;
}
.quote-restart-btn { color: rgba(255,255,255,0.5) !important; }
.quote-restart-btn:hover { color: white !important; }

/* ── Reasons ── */
.quote-section-title {
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 800; color: white; line-height: 1.2;
  margin-bottom: 1rem; text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
.quote-reason-card {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 1.5rem; padding: 2rem;
  backdrop-filter: blur(14px); transition: all 0.3s;
}
.quote-reason-card:hover {
  background: rgba(255,255,255,0.12);
  transform: translateY(-6px);
  border-color: rgba(125,211,252,0.3);
}
.quote-reason-icon {
  font-size: 2rem; color: #7dd3fc; display: block;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 8px rgba(125,211,252,0.4));
}
.quote-reason-title {
  font-size: 1rem; font-weight: 700; color: white; margin-bottom: 0.5rem;
}
.quote-reason-desc {
  color: rgba(255,255,255,0.65); font-size: 0.875rem; line-height: 1.6;
}
.quote-rate-badge {
  display: inline-flex; align-items: center;
  background: rgba(74,222,128,0.1);
  border: 1px solid rgba(74,222,128,0.25);
  color: #4ade80; font-size: 0.75rem; font-weight: 600;
  padding: 4px 12px; border-radius: 999px;
  margin-bottom: 1.5rem;
}
.quote-rate-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #4ade80; margin-left: 6px;
  box-shadow: 0 0 6px rgba(74,222,128,0.8);
  animation: pulse 2s ease infinite;
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

@media (max-width: 640px) {
  .quote-options-grid { grid-template-columns: 1fr; }
  .quote-result-price { flex-direction: column; gap: 1rem; }
}
</style>
