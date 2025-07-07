<template>
  <div class="animated-divider" data-animation="grow">
    <div class="line"></div>
  </div>
</template>

<script setup lang="ts">
// Animated divider component with growing line animation
</script>

<style scoped>
.animated-divider {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  overflow: hidden;
}

.line {
  height: 4px;
  width: 0;
  background: linear-gradient(90deg, #FEE8CB 0%, #F8B887 25%, #F29699 60%, #E0AED0 100%);
  background-size: 300% 100%;
  animation: gradientShift 6s linear infinite;
  transition: width 1s ease-out;
}

.animated-divider[data-animation="grow"] .line {
  animation: grow 1.5s ease-out forwards;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

@keyframes grow {
  from {
    width: 0;
  }
  to {
    width: 80%;
  }
}
</style>
