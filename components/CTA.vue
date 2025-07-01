<template>
  <section class="cta-wrapper">
    <div class="cta-content">
      <div class="cta-heading">
        <h2>Let's make your next move feel like coming home</h2>
      </div>
      
      <div class="cta-message">
        <p>Whether you're just beginning or already dreaming of your next chapter,<br>I'm here to guide you every step of the way.</p>
      </div>
      
      <div class="cta-contact">
        <a href="mailto:olivia@lunamarestates.com" class="contact-email">olivia@lunamarestates.com</a>
        
        <div class="contact-social">
          <span>Or say hi on</span>
          <div class="social-links">
            <a href="https://instagram.com/olivia.lunamar" target="_blank" rel="noopener noreferrer">Instagram</a>
            <span class="dot">•</span>
            <a href="https://wa.me/11234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a>
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
  background-color: #f8f8f8;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
}

.cta-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cta-heading h2 {
  font-size: 2.5rem;
  font-weight: 400;
  color: #333;
  margin: 0 0 3rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
  max-width: 800px;
  position: relative;
  display: inline-block;
}

.cta-heading h2::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -15px;
  width: 80px;
  height: 1px;
  background-color: #555;
  transform: translateX(-50%);
}

.cta-message {
  margin-bottom: 5rem;
}

.cta-message p {
  font-size: 1.4rem;
  line-height: 1.8;
  color: #555;
  margin: 0;
  font-weight: 300;
}

.cta-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.contact-email {
  font-size: 1.7rem;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  padding-bottom: 5px;
  transition: border-color 0.3s ease;
}

.contact-email:hover {
  border-color: #333;
}

.contact-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.contact-social > span {
  font-size: 1.1rem;
  color: #777;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.social-links a {
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0 0.5rem;
}

.social-links a:hover {
  color: #000;
}

.dot {
  font-size: 1rem;
  color: #999;
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
