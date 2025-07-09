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
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: saturate(180%) blur(10px);
  border-bottom: 1px solid var(--accent-orange-light);
  z-index: 1000;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* Accent stripe */
.nav-bar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-yellow) 0%, var(--accent-orange) 100%);
  pointer-events: none;
}

.logo {
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #333333;
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
  color: #555555;
  text-decoration: none;
  letter-spacing: 1px;
  position: relative;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-links a:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background: linear-gradient(90deg, rgba(255,240,210,1) 0%, rgba(255,220,180,1) 100%);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: var(--accent-magenta-dark);
}

.nav-links a:hover:after,
.nav-links a.active:after {
  width: 100%;
}

.nav-links a.active {
  font-weight: 600;
  color: var(--accent-magenta-dark);
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
  background-color: #000000;
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
  background: white;
  box-shadow: -5px 0 15px rgba(0,0,0,0.1);
  z-index: 1002;
  transition: right 0.3s ease;
  overflow-y: auto;
  padding: 2rem 0;
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
}

.sidebar-logo {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #333333;
}

.close-btn {
  font-size: 2rem;
  cursor: pointer;
  color: var(--accent-magenta-dark);
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
  color: #555555;
  text-decoration: none;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
}

.sidebar-links a:hover,
.sidebar-links a.active {
  background: rgba(0,0,0,0.05);
  color: var(--accent-magenta-dark);
  border-left-color: var(--accent-magenta-dark);
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
