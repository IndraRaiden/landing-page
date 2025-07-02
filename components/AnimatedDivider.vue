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
  height: 1px;
  width: 0;
  background-color: #888;
  transition: width 1s ease-out;
}

.animated-divider[data-animation="grow"] .line {
  animation: grow 1.5s ease-out forwards;
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
