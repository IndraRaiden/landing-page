// Extend Vue's global properties for TypeScript
import { Ref } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: (key: string) => string
    $currentLanguage: Ref<string>
    $toggleLanguage: () => void
    $translations: {
      en: Record<string, any>
      es: Record<string, any>
    }
  }
}

export {}
