<template>
  <div class="overflow-x-hidden">

    <!-- HERO -->
    <section class="relative py-36 px-6 overflow-hidden about-hero">
      <div class="absolute inset-0 overflow-hidden">
        <div class="light-ray ray-1" />
        <div class="light-ray ray-2" />
        <div class="light-ray ray-3" />
      </div>
      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <span class="section-tag animate-fade-in-down">Who We Are</span>
        <h1 class="page-title animate-fade-in-up">
          The Story Behind <br />
          <span class="gradient-text">NewHeaven IT Solutions</span>
        </h1>
        <p class="page-sub animate-fade-in-up-delay">
          A passionate fullstack developer, data analyst, and data scientist on a mission
          to help businesses grow through technology — one solution at a time.
        </p>
      </div>
    </section>

    <!-- STORY SECTION -->
    <section class="py-24 px-6 section-light">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <!-- Profile card -->
          <div class="relative flex justify-center">
            <div class="profile-card">
              <div class="profile-avatar">
                <Icon name="ph:user-circle-fill" class="text-sky-400" style="font-size:8rem" />
              </div>
              <h3 class="profile-name">Pelumi Joshua</h3>
              <p class="profile-role">Founder & Lead Engineer</p>
              <div class="profile-tags">
                <span class="profile-tag">Fullstack Dev</span>
                <span class="profile-tag">Data Analyst</span>
                <span class="profile-tag">Data Scientist</span>
              </div>
              <div class="profile-socials">
                <a href="#" class="social-btn"><Icon name="ph:github-logo-fill" /></a>
                <a href="#" class="social-btn"><Icon name="ph:linkedin-logo-fill" /></a>
                <a href="#" class="social-btn"><Icon name="ph:twitter-logo-fill" /></a>
                <a href="#" class="social-btn"><Icon name="ph:envelope-fill" /></a>
              </div>
            </div>
            <!-- Floating badges -->
            <div class="floating-badge badge-1">
              <Icon name="ph:trophy-fill" class="text-yellow-400" />
              <span>3+ Years Experience</span>
            </div>
            <div class="floating-badge badge-2">
              <Icon name="ph:star-fill" class="text-yellow-400" />
              <span>50+ Projects</span>
            </div>
          </div>

          <!-- Story text -->
          <div>
            <span class="section-tag">My Story</span>
            <h2 class="section-title text-left">Built from Passion, <br/>Driven by Purpose</h2>
            <div class="story-text space-y-4">
              <p>
                NewHeaven IT Solutions was born from a simple belief — that every business,
                no matter the size, deserves access to world-class technology solutions.
              </p>
              <p>
                With a background spanning fullstack web development, data analysis, and
                data science, I founded NewHeaven to bridge the gap between complex
                technology and real business outcomes.
              </p>
              <p>
                Every project I take on is treated as a mission. I don't just write code —
                I architect solutions that scale, perform, and deliver measurable results
                for my clients.
              </p>
            </div>
            <UButton to="/contact" color="primary" variant="solid" size="lg" class="mt-8">
              <Icon name="ph:handshake-fill" class="mr-2" /> Let's Work Together
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS SECTION -->
    <section class="py-24 px-6 skills-bg">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="section-tag">Expertise</span>
          <h2 class="section-title">Skills & Technologies</h2>
          <p class="section-sub">A well-rounded tech stack covering the full spectrum of modern software development.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="skillGroup in skillGroups" :key="skillGroup.title" class="skill-card">
            <div class="skill-card-header">
              <Icon :name="skillGroup.icon" class="skill-card-icon" />
              <h3 class="skill-card-title">{{ skillGroup.title }}</h3>
            </div>
            <div class="skill-list">
              <div v-for="skill in skillGroup.skills" :key="skill.name" class="skill-item">
                <div class="skill-info">
                  <Icon :name="skill.icon" class="text-sky-500 mr-2" />
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-fill" :style="`width: ${skill.level}%`" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VALUES SECTION -->
    <section class="py-24 px-6 section-light">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="section-tag">Core Values</span>
          <h2 class="section-title">What Drives NewHeaven</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="value in values" :key="value.title" class="value-card">
            <div class="value-icon-wrap">
              <Icon :name="value.icon" class="value-icon" />
            </div>
            <h4 class="value-title">{{ value.title }}</h4>
            <p class="value-desc">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- MILESTONES -->
    <section class="py-24 px-6 milestones-bg">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <span class="section-tag">Journey</span>
          <h2 class="section-title">Milestones & Achievements</h2>
        </div>
        <div class="timeline">
          <div v-for="(milestone, i) in milestones" :key="milestone.year"
            class="timeline-item" :class="i % 2 === 0 ? 'left' : 'right'">
            <div class="timeline-card">
              <div class="timeline-year">{{ milestone.year }}</div>
              <Icon :name="milestone.icon" class="timeline-icon" />
              <h4 class="timeline-title">{{ milestone.title }}</h4>
              <p class="timeline-desc">{{ milestone.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-32 px-6 cta-bg overflow-hidden">
      <div class="cta-orb orb-1" />
      <div class="cta-orb orb-2" />
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <Icon name="ph:paper-plane-tilt-fill" class="text-yellow-300 mb-6" style="font-size:3rem" />
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Build <br />Something Great?
        </h2>
        <p class="text-sky-100 text-lg mb-10">
          Whether you have a project in mind or just want to explore possibilities —
          I'd love to hear from you.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton to="/contact" size="xl" class="cta-btn-white">
            <Icon name="ph:chat-circle-dots-fill" class="mr-2" /> Start a Conversation
          </UButton>
          <UButton to="/services" size="xl" variant="outline" class="cta-btn-outline">
            <Icon name="ph:list-bullets-fill" class="mr-2" /> View Services
          </UButton>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const skillGroups = [
  {
    icon: 'ph:code-fill',
    title: 'Frontend & Fullstack',
    skills: [
      { icon: 'logos:vue', name: 'Vue.js / Nuxt', level: 95 },
      { icon: 'logos:typescript-icon', name: 'TypeScript', level: 90 },
      { icon: 'logos:tailwindcss-icon', name: 'Tailwind CSS', level: 92 },
      { icon: 'logos:nodejs-icon', name: 'Node.js', level: 88 },
    ],
  },
  {
    icon: 'ph:database-fill',
    title: 'Data & Backend',
    skills: [
      { icon: 'logos:python', name: 'Python', level: 93 },
      { icon: 'logos:postgresql', name: 'PostgreSQL', level: 87 },
      { icon: 'logos:supabase-icon', name: 'Supabase', level: 90 },
      { icon: 'logos:docker-icon', name: 'Docker', level: 80 },
    ],
  },
  {
    icon: 'ph:brain-fill',
    title: 'AI & Data Science',
    skills: [
      { icon: 'logos:tensorflow', name: 'TensorFlow', level: 85 },
      { icon: 'ph:chart-bar-fill', name: 'Data Analysis', level: 92 },
      { icon: 'ph:robot-fill', name: 'Machine Learning', level: 88 },
      { icon: 'ph:graph-fill', name: 'Data Visualization', level: 90 },
    ],
  },
]

const values = [
  { icon: 'ph:target-fill', title: 'Results First', desc: 'Every decision is made with your business outcomes in mind.' },
  { icon: 'ph:lightbulb-fill', title: 'Innovation', desc: 'Staying ahead of trends to deliver future-proof solutions.' },
  { icon: 'ph:handshake-fill', title: 'Integrity', desc: 'Honest communication and transparent processes always.' },
  { icon: 'ph:rocket-launch-fill', title: 'Excellence', desc: 'High standards in everything — from code quality to delivery.' },
]

const milestones = [
  { year: '2024', icon: 'ph:graduation-cap-fill', title: 'Started the Journey', desc: 'Began fullstack development and data science studies with a focus on real-world applications.' },
  { year: '2025', icon: 'ph:briefcase-fill', title: 'First Clients', desc: 'Delivered 10+ successful projects for startups and small businesses across multiple industries.' },
  { year: '2026', icon: 'ph:building-office-fill', title: 'NewHeaven Founded', desc: 'Officially launched NewHeaven IT Solutions to scale impact and serve more businesses.' },
  { year: '2027', icon: 'ph:trophy-fill', title: 'Growing Strong', desc: '50+ projects delivered, expanding into AI/ML services and enterprise solutions.' },
]

useSeoMeta({
  title: 'About — NewHeaven IT Solutions',
  description: 'Learn about NewHeaven IT Solutions — a fullstack development, data analysis, and AI company built to grow your business.',
})
</script>

<style scoped>
.about-hero {
  background: linear-gradient(180deg, #0ea5e9 0%, #38bdf8 30%, #bae6fd 70%, #e0f2fe 100%);
}
.light-ray {
  position: absolute; top: -10%; height: 120%;
  background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%);
  border-radius: 999px; animation: rayPulse 6s ease-in-out infinite;
}
.ray-1 { left: 20%; transform: rotate(-15deg); width: 60px; opacity: 0.3; }
.ray-2 { left: 50%; transform: rotate(5deg); width: 40px; opacity: 0.2; animation-delay: 2s; }
.ray-3 { left: 75%; transform: rotate(20deg); width: 80px; opacity: 0.25; animation-delay: 4s; }
@keyframes rayPulse { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.4; } }

.section-light { background: linear-gradient(180deg, #e0f2fe 0%, #f0f9ff 50%, #ecfdf5 100%); }
.skills-bg { background: linear-gradient(180deg, #ecfdf5 0%, #e0f2fe 100%); }
.milestones-bg { background: linear-gradient(180deg, #e0f2fe 0%, #eff6ff 100%); }
.cta-bg { background: linear-gradient(135deg, #0369a1 0%, #0ea5e9 40%, #059669 100%); }

.section-tag {
  display: inline-block; background: rgba(14,165,233,0.1); color: #0369a1;
  font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 6px 16px; border-radius: 999px; border: 1px solid rgba(14,165,233,0.2); margin-bottom: 1rem;
}
.section-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: #0c4a6e; line-height: 1.2; margin-bottom: 1rem; text-align: center; }
.section-sub { color: #64748b; font-size: 1.05rem; max-width: 560px; margin: 0 auto; line-height: 1.7; text-align: center; }

.page-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; color: #0c4a6e; line-height: 1.1; margin: 1rem 0; letter-spacing: -0.02em; }
.gradient-text {
  background: linear-gradient(90deg, #0c4a6e, #0369a1, #0ea5e9, #059669);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  background-size: 200%; animation: gradientMove 4s ease infinite;
}
@keyframes gradientMove { 0% { background-position: 0%; } 50% { background-position: 100%; } 100% { background-position: 0%; } }
.page-sub { color: #1e40af; font-size: 1.1rem; max-width: 600px; margin: 0 auto; line-height: 1.8; opacity: 0.85; }

/* PROFILE */
.profile-card {
  background: rgba(255,255,255,0.85); border: 1px solid #bae6fd;
  border-radius: 2rem; padding: 2.5rem 2rem; text-align: center;
  backdrop-filter: blur(12px); box-shadow: 0 30px 60px rgba(14,165,233,0.12);
  animation: float 4s ease-in-out infinite; width: 100%; max-width: 320px;
}
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
.profile-avatar { margin-bottom: 1rem; }
.profile-name { font-size: 1.5rem; font-weight: 800; color: #0c4a6e; }
.profile-role { color: #0369a1; font-weight: 600; font-size: 0.9rem; margin-bottom: 1rem; }
.profile-tags { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-bottom: 1.5rem; }
.profile-tag {
  background: rgba(14,165,233,0.1); color: #0369a1; border: 1px solid rgba(14,165,233,0.2);
  border-radius: 999px; padding: 4px 12px; font-size: 0.75rem; font-weight: 600;
}
.profile-socials { display: flex; gap: 10px; justify-content: center; }
.social-btn {
  width: 40px; height: 40px; background: rgba(14,165,233,0.1); border: 1px solid #bae6fd;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  color: #0369a1; font-size: 1.1rem; transition: all 0.3s; text-decoration: none;
}
.social-btn:hover { background: #0369a1; color: white; transform: translateY(-3px); }

.floating-badge {
  position: absolute; display: flex; align-items: center; gap: 6px;
  background: rgba(255,255,255,0.9); border: 1px solid #bae6fd;
  border-radius: 999px; padding: 8px 16px; font-size: 0.8rem; font-weight: 600; color: #0369a1;
  box-shadow: 0 8px 24px rgba(14,165,233,0.15); backdrop-filter: blur(8px);
}
.badge-1 { top: 10px; right: -10px; animation: float 3s ease-in-out infinite 0.5s; }
.badge-2 { bottom: 10px; left: -10px; animation: float 3s ease-in-out infinite 1s; }

.story-text p { color: #475569; font-size: 1rem; line-height: 1.8; }

/* SKILLS */
.skill-card {
  background: rgba(255,255,255,0.75); border: 1px solid #bae6fd;
  border-radius: 1.5rem; padding: 2rem; transition: all 0.3s;
}
.skill-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(14,165,233,0.12); }
.skill-card-header { display: flex; align-items: center; gap: 12px; margin-bottom: 1.5rem; }
.skill-card-icon { font-size: 1.75rem; color: #0369a1; }
.skill-card-title { font-size: 1.1rem; font-weight: 700; color: #0c4a6e; }
.skill-list { display: flex; flex-direction: column; gap: 1rem; }
.skill-item { }
.skill-info { display: flex; align-items: center; margin-bottom: 6px; }
.skill-name { flex: 1; font-size: 0.875rem; font-weight: 600; color: #334155; }
.skill-level { font-size: 0.75rem; font-weight: 700; color: #0369a1; }
.skill-bar { height: 6px; background: #e0f2fe; border-radius: 999px; overflow: hidden; }
.skill-fill {
  height: 100%; background: linear-gradient(90deg, #0369a1, #0ea5e9);
  border-radius: 999px; transition: width 1s ease;
  animation: fillBar 1.5s ease both;
}
@keyframes fillBar { from { width: 0 !important; } }

/* VALUES */
.value-card {
  background: rgba(255,255,255,0.7); border: 1px solid #bae6fd;
  border-radius: 1.25rem; padding: 2rem 1.5rem; text-align: center; transition: all 0.3s;
}
.value-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(14,165,233,0.12); border-color: #38bdf8; }
.value-icon-wrap {
  width: 56px; height: 56px; margin: 0 auto 1rem;
  background: linear-gradient(135deg, #e0f2fe, #bae6fd);
  border-radius: 1rem; display: flex; align-items: center; justify-content: center;
}
.value-icon { font-size: 1.75rem; color: #0369a1; }
.value-title { font-size: 1rem; font-weight: 700; color: #0c4a6e; margin-bottom: 0.5rem; }
.value-desc { color: #64748b; font-size: 0.875rem; line-height: 1.6; }

/* TIMELINE */
.timeline { position: relative; display: flex; flex-direction: column; gap: 2rem; }
.timeline::before {
  content: ''; position: absolute; left: 50%; top: 0; bottom: 0;
  width: 2px; background: linear-gradient(180deg, #0ea5e9, #059669);
  transform: translateX(-50%);
}
.timeline-item { display: flex; justify-content: flex-end; padding-right: calc(50% + 2rem); }
.timeline-item.right { justify-content: flex-start; padding-right: 0; padding-left: calc(50% + 2rem); }
.timeline-card {
  background: rgba(255,255,255,0.8); border: 1px solid #bae6fd;
  border-radius: 1.25rem; padding: 1.5rem; max-width: 280px;
  backdrop-filter: blur(8px); transition: all 0.3s;
}
.timeline-card:hover { transform: scale(1.03); box-shadow: 0 16px 40px rgba(14,165,233,0.12); }
.timeline-year {
  display: inline-block; background: linear-gradient(90deg, #0369a1, #0ea5e9);
  color: white; border-radius: 999px; padding: 2px 12px;
  font-size: 0.8rem; font-weight: 700; margin-bottom: 0.75rem;
}
.timeline-icon { font-size: 1.5rem; color: #0369a1; margin-bottom: 0.5rem; display: block; }
.timeline-title { font-size: 1rem; font-weight: 700; color: #0c4a6e; margin-bottom: 0.35rem; }
.timeline-desc { color: #64748b; font-size: 0.85rem; line-height: 1.6; }

/* CTA */
.cta-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.3; }
.orb-1 { width: 400px; height: 400px; background: white; top: -100px; left: -100px; }
.orb-2 { width: 300px; height: 300px; background: #86efac; bottom: -50px; right: -50px; }
.cta-btn-white { background: white !important; color: #0369a1 !important; font-weight: 700; transition: all 0.3s; }
.cta-btn-white:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(0,0,0,0.2); }
.cta-btn-outline { border-color: white !important; color: white !important; transition: all 0.3s; }
.cta-btn-outline:hover { background: rgba(255,255,255,0.1) !important; transform: translateY(-3px); }

@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in-down { animation: fadeInDown 0.8s ease both; }
.animate-fade-in-up { animation: fadeInUp 0.8s ease 0.2s both; }
.animate-fade-in-up-delay { animation: fadeInUp 0.8s ease 0.4s both; }
</style>
