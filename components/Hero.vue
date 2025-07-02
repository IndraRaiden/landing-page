<template>
  <section>

    <!-- Hero Image -->
    <img
      class="hero-img"
      src="https://images.unsplash.com/photo-1623718649591-311775a30c43?q=80&w=2070&auto=format&fit=crop"
      alt="Beautiful Sayulita Beachfront Property"
      data-animation="zoom-in"
    />
  </section>
</template>

<script setup lang="ts">
// No script logic needed for static hero component
</script>

<style scoped>
.hero-section {
  background-color: var(--color-blue-light);
  width: 100%;
  height: 100vh;
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
  color: var(--color-text-dark);
  text-decoration: none;
  letter-spacing: 1px;
}

.hero-overlay a {
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  background-color: var(--color-blue-medium);
  color: var(--color-text-light);
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border-radius: 3px;
}

.hero-img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
