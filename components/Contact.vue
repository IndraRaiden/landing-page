<template>
  <section class="contact-section">
    <div class="left">
      <h2 class="title">Get in Touch</h2>
    </div>
    <div class="right">
      <div class="contact-options">
        <!-- Email Option -->
        <div class="contact-option">
          <h3 class="option-title">Email</h3>
          <div class="option-content">
            <p>Write to me at</p>
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
        <div class="contact-option">
          <h3 class="option-title">WhatsApp</h3>
          <div class="option-content">
            <p>Or say hi on WhatsApp</p>
            <a href="https://wa.me/1234567890" target="_blank" class="contact-link">
              <span>+1 (123) 456-7890</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Instagram Option -->
        <div class="contact-option">
          <h3 class="option-title">Instagram</h3>
          <div class="option-content">
            <p>Or say hi on Instagram</p>
            <a href="https://instagram.com/olivia.lunamar" target="_blank" class="contact-link">
              <span>@olivia.lunamar</span>
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
// No script logic needed for static contact component
</script>

<style scoped>
.contact-section {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 7rem;
  max-width: 100%;
  margin: 5rem 0;
  padding: 0 5%;
  font-family: "Times New Roman", Times, serif;
  color: #444;
  justify-content: space-between;
}

.title {
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
  margin: 0;
  letter-spacing: 0.03em;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
}

.title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #333;
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

.contact-options {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 700px;
}

.contact-option {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.option-title {
  font-size: 1.15rem;
  font-weight: 500;
  color: #333;
  letter-spacing: 0.02em;
  position: relative;
  display: inline-block;
  padding-bottom: 6px;
  margin: 0;
}

.option-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #666;
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
  color: #333;
  border: 1px solid #333;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
}

.contact-link:hover {
  background-color: #f5f5f5;
}

.contact-link svg {
  transition: transform 0.3s ease;
}

.contact-link:hover svg {
  transform: translateX(3px);
}

@media (max-width: 768px) {
  .contact-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .right {
    max-width: 100%;
  }
}
</style>
