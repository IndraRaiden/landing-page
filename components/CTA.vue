<template>
  <section class="cta-wrapper">
    <div class="background-overlay"></div>
    <div class="cta-content">
      <div class="cta-heading" data-animation="text-gradient">
        <h2 data-text-animation="true">Let's make your next move feel like coming home</h2>
      </div>
      
      <div class="cta-message delay-100" data-animation="blur-in">
        <p>Whether you're just beginning or already dreaming of your next chapter,<br>I'm here to guide you every step of the way.</p>
      </div>
      
      <div class="cta-contact delay-200" data-animation="slide-up">
        <a href="mailto:olivia@lunamarestates.com" class="contact-email" data-animation="text-underline">olivia@lunamarestates.com</a>
        
        <div class="contact-social">
          <span data-animation="scale-in" class="delay-300">Or say hi on</span>
          <div class="social-links stagger-children" data-animation="fade-up">
            <a href="https://instagram.com/olivia.lunamar" target="_blank" rel="noopener noreferrer">Instagram</a>
            <span class="dot">•</span>
            <a href="https://wa.me/523221014263" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// CTA component
</script>

<style scoped>
.cta-wrapper {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 8rem;
  margin-bottom: 8rem;
  padding: 8rem 0;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  color: var(--color-text-light);
  overflow: hidden;
  background: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat;
  position: relative;
}



.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.cta-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.cta-heading h2 {
  font-size: 3.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 2rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
  max-width: 900px;
  position: relative;
  display: inline-block;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  padding: 0 1rem;
}

.cta-heading h2::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -15px;
  width: 80px;
  height: 1px;
  background-color: var(--color-blue);
  transform: translateX(-50%);
}

.cta-message {
  margin-bottom: 5rem;
}

.cta-message p {
  font-size: 1.4rem;
  line-height: 1.8;
  color: var(--color-text-light);
  margin: 0;
  font-weight: 300;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.cta-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.contact-email {
  font-size: 1.7rem;
  color: var(--color-text-light);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  padding-bottom: 5px;
  transition: border-color 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.contact-email:hover {
  border-color: var(--color-blue);
}

.contact-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.contact-social > span {
  font-size: 1.1rem;
  color: var(--color-text-light);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.social-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.social-links a {
  font-size: 1.2rem;
  color: var(--color-text-light);
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.social-links a:hover {
  color: var(--color-blue);
}

.dot {
  font-size: 1rem;
  color: var(--color-beige);
}

@media (max-width: 768px) {
  .cta-wrapper {
    padding: 6rem 0;
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
  
  .cta-content {
    padding: 0 1.5rem;
  }
  
  .cta-heading h2 {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }
  
  .cta-message p {
    font-size: 1.2rem;
  }
  
  .cta-message {
    margin-bottom: 3.5rem;
  }
  
  .contact-email {
    font-size: 1.4rem;
  }
}
</style>
