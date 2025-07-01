<template>
  <section class="cta2-section">
    <div class="cta2-container" data-animation="fade-up">
      <div class="cta2-content">
        <h2 class="cta2-heading" data-animation="fade-up">Let's make your next move feel like coming home</h2>
        
        <p class="cta2-message delay-100" data-animation="fade-up">
          Whether you're just beginning or already dreaming of your next chapter, I'm here to guide you every step of the way.
        </p>
        
        <div class="contact-info delay-200" data-animation="fade-up">
          <p class="email">Write to me at <a href="mailto:olivia@lunamarestates.com">olivia@lunamarestates.com</a></p>
          <p class="social">Or say hi on <a href="https://instagram.com/lunamarestates" target="_blank">Instagram</a> and <a href="https://wa.me/1234567890" target="_blank">What'sApp</a></p>
        </div>
      </div>
      
      <div class="cta2-image" data-animation="zoom-in">
        <div class="placeholder-image">Beautiful Sayulita Living</div>
      </div>
    </div>
    
    <div class="testimonial delay-300" data-animation="fade-up">
      <p class="quote">"Working with this agent changed our entire experience. They made the impossible possible."</p>
      <p class="attribution">— Recent Client</p>
    </div>
  </section>
</template>

<script setup lang="ts">
// CTA2 component - secondary call to action with image and testimonial
</script>

<style scoped>
.cta2-section {
  width: 100%;
  margin: 8rem 0;
  padding: 0;
  font-family: "Times New Roman", Times, serif;
  color: #333;
}

.cta2-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background-color: #f9f9f9;
  overflow: hidden;
  width: 100%;
}

.cta2-content {
  padding: 4rem 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

.cta2-heading {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-weight: 500;
}

.cta2-message {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.8;
}

.contact-info {
  margin-top: 1.5rem;
}

.contact-info p {
  margin: 0.75rem 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

.email {
  font-weight: 500;
}

.contact-info a {
  color: #333;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.contact-info a:hover {
  border-bottom-color: #333;
}

.social {
  margin-top: 0.5rem;
}

.social a {
  margin-right: 1rem;
  font-weight: 500;
}

.cta2-image {
  height: 100%;
}

.placeholder-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  color: #666;
  font-size: 1.5rem;
  font-style: italic;
  text-align: center;
  padding: 2rem;
}

.testimonial {
  margin-top: 3rem;
  text-align: center;
  width: 100%;
  padding: 0 5%;
  box-sizing: border-box;
}

.quote {
  font-style: italic;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.attribution {
  font-weight: 500;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .cta2-container {
    grid-template-columns: 1fr;
  }
  
  .cta2-content {
    padding: 2.5rem;
    order: 2;
  }
  
  .cta2-image {
    order: 1;
    height: 250px;
  }
  
  .contact-info p {
    font-size: 1rem;
  }
  
  .social {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .social a {
    display: inline-block;
  }
}
</style>
