<template>
  <div class="min-h-screen text-slate-800"
    style="background: linear-gradient(160deg, #bae6fd 0%, #e0f2fe 30%, #f0f9ff 60%, #dcfce7 100%); background-attachment: fixed;">
    <AppNavbar />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
