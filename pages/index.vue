<template>
  <Navbar />
  <Hero />
  <Message />
  <Contact />
  <MeetMe />
  <CTA />
  <Working />
  <CTA2 />
  <AnimatedDivider />
  <FindYourPlace />
  <Footer />
</template>

<script setup lang="ts">
import Hero from '~/components/Hero.vue';
import Navbar from '~/components/Navbar.vue';
import Message from '~/components/Message.vue';
import Contact from '~/components/Contact.vue';
import MeetMe from '~/components/MeetMe.vue';
import CTA from '~/components/CTA.vue';
import Working from '~/components/Working.vue';
import CTA2 from '~/components/CTA2.vue';
import AnimatedDivider from '~/components/AnimatedDivider.vue';
import FindYourPlace from '~/components/FindYourPlace.vue';
import Footer from '~/components/Footer.vue';

// Import the translation utilities so they're available globally
import { currentLanguage, toggleLanguage, t } from '~/utils/translationStore';

// Make translation functions available to all components in this page
// This allows child components to access them via inject
defineExpose({ currentLanguage, toggleLanguage, t });
</script>

<style>
/* Define any global styles for translations if needed */
[lang="es"] .en-only {
  display: none;
}

[lang="en"] .es-only {
  display: none;
}
</style>


