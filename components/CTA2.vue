<template>
  <section class="cta2-section">
    <div class="cta2-container" data-animation="scale-in">
      <div class="cta2-content">
        <h2 class="cta2-heading" data-animation="text-gradient">Let's make your next move feel like coming home</h2>
        
        <p class="cta2-message delay-100" data-animation="blur-in">
          Whether you're just beginning or already dreaming of your next chapter, I'm here to guide you every step of the way.
        </p>
        
        <div class="contact-info delay-200" data-animation="slide-up">
          <p class="email">Write to me at <a href="mailto:olivia@lunamarestates.com" data-animation="text-underline">olivia@lunamarestates.com</a></p>
          <p class="social">Or say hi on <a href="https://instagram.com/livwillsellit" target="_blank" data-animation="text-underline">Instagram</a> and <a href="https://wa.me/523221014263" target="_blank" data-animation="text-underline">What'sApp</a></p>
        </div>
      </div>
      
      <div class="cta2-image" data-animation="zoom-in">
        <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop" alt="Beautiful Sayulita Beach House" class="real-image">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// CTA2 component - secondary call to action with image and testimonial
</script>

<style scoped>
.cta2-section {
  width: 100%;
  margin: 0;
  padding: 0;
  color: var(--color-text-dark);
}

.cta2-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background: linear-gradient(90deg,
    #FEE8CB 0%,   /* light peach */
    #F8B887 33%,  /* pastel orange */
    #F29699 66%,  /* soft pink */
    #E0AED0 100%  /* lavender */
  );
  overflow: hidden;
  width: 100%;
}

.cta2-content {
  padding: 4rem 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.85); /* frosted white for readability */
}

.cta2-heading {
  background: linear-gradient(90deg, #F8B887, #F29699, #E0AED0, #F8B887);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 300% 100%;
  animation: gradientShift 6s linear infinite;
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-weight: 500;
  font-family: "Times New Roman", Times, serif;
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
  color: var(--color-text-dark);
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.contact-info a:hover {
  border-bottom-color: #F29699;
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

.real-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
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
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

</style>
