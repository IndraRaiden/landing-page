import { ref, reactive } from 'vue'
import enTranslations from './translations/en'
import esTranslations from './translations/es'

// Create a reactive store for translations
export const currentLanguage = ref('en')
export const translations = reactive({
  en: enTranslations,
  es: esTranslations
})

// Function to toggle between languages
export function toggleLanguage() {
  currentLanguage.value = currentLanguage.value === 'en' ? 'es' : 'en'
  document.documentElement.setAttribute('lang', currentLanguage.value)
  
  // Save preference to localStorage
  if (process.client) {
    localStorage.setItem('preferredLanguage', currentLanguage.value)
  }
}

// Function to get translation by key (supports nested keys like 'navbar.about')
export function t(key) {
  const keys = key.split('.')
  let result = translations[currentLanguage.value]
  
  for (const k of keys) {
    if (result && result[k] !== undefined) {
      result = result[k]
    } else {
      // Fallback to English if translation is missing
      let fallback = translations['en']
      for (const fk of keys) {
        if (fallback && fallback[fk] !== undefined) {
          fallback = fallback[fk]
        } else {
          return key // Return the key itself as last resort
        }
      }
      return fallback || key
    }
  }
  
  return result
}
