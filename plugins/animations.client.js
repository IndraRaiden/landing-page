import { initScrollAnimations } from '~/utils/animations';

export default defineNuxtPlugin(nuxtApp => {
  // We need to wait for the client side to be mounted
  nuxtApp.vueApp.mixin({
    mounted() {
      // Only run on root component mount
      if (this.$parent === null) {
        // Wait for DOM to be ready
        setTimeout(() => {
          initScrollAnimations();
        }, 100);
      }
    }
  });
});
