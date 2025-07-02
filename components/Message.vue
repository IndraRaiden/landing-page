<template>
  <section id="about" class="message-section">
    <div class="left" data-animation="fade-right">
      <h2 class="title" data-animation="text-underline">Welcome Home</h2>
    </div>
    <div class="right">
      <div class="body">
        <p class="subtitle" data-animation="text-gradient">Real estate with heart, clarity, and local soul</p>
        
        <p data-animation="blur-in" class="delay-100">
          I'm Olivia, an <strong>AMPI-certified real estate agent</strong> at LunaMar Estates, passionate about helping you find not just a property, but a lifestyle.
        </p>
        
        <p data-animation="fade-up" class="delay-200">
          With a background in journalism, hospitality, and luxury service, I guide my clients with care, discretion, and vision — from first-time buyers to seasoned investors. I speak your language (and Spanish too), and I know this town like home — because it is.
        </p>
        
        <p data-animation="slide-up" class="delay-300">
          Let's make the journey smooth, meaningful, and maybe even fun.
        </p>
        
        <h3 class="section-heading" data-animation="scale-in" data-text-animation="true">
          My values
        </h3>
        <p class="values delay-100" data-animation="blur-in">Trust | Connection | Local Insight | Intuitive Care | Calm Guidance</p>
        
        <h3 class="section-heading" data-animation="rotate-in">
          Services
        </h3>
        <ul class="services-list stagger-children" data-animation="fade-up">
          <li>Personalized real estate guidance</li>
          <li>Curated property showings</li>
          <li>Investment &amp; lifestyle consulting</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// static content; no script logic needed
</script>

<style scoped>
.message-section {
  background-color: var(--color-peach);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  font-family: "Times New Roman", Times, serif;
  color: var(--color-text-dark);
  justify-content: space-between;
}

.title {
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-text-dark);
  margin: 0;
  letter-spacing: 0.03em;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
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
  background-color: var(--color-light-blue);
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
  background-color: var(--color-blue);
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

.body {
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
  background-color: var(--color-beige);
  transition: width 0.6s ease;
}

.subtitle:hover::after {
  width: 100%;
}

.body p {
  margin-bottom: 1.5rem;
}

.body p:first-of-type {
  margin-top: 0;
}

.section-heading {
  font-size: 1.15rem;
  margin: 2rem 0 0.75rem;
  font-weight: 500;
  color: var(--color-text-dark);
  letter-spacing: 0.02em;
  position: relative;
  display: inline-block;
  padding-bottom: 6px;
}

.section-heading::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: var(--color-blue);
  transition: width 0.6s ease;
}

.section-heading:hover::after {
  width: 100%;
}

.values {
  margin-bottom: 2rem;
}

.services-list {
  list-style: disc;
  padding-left: 1.25rem;
  margin: 0;
}

.services-list li {
  margin-bottom: 0.5rem;
}



@media (max-width: 768px) {
  .message-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .right {
    max-width: 100%;
  }
}
</style>
