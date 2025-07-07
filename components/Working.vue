<template>
  <section id="press" class="working-section" style="background-image: url('https://images.unsplash.com/photo-1555519653-1f5372ce6a3f?q=80&w=2060&auto=format&fit=crop'); background-size: cover; background-attachment: fixed; background-position: center; background-blend-mode: overlay; background-color: var(--color-peach);">
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
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Curated Property Showings" class="service-image">
            <h4 class="service-title">Curated Property Showings</h4>
            <p class="service-desc">Thoughtfully selected listings that reflect your lifestyle, goals, and taste.</p>
          </div>
          
          <div class="service-item delay-200" data-animation="fade-up">
            <img src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Local Market Insight" class="service-image">
            <h4 class="service-title">Local Market Insight</h4>
            <p class="service-desc">Honest, up-to-date knowledge of Sayulita and the surrounding areas.</p>
          </div>
          
          <div class="service-item delay-300" data-animation="fade-up">
            <img src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Real Estate Guidance" class="service-image">
            <h4 class="service-title">Real Estate Guidance</h4>
            <p class="service-desc">Whether buying or selling, I help you navigate every step with clarity and calm.</p>
          </div>
          
          <div class="service-item delay-400" data-animation="fade-up">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Investment Support" class="service-image">
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
  color: var(--color-text-dark);
  justify-content: space-between;
}

.title {
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-text-dark);
  margin: 0;
  letter-spacing: 0.03em;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
  font-family: "Times New Roman", Times, serif;
}

.title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: var(--color-yellow);
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
  font-size: 1.4rem;
  margin-bottom: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
  font-family: "Times New Roman", Times, serif;
}

.subtitle::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: var(--color-pink);
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
  background-color: rgba(254, 232, 203, 0.9);
  border-left: 3px solid #F29699;
  transition: border-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.service-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.service-item:hover {
  border-left-color: var(--color-blue);
}

.service-title {
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0;
  color: var(--color-text-dark);
  position: relative;
  font-family: "Times New Roman", Times, serif;
}

.service-title::before {
  content: '✓';
  position: absolute;
  left: -1.5rem;
  color: var(--color-beige);
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
  color: var(--color-text-dark);
}

.closing-statement {
  margin-top: 4rem;
  font-size: 1.05rem;
  font-style: italic;
  color: var(--color-text-dark);
  padding: 1.5rem 0;
  border-top: 1px solid #F8B887;
  border-bottom: 1px solid #F8B887;
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
.working-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg,
    rgba(254, 232, 203, 0.6) 0%,   /* peach */
    rgba(248, 184, 135, 0.6) 30%,  /* orange */
    rgba(242, 150, 153, 0.6) 65%,  /* pink */
    rgba(224, 174, 208, 0.55) 100% /* lavender */);
  mix-blend-mode: multiply;
  z-index: 0;
  pointer-events: none;
}

/* elevate content above overlay */
.working-section > * {
  position: relative;
  z-index: 1;
}

</style>
