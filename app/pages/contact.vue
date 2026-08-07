<template>
  <div class="overflow-x-hidden">

    <!-- HERO -->
    <section class="relative py-36 px-6 overflow-hidden">
      <video
        class="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/lu6y4btx/video/upload/q_auto,f_auto/v1784833222/28115-367748176_olrl4i.mp4"
        autoplay
        loop
        muted
        playsinline
        preload="auto"
      />
      <div class="absolute inset-0 z-1 contact-hero-overlay" />
      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <span class="contact-hero-tag animate-fade-in-down">Get In Touch</span>
        <h1 class="contact-hero-title animate-fade-in-up">
          Let us build something<br />
          <span class="contact-hero-gradient">extraordinary together.</span>
        </h1>
        <p class="contact-hero-sub animate-fade-in-up-delay">
          Fill out the form below and we will get back to you
          within 24 hours with a free consultation.
        </p>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section class="relative py-24 px-6 overflow-hidden">
      <video
        class="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/lu6y4btx/video/upload/q_auto,f_auto/v1784833569/144555-784867402_gir6bx.mp4"
        autoplay
        loop
        muted
        playsinline
        preload="none"
      />
      <div class="absolute inset-0 z-1 contact-form-overlay" />
      <div class="relative z-10 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-16">

          <!-- Left info panel -->
          <div class="lg:col-span-2 space-y-8">
            <div>
              <h2 class="contact-info-title">Contact Information</h2>
              <p class="contact-info-sub">Reach out through any of these channels or fill the form.</p>
            </div>
            <div class="space-y-4">
              <div v-for="info in contactInfo" :key="info.label" class="contact-info-card">
                <div class="contact-info-icon-wrap">
                  <Icon :name="info.icon" class="contact-info-icon" />
                </div>
                <div>
                  <p class="contact-info-label">{{ info.label }}</p>
                  <p class="contact-info-value">{{ info.value }}</p>
                </div>
              </div>
            </div>
            <div class="contact-response-badge">
              <Icon name="ph:clock-countdown-fill" class="text-green-400 text-xl" />
              <div>
                <p class="font-bold text-white">Fast Response</p>
                <p class="text-sky-200 text-sm">Typically within 24hrs</p>
              </div>
            </div>
            <div>
              <p class="text-sky-200 font-semibold mb-4">Follow Us</p>
              <div class="flex gap-3">
                <a
                  v-for="social in socials"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="contact-social-btn"
                >
                  <Icon :name="social.icon" />
                </a>
              </div>
            </div>
          </div>

          <!-- Right form -->
          <div class="lg:col-span-3">
            <div class="contact-form-card">

              <!-- Success state -->
              <div v-if="submitted" class="success-state text-center py-8">
                <div class="success-icon-wrap mb-4">
                  <Icon name="ph:check-circle-fill" class="text-green-400" style="font-size:4rem" />
                </div>
                <h3 class="success-title-v">Message Sent!</h3>
                <p class="success-sub-v">
                  Thank you for reaching out. We will review your message and
                  get back to you within 24 hours.
                </p>
                <UButton color="primary" variant="solid" @click="submitted = false" class="mt-6">
                  <Icon name="ph:arrow-counter-clockwise-bold" class="mr-2" /> Send Another Message
                </UButton>
              </div>

              <!-- Form -->
              <div v-else>
                <h3 class="contact-form-title">Send a Message</h3>
                <p class="contact-form-sub">Free consultation — no strings attached.</p>
                <div class="space-y-5 mt-8">

                  <!-- Name & Email -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div class="field-group">
                      <label class="field-label-v">
                        <Icon name="ph:user-fill" class="mr-1" /> Name *
                      </label>
                      <input
                        v-model="form.name"
                        type="text"
                        placeholder="Enter full name"
                        class="field-input-v"
                        :class="errors.name ? 'border-red-400' : ''"
                      />
                      <span v-if="errors.name" class="field-error">{{ errors.name }}</span>
                    </div>
                    <div class="field-group">
                      <label class="field-label-v">
                        <Icon name="ph:envelope-fill" class="mr-1" /> Email Address *
                      </label>
                      <input
                        v-model="form.email"
                        type="email"
                        placeholder="you@company.com"
                        class="field-input-v"
                        :class="errors.email ? 'border-red-400' : ''"
                      />
                      <span v-if="errors.email" class="field-error">{{ errors.email }}</span>
                    </div>
                  </div>

                  <!-- Company & Service -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div class="field-group">
                      <label class="field-label-v">
                        <Icon name="ph:building-office-fill" class="mr-1" /> Company
                      </label>
                      <input
                        v-model="form.company"
                        type="text"
                        placeholder="Your Company"
                        class="field-input-v"
                      />
                    </div>
                    <div class="field-group">
                      <label class="field-label-v">
                        <Icon name="ph:briefcase-fill" class="mr-1" /> Service Needed
                      </label>
                      <select v-model="form.service" class="field-input-v">
                        <option value="">Select a service</option>
                        <option v-for="s in services" :key="s" :value="s">{{ s }}</option>
                      </select>
                    </div>
                  </div>

                  <!-- Address -->
                  <div class="field-group">
                    <label class="field-label-v">
                      <Icon name="ph:map-pin-fill" class="mr-1" /> Address
                    </label>
                    <input
                      v-model="form.address"
                      type="text"
                      placeholder="Your location address"
                      class="field-input-v"
                    />
                  </div>

                  <!-- Message -->
                  <div class="field-group">
                    <label class="field-label-v">
                      <Icon name="ph:chat-text-fill" class="mr-1" /> Message *
                    </label>
                    <textarea
                      v-model="form.message"
                      rows="5"
                      placeholder="Tell me about your project, goals, and timeline..."
                      class="field-input-v resize-none"
                      :class="errors.message ? 'border-red-400' : ''"
                    />
                    <span v-if="errors.message" class="field-error">{{ errors.message }}</span>
                  </div>

                  <!-- Error alert -->
                  <div v-if="submitError" class="error-alert">
                    <Icon name="ph:warning-fill" class="text-red-400 mr-2" />
                    {{ submitError }}
                  </div>

                  <!-- Submit -->
                  <UButton
                    color="primary"
                    variant="solid"
                    size="xl"
                    class="w-full submit-btn"
                    :loading="loading"
                    :disabled="loading"
                    @click="handleSubmit"
                  >
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
    <section class="relative py-24 px-6 overflow-hidden">
      <video
        class="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/lu6y4btx/video/upload/q_auto,f_auto/v1784833681/22183-712840599_frir9i.mp4"
        autoplay
        loop
        muted
        playsinline
        preload="none"
      />
      <div class="absolute inset-0 z-1 faq-video-overlay" />
      <div class="relative z-10 max-w-3xl mx-auto">
        <div class="text-center mb-16">
          <span class="faq-video-tag">FAQ</span>
          <h2 class="faq-video-title">Common Questions</h2>
        </div>
        <div class="space-y-4">
          <div
            v-for="faq in faqs"
            :key="faq.q"
            class="faq-card-v"
            @click="faq.open = !faq.open"
          >
            <div class="faq-header-v">
              <span class="faq-q-v">{{ faq.q }}</span>
              <Icon
                :name="faq.open ? 'ph:caret-up-bold' : 'ph:caret-down-bold'"
                class="faq-caret"
              />
            </div>
            <div v-if="faq.open" class="faq-a-v">{{ faq.a }}</div>
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
const supabase = useSupabaseClient()

const form = reactive({
  name: '',
  email: '',
  company: '',
  service: '',
  address: '',
  message: '',
})

const errors = reactive({ name: '', email: '', message: '' })
const loading = ref(false)
const submitted = ref(false)
const submitError = ref('')

const services = [
  'Website Development',
  'Data Mining',
  'Data Analysis',
  'Data Science & AI',
]

const contactInfo = [
  { icon: 'ph:envelope-fill', label: 'Email', value: 'newheavenitsolutions@outlook.com' },
  { icon: 'ph:map-pin-fill', label: 'Location', value: 'Available Worldwide (Remote)' },
  { icon: 'ph:clock-fill', label: 'Working Hours', value: 'Mon-Fri, 9am-5pm WAT' },
]

const socials = [
  { name: 'GitHub', icon: 'ph:github-logo-fill', url: 'https://github.com/oldstunnatech' },
  { name: 'LinkedIn', icon: 'ph:linkedin-logo-fill', url: 'https://www.linkedin.com/in/newheaven-it-solutions-a6b1b2309' },
  { name: 'Twitter', icon: 'ph:x-logo-fill', url: 'https://x.com/NewHeavenIT' },
]

const faqs = reactive([
  { q: 'How long does a typical project take?', a: 'It depends on scope. A simple website takes 1-2 weeks. A full web app or data science project can take 4-12 weeks. We will give you a clear timeline after the discovery call.', open: false },
  { q: 'Do you offer ongoing support after launch?', a: 'Yes! We offer monthly maintenance and support retainer packages to keep your project running smoothly after delivery.', open: false },
  { q: 'What payment methods do you accept?', a: 'We accept bank transfers, Stripe, and crypto. A 30% deposit is required before work begins, with the remainder due on delivery.', open: false },
  { q: 'Can you work with my existing codebase?', a: 'Absolutely. We regularly work with existing projects to add features, fix bugs, or perform full refactors.', open: false },
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
      address: form.address || null,
      message: form.message,
    })
    if (error) throw error

    await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form },
    })

    submitted.value = true
    Object.assign(form, { name: '', email: '', company: '', service: '', address: '', message: '' })
  } catch (err: any) {
    if (!navigator.onLine || err?.message?.includes('fetch')) {
      submitError.value = 'No internet connection. Please check your network and try again.'
    } else {
      submitError.value = 'Something went wrong. Please try again or email us directly.'
    }
  } finally {
    loading.value = false
  }
}

useSeoMeta({
  title: 'Contact NewHeaven IT Solutions',
  description: 'Get in touch with NewHeaven IT Solutions for a free consultation on your next project.',
})
</script>

<style scoped>
/* ── Contact Hero Video ── */
.contact-hero-overlay {
  background: linear-gradient(
    180deg,
    rgba(2, 10, 35, 0.70) 0%,
    rgba(3, 69, 120, 0.60) 50%,
    rgba(2, 10, 35, 0.75) 100%
  );
}
.contact-hero-tag {
  display: inline-block;
  background: rgba(255,255,255,0.12);
  color: white;
  font-size: 0.8rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 6px 18px; border-radius: 999px;
  border: 1px solid rgba(125,211,252,0.3);
  margin-bottom: 1.25rem;
  backdrop-filter: blur(8px);
}
.contact-hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900; color: white;
  line-height: 1.1; margin: 1rem 0;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 30px rgba(0,0,0,0.4);
}
.contact-hero-gradient {
  background: linear-gradient(90deg, #7dd3fc, #4ade80, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200%;
  animation: gradientMove 4s ease infinite;
}
@keyframes gradientMove {
  0% { background-position: 0%; }
  50% { background-position: 100%; }
  100% { background-position: 0%; }
}
.contact-hero-sub {
  color: rgba(255,255,255,0.80);
  font-size: 1.1rem; max-width: 560px;
  margin: 0 auto; line-height: 1.8;
}

/* ── Contact Form Video Section ── */
.contact-form-overlay {
  background: linear-gradient(
    160deg,
    rgba(2, 10, 35, 0.82) 0%,
    rgba(3, 69, 120, 0.72) 50%,
    rgba(2, 30, 15, 0.82) 100%
  );
}
.contact-info-title {
  font-size: 1.5rem; font-weight: 800; color: white;
  margin-bottom: 0.5rem;
}
.contact-info-sub {
  color: rgba(255,255,255,0.65); font-size: 0.95rem; line-height: 1.7;
}
.contact-info-card {
  display: flex; align-items: center; gap: 1rem;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 1rem; padding: 1rem 1.25rem;
  backdrop-filter: blur(12px);
  transition: all 0.3s;
}
.contact-info-card:hover {
  background: rgba(255,255,255,0.12);
  transform: translateX(6px);
  border-color: rgba(125,211,252,0.3);
}
.contact-info-icon-wrap {
  width: 44px; height: 44px;
  background: rgba(14,165,233,0.15);
  border: 1px solid rgba(125,211,252,0.25);
  border-radius: 0.75rem;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.contact-info-icon { font-size: 1.25rem; color: #7dd3fc; }
.contact-info-label {
  font-size: 0.75rem; font-weight: 600;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase; letter-spacing: 0.05em;
}
.contact-info-value {
  font-size: 0.9rem; font-weight: 600; color: white;
}
.contact-response-badge {
  display: flex; align-items: center; gap: 1rem;
  background: rgba(5,150,105,0.15);
  border: 1px solid rgba(74,222,128,0.25);
  border-radius: 1rem; padding: 1rem 1.25rem;
  backdrop-filter: blur(12px);
}
.contact-social-btn {
  width: 44px; height: 44px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #7dd3fc; font-size: 1.2rem;
  transition: all 0.3s; text-decoration: none;
}
.contact-social-btn:hover {
  background: rgba(14,165,233,0.3);
  color: white; transform: translateY(-3px);
  border-color: rgba(125,211,252,0.4);
}
.contact-form-card {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 2rem; padding: 2.5rem;
  backdrop-filter: blur(16px);
  box-shadow: 0 30px 60px rgba(0,0,0,0.3);
}
.contact-form-title {
  font-size: 1.5rem; font-weight: 800; color: white;
}
.contact-form-sub {
  color: rgba(255,255,255,0.6); font-size: 0.9rem; margin-top: 0.25rem;
}
.field-label-v {
  font-size: 0.85rem; font-weight: 600;
  color: #7dd3fc;
  display: flex; align-items: center;
  margin-bottom: 6px;
}
.field-input-v {
  width: 100%; padding: 12px 16px;
  background: rgba(255,255,255,0.08);
  border: 1.5px solid rgba(255,255,255,0.15);
  border-radius: 0.75rem;
  font-size: 0.9rem; color: white;
  outline: none; transition: all 0.2s;
}
.field-input-v::placeholder { color: rgba(255,255,255,0.35); }
.field-input-v:focus {
  border-color: #0ea5e9;
  box-shadow: 0 0 0 3px rgba(14,165,233,0.15);
  background: rgba(255,255,255,0.12);
}
.field-input-v option { background: #0c4a6e; color: white; }
.field-error { font-size: 0.8rem; color: #fca5a5; font-weight: 500; }
.success-title-v {
  font-size: 1.75rem; font-weight: 800;
  color: white; margin-bottom: 0.5rem;
}
.success-sub-v {
  color: rgba(255,255,255,0.7);
  font-size: 1rem; line-height: 1.7;
  max-width: 400px; margin: 0 auto;
}
.error-alert {
  display: flex; align-items: center;
  background: rgba(239,68,68,0.15);
  border: 1px solid rgba(248,113,113,0.3);
  border-radius: 0.75rem; padding: 1rem;
  font-size: 0.9rem; color: #fca5a5;
}

/* ── FAQ Video Section ── */
.faq-video-overlay {
  background: linear-gradient(
    180deg,
    rgba(2, 10, 35, 0.82) 0%,
    rgba(3, 69, 120, 0.72) 50%,
    rgba(2, 10, 35, 0.85) 100%
  );
}
.faq-video-tag {
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
.faq-video-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800; color: white;
  line-height: 1.2; margin-bottom: 1rem;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
  text-align: center;
}
.faq-card-v {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 1.25rem; padding: 1.5rem;
  cursor: pointer;
  backdrop-filter: blur(14px);
  transition: all 0.3s ease;
}
.faq-card-v:hover {
  background: rgba(255,255,255,0.12);
  border-color: rgba(125,211,252,0.35);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}
.faq-header-v {
  display: flex; justify-content: space-between;
  align-items: center; gap: 1rem;
}
.faq-q-v {
  font-weight: 700; color: white;
  font-size: 0.95rem; line-height: 1.5;
}
.faq-caret {
  color: #7dd3fc; font-size: 1rem; flex-shrink: 0;
}
.faq-a-v {
  color: rgba(255,255,255,0.70);
  font-size: 0.9rem; line-height: 1.7;
  margin-top: 1rem; padding-top: 1rem;
  border-top: 1px solid rgba(255,255,255,0.1);
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

@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in-down { animation: fadeInDown 0.8s ease both; }
.animate-fade-in-up { animation: fadeInUp 0.8s ease 0.2s both; }
.animate-fade-in-up-delay { animation: fadeInUp 0.8s ease 0.4s both; }
</style>