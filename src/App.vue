<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-canvas text-fg font-ds-body antialiased transition-colors duration-200 flex flex-col">
    <AppHeader />
    <RouterView class="flex-1" />
    <AppFooter />
  </div>
</template>
