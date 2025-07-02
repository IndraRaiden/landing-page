<template>
  <div>
    <nav class="nav-bar">
      <div class="logo" data-animation="fade-down">HWD</div>
      <ul class="nav-links">
        <li data-animation="fade-down" class="delay-100">
          <a href="#about" :class="{ active: activeSection === 'about' }" @click.prevent="scrollToSection('about')">About</a>
        </li>
        <li data-animation="fade-down" class="delay-200">
          <a href="#projects" :class="{ active: activeSection === 'projects' }" @click.prevent="scrollToSection('projects')">Projects</a>
        </li>
        <li data-animation="fade-down" class="delay-300">
          <a href="#press" :class="{ active: activeSection === 'press' }" @click.prevent="scrollToSection('press')">Press</a>
        </li>
        <li data-animation="fade-down" class="delay-400">
          <a href="#contact" :class="{ active: activeSection === 'contact' }" @click.prevent="scrollToSection('contact')">Contact</a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const activeSection = ref('');

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80, // Adjust for navbar height
      behavior: 'smooth'
    });
    activeSection.value = sectionId;
  }
};

// Update active section on scroll
const handleScroll = () => {
  const sections = ['about', 'projects', 'press', 'contact'];
  const scrollPosition = window.scrollY + 200; // Add offset for better detection
  
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop;
      const offsetBottom = offsetTop + element.offsetHeight;
      
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
  background: var(--color-white);
  border-bottom: 1px solid #e2e8f0;
  z-index: 1000;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.logo {
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--color-text-dark);
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
  color: var(--color-text-dark);
  text-decoration: none;
  letter-spacing: 1px;
  position: relative;
  padding-bottom: 5px;
  transition: all 0.3s ease;
}

.nav-links a:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #888; /* Changed from blue to grey */
  transition: width 0.3s ease;
}

.nav-links a:hover:after,
.nav-links a.active:after {
  width: 100%;
}

.nav-links a.active {
  font-weight: 600;
}

</style>
