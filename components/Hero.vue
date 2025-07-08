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
  background-color: #FFFFFF;
  overflow: hidden;
  border-bottom: 2px solid var(--accent-magenta);
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
  background: #FFFFFF;
  color: #333333;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border-radius: 3px;
  box-shadow: 0 4px 16px rgba(200, 200, 200, 0.2);
  border: 1px solid #F0F0F0;
  background-size: 200% 100%;
  background-position: 0% 0%;
}

.hero-overlay a:hover {
  color: #555555;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(200, 200, 200, 0.3);
  border: 1px solid #E0E0E0;
  background-position: 100% 0%;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: relative;
  z-index: 1;
  filter: brightness(1.05) contrast(0.95) saturate(1.1);
  animation: subtle-scale 20s infinite ease-in-out;
}

.color-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.primary-overlay {
  z-index: 2;
  background: linear-gradient(135deg, rgba(255,240,210,0.5) 0%, rgba(255,220,180,0.4) 100%);
  mix-blend-mode: overlay;
}

.secondary-overlay {
  z-index: 3;
  background: linear-gradient(45deg, rgba(255,180,120,0.2) 0%, rgba(255,100,150,0.1) 100%);
  mix-blend-mode: soft-light;
}

.accent-overlay {
  z-index: 3;
  background: linear-gradient(215deg,
    transparent 25%,
    rgba(250, 250, 250, 0.45) 40%,
    rgba(245, 245, 245, 0.35) 75%);
  mix-blend-mode: overlay;
  opacity: 0.5;
}

.accent-overlay {
  z-index: 4;
  background: 
    linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.3) 100%),
    linear-gradient(180deg, rgba(250, 250, 250, 0.3) 0%, transparent 100%);
  mix-blend-mode: overlay;
  backdrop-filter: brightness(1.02);
}
</style>
