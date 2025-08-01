<template>
  <footer class="footer-section">
    <div class="footer-content">
      <div class="footer-brand">
        <div class="footer-logo"><img src="/navbar/g16.svg" alt="G16 Logo" class="g16-logo" /></div>
        <p class="footer-tagline">{{ $t('footer.tagline') }}</p>
      </div>
      
      <div class="footer-links">
        <div class="footer-column">
          <h3>{{ $t('footer.navigation.title') }}</h3>
          <ul>
            <li><a href="#about">{{ $t('footer.navigation.about') }}</a></li>
            <li><a href="#contact">{{ $t('footer.navigation.contact') }}</a></li>
            <li><a href="#meetme">{{ $t('footer.navigation.meetOlivia') }}</a></li>
            <li><a href="#press">{{ $t('footer.navigation.working') }}</a></li>
            <li><a href="#projects">{{ $t('footer.navigation.findYourPlace') }}</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h3>{{ $t('footer.contact.title') }}</h3>
          <ul>
            <li><a href="mailto:Olivia@lunamarestates.com">Olivia@lunamarestates.com</a></li>
            <li><a href="https://wa.me/523221014263">(+52) 322-101-4263</a></li>
            <li><a href="https://instagram.com/livwillsellit">@livwillsellit</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h3>{{ $t('footer.follow.title') }}</h3>
          <div class="social-icons">
            <a href="https://instagram.com/livwillsellit" target="_blank" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://wa.me/523221014263" target="_blank" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.72.043.433-.101.838z"/>
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}</p>
      <p>{{ $t('footer.designedWith') }}</p>
      <p>{{ $t('footer.developedBy') }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component
</script>

<style scoped>
.footer-section {
  width: 100%;
  background: linear-gradient(90deg, #ffb700 0%, #ff8a00 50%, #e5387e 100%);
  color: #ffffff;
  padding: 4rem 5% 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.footer-tagline {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 300px;
  opacity: 0.9;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-column h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  font-family: "Times New Roman", Times, serif;
}

.footer-column h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 30px;
  height: 2px;
  background-color: #ffffff;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-column ul li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.footer-column ul li a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background: #ffffff;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  transition: width 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.footer-column ul li a:hover {
  opacity: 0.9;
}

.footer-column ul li a:hover::after {
  width: 100%;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}

.footer-bottom {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

.footer-certifications {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.certification-logo {
  height: 60px;
  width: auto;
  background-color: white;
  border-radius: 8px;
  padding: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--accent-orange);
}

.g16-logo {
  height: 50px;
  width: auto;
  filter: brightness(0) invert(1); /* Makes the SVG white */
}

@media (max-width: 900px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-links {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .footer-brand {
    text-align: center;
    align-items: center;
  }
  
  .footer-tagline {
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .footer-links {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-section {
    padding: 3rem 1rem 1.5rem;
  }
}
</style>
