<template>
  <!-- Meet Me section with background and layout improvements -->
  <div id="meetme" class="meetme-container">
    <section class="meetme-section">
      <!-- First row with title and content -->
      <div class="content-row">
        <div class="left" data-animation="fade-right">
          <h1 class="title" data-animation="text-underline" data-text-animation="true">Meet<br>Olivia</h1>
        </div>
        
        <div class="right">
          <h2 class="process-title">Let's make the process personal</h2>
          <ProfileInfo />
          <p class="connect-text">Let's connect — and find the life you're dreaming of</p>
        </div>
      </div>
      
      <!-- Portfolio and Photo row -->
      <div class="portfolio-photo-row">
        <div class="portfolio-frame">
          <a href="https://lunamarestates.com/idx/search/?SavedSearch=20250605183630259633000000&Limit=10&SubdivisionName=Sayulita" target="_blank" class="portfolio-container">
            <img src="/img/Sayulita_sunset.jpg" alt="Sayulita Sunset" class="portfolio-image" />
            <h3 class="section-label">Portfolio</h3>
          </a>
        </div>
        
        <div class="portfolio-frame">
          <div class="portfolio-container">
            <img src="/meet/Meet_Olivia.jpeg" alt="Olivia Photo" class="portfolio-image" />
            <div class="ampi-badge">
              <div class="ampi-badge-inner">
                <img src="/img/ampi.png" alt="AMPI Certified" class="ampi-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
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
  font-size: 1.4rem;
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
  padding: 0 2%;
  display: flex;
  align-items: flex-start;
}

.left {
  width: 250px;
  margin-right: 50px;
}

.right {
  width: 100%;
  text-align: left;
  max-width: 800px;
  margin-left: 350px;
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

.portfolio-frame {
  background-color: #ffb88c; /* Peach/orange background */
  border-radius: 8px;
  height: 300px; /* Same height as photo container */
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0;
}

.portfolio-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.portfolio-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  position: absolute;
  top: 0;
  left: 0;
}

.portfolio-container:hover {
  transform: translateY(-5px);
}

.portfolio-container:hover .portfolio-image {
  transform: scale(1.05);
}

.portfolio-frame:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.photo-container {
  background-color: #ffb88c; /* Light orange background */
  border-radius: 8px;
  height: 300px; /* Reduced height */
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.photo-gallery {
  display: flex;
  width: 100%;
  height: 100%;
  gap: 0.5rem;
}

.photo-gallery.single-photo {
  display: flex;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
}

.photo-item.full-width {
  width: 100%;
  height: 100%;
}

.photo-item.full-width img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.section-label {
  font-size: 1.8rem;
  font-style: italic;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  margin: 0;
  font-family: "Times New Roman", Times, serif;
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
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
  z-index: 5;
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
  display: block;
}

.footer-text {
  text-align: right;
  font-size: 1rem;
  margin: 1.5rem 0 0 0;
  font-style: italic;
  color: #555;
}

@media (max-width: 1200px) {
  .meetme-section {
    padding: 7rem 4%;
    gap: 3.5rem;
  }
  
  .right {
    margin-left: 300px;
  }
}

@media (max-width: 1024px) {
  .meetme-section {
    padding: 6rem 4%;
    gap: 3rem;
  }
  
  .right {
    margin-left: 250px;
  }
  
  .portfolio-photo-row {
    gap: 1.5rem;
  }
  
  .title {
    font-size: 4rem;
  }
}

@media (max-width: 900px) {
  .content-row {
    flex-direction: column;
  }
  
  .left {
    width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
  
  .right {
    width: 100%;
    margin-left: 0;
  }
  
  .title {
    font-size: 3.8rem;
  }
}

@media (max-width: 768px) {
  .meetme-section {
    gap: 3rem;
    padding: 5rem 2rem;
  }
  
  .content-row {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0;
  }
  
  .left {
    width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
  
  .right {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .portfolio-photo-row {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .title {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
    font-size: 3.5rem;
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
  
  .portfolio-container {
    height: 380px; /* Reduced height */
  }
  
  .photo-container {
    height: auto;
    min-height: 300px;
    padding-bottom: 2rem;
  }
  
  .photo-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: auto;
    gap: 0.5rem;
  }
  
  .photo-gallery.single-photo {
    grid-template-columns: 1fr;
    width: 100%;
  }
  
  .photo-item {
    width: 100%;
    aspect-ratio: 1/1;
    height: auto;
    margin-bottom: 0;
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

@media (max-width: 480px) {
  .meetme-section {
    padding: 4rem 1.5rem;
    gap: 2.5rem;
  }
  
  .title {
    font-size: 3rem;
  }
  
  .process-title {
    font-size: 1.3rem;
  }
  
  .connect-text {
    font-size: 1.1rem;
  }
  
  .section-label {
    font-size: 1.6rem;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
    text-align: center !important;
    width: 100% !important;
  }
  
  .portfolio-container {
    height: 320px; /* Reduced height */
  }
  
  .photo-container {
    height: auto;
    min-height: 280px;
  }
  
  .photo-gallery {
    gap: 0.3rem;
  }
  
  .photo-item {
    aspect-ratio: 1/1;
  }
}

/* Photo gallery styles */
.photo-gallery {
  display: flex;
  width: 100%;
  height: 180px; /* Reduced height */
  gap: 0.5rem;
  margin-top: 1rem;
  justify-content: center;
}

@media (max-width: 500px) {
  .photo-gallery {
    height: auto;
  }
}

.photo-item {
  flex: 1;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border: 2px solid var(--accent-orange);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.photo-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-color: var(--accent-magenta);
}

.olivia-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.photo-item:hover .olivia-photo {
  transform: scale(1.05);
}

/* raise main content above overlay */
.meetme-container > * {
  position: relative;
  z-index: 2;
}
</style>
