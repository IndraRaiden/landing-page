<template>
  <div>
    <nav class="nav-bar">
      <div class="logo" data-animation="fade-down">HWD</div>
      <!-- Desktop Navigation Links -->
      <ul class="nav-links desktop-nav">
        <li data-animation="fade-down" class="delay-100">
          <a href="#about" :class="{ active: activeSection === 'about' }" @click.prevent="scrollToSection('about')">{{ t('navbar.about') }}</a>
        </li>
        <li data-animation="fade-down" class="delay-200">
          <a href="#contact" :class="{ active: activeSection === 'contact' }" @click.prevent="scrollToSection('contact')">{{ t('navbar.contact') }}</a>
        </li>
        <li data-animation="fade-down" class="delay-300">
          <a href="#meetme" :class="{ active: activeSection === 'meetme' }" @click.prevent="scrollToSection('meetme')">{{ t('navbar.meetOlivia') }}</a>
        </li>
        <li data-animation="fade-down" class="delay-400">
          <a href="#press" :class="{ active: activeSection === 'press' }" @click.prevent="scrollToSection('press')">{{ t('navbar.working') }}</a>
        </li>
        <li data-animation="fade-down" class="delay-500">
          <a href="#projects" :class="{ active: activeSection === 'projects' }" @click.prevent="scrollToSection('projects')">{{ t('navbar.findYourPlace') }}</a>
        </li>
        <li data-animation="fade-down" class="delay-600 whatsapp-icon">
          <a href="https://wa.me/523221014263" target="_blank" aria-label="Contact on WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.72.043.433-.101.838z"/>
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
            </svg>
          </a>
        </li>
        <li data-animation="fade-down" class="delay-700 language-toggle">
          <button @click="toggleLanguage()" aria-label="Toggle language" :title="currentLanguage === 'en' ? 'Cambiar a español' : 'Switch to English'">
            {{ currentLanguage === 'en' ? 'ES' : 'EN' }}
          </button>
        </li>
      </ul>
      
      <!-- Mobile Hamburger Button -->
      <button class="hamburger-menu" @click="toggleSidebar" :class="{ active: isSidebarOpen }" aria-label="Menu">
        <div class="hamburger-icon">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </div>
      </button>
    </nav>

    <!-- Mobile Sidebar Menu -->
    <div class="sidebar-overlay" v-if="isSidebarOpen" @click="closeSidebar"></div>
    <div class="sidebar" :class="{ active: isSidebarOpen }">
      <div class="sidebar-header">
        <div class="sidebar-logo">HWD</div>
        <div class="close-btn" @click="closeSidebar">&times;</div>
      </div>
      <ul class="sidebar-links">
        <li>
          <a href="#about" :class="{ active: activeSection === 'about' }" @click="handleSidebarNavigation('about')">{{ t('navbar.about') }}</a>
        </li>
        <li>
          <a href="#contact" :class="{ active: activeSection === 'contact' }" @click="handleSidebarNavigation('contact')">{{ t('navbar.contact') }}</a>
        </li>
        <li>
          <a href="#meetme" :class="{ active: activeSection === 'meetme' }" @click="handleSidebarNavigation('meetme')">{{ t('navbar.meetOlivia') }}</a>
        </li>
        <li>
          <a href="#press" :class="{ active: activeSection === 'press' }" @click="handleSidebarNavigation('press')">{{ t('navbar.working') }}</a>
        </li>
        <li>
          <a href="#projects" :class="{ active: activeSection === 'projects' }" @click="handleSidebarNavigation('projects')">{{ t('navbar.findYourPlace') }}</a>
        </li>
        <li>
          <a href="https://wa.me/523221014263" target="_blank" class="whatsapp-sidebar-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#25D366" style="margin-right: 10px; vertical-align: middle;">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.72.043.433-.101.838z"/>
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
            </svg>
            WhatsApp
          </a>
        </li>
        <li class="language-toggle-mobile">
          <button @click="toggleLanguage(); closeSidebar();" aria-label="Toggle language">
            {{ currentLanguage === 'en' ? 'Español' : 'English' }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { currentLanguage, toggleLanguage, t } from '../utils/translationStore';

const activeSection = ref('');
const isSidebarOpen = ref(false);

// Toggle sidebar visibility
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
  if (isSidebarOpen.value) {
    document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
  } else {
    document.body.style.overflow = ''; // Re-enable scrolling when sidebar is closed
  }
};

// Close sidebar
const closeSidebar = () => {
  isSidebarOpen.value = false;
  document.body.style.overflow = '';
};

// Handle sidebar navigation
const handleSidebarNavigation = (sectionId: string) => {
  scrollToSection(sectionId);
  closeSidebar();
};

const scrollToSection = (sectionId: string) => {
  console.log('Attempting to scroll to section:', sectionId);
  
  // Add a small delay to ensure DOM is fully loaded
  setTimeout(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      console.log('Found section element:', section);
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
      console.log('Scrolling to position:', offsetTop - 80);
      
      window.scrollTo({
        top: offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
      
      activeSection.value = sectionId;
    } else {
      console.error('Section not found:', sectionId);
      // Fallback approach - try to find by query selector
      const altSection = document.querySelector(`#${sectionId}, [id='${sectionId}']`);
      if (altSection) {
        console.log('Found section using alternative selector:', altSection);
        const offsetTop = altSection.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
          top: offsetTop - 80,
          behavior: 'smooth'
        });
        
        activeSection.value = sectionId;
      }
    }
  }, 100);
};

// Update active section on scroll
const handleScroll = () => {
  const sections = ['about', 'contact', 'meetme', 'press', 'projects'];
  const scrollPosition = window.scrollY + 200; // Add offset for better detection
  
  for (const section of sections) {
    // Try both getElementById and querySelector for better compatibility
    const element = document.getElementById(section) || document.querySelector(`[id='${section}']`);
    
    if (element) {
      // Use getBoundingClientRect for more accurate positioning
      const rect = element.getBoundingClientRect();
      const offsetTop = rect.top + window.pageYOffset;
      const offsetBottom = offsetTop + rect.height;
      
      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        activeSection.value = section;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initialize active section
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-family: "Helvetica Neue", Arial, sans-serif;
  background: linear-gradient(90deg, #ffb700 0%, #ff8a00 50%, #e5387e 100%);
  z-index: 1000;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

/* Accent stripe - removed as we now have a gradient background */

.logo {
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-transform: uppercase;
  font-size: 0.75rem;
  color: #ffffff;
  text-decoration: none;
  letter-spacing: 1px;
  position: relative;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-shadow: 0 1px 1px rgba(0,0,0,0.1);
}

.nav-links a:after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  transition: width 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  transform-origin: left center;
}

.nav-links a:hover {
  color: #ffffff;
  opacity: 0.9;
}

.nav-links a:hover:after,
.nav-links a.active:after {
  width: 100%;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.6));
}

.nav-links a.active {
  font-weight: 600;
  color: #ffffff;
}

.whatsapp-icon a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.whatsapp-icon a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.whatsapp-icon a:after {
  display: none;
}

.whatsapp-sidebar-link {
  display: flex !important;
  align-items: center;
}

.whatsapp-sidebar-link:hover svg {
  transform: scale(1.1);
}

/* Language Toggle Styling */
.language-toggle button {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  text-shadow: 0 1px 1px rgba(0,0,0,0.1);
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
}

.language-toggle button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
}

.language-toggle-mobile {
  margin-top: 1.5rem;
  padding: 0 1.5rem;
}

.language-toggle-mobile button {
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
  color: #000000;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
}

/* Hamburger Menu Button */
.hamburger-menu {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 1001;
  background: transparent;
  border: none;
  border-radius: 4px;
  padding: 0;
  margin-left: auto;
}

.hamburger-icon {
  width: 24px;
  height: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger-line {
  display: block;
  height: 3px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.hamburger-menu.active .hamburger-line:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}

.hamburger-menu.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.active .hamburger-line:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
}

/* Sidebar Menu */
.sidebar {
  position: fixed;
  top: 0;
  right: -300px;
  width: 280px;
  height: 100%;
  background: #ffffff;
  box-shadow: -5px 0 15px rgba(0,0,0,0.2);
  z-index: 1002;
  transition: right 0.3s ease;
  overflow-y: auto;
  padding: 0;
}

.sidebar.active {
  right: 0;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1001;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  background: #ffffff;
}

.sidebar-logo {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #000000;
}

.close-btn {
  font-size: 2rem;
  color: #000000;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sidebar-links {
  list-style: none;
  padding: 1.5rem;
  margin: 0;
}

.sidebar-links li {
  margin-bottom: 1.5rem;
}

.sidebar-links a {
  display: block;
  color: #000000;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 5px 0;
}

.sidebar-links a:hover,
.sidebar-links a.active {
  color: #e5387e;
  transform: translateX(5px);
}

/* Responsive Styles */
@media screen and (max-width: 1024px) {
  .desktop-nav {
    display: none;
  }
  
  .hamburger-menu {
    display: flex;
  }
  
  .nav-bar {
    padding: 0.75rem 1.25rem;
  }
}

</style>
