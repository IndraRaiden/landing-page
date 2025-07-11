import { currentLanguage, toggleLanguage, t, translations } from '../utils/translationStore'

export default defineNuxtPlugin(nuxtApp => {
  // Make translation utilities available globally
  nuxtApp.vueApp.config.globalProperties.$t = t
  nuxtApp.vueApp.config.globalProperties.$currentLanguage = currentLanguage
  nuxtApp.vueApp.config.globalProperties.$toggleLanguage = toggleLanguage
  nuxtApp.vueApp.config.globalProperties.$translations = translations

  // Also provide them for composition API usage
  nuxtApp.provide('t', t)
  nuxtApp.provide('currentLanguage', currentLanguage)
  nuxtApp.provide('toggleLanguage', toggleLanguage)
  nuxtApp.provide('translations', translations)

  // Initialize language attribute on document
  if (process.client) {
    // Check if user has a stored language preference
    const savedLang = localStorage.getItem('preferredLanguage')
    if (savedLang === 'es' || savedLang === 'en') {
      currentLanguage.value = savedLang
    }
    
    // Set the HTML lang attribute
    document.documentElement.setAttribute('lang', currentLanguage.value)
  }
})
