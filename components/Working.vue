<template>
  <section id="press" class="working-section">
    <div class="working-container">
      <!-- Left side - Title section -->
      <div class="working-left">
        <h2 class="working-title" v-html="$t('working.title')"></h2>
      </div>
      
      <!-- Right side - Content section -->
      <div class="working-right">
        <h3 class="working-headline">{{ $t('working.headline') }}</h3>
        
        <p class="working-text">
          {{ $t('working.description') }}
        </p>
        
        <!-- Service cards grid -->
        <div class="service-cards-grid">
          <!-- Card 1 -->
          <div class="service-card">
            <h4 class="service-card-title">{{ $t('working.services.property.title') }}</h4>
            <p class="service-card-text">{{ $t('working.services.property.text') }}</p>
          </div>
          
          <!-- Card 2 -->
          <div class="service-card">
            <h4 class="service-card-title">{{ $t('working.services.market.title') }}</h4>
            <p class="service-card-text">{{ $t('working.services.market.text') }}</p>
          </div>
          
          <!-- Card 3 -->
          <div class="service-card">
            <h4 class="service-card-title">{{ $t('working.services.guidance.title') }}</h4>
            <p class="service-card-text">{{ $t('working.services.guidance.text') }}</p>
          </div>
          
          <!-- Card 4 -->
          <div class="service-card">
            <h4 class="service-card-title">{{ $t('working.services.investment.title') }}</h4>
            <p class="service-card-text">{{ $t('working.services.investment.text') }}</p>
          </div>
        </div>
        
        <!-- Footer message -->
        <p class="working-footer-text">
          {{ $t('working.footer') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Working component - displaying services and approach
</script>

<style scoped>
.working-section {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 5rem 8%;
  color: #333333;
  background: #ffffff;
  border-top: 1px solid rgba(233, 71, 131, 0.3);
  border-bottom: 1px solid rgba(233, 71, 131, 0.3);
  overflow: hidden;
}

.working-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 5rem;
}

/* Left side styling */
.working-left {
  align-self: start;
}

.working-title {
  font-size: 3.5rem;
  font-weight: 400;
  color: #E94783; /* Updated to match the image's pink color */
  margin: 0;
  line-height: 1.1;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
}

/* Right side styling */
.working-right {
  max-width: 800px;
}

.working-headline {
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0 0 1.5rem 0;
  color: #333;
  font-family: "Times New Roman", Times, serif;
}

.working-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 3rem;
}

/* Service cards styling */
.service-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  max-width: 800px;
}

.service-card {
  background-color: #C95E95; /* Updated to match the exact magenta/pink color from the image */
  color: white;
  border-radius: 8px;
  padding: 1.8rem;
  box-shadow: 0 4px 15px rgba(201, 94, 149, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(201, 94, 149, 0.3);
}

.service-card-title {
  font-size: 1.4rem;
  margin: 0 0 0.8rem 0;
  font-weight: 400;
  font-family: "Times New Roman", Times, serif;
}

.service-card-text {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}

.working-footer-text {
  font-size: 1.2rem;
  color: #E94783; /* Updated to match the image's pink color */
  line-height: 1.6;
  font-style: italic;
  max-width: 90%;
  margin: 0;
  font-family: "Times New Roman", Times, serif;
}

/* Responsive styles */
@media (max-width: 992px) {
  .service-cards-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
}

@media (max-width: 768px) {
  .working-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .working-title {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  
  .working-headline {
    font-size: 1.6rem;
  }
  
  .working-text,
  .working-footer-text {
    font-size: 1rem;
  }
}

</style>
