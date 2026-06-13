<template>
  <div class="overflow-x-hidden">

    <!-- HERO -->
    <section class="relative py-36 px-6 overflow-hidden contact-hero">
      <div class="absolute inset-0 overflow-hidden">
        <div class="light-ray ray-1" />
        <div class="light-ray ray-2" />
        <div class="light-ray ray-3" />
      </div>
      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <span class="section-tag animate-fade-in-down">Get In Touch</span>
        <h1 class="page-title animate-fade-in-up">
          Let's Build Something <br />
          <span class="gradient-text">Extraordinary Together</span>
        </h1>
        <p class="page-sub animate-fade-in-up-delay">
          Have a project in mind? Fill out the form below and I'll get back to you
          within 24 hours with a free consultation.
        </p>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section class="py-24 px-6 section-light">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-16">

          <!-- Left info panel -->
          <div class="lg:col-span-2 space-y-8">
            <div>
              <h2 class="info-title">Contact Information</h2>
              <p class="info-sub">Reach out through any of these channels or fill the form.</p>
            </div>

            <div class="space-y-4">
              <div v-for="info in contactInfo" :key="info.label" class="info-card">
                <div class="info-icon-wrap">
                  <Icon :name="info.icon" class="info-icon" />
                </div>
                <div>
                  <p class="info-label">{{ info.label }}</p>
                  <p class="info-value">{{ info.value }}</p>
                </div>
              </div>
            </div>

            <!-- Response time badge -->
            <div class="response-badge">
              <Icon name="ph:clock-countdown-fill" class="text-green-500 text-xl" />
              <div>
                <p class="font-700 text-sky-800 font-bold">Fast Response</p>
                <p class="text-slate-500 text-sm">Typically reply within 24 hours</p>
              </div>
            </div>

            <!-- Social links -->
            <div>
              <p class="text-sky-700 font-semibold mb-4">Follow Us</p>
              <div class="flex gap-3">
                <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer" class="social-btn"><Icon :name="social.icon" /></a>
              </div>
            </div>
          </div>

          <!-- Right form -->
          <div class="lg:col-span-3">
            <div class="form-card">
              <!-- Success state -->
              <div v-if="submitted" class="success-state">
                <div class="success-icon-wrap">
                  <Icon name="ph:check-circle-fill" class="text-green-500" style="font-size:4rem" />
                </div>
                <h3 class="success-title">Message Sent!</h3>
                <p class="success-sub">
                  Thank you for reaching out. I'll review your message and get back to you
                  within 24 hours.
                </p>
                <UButton color="primary" variant="solid" @click="submitted = false" class="mt-6">
                  <Icon name="ph:arrow-counter-clockwise-bold" class="mr-2" /> Send Another Message
                </UButton>
              </div>

              <!-- Form -->
              <div v-else>
                <h3 class="form-title">Send a Message</h3>
                <p class="form-sub">Free consultation — no strings attached.</p>

                <div class="space-y-5 mt-8">
                  <!-- Name & Email -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div class="field-group">
                      <label class="field-label">
                        <Icon name="ph:user-fill" class="mr-1" /> Full Name *
                      </label>
                      <input v-model="form.name" type="text" placeholder="Enter full name"
                        class="field-input" :class="errors.name ? 'border-red-400' : ''" />
                      <span v-if="errors.name" class="field-error">{{ errors.name }}</span>
                    </div>
                    <div class="field-group">
                      <label class="field-label">
                        <Icon name="ph:envelope-fill" class="mr-1" /> Email Address *
                      </label>
                      <input v-model="form.email" type="email" placeholder="you@company.com"
                        class="field-input" :class="errors.email ? 'border-red-400' : ''" />
                      <span v-if="errors.email" class="field-error">{{ errors.email }}</span>
                    </div>
                  </div>

                  <!-- Company & Service -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div class="field-group">
                      <label class="field-label">
                        <Icon name="ph:building-office-fill" class="mr-1" /> Company
                      </label>
                      <input v-model="form.company" type="text" placeholder="Your Company"
                        class="field-input" />
                    </div>
                    <div class="field-group">
                      <label class="field-label">
                        <Icon name="ph:briefcase-fill" class="mr-1" /> Service Needed
                      </label>
                      <select v-model="form.service" class="field-input">
                        <option value="">Select a service</option>
                        <option v-for="s in services" :key="s" :value="s">{{ s }}</option>
                      </select>
                    </div>
                  </div>

                  <!-- Budget -->
                  <div class="field-group">
                    <label class="field-label">
                      <Icon name="ph:currency-dollar-fill" class="mr-1" /> Budget Range
                    </label>
                    <div class="budget-grid">
                      <button v-for="b in budgets" :key="b"
                        type="button"
                        class="budget-btn"
                        :class="form.budget === b ? 'budget-btn-active' : ''"
                        @click="form.budget = b">
                        {{ b }}
                      </button>
                    </div>
                  </div>

                  <!-- Message -->
                  <div class="field-group">
                    <label class="field-label">
                      <Icon name="ph:chat-text-fill" class="mr-1" /> Message *
                    </label>
                    <textarea v-model="form.message" rows="5"
                      placeholder="Tell me about your project, goals, and timeline..."
                      class="field-input resize-none"
                      :class="errors.message ? 'border-red-400' : ''" />
                    <span v-if="errors.message" class="field-error">{{ errors.message }}</span>
                  </div>

                  <!-- Error alert -->
                  <div v-if="submitError" class="error-alert">
                    <Icon name="ph:warning-fill" class="text-red-500 mr-2" />
                    {{ submitError }}
                  </div>

                  <!-- Submit -->
                  <UButton
                    color="primary" variant="solid" size="xl"
                    class="w-full submit-btn"
                    :loading="loading"
                    :disabled="loading"
                    @click="handleSubmit">
                    <Icon v-if="!loading" name="ph:paper-plane-tilt-fill" class="mr-2" />
                    {{ loading ? 'Sending...' : 'Send Message' }}
                  </UButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="py-24 px-6 faq-bg">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-16">
          <span class="section-tag">FAQ</span>
          <h2 class="section-title">Common Questions</h2>
        </div>
        <div class="space-y-4">
          <div v-for="faq in faqs" :key="faq.q" class="faq-card"
            @click="faq.open = !faq.open">
            <div class="faq-header">
              <span class="faq-q">{{ faq.q }}</span>
              <Icon :name="faq.open ? 'ph:caret-up-bold' : 'ph:caret-down-bold'"
                class="text-sky-500 flex-shrink-0" />
            </div>
            <div v-if="faq.open" class="faq-a">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()

const form = reactive({
  name: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  message: '',
})

const errors = reactive({ name: '', email: '', message: '' })
const loading = ref(false)
const submitted = ref(false)
const submitError = ref('')

const services = [
  'Fullstack Web Development',
  'Data Analysis & Visualization',
  'Data Science & AI',
  'SEO Optimization',
  'Maintenance & Support',
  'Other',
]

const budgets = ['< $500', '$500–$2k', '$2k–$5k', '$5k–$10k', '$10k+']

const contactInfo = [
  { icon: 'ph:envelope-fill', label: 'Email', value: 'newheavenit-solutions@outlook.com' },
  { icon: 'ph:map-pin-fill', label: 'Location', value: 'Available Worldwide (Remote)' },
  { icon: 'ph:clock-fill', label: 'Working Hours', value: 'Mon–Fri, 9am–6pm WAT' },
]

const socials = [
  { name: 'GitHub', icon: 'ph:github-logo-fill', url: 'https://github.com/oldstunnatech' },
  { name: 'LinkedIn', icon: 'ph:linkedin-logo-fill', url: 'https://www.linkedin.com/in/newheaven-it-solutions-a6b1b2309' },
  { name: 'Twitter', icon: 'ph:x-logo-fill', url: 'https://x.com/NewHeavenIT' },
]

const faqs = reactive([
  { q: 'How long does a typical project take?', a: 'It depends on scope. A simple website takes 1–2 weeks. A full web app or data science project can take 4–12 weeks. We\'ll give you a clear timeline after the discovery call.', open: false },
  { q: 'Do you offer ongoing support after launch?', a: 'Yes! I offer monthly maintenance and support retainer packages to keep your project running smoothly after delivery.', open: false },
  { q: 'What payment methods do you accept?', a: 'I accept bank transfers, PayPal, Stripe, and crypto. A 50% deposit is required before work begins, with the remainder due on delivery.', open: false },
  { q: 'Can you work with my existing codebase?', a: 'Absolutely. I regularly work with existing projects to add features, fix bugs, or perform full refactors.', open: false },
])

const validate = () => {
  errors.name = ''
  errors.email = ''
  errors.message = ''
  let valid = true
  if (!form.name.trim()) { errors.name = 'Name is required'; valid = false }
  if (!form.email.trim()) { errors.email = 'Email is required'; valid = false }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = 'Enter a valid email'; valid = false }
  if (!form.message.trim()) { errors.message = 'Message is required'; valid = false }
  return valid
}

const handleSubmit = async () => {
  if (!validate()) return
  loading.value = true
  submitError.value = ''
  try {
    const { error } = await supabase.from('leads').insert({
  name: form.name,
  email: form.email,
  company: form.company || null,
  service: form.service || null,
  budget: form.budget || null,
  message: form.message,
})
if (error) throw error

// Send email notification
await $fetch('/api/contact', {
  method: 'POST',
  body: { ...form },
})

submitted.value = true
    Object.assign(form, { name: '', email: '', company: '', service: '', budget: '', message: '' })
  } catch (err: any) {
    submitError.value = 'Something went wrong. Please try again or email us directly.'
  } finally {
    loading.value = false
  }
}

useSeoMeta({
  title: 'Contact — NewHeaven IT Solutions',
  description: 'Get in touch with NewHeaven IT Solutions for a free consultation on your next project.',
})
</script>

<style scoped>
.contact-hero { background: linear-gradient(180deg, #0ea5e9 0%, #38bdf8 30%, #bae6fd 70%, #e0f2fe 100%); }
.light-ray { position: absolute; top: -10%; height: 120%; background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%); border-radius: 999px; animation: rayPulse 6s ease-in-out infinite; }
.ray-1 { left: 20%; transform: rotate(-15deg); width: 60px; opacity: 0.3; }
.ray-2 { left: 50%; transform: rotate(5deg); width: 40px; opacity: 0.2; animation-delay: 2s; }
.ray-3 { left: 75%; transform: rotate(20deg); width: 80px; opacity: 0.25; animation-delay: 4s; }
@keyframes rayPulse { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.4; } }
.section-light { background: linear-gradient(180deg, #e0f2fe 0%, #f0f9ff 50%, #ecfdf5 100%); }
.faq-bg { background: linear-gradient(180deg, #ecfdf5 0%, #e0f2fe 100%); }
.section-tag { display: inline-block; background: rgba(14,165,233,0.1); color: #0369a1; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.2); margin-bottom: 1rem; }
.section-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: #0c4a6e; line-height: 1.2; margin-bottom: 1rem; text-align: center; }
.page-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; color: #0c4a6e; line-height: 1.1; margin: 1rem 0; letter-spacing: -0.02em; }
.gradient-text { background: linear-gradient(90deg, #0c4a6e, #0369a1, #0ea5e9, #059669); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; background-size: 200%; animation: gradientMove 4s ease infinite; }
@keyframes gradientMove { 0% { background-position: 0%; } 50% { background-position: 100%; } 100% { background-position: 0%; } }
.page-sub { color: #1e40af; font-size: 1.1rem; max-width: 600px; margin: 0 auto; line-height: 1.8; opacity: 0.85; }
.info-title { font-size: 1.5rem; font-weight: 800; color: #0c4a6e; margin-bottom: 0.5rem; }
.info-sub { color: #64748b; font-size: 0.95rem; line-height: 1.7; }
.info-card { display: flex; align-items: center; gap: 1rem; background: rgba(255,255,255,0.7); border: 1px solid #bae6fd; border-radius: 1rem; padding: 1rem 1.25rem; transition: all 0.3s; }
.info-card:hover { transform: translateX(6px); box-shadow: 0 8px 24px rgba(14,165,233,0.1); }
.info-icon-wrap { width: 44px; height: 44px; background: linear-gradient(135deg, #e0f2fe, #bae6fd); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.info-icon { font-size: 1.25rem; color: #0369a1; }
.info-label { font-size: 0.75rem; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; }
.info-value { font-size: 0.9rem; font-weight: 600; color: #0c4a6e; }
.response-badge { display: flex; align-items: center; gap: 1rem; background: rgba(240,253,244,0.8); border: 1px solid #86efac; border-radius: 1rem; padding: 1rem 1.25rem; }
.social-btn { width: 44px; height: 44px; background: rgba(14,165,233,0.1); border: 1px solid #bae6fd; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #0369a1; font-size: 1.2rem; transition: all 0.3s; text-decoration: none; }
.social-btn:hover { background: #0369a1; color: white; transform: translateY(-3px); }
.form-card { background: rgba(255,255,255,0.85); border: 1px solid #bae6fd; border-radius: 2rem; padding: 2.5rem; backdrop-filter: blur(12px); box-shadow: 0 30px 60px rgba(14,165,233,0.1); }
.form-title { font-size: 1.5rem; font-weight: 800; color: #0c4a6e; }
.form-sub { color: #64748b; font-size: 0.9rem; margin-top: 0.25rem; }
.field-group { display: flex; flex-direction: column; gap: 6px; }
.field-label { font-size: 0.85rem; font-weight: 600; color: #0369a1; display: flex; align-items: center; }
.field-input { width: 100%; padding: 12px 16px; background: rgba(240,249,255,0.8); border: 1.5px solid #bae6fd; border-radius: 0.75rem; font-size: 0.9rem; color: #0c4a6e; outline: none; transition: all 0.2s; }
.field-input:focus { border-color: #0ea5e9; box-shadow: 0 0 0 3px rgba(14,165,233,0.1); background: white; }
.field-input::placeholder { color: #94a3b8; }
.field-error { font-size: 0.8rem; color: #ef4444; font-weight: 500; }
.budget-grid { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
.budget-btn { padding: 8px 16px; background: rgba(240,249,255,0.8); border: 1.5px solid #bae6fd; border-radius: 999px; font-size: 0.85rem; font-weight: 600; color: #0369a1; cursor: pointer; transition: all 0.2s; }
.budget-btn:hover { border-color: #0ea5e9; background: white; }
.budget-btn-active { background: linear-gradient(90deg, #0369a1, #0ea5e9) !important; color: white !important; border-color: transparent !important; box-shadow: 0 4px 12px rgba(14,165,233,0.3); }
.error-alert { display: flex; align-items: center; background: rgba(254,242,242,0.9); border: 1px solid #fca5a5; border-radius: 0.75rem; padding: 1rem; font-size: 0.9rem; color: #dc2626; }
.submit-btn { transition: all 0.3s !important; }
.submit-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(14,165,233,0.3) !important; }
.success-state { text-align: center; padding: 2rem 0; }
.success-icon-wrap { margin-bottom: 1rem; }
.success-title { font-size: 1.75rem; font-weight: 800; color: #0c4a6e; margin-bottom: 0.5rem; }
.success-sub { color: #64748b; font-size: 1rem; line-height: 1.7; max-width: 400px; margin: 0 auto; }
.faq-card { background: rgba(255,255,255,0.75); border: 1px solid #bae6fd; border-radius: 1.25rem; padding: 1.5rem; cursor: pointer; transition: all 0.3s; }
.faq-card:hover { border-color: #38bdf8; box-shadow: 0 8px 24px rgba(14,165,233,0.1); }
.faq-header { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.faq-q { font-weight: 700; color: #0c4a6e; font-size: 0.95rem; }
.faq-a { color: #64748b; font-size: 0.9rem; line-height: 1.7; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e0f2fe; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in-down { animation: fadeInDown 0.8s ease both; }
.animate-fade-in-up { animation: fadeInUp 0.8s ease 0.2s both; }
.animate-fade-in-up-delay { animation: fadeInUp 0.8s ease 0.4s both; }
</style>
