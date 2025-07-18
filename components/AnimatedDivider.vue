<template>
  <div class="animated-divider" data-animation="fade-up">
    <div class="carousel-container">
      <!-- Left navigation arrow -->
      <div class="nav-arrow left" @click="prevCard">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>
      
      <!-- Cards container - simple left/right movement -->
      <div class="cards-container">
        <div class="cards-wrapper" :style="{ transform: `translateX(-${currentCardIndex * 100}%)` }">
          <!-- Card 1 -->
          <div class="card">
            <div class="card-content">
              <h3 class="card-title">{{ t('animatedDivider.card1.title') }}</h3>
              <p class="card-text">{{ t('animatedDivider.card1.text') }}</p>
              <p class="card-attribution">{{ t('animatedDivider.card1.attribution') }}</p>
            </div>
          </div>
          
          <!-- Card 2 -->
          <div class="card">
            <div class="card-content">
              <h3 class="card-title">{{ t('animatedDivider.card2.title') }}</h3>
              <p class="card-text">{{ t('animatedDivider.card2.text') }}</p>
              <p class="card-attribution">{{ t('animatedDivider.card2.attribution') }}</p>
            </div>
          </div>
          
          <!-- Card 3 -->
          <div class="card">
            <div class="card-content">
              <h3 class="card-title">{{ t('animatedDivider.card3.title') }}</h3>
              <p class="card-text">{{ t('animatedDivider.card3.text') }}</p>
              <p class="card-attribution">{{ t('animatedDivider.card3.attribution') }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right navigation arrow -->
      <div class="nav-arrow right" @click="nextCard">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </div>
    
    <!-- Indicator dots -->
    <div class="dots">
      <span 
        v-for="index in totalCards" 
        :key="index-1" 
        class="dot" 
        :class="{ active: currentCardIndex === index-1 }"
        @click="goToCard(index-1)">
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTranslation } from '../composables/useTranslation';

const { t } = useTranslation();

// Total number of cards
const totalCards = 3;

// Current card index
const currentCardIndex = ref(0);

// Navigation functions
const nextCard = () => {
  currentCardIndex.value = (currentCardIndex.value + 1) % totalCards;
};

const prevCard = () => {
  currentCardIndex.value = (currentCardIndex.value - 1 + totalCards) % totalCards;
};

const goToCard = (index: number) => {
  currentCardIndex.value = index;
};

// Auto-advance cards (optional)
// let autoAdvanceInterval: number | null = null;

// onMounted(() => {
//   autoAdvanceInterval = window.setInterval(() => {
//     nextCard();
//   }, 5000); // Change card every 5 seconds
// });

// onBeforeUnmount(() => {
//   if (autoAdvanceInterval) {
//     clearInterval(autoAdvanceInterval);
//   }
// });
</script>

<style scoped>
.animated-divider {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  background-color: #F03E81; /* Vibrant pink background */
  overflow: hidden;
}

.carousel-container {
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  position: relative;
}

.cards-container {
  width: 100%;
  max-width: 800px;
  position: relative;
  overflow: hidden;
}

.cards-wrapper {
  display: flex;
  width: 100%;
  transition: transform 0.3s ease;
}

.card {
  min-width: 100%;
  flex: 0 0 100%;
  border-radius: 2rem;
  background-color: rgba(255, 192, 203, 0.7); /* Light pink with transparency */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-content {
  padding: 2.5rem 2rem;
  text-align: center;
}

.card-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.card-text {
  font-style: italic;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: white;
  line-height: 1.4;
}

.card-attribution {
  font-weight: 500;
  color: white;
  text-align: right;
  padding-right: 1rem;
}

/* Navigation arrows */
.nav-arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: absolute;
  z-index: 10;
  color: #F03E81;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.nav-arrow:hover {
  background-color: white;
  transform: scale(1.05);
}

.nav-arrow.left {
  left: 10px;
}

.nav-arrow.right {
  right: 10px;
}

/* Indicator dots */
.dots {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background-color: white;
  transform: scale(1.2);
}

.dot:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

/* Simple transition for cards wrapper */
.cards-wrapper {
  transition: transform 0.3s ease;
}

@media (max-width: 768px) {
  .card-content {
    padding: 2rem 1.5rem;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
  
  .card-text {
    font-size: 1.2rem;
  }
  
  .nav-arrow {
    width: 40px;
    height: 40px;
  }
}
</style>
