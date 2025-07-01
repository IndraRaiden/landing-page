<template>
  <div>
    <nav class="nav-bar">
      <div class="logo" data-animation="fade-down">HWD</div>
      <ul class="nav-links">
        <li data-animation="fade-down" class="delay-100"><a href="#about">About</a></li>
        <li data-animation="fade-down" class="delay-200"><a href="#projects">Projects</a></li>
        <li data-animation="fade-down" class="delay-300"><a href="#press">Press</a></li>
        <li data-animation="fade-down" class="delay-400"><a href="#contact">Contact</a></li>
      </ul>
    </nav>

  </div>
</template>

<script setup lang="ts">
// Static navbar – no script required
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
  background: transparent;
  z-index: 1000;
  box-sizing: border-box;
}

.logo {
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: 2px;
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
  color: #000;
  text-decoration: none;
  letter-spacing: 1px;
}

</style>
