import { defineNuxtPlugin } from '#app'
import * as lucideIcons from 'lucide-vue-next'

export default defineNuxtPlugin((nuxtApp) => {
  // Globally register all Lucide icons so they can be used anywhere in templates
  Object.entries(lucideIcons).forEach(([name, component]) => {
    nuxtApp.vueApp.component(name, component as any)
  })
})
