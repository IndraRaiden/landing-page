<template>
  <section class="cta-wrapper">
    <div class="background-overlay"></div>
    <div class="cta-content">
      <div class="left-column">
        <div class="cta-heading" data-animation="text-gradient">
          <h2 data-text-animation="true">{{ $t('cta.heading') }}</h2>
        </div>
        
        <div class="accent-line"></div>
        
        <div class="cta-message" data-animation="blur-in">
          <p>{{ $t('cta.message') }}</p>
        </div>
        
        <div class="cta-contact" data-animation="slide-up">
          <a href="mailto:olivia@lunamarestates.com" class="contact-email" data-animation="text-underline">
            olivia@lunamarestates.com
          </a>
          
          <div class="contact-social">
            <p>{{ $t('cta.socialIntro') }}</p>
            <div class="social-links" data-animation="fade-up">
              <a href="https://instagram.com/livewillsellit" target="_blank" rel="noopener noreferrer" class="social-link instagram">@livewillsellit</a>
              <a href="https://wa.me/523221014263" target="_blank" rel="noopener noreferrer" class="social-link whatsapp">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="right-column">
        <div class="profile-image">
          <div class="image-placeholder">{{ $t('cta.photoPlaceholder') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

// Enhanced intersection observer for animations
onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      }
    })
  }, observerOptions)

  // Observe all animated elements
  document.querySelectorAll('[data-animation]').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.cta-wrapper {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 4rem 0;
  color: #ffffff;
  overflow: hidden;
  background: #C95B8E;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 600px;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 180, 200, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 150, 180, 0.1) 0%, transparent 50%);
  z-index: 1;
}

.cta-content {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: relative;
  z-index: 2;
  gap: 3rem;
}

.left-column {
  text-align: left;
  padding-right: 3rem;
}

.right-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.accent-line {
  width: 100px;
  height: 4px;
  background: #FFD700;
  margin: 2rem 0 2.5rem;
}

.cta-heading {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.cta-heading.animate {
  opacity: 1;
  transform: translateY(0);
}

.cta-heading h2 {
  font-size: 3.5rem;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
  max-width: 700px;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
}

.cta-message {
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
}

.cta-message.animate {
  opacity: 1;
  transform: translateY(0);
}

.cta-message p {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #ffffff;
  margin: 0;
  font-weight: 400;
  max-width: 600px;
}

.cta-contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
}

.cta-contact.animate {
  opacity: 1;
  transform: translateY(0);
}

.contact-email {
  font-size: 1.4rem;
  color: #ffffff;
  text-decoration: none;
  position: relative;
  padding: 0;
  transition: all 0.3s ease;
  font-weight: 400;
  border-bottom: 1px solid #ffffff;
}

.contact-email:hover {
  color: #FFD700;
  border-bottom-color: #FFD700;
}

.contact-social {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.contact-social p {
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: 400;
  margin: 0;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.social-link {
  display: inline-block;
  font-size: 1.1rem;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  position: relative;
  font-weight: 400;
  background: rgba(255, 255, 255, 0.2);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.3);
}

.instagram {
  background: rgba(255, 255, 255, 0.2);
}

.whatsapp {
  background: rgba(255, 255, 255, 0.2);
}

.profile-image {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  width: 280px;
  height: 380px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-style: italic;
  font-size: 1.1rem;
  font-family: "Times New Roman", Times, serif;
}

/* Responsive Design */
@media (max-width: 992px) {
  .cta-wrapper {
    padding: 5rem 0;
    min-height: 500px;
  }
  
  .cta-content {
    padding: 0 2rem;
    gap: 2rem;
  }
  
  .cta-heading h2 {
    font-size: 3rem;
  }
  
  .image-placeholder {
    width: 240px;
    height: 320px;
  }
}

@media (max-width: 768px) {
  .cta-wrapper {
    padding: 5rem 0;
  }
  
  .cta-content {
    padding: 0 2rem;
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .left-column {
    padding-right: 0;
    text-align: center;
  }
  
  .cta-heading h2 {
    font-size: 2.8rem;
    line-height: 1.3;
    text-align: center;
    margin: 0 auto;
  }
  
  .accent-line {
    margin: 1.8rem auto 2.5rem;
  }
  
  .cta-message p {
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: center;
    margin: 0 auto;
  }
  
  .cta-message {
    margin-bottom: 2.5rem;
  }
  
  .cta-contact {
    align-items: center;
  }
  
  .contact-email {
    font-size: 1.3rem;
  }
  
  .contact-social {
    align-items: center;
  }
  
  .right-column {
    order: -1;
  }
  
  .profile-image {
    margin-bottom: 1rem;
  }
  
  .image-placeholder {
    width: 220px;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .cta-wrapper {
    padding: 4rem 0;
  }
  
  .cta-heading h2 {
    font-size: 2.2rem;
  }
  
  .cta-message p {
    font-size: 1.1rem;
  }
  
  .contact-email {
    font-size: 1.2rem;
  }
  
  .social-links {
    flex-direction: column;
    gap: 1.2rem;
  }
  
  .image-placeholder {
    width: 180px;
    height: 240px;
  }
}

/* Subtle animations for better UX */
@keyframes gentle-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

.contact-email:focus {
  animation: gentle-pulse 0.6s ease-in-out;
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .cta-heading,
  .cta-message,
  .cta-contact {
    transition: none;
  }
  
  .contact-email:focus {
    animation: none;
  }
}
</style>