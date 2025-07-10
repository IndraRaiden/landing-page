<template>
  <div>
    <nav class="nav-bar">
      <div class="logo" data-animation="fade-down">HWD</div>
      <!-- Desktop Navigation Links -->
      <ul class="nav-links desktop-nav">
        <li data-animation="fade-down" class="delay-100">
          <a href="#about" :class="{ active: activeSection === 'about' }" @click.prevent="scrollToSection('about')">About</a>
        </li>
        <li data-animation="fade-down" class="delay-200">
          <a href="#contact" :class="{ active: activeSection === 'contact' }" @click.prevent="scrollToSection('contact')">Contact</a>
        </li>
        <li data-animation="fade-down" class="delay-300">
          <a href="#meetme" :class="{ active: activeSection === 'meetme' }" @click.prevent="scrollToSection('meetme')">Meet Olivia</a>
        </li>
        <li data-animation="fade-down" class="delay-400">
          <a href="#press" :class="{ active: activeSection === 'press' }" @click.prevent="scrollToSection('press')">Working</a>
        </li>
        <li data-animation="fade-down" class="delay-500">
          <a href="#projects" :class="{ active: activeSection === 'projects' }" @click.prevent="scrollToSection('projects')">Find Your Place</a>
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
          <a href="#about" :class="{ active: activeSection === 'about' }" @click="handleSidebarNavigation('about')">About</a>
        </li>
        <li>
          <a href="#contact" :class="{ active: activeSection === 'contact' }" @click="handleSidebarNavigation('contact')">Contact</a>
        </li>
        <li>
          <a href="#meetme" :class="{ active: activeSection === 'meetme' }" @click="handleSidebarNavigation('meetme')">Meet Olivia</a>
        </li>
        <li>
          <a href="#press" :class="{ active: activeSection === 'press' }" @click="handleSidebarNavigation('press')">Working</a>
        </li>
        <li>
          <a href="#projects" :class="{ active: activeSection === 'projects' }" @click="handleSidebarNavigation('projects')">Find Your Place</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

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
  background: linear-gradient(135deg, #ffb700 0%, #ff8a00 50%, #e5387e 100%);
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
  padding: 0 1.5rem 1.5rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #ffb700 0%, #ff8a00 50%, #e5387e 100%);
  padding-top: 1.5rem;
}

.sidebar-logo {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.close-btn {
  font-size: 2rem;
  cursor: pointer;
  color: #ffffff;
}

.sidebar-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-links li {
  margin-bottom: 0.5rem;
}

.sidebar-links a {
  display: block;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  border-left: 2px solid transparent;
  text-shadow: 0 1px 1px rgba(0,0,0,0.1);
}

.sidebar-links a:hover,
.sidebar-links a.active {
  background: rgba(255,255,255,0.1);
  color: #ffffff;
  border-left-color: #ffffff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
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
