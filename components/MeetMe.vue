<template>
  <!-- Meet Me section with background and layout improvements -->
  <div id="meetme" class="meetme-container">
    <section class="meetme-section">
      <!-- First row with title and content -->
      <div class="content-row">
        <div class="left" data-animation="fade-right">
          <h1 class="title" data-animation="text-underline" data-text-animation="true">{{ $t('meetme.title') }}</h1>
          
          <!-- Left side image and content -->
          <LeftShowcase />
        </div>
        
        <div class="right">
          <ProfileInfo />
        </div>
      </div>
      
      <!-- Second row with profile image and values -->
      <div class="image-values-row">
        <ProfileImage />
        
        <div class="values-container">
          <ValuesSection />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import LeftShowcase from './MeetMe/LeftShowcase.vue';
import ProfileInfo from './MeetMe/ProfileInfo.vue';
import ProfileImage from './MeetMe/ProfileImage.vue';
import ValuesSection from './MeetMe/ValuesSection.vue';
</script>

<style scoped>
.meetme-container {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  box-sizing: border-box;
  background: linear-gradient(135deg, rgba(255,240,210,0.5) 0%, rgba(255,220,180,0.4) 100%);
  border-top: 2px solid var(--accent-yellow);
  border-bottom: 2px solid var(--accent-magenta);
}

/* Lateral image removed */

.meetme-section {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 12rem 7% 8rem; /* Increased top padding from 8rem to 12rem */
  background-color: transparent;
  color: #333;
  position: relative;
  z-index: 2;
}

.title {
  font-size: 4rem;
  font-weight: 500;
  color: #ff0066;
  margin: 0 0 2.5rem 0;
  letter-spacing: 0.03em;
  position: relative;
  display: inline-block;
  line-height: 1.1;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(255, 100, 180, 0.4);
  white-space: nowrap;
}

.title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px; /* Increased from 2px to 3px */
  background: linear-gradient(90deg, var(--accent-yellow) 0%, var(--accent-orange) 50%, var(--accent-magenta) 100%);
  transition: transform 0.6s ease;
  transform-origin: left;
  transform: scaleX(0.7);
}

.title:hover::after {
  transform: scaleX(1);
}

.content-row {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3rem;
  width: 100%;
  box-sizing: border-box;
}

.image-values-row {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3rem;
  width: 100%;
  box-sizing: border-box;
}

@media (max-width: 1024px) {
  .meetme-section {
    padding: 6rem 4%;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .meetme-section {
    gap: 3rem;
    padding: 5rem 2rem;
  }
  
  .content-row, .image-values-row {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  /* Lateral image removed */

  .title {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .title::after {
    left: 50%;
    transform: translateX(-50%) scaleX(0.7);
  }

  .title:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
}

.meetme-container::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(135deg, rgba(255, 220, 180, 0.3), rgba(255, 180, 220, 0.3));
  mix-blend-mode: overlay;
  z-index: 0;
}

/* raise main content above overlay */
.meetme-container > * {
  position: relative;
  z-index: 2;
}
</style>
