<script setup>
const welcomeText = ref('Welcome to Nuxt 3 Starter')
</script>

<template>
  <div
    data-testid="welcome-nuxt"
    class="text-red-900"
  >
    {{ welcomeText }}
  </div>
</template>
