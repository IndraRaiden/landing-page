<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup>
// Import our translation system
import { onMounted } from 'vue';
import { currentLanguage } from './utils/translationStore';

// Initialize language attribute on document when app loads
onMounted(() => {
  if (process.client) {
    // Check if user has a stored language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang === 'es' || savedLang === 'en') {
      currentLanguage.value = savedLang;
    }
    
    // Set the HTML lang attribute
    document.documentElement.setAttribute('lang', currentLanguage.value);
  }
});
</script>
