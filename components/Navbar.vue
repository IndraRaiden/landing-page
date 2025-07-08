<template>
  <div>
    <nav class="nav-bar">
      <div class="logo" data-animation="fade-down">HWD</div>
      <ul class="nav-links">
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
    </nav>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const activeSection = ref('');

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
  border-bottom: 1px solid rgba(0,0,0,0.05);
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
  background: #E0E0E0;
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

</style>
