<template>
  <section class="cta-wrapper">
    <div class="background-overlay"></div>
    <div class="cta-content">
      <div class="cta-heading" data-animation="text-gradient">
        <h2 data-text-animation="true">Let's make your next move feel like coming home</h2>
      </div>
      
      <div class="cta-message" data-animation="blur-in">
        <p>Whether you're just beginning or already dreaming of your next chapter,<br>I'm here to guide you every step of the way.</p>
      </div>
      
      <div class="cta-contact" data-animation="slide-up">
        <a href="mailto:olivia@lunamarestates.com" class="contact-email" data-animation="text-underline">
          olivia@lunamarestates.com
        </a>
        
        <div class="contact-social">
          <span data-animation="scale-in">Or say hi on</span>
          <div class="social-links" data-animation="fade-up">
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
  padding: 8rem 0;
  text-align: center;
  color: #333333;
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(120, 150, 200, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(200, 120, 150, 0.03) 0%, transparent 50%);
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
  font-size: 3.8rem;
  font-weight: 500;
  color: #2c3e50;
  margin: 0 0 3rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
  max-width: 900px;
  position: relative;
  display: inline-block;
  font-family: "Times New Roman", Times, serif;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-heading h2::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -20px;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #cbd5e0, transparent);
  transform: translateX(-50%);
  border-radius: 1px;
}

.cta-message {
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
}

.cta-message.animate {
  opacity: 1;
  transform: translateY(0);
}

.cta-message p {
  font-size: 1.3rem;
  line-height: 1.7;
  color: #64748b;
  margin: 0;
  font-weight: 400;
  max-width: 600px;
}

.cta-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
}

.cta-contact.animate {
  opacity: 1;
  transform: translateY(0);
}

.contact-email {
  font-size: 1.6rem;
  color: #2c3e50;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.contact-email::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.contact-email:hover::before {
  width: 100%;
}

.contact-email:hover {
  color: #1e40af;
  transform: translateY(-2px);
}

.contact-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
}

.contact-social > span {
  font-size: 1rem;
  color: #64748b;
  font-weight: 400;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.social-links a {
  font-size: 1.1rem;
  color: #475569;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  position: relative;
  font-weight: 500;
}

.social-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 1px;
  background: #64748b;
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.social-links a:hover::after {
  width: 80%;
}

.social-links a:hover {
  color: #1e293b;
  transform: translateY(-1px);
}

.dot {
  font-size: 0.8rem;
  color: #cbd5e0;
  font-weight: 300;
}

/* Responsive Design */
@media (max-width: 768px) {
  .cta-wrapper {
    padding: 6rem 0;
  }
  
  .cta-content {
    padding: 0 1.5rem;
  }
  
  .cta-heading h2 {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
    line-height: 1.4;
  }
  
  .cta-message p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  .cta-message {
    margin-bottom: 3.5rem;
  }
  
  .contact-email {
    font-size: 1.3rem;
  }
  
  .social-links {
    flex-direction: column;
    gap: 1rem;
  }
  
  .dot {
    display: none;
  }
}

@media (max-width: 480px) {
  .cta-wrapper {
    padding: 4rem 0;
  }
  
  .cta-heading h2 {
    font-size: 1.8rem;
  }
  
  .cta-message p {
    font-size: 1rem;
  }
  
  .contact-email {
    font-size: 1.2rem;
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