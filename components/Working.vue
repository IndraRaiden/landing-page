<template>
  <section class="working-section">
    <div class="left" data-animation="fade-right">
      <h2 class="title">Working Together</h2>
    </div>
    <div class="right">
      <div class="working-content">
        <h3 class="subtitle" data-animation="fade-up">Tailored guidance for every step of your journey.</h3>
        
        <p data-animation="fade-up" class="delay-100">
          From our first conversation to closing day (and beyond), I'm here to walk with you through a real estate experience that's thoughtful, streamlined, and fully customized to you. Here's what I offer:
        </p>
        
        <div class="service-grid">
          <div class="service-item delay-100" data-animation="fade-up">
            <h4 class="service-title">Curated Property Showings</h4>
            <p class="service-desc">Thoughtfully selected listings that reflect your lifestyle, goals, and taste.</p>
          </div>
          
          <div class="service-item delay-200" data-animation="fade-up">
            <h4 class="service-title">Local Market Insight</h4>
            <p class="service-desc">Honest, up-to-date knowledge of Sayulita and the surrounding areas.</p>
          </div>
          
          <div class="service-item delay-300" data-animation="fade-up">
            <h4 class="service-title">Real Estate Guidance</h4>
            <p class="service-desc">Whether buying or selling, I help you navigate every step with clarity and calm.</p>
          </div>
          
          <div class="service-item delay-400" data-animation="fade-up">
            <h4 class="service-title">Investment Support</h4>
            <p class="service-desc">Looking for ROI or long-term value? I help you make smart, confident choices.</p>
          </div>
        </div>
        
        <p class="closing-statement delay-200" data-animation="fade-up">
          Every service I provide is grounded in communication, care, and connection — because that's how you build trust, and beautiful outcomes.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Working component - displaying the process and approach
</script>

<style scoped>
.working-section {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 7rem;
  max-width: 100%;
  margin: 8rem 0;
  padding: 0 5%;
  font-family: "Times New Roman", Times, serif;
  color: #444;
  justify-content: space-between;
}

.title {
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
  margin: 0;
  letter-spacing: 0.03em;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
}

.title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #333;
  transition: width 0.6s ease;
}

.title:hover::after {
  width: 100%;
}

.right {
  max-width: 800px;
  margin-left: auto;
  padding-right: 5%;
}

.working-content {
  max-width: 700px;
  line-height: 1.7;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
}

.subtitle::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #666;
  transition: width 0.6s ease;
}

.subtitle:hover::after {
  width: 100%;
}

.service-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem 2rem;
  margin: 4rem 0;
}

.service-item {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-left: 3px solid #e0e0e0;
  transition: border-color 0.3s ease;
}

.service-item:hover {
  border-left-color: #888;
}

.service-title {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  color: #333;
  position: relative;
}

.service-title::before {
  content: '✓';
  position: absolute;
  left: -1.5rem;
  color: #999;
  font-weight: normal;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.service-item:hover .service-title::before {
  opacity: 1;
  transform: translateX(0);
}

.service-desc {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #555;
}

.closing-statement {
  margin-top: 4rem;
  font-size: 1.05rem;
  font-style: italic;
  color: #444;
  padding: 1.5rem 0;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  text-align: center;
}

@media (max-width: 768px) {
  .working-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .right {
    max-width: 100%;
  }
  
  .service-grid {
    grid-template-columns: 1fr;
  }
}
</style>
