<template>
  <section id="projects" class="find-place-section">
    <h2 class="section-title absolute-title" data-animation="text-underline">{{ $t('findYourPlace.title') }}</h2>
    <div class="find-place-container">
      <div class="find-place-header" data-animation="fade-up">
        <div class="title-placeholder"></div>
        <div class="text-container">
          <p class="section-subtitle">{{ $t('findYourPlace.subtitle') }}</p>
          <p class="section-description">{{ $t('findYourPlace.description') }}</p>
        </div>
      </div>
      
      <div class="property-grid">
        <div class="property-card delay-100" data-animation="fade-up">
          <div class="property-image casa-arbol"></div>
          <div class="property-content">
            <h3>{{ $t('findYourPlace.properties.casaArbol.title') }}</h3>
            <p>{{ $t('findYourPlace.properties.casaArbol.description') }}</p>
            <a href="https://my.flexmls.com/OliviaMatheson/search/shared_links/CMzdQ/listings/20250619190544831264000000" target="_blank" class="explore-link">{{ $t('findYourPlace.viewDetails') }}</a>
          </div>
        </div>
        
        <div class="property-card delay-200" data-animation="fade-up">
          <div class="property-image lote-omana"></div>
          <div class="property-content">
            <h3>{{ $t('findYourPlace.properties.loteOmana.title') }}</h3>
            <p>{{ $t('findYourPlace.properties.loteOmana.description') }}</p>
            <a href="https://my.flexmls.com/OliviaMatheson/search/shared_links/CMzf4/listings/20250521221840757415000000" target="_blank" class="explore-link">{{ $t('findYourPlace.viewDetails') }}</a>
          </div>
        </div>
      </div>
      
      <div class="cta-buttons" data-animation="fade-up">
        <a href="https://lunamarestates.com/idx/search/?SavedSearch=20250605183630259633000000&Limit=10&SubdivisionName=Sayulita" target="_blank" class="portfolio-btn">{{ $t('findYourPlace.portfolioButton') }}</a>
        <a href="https://wa.me/523221014263" target="_blank" class="whatsapp-btn">{{ $t('findYourPlace.contactButton') }}</a>
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
  background: #FFFFFF;
  position: relative;
  color: #333333;
  box-shadow: inset 0 0 100px rgba(240, 240, 240, 0.1);
}

.find-place-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
}

.find-place-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
  transition: all 0.3s ease;
}

.section-title {
  font-size: 4rem;
  font-weight: 500;
  color: #ff0066;
  margin: 0 0 1rem;
  letter-spacing: 0.03em;
  position: relative;
  display: inline-block;
  line-height: 1.1;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(255, 100, 180, 0.4);
  -webkit-text-fill-color: initial;
  background: none;
  z-index: 10;
  white-space: nowrap;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #E0E0E0;
  transition: width 0.6s ease;
}

.section-title:hover::after {
  width: 100%;
}

.section-subtitle {
  font-size: 1.4rem;
  font-weight: 500;
  max-width: 600px;
  margin: 0 0 1rem;
  line-height: 1.6;
  font-family: "Times New Roman", Times, serif;
  text-align: right;
}

.section-description {
  font-size: 1rem;
  opacity: 0.8;
  max-width: 800px;
  margin: 0 0 2rem;
  line-height: 1.6;
  text-align: right;
}

.property-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-bottom: 4rem;
  width: 100%;
}

.property-card {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid #F5F5F5;
  background-clip: padding-box;
  box-shadow: 0 4px 16px rgba(200, 200, 200, 0.15);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
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
  background-image: url('/img/CasaDelArbol_1.JPG');
  background-position: center;
  background-size: cover;
}

.lote-omana {
  background-image: url('/img/Lote_Omana_1.jpg');
  background-position: center;
  background-size: cover;
}

.property-content {
  padding: 1.8rem;
}

.property-content h3 {
  margin: 0 0 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Times New Roman", Times, serif;
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
  border-bottom-color: #E0E0E0;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: center;
  transition: all 0.3s ease;
  padding: 0 1rem;
}

.portfolio-btn, .whatsapp-btn {
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
}

.portfolio-btn {
  background-color: #FFCBA4;
  color: #333333;
  border: none;
  font-weight: 500;
}

.portfolio-btn:hover {
  background-color: #FFD8B9;
  transform: translateY(-2px);
}

.whatsapp-btn {
  background-color: #FFCBA4;
  color: #333333;
  border: none;
}

.whatsapp-btn:hover {
  background-color: #FFD8B9;
  transform: translateY(-2px);
}

.title-placeholder {
  height: 5rem;
}

.absolute-title {
  position: absolute;
  left: 0;
  top: 8rem;
  z-index: 10;
  margin-left: 5%;
}

.text-container {
  /* occupy full width of its grid column */
  width: 100%;
  max-width: 100%;

  /* align the block to the far right */
  margin-left: auto; /* push the element to the end in block layouts */
  justify-self: end; /* push element to the end in grid layouts */

  /* flexbox to right-align internal content too */
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* place children at far right */
  text-align: right;
  transition: all 0.3s ease; /* smooth transition for responsive changes */
}

/* Tablet Styles */
@media (max-width: 1024px) {
  .find-place-section {
    padding: 6rem 0;
  }
  
  .section-title {
    font-size: 3rem;
  }
  
  .property-grid {
    gap: 2rem;
  }
  
  .cta-buttons {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
  
  .portfolio-btn, .whatsapp-btn {
    padding: 0.9rem 1.5rem;
    font-size: 0.95rem;
  }
  
  .absolute-title {
    top: 6rem;
  }
}

/* Mobile Styles */
@media (max-width: 768px) {
  .find-place-section {
    padding: 4rem 0;
  }
  
  .property-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  
  .section-description {
    font-size: 0.95rem;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  
  .cta-buttons {
    flex-direction: column;
    padding: 0 1rem;
    gap: 1rem;
    width: 100%;
    align-items: center;
  }
  
  .portfolio-btn, .whatsapp-btn {
    padding: 1rem;
    font-size: 0.9rem;
    width: 100%;
  }
  
  .find-place-header {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 3rem;
  }
  
  .text-container {
    width: 100%;
    align-items: center;
    text-align: center;
  }
  
  .absolute-title {
    position: relative;
    top: auto;
    left: auto;
    margin-left: 0;
    margin-top: 2rem;
    margin-bottom: 3rem;
    text-align: center;
    width: 100%;
    padding-top: 1rem;
  }
  
  .property-image {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
}

/* Small Mobile Styles */
@media (max-width: 480px) {
  .find-place-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .property-content {
    padding: 1.2rem;
  }
  
  .property-content h3 {
    font-size: 1.3rem;
  }
  
  .property-image {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
}
.find-place-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #FFFFFF;
  pointer-events: none;
  z-index: 0;
}

.find-place-section > * {
  position: relative;
  z-index: 1;
}


</style>
