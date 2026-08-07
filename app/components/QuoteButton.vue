<template>
  <NuxtLink
    to="/get-a-quote"
    class="quote-fab"
    title="Get a free quote"
  >
    <Icon name="ph:calculator-fill" class="quote-fab-icon" />
    <span class="quote-fab-label">Get a Quote</span>
  </NuxtLink>
</template>

<style scoped>
.quote-fab {
  position: fixed;
  bottom: 6rem;
  right: 2rem;
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #0369a1, #0ea5e9);
  color: white;
  border-radius: 9999px;
  padding: 0.75rem 1.25rem;
  font-weight: 700;
  font-size: 0.875rem;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(14,165,233,0.4);
  transition: all 0.3s ease;
}
.quote-fab:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 32px rgba(14,165,233,0.6);
}
.quote-fab-icon { font-size: 1.2rem; flex-shrink: 0; }
.quote-fab-label { white-space: nowrap; }

@media (max-width: 480px) {
  .quote-fab { bottom: 5rem; right: 1rem; padding: 0.75rem 1rem; }
  .quote-fab-label { display: none; }
  .quote-fab { border-radius: 50%; width: 52px; height: 52px; justify-content: center; }
}
</style>
