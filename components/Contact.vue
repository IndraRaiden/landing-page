<template>
  <section id="contact" class="contact-section">
    <div class="background-overlay"></div>
    <div class="left" data-animation="fade-right">
      <h2 class="title">{{ $t('contact.title') }}</h2>
    </div>
    <div class="right">
      <div class="contact-options">
        <!-- Email Option -->
        <div class="contact-option contact-card" data-animation="fade-up">
          <h3 class="option-title">{{ $t('contact.emailTitle') }}</h3>
          <div class="option-content">
            <p>{{ $t('contact.emailText') }}</p>
            <a href="mailto:olivia@lunamarestates.com" class="contact-link">
              <span>olivia@lunamarestates.com</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- WhatsApp Option -->
        <div class="contact-option contact-card delay-100" data-animation="fade-up">
          <h3 class="option-title">{{ $t('contact.whatsappTitle') }}</h3>
          <div class="option-content">
            <p>{{ $t('contact.whatsappText') }}</p>
            <a href="https://wa.me/523221014263" target="_blank" class="contact-link">
              <span>(+52) 322-101-4263</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Instagram Option -->
        <div class="contact-option contact-card delay-200" data-animation="fade-up">
          <h3 class="option-title">{{ $t('contact.instagramTitle') }}</h3>
          <div class="option-content">
            <p>{{ $t('contact.instagramText') }}</p>
            <a href="https://instagram.com/livwillsellit" target="_blank" class="contact-link">
              <span>@livwillsellit</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Using global translation function from the i18n plugin
</script>

<style scoped>
.contact-section {
  position: relative;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 7rem;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 4rem 5%;
  color: #333333;
  justify-content: space-between;
  min-height: 500px;
  box-sizing: border-box;
  overflow-x: hidden;
  background-image: url('https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=2070&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  background-color: #FFFFFF;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(245, 245, 245, 0.7);
  mix-blend-mode: normal;
  z-index: 0;
}

.title {
  font-size: 2.0rem;
  font-weight: 500;
  color: #333333;
  margin: 0;
  letter-spacing: 0.03em;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
  z-index: 1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  font-family: "Times New Roman", Times, serif;
}

.title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #E0E0E0;
  transition: width 0.6s ease;
}

.title:hover::after {
  width: 100%;
}

.right {
  max-width: 800px;
  width: 100%;
  margin-left: auto;
  padding-right: 5%;
  box-sizing: border-box;
}

.contact-options {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 700px;
  width: 100%;
  margin: 2rem 0;
  box-sizing: border-box;
}

.contact-option {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.contact-card {
  background-color: #FFFFFF;
  border-left: 2px solid #E0E0E0;
  border-radius: 5px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 1;
  color: #333333;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.option-title {
  font-size: 1.35rem;
  font-weight: 500;
  color: #333333;
  letter-spacing: 0.02em;
  position: relative;
  display: inline-block;
  padding-bottom: 6px;
  margin: 0;
  font-family: "Times New Roman", Times, serif;
}

.option-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #E0E0E0;
  transition: width 0.6s ease;
}

.option-title:hover::after {
  width: 100%;
}

.option-content {
  line-height: 1.7;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
}

.option-content p {
  margin: 0 0 1rem 0;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #333333;
  border: 1px solid #E0E0E0;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  max-width: 100%;
  word-break: break-word;
  box-sizing: border-box;
}

.contact-link:hover {
  background-color: #F5F5F5;
  color: #555555;
}

.contact-link svg {
  transition: transform 0.3s ease;
}

.contact-link:hover svg {
  transform: translateX(3px);
}

@media (max-width: 1024px) {
  .contact-section {
    grid-template-columns: 180px 1fr;
    gap: 3rem;
  }

  .right {
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .contact-section {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 4rem 1rem;
  }
  
  .right {
    max-width: 100%;
    padding-right: 0;
  }
}
</style>
