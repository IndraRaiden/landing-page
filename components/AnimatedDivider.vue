<template>
  <div class="animated-divider" data-animation="grow">
    <div class="testimonial-container">
      <div class="testimonial-box">
        <p class="quote">"Working with this agent changed our entire experience. They made the impossible possible."</p>
        <p class="attribution">— Recent Client</p>
      </div>
      <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Animated divider component with growing line animation
</script>

<style scoped>
.animated-divider {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  background-color: #F03E81; /* Vibrant pink background */
  overflow: hidden;
}

.testimonial-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

.testimonial-box {
  background-color: rgba(255, 192, 203, 0.7); /* Light pink with transparency */
  border-radius: 2rem;
  padding: 2.5rem 2rem;
  max-width: 800px;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.quote {
  font-style: italic;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  font-family: "Times New Roman", Times, serif;
  color: white;
  line-height: 1.4;
}

.attribution {
  font-weight: 500;
  color: white;
  text-align: right;
  padding-right: 1rem;
}

.dots {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
}

@media (max-width: 768px) {
  .testimonial-box {
    width: 90%;
    padding: 2rem 1.5rem;
  }
  
  .quote {
    font-size: 1.2rem;
  }
}
</style>
