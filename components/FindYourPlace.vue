<template>
  <section id="projects" class="find-place-section">
    <div class="find-place-container">
      <div class="find-place-header" data-animation="fade-up">
        <h2 class="section-title">Find Your Place</h2>
        <p class="section-subtitle">Handpicked homes that reflect your lifestyle.</p>
        <p class="section-description delay-100" data-animation="fade-up">Here's a glimpse of a few special properties I've selected for you — each one reflecting the magic and opportunity of coastal living. Whether you're looking for a serene retreat, a smart investment, or a place to build your dream life, there's something waiting for you here.</p>
      </div>
      
      <div class="property-grid">
        <div class="property-card delay-100" data-animation="fade-up">
          <div class="property-image casa-arbol"></div>
          <div class="property-content">
            <h3>🔸 Casa Árbol</h3>
            <p>A hidden gem nestled in nature, designed for peace, flow, and inspired living.</p>
            <a href="#casa-arbol" class="explore-link">View Details →</a>
          </div>
        </div>
        
        <div class="property-card delay-200" data-animation="fade-up">
          <div class="property-image lote-omana"></div>
          <div class="property-content">
            <h3>🔸 Lote Omana</h3>
            <p>A rare opportunity to build your vision from the ground up — in a location full of potential.</p>
            <a href="#lote-omana" class="explore-link">View Details →</a>
          </div>
        </div>
      </div>
      
      <div class="cta-buttons" data-animation="fade-up">
        <a href="https://lunamarestates.com" target="_blank" class="portfolio-btn">For the full selection of listings, visit the LunaMar portfolio</a>
        <a href="https://wa.me/523221014263" target="_blank" class="whatsapp-btn">Got questions? Contact me directly</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// FindYourPlace component - showcasing different neighborhoods
</script>

<style scoped>
.find-place-section {
  width: 100%;
  padding: 8rem 0;
  background-color: var(--color-light-beige);
  color: var(--color-text-dark);
  font-family: "Times New Roman", Times, serif;
}

.find-place-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
}

.find-place-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.section-subtitle {
  font-size: 1.2rem;
  font-weight: 500;
  max-width: 600px;
  margin: 0 auto 1rem;
  line-height: 1.6;
}

.section-description {
  font-size: 1rem;
  opacity: 0.8;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  text-align: center;
}

.property-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-bottom: 4rem;
}

.property-card {
  display: flex;
  flex-direction: column;
  background-color: var(--color-light-blue);
  border: 1px solid var(--color-beige);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
}

.property-image {
  height: 320px;
  background-color: #f5f5f5;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

/* Placeholder colored backgrounds for each property */
.casa-arbol {
  background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop');
  background-position: center;
  background-size: cover;
}

.lote-omana {
  background-image: url('https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2070&auto=format&fit=crop');
  background-position: center;
  background-size: cover;
}

.property-content {
  padding: 1.8rem;
}

.property-content h3 {
  margin: 0 0 1rem;
  font-size: 1.3rem;
  font-weight: 500;
}

.property-content p {
  margin: 0 0 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-dark);
}

.explore-link {
  display: inline-block;
  color: var(--color-text-dark);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
}

.explore-link:hover {
  border-bottom-color: var(--color-blue);
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: center;
}

.portfolio-btn, .whatsapp-btn {
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  border-radius: 3px;
}

.portfolio-btn {
  background-color: transparent;
  color: var(--color-text-dark);
  border: 1px solid var(--color-beige);
  font-weight: 500;
}

.portfolio-btn:hover {
  background-color: #f5f5f5; /* Light grey background on hover */
  border-color: #888; /* Slightly darker grey border on hover */
  transform: translateY(-2px);
}

.whatsapp-btn {
  background-color: transparent;
  color: var(--color-text-dark);
  border: 1px solid var(--color-beige);
}

.whatsapp-btn:hover {
  border-color: var(--color-blue);
  background-color: var(--color-peach);
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .property-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .cta-buttons {
    padding: 0 1rem;
  }
  
  .portfolio-btn, .whatsapp-btn {
    padding: 1rem 1rem;
    font-size: 0.9rem;
    width: 100%;
  }
  
  .section-description {
    padding: 0 1rem;
  }
}
</style>
