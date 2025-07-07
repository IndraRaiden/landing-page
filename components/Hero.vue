<template>
  <section class="hero-section">

    <!-- Hero Image -->
    <img
      class="hero-img"
      src="https://images.unsplash.com/photo-1623718649591-311775a30c43?q=80&w=2070&auto=format&fit=crop"
      alt="Beautiful Sayulita Beachfront Property"
      data-animation="zoom-in"
    />
    <!-- Multiple layered color overlays for depth and visual interest -->
    <div class="color-overlay primary-overlay"></div>
    <div class="color-overlay secondary-overlay"></div>
    <div class="color-overlay accent-overlay"></div>
  </section>
</template>

<script setup lang="ts">
// No script logic needed for static hero component
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--color-deep-purple);
  overflow: hidden;
}

@keyframes slow-pulse {
  0%, 100% { opacity: 0.85; }
  50% { opacity: 1; }
}

@keyframes subtle-scale {
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.logo {
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: 2px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--color-text-dark);
  text-decoration: none;
  letter-spacing: 1px;
}

.hero-overlay a {
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, var(--color-electric-yellow) 0%, var(--color-sunset-orange) 150%);
  color: var(--color-black);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border-radius: 3px;
  box-shadow: var(--shadow-vibrant);
  border: 2px solid transparent;
  background-size: 200% 100%;
  background-position: 0% 0%;
}

.hero-overlay a:hover {
  color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: var(--shadow-deep);
  border: 2px solid var(--color-electric-yellow);
  background-position: 100% 0%;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: relative;
  z-index: 1;
  filter: saturate(1.1) contrast(1.05);
  animation: subtle-scale 20s infinite ease-in-out;
}

.color-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.primary-overlay {
  z-index: 2;
  background: radial-gradient(circle at 30% 30%, 
    rgba(255, 214, 10, 0.4) 0%,      /* Electric Yellow */
    rgba(255, 0, 110, 0.6) 70%,      /* Hot Pink */
    rgba(60, 9, 108, 0.4) 100%);     /* Deep Purple */
  mix-blend-mode: screen;
}

.secondary-overlay {
  z-index: 3;
  background: linear-gradient(215deg,
    transparent 25%,
    rgba(255, 133, 0, 0.45) 40%,     /* Sunset Orange */
    rgba(199, 125, 255, 0.35) 75%);  /* Magenta */
  mix-blend-mode: multiply;
  opacity: 0.8;
}

.accent-overlay {
  z-index: 4;
  background: 
    linear-gradient(90deg, transparent 50%, rgba(255, 214, 10, 0.3) 100%),
    linear-gradient(180deg, rgba(255, 122, 90, 0.3) 0%, transparent 100%);
  mix-blend-mode: color-dodge;
  backdrop-filter: contrast(1.05) brightness(1.05);
}
</style>
