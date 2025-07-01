<template>
  <section>

    <!-- Hero Image -->
    <img
      class="hero-img"
      src="https://picsum.photos/1600/900"
      alt="Hero image"
      data-animation="zoom-in"
    />
  </section>
</template>

<script setup lang="ts">
// No script logic needed for static hero component
</script>

<style scoped>
section {
  width: 100%;
  background-color: transparent;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-family: "Helvetica Neue", Arial, sans-serif;
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


.hero-img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
