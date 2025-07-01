<template>
  <div>
    <nav class="nav-bar">
      <div class="logo">HWD</div>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#press">Press</a></li>
        <li><a href="#contact">Contact</a></li>
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
