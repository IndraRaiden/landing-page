<template>
  <section id="about" class="message-section">
    <div class="container">
      <div class="left" data-animation="fade-right">
        <h2 class="title" data-animation="text-gradient">{{ $t('message.title') }}</h2>
      </div>
      <div class="right">
        <div class="body">
          <p class="subtitle">{{ $t('message.subtitle') }}</p>
        
        <p data-animation="blur-in" class="delay-100" v-html="$t('message.intro')"></p>
        
        <p data-animation="fade-up" class="delay-200">
          {{ $t('message.background') }}
        </p>
        
        <p data-animation="slide-up" class="delay-300">
          {{ $t('message.journey') }}
        </p>
        
        <h3 class="section-heading" data-animation="scale-in" data-text-animation="true">
          {{ $t('message.valuesHeading') }}
        </h3>
        <p class="values delay-100" data-animation="blur-in">{{ $t('message.valuesList') }}</p>
        
        <h3 class="section-heading" data-animation="rotate-in">
          {{ $t('message.servicesHeading') }}
        </h3>
        <div class="services-grid">
          <div class="service-card">
            <img src="/img/1.jpg" alt="Personalized Real Estate Guidance" class="service-image">
            <h4 class="service-title">{{ $t('message.services.guidanceTitle') }}</h4>
          </div>
          <div class="service-card">
            <img src="/img/2.jpg" alt="Curated Property Showings" class="service-image">
            <h4 class="service-title">{{ $t('message.services.showingsTitle') }}</h4>
          </div>
          <div class="service-card">
            <img src="/img/3.jpeg" alt="Investment & Lifestyle Consulting" class="service-image">
            <h4 class="service-title">{{ $t('message.services.consultingTitle') }}</h4>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Using the global $t function from the plugin
</script>

<style scoped>
.message-section {
  background-color: #FFFFFF;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  color: #333333;
  width: 100%;
  margin: 0;
}

.title {
  font-size: 4rem;
  font-weight: 500;
  color: #ff0066;
  margin: 0;
  letter-spacing: 0.03em;
  position: relative;
  display: inline-block;
  line-height: 1.1;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(255, 100, 180, 0.4);
  -webkit-text-fill-color: initial;
  background: none;
}

.highlight {
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: #F0F0F0;
  z-index: -1;
  transform: rotate(-1deg);
}

.title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #E0E0E0;
  transition: width 0.6s ease;
}

.title:hover::after {
  width: 100%;
}

.container {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 8rem;
  width: 95%;
  margin: 0 auto;
  padding-left: 5%;
}

.left {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 1rem;
}

.right {
  width: 100%;
}

.body {
  width: 100%;
  line-height: 1.7;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  text-align: left;
  padding-right: 0;
}



.subtitle {
  font-size: 1rem;
  font-weight: normal;
  margin: 0 0 1.5rem 0;
  color: #000000;
}

.body p {
  margin-bottom: 1.5rem;
}

.body p:first-of-type {
  margin-top: 0;
}

.section-heading {
  font-size: 1.35rem;
  margin: 2rem 0 0.75rem;
  font-weight: 500;
  color: #333333;
  letter-spacing: 0.02em;
  position: relative;
  display: inline-block;
  padding-bottom: 6px;
  font-family: "Times New Roman", Times, serif;
}

.section-heading::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #E0E0E0;
  transition: width 0.6s ease;
}

.section-heading:hover::after {
  width: 100%;
}

.values {
  margin-bottom: 2rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.service-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.service-card:hover .service-image {
  transform: scale(1.03);
}

.service-title {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0.5rem 0;
  color: #000000;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}



@media (max-width: 768px) {
  .message-section {
    padding: 4rem 0;
  }
  
  .container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .left {
    margin-bottom: 1rem;
  }
  
  .body {
    text-align: left;
    padding-right: 0;
  }
  
  .subtitle {
    font-size: 1.1rem;
    margin-top: 0.25rem;
  }
}
.message-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.95);
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 0;
}

.message-section > * {
  position: relative;
  z-index: 1;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
