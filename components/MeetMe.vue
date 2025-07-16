<template>
  <!-- Meet Me section with background and layout improvements -->
  <div id="meetme" class="meetme-container">
    <section class="meetme-section">
      <!-- First row with title and content -->
      <div class="content-row">
        <div class="left" data-animation="fade-right">
          <h1 class="title" data-animation="text-underline" data-text-animation="true">Meet Olivia</h1>
        </div>
        
        <div class="right">
          <h2 class="process-title">Let's make the process personal</h2>
          <ProfileInfo />
          <p class="connect-text">Let's connect — and find the life you're dreaming of</p>
        </div>
      </div>
      
      <!-- Portfolio and Photo row -->
      <div class="portfolio-photo-row">
        <div class="portfolio-container">
          <h3 class="section-label">Portfolio</h3>
        </div>
        
        <div class="photo-container">
          <h3 class="section-label">Foto de Olivia</h3>
          <div class="ampi-badge">
            <div class="ampi-badge-inner">
              <img src="/img/ampi.png" alt="AMPI Certified" class="ampi-logo" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Footer text -->
      <p class="footer-text">Let's make your next move feel like coming home</p>
      
      <!-- Values section full width -->
      <div class="values-full-width">
        <ValuesSection />
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
  background: white;
  border-top: 2px solid var(--accent-yellow);
  border-bottom: 2px solid var(--accent-magenta);
}

.meetme-section {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 8rem 5% 8rem; /* Adjusted padding */
  background-color: transparent;
  color: #333;
  position: relative;
  z-index: 2;
}

.title {
  font-size: 4.5rem;
  font-weight: 500;
  color: #ff0066;
  margin: 0 0 2.5rem 0;
  letter-spacing: 0.03em;
  position: relative;
  display: inline-block;
  line-height: 1;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(255, 100, 180, 0.2);
  white-space: nowrap;
}

.title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-yellow) 0%, var(--accent-orange) 50%, var(--accent-magenta) 100%);
  transition: transform 0.6s ease;
  transform-origin: left;
  transform: scaleX(0.7);
}

.title:hover::after {
  transform: scaleX(1);
}

.process-title {
  font-size: 1.8rem;
  margin: 0 0 1.5rem 0;
  font-weight: 500;
  color: #333;
  line-height: 1.3;
  text-align: left;
}

.connect-text {
  font-size: 1.2rem;
  font-style: italic;
  margin: 2rem 0 0 0;
  color: #333;
  text-align: left;
}

.content-row {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding-left: 2%;
}

.left {
  position: absolute;
  left: 2%;
  top: 0;
  width: 150px;
}

.right {
  margin-left: 800px;
  flex: 1;
  text-align: left;
  max-width: 800px;
}

.values-full-width {
  width: 100%;
  box-sizing: border-box;
  margin-top: 4rem;
}

.portfolio-photo-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  margin-top: 3rem;
}

.portfolio-container, .photo-container {
  background-color: #ffb88c; /* Light orange background */
  border-radius: 8px;
  height: 220px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.section-label {
  font-size: 1.8rem;
  font-style: italic;
  color: #333;
  margin: 0;
  font-family: "Times New Roman", Times, serif;
}

.ampi-badge {
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  width: 100px;
  height: 100px;
  background-color: white; /* White background for logo */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 2px solid var(--accent-orange);
  padding: 8px;
}

.ampi-badge-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
}

.ampi-logo {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.footer-text {
  text-align: right;
  font-size: 1rem;
  margin: 1.5rem 0 0 0;
  font-style: italic;
  color: #555;
}

@media (max-width: 1024px) {
  .meetme-section {
    padding: 6rem 4%;
    gap: 3rem;
  }
  
  .portfolio-photo-row {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .meetme-section {
    gap: 3rem;
    padding: 5rem 2rem;
  }
  
  .content-row, .image-values-row, .portfolio-photo-row {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
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
  
  .process-title, .connect-text, .footer-text {
    text-align: center;
  }
  
  .portfolio-container, .photo-container {
    height: 180px;
  }
}

.meetme-container::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: white;
  z-index: 0;
}

/* raise main content above overlay */
.meetme-container > * {
  position: relative;
  z-index: 2;
}
</style>
