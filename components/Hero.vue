<template>
  <section id="hero" class="hero-section">

    <!-- Hero Image -->
    <img
      class="hero-img"
      src="/hero/Principal_Image_01.jpg"
      alt="Beautiful Sayulita Beachfront Property"
      data-animation="zoom-in"
    />
    <!-- Multiple layered color overlays for depth and visual interest -->
    <div class="color-overlay primary-overlay"></div>
    <div class="color-overlay secondary-overlay"></div>
    <div class="color-overlay accent-overlay"></div>
    
    <!-- Main Hero Text - Centered and Large -->
    <div class="hero-main-text">
      <h1 class="hero-phrase">{{ $t('hero.perfectPlace') }}</h1>
      <div class="hero-accent-line"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { t } from '../utils/translationStore';

// Access the translation function for multilingual support
const $t = (key: string) => t(key);
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #FFFFFF;
  overflow: hidden;
  border-bottom: 2px solid var(--accent-magenta);
  display: flex;
  align-items: center;
  justify-content: center;
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

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes glow-pulse {
  0%, 100% {
    text-shadow: 
      0 0 10px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.3),
      0 0 30px rgba(255, 255, 255, 0.2);
  }
  50% {
    text-shadow: 
      0 0 15px rgba(255, 255, 255, 0.7),
      0 0 30px rgba(255, 255, 255, 0.5),
      0 0 45px rgba(255, 255, 255, 0.3);
  }
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  filter: brightness(0.75) contrast(1.1) saturate(1.1);
  animation: subtle-scale 20s infinite ease-in-out;
}

.color-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.primary-overlay {
  z-index: 2;
  background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%);
  mix-blend-mode: multiply;
}

.secondary-overlay {
  z-index: 3;
  background: linear-gradient(45deg, rgba(255,180,120,0.15) 0%, rgba(255,100,150,0.08) 100%);
  mix-blend-mode: soft-light;
}

.accent-overlay {
  z-index: 4;
  background: 
    linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.1) 100%),
    linear-gradient(180deg, rgba(250, 250, 250, 0.1) 0%, transparent 100%);
  mix-blend-mode: screen;
}

.hero-main-text {
  position: relative;
  z-index: 5;
  text-align: center;
  color: white;
  animation: fade-in-up 1.2s ease-out;
}

.hero-phrase {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 300;
  margin: 0;
  letter-spacing: 3px;
  line-height: 1.2;
  font-family: 'Georgia', 'Times New Roman', serif;
  text-transform: capitalize;
  background: linear-gradient(45deg, #ffffff, #f0f0f0, #ffffff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: glow-pulse 3s ease-in-out infinite, fade-in-up 1.2s ease-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-accent-line {
  width: 120px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ffffff, transparent);
  margin: 2rem auto 0;
  animation: fade-in-up 1.2s ease-out 0.6s both;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    letter-spacing: 2px;
  }
  
  .hero-subtitle {
    letter-spacing: 4px;
    margin-top: -0.3rem;
  }
  
  .hero-accent-line {
    width: 80px;
    margin-top: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    letter-spacing: 1px;
  }
  
  .hero-subtitle {
    letter-spacing: 2px;
    margin-top: -0.2rem;
  }
  
  .hero-accent-line {
    width: 60px;
    margin-top: 1rem;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .hero-title, .hero-subtitle {
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 1);
    color: white;
    -webkit-text-fill-color: white;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .hero-title, .hero-subtitle, .hero-accent-line {
    animation: none;
  }
  
  .hero-img {
    animation: none;
  }
}
</style>