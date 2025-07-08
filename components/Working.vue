<template>
  <section id="press" class="working-section">
    <div class="left" data-animation="fade-right">
      <h2 class="title">Working Together</h2>
      <h3 class="subtitle" data-animation="fade-up">Tailored guidance for every step of your journey.</h3>
    </div>
    <div class="right">
      <div class="working-content">
        
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
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 0;
  margin-bottom: 0;
  padding: 8rem 5%;
  color: #333333;
  justify-content: space-between;
  background: linear-gradient(135deg, rgba(255,240,210,0.5) 0%, rgba(255,220,180,0.4) 100%);
  border-top: 2px solid var(--accent-yellow);
  border-bottom: 2px solid var(--accent-magenta);
}

.title {
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--accent-magenta-dark);
  margin: 0;
  letter-spacing: 0.03em;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
  font-family: "Times New Roman", Times, serif;
  text-shadow: 1px 1px 0px rgba(255, 220, 180, 0.3);
}

.title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
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
  margin-top: 0.8rem;
  margin-bottom: 0;
  font-weight: 400;
  letter-spacing: 0.02em;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
  font-family: "Times New Roman", Times, serif;
  color: var(--accent-orange-dark);
}

.subtitle::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #E0E0E0;
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
  background-color: rgba(255, 255, 255, 0.7);
  border-left: 2px solid var(--accent-orange);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  transform-origin: center;
}

.service-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.service-item:hover {
  border-left-color: var(--accent-magenta);
  box-shadow: 0 8px 20px rgba(255, 100, 180, 0.15);
  transform: translateY(-5px) rotate(1deg);
  background-color: rgba(255, 255, 255, 0.9);
}

.service-title {
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0;
  color: var(--accent-magenta-dark);
  position: relative;
  font-family: "Times New Roman", Times, serif;
}

.service-title::before {
  content: '✓';
  position: absolute;
  left: -1.5rem;
  color: var(--accent-yellow);
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
  color: #555555;
}

.closing-statement {
  margin-top: 4rem;
  font-size: 1.05rem;
  font-style: italic;
  color: var(--accent-magenta-dark);
  padding: 1.5rem 0;
  border-top: 1px solid var(--accent-yellow);
  border-bottom: 1px solid var(--accent-magenta);
  text-align: center;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  padding: 1.5rem;
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
  pointer-events: none;
  background: linear-gradient(135deg, rgba(255, 220, 180, 0.3), rgba(255, 180, 220, 0.3));
  mix-blend-mode: overlay;
  z-index: 0;
}

/* elevate content above overlay */
.working-section > * {
  position: relative;
  z-index: 1;
}

</style>
