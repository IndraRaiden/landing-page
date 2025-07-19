<template>
  <div class="animated-divider" data-animation="fade-up">
    <div class="carousel-container">
      <!-- Left navigation arrow -->
      <div class="nav-arrow left" @click="prevCard">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>
      
      <!-- Cards container -->
      <div class="cards-container">
        <!-- Only show the current card -->
        <div class="card" v-show="currentCardIndex === 0">
          <div class="card-content">
            <h3 class="card-title">{{ t('animatedDivider.card1.title') }}</h3>
            <p class="card-text">{{ t('animatedDivider.card1.text') }}</p>
            <p class="card-attribution">{{ t('animatedDivider.card1.attribution') }}</p>
          </div>
        </div>
        
        <div class="card" v-show="currentCardIndex === 1">
          <div class="card-content">
            <h3 class="card-title">{{ t('animatedDivider.card2.title') }}</h3>
            <p class="card-text">{{ t('animatedDivider.card2.text') }}</p>
            <p class="card-attribution">{{ t('animatedDivider.card2.attribution') }}</p>
          </div>
        </div>
        
        <div class="card" v-show="currentCardIndex === 2">
          <div class="card-content">
            <h3 class="card-title">{{ t('animatedDivider.card3.title') }}</h3>
            <p class="card-text">{{ t('animatedDivider.card3.text') }}</p>
            <p class="card-attribution">{{ t('animatedDivider.card3.attribution') }}</p>
          </div>
        </div>
        
        <div class="card" v-show="currentCardIndex === 3">
          <div class="card-content">
            <h3 class="card-title">{{ t('animatedDivider.card4.title') }}</h3>
            <p class="card-text">{{ t('animatedDivider.card4.text') }}</p>
            <p class="card-attribution">{{ t('animatedDivider.card4.attribution') }}</p>
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
import { t } from '../utils/translationStore';

// Total number of cards
const totalCards = 4;

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

// Debug function
const debugCurrentCard = () => {
  console.log('[AnimatedDivider] Current card index:', currentCardIndex.value);
};

// Log when component mounts
onMounted(() => {
  console.log('[AnimatedDivider] Component mounted');
  console.log('[AnimatedDivider] Total cards:', totalCards);
  debugCurrentCard();
});
</script>

<style scoped>
.animated-divider {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  background-color: #F03E81;
  overflow: hidden;
  /* Agregar imagen de fondo que cubra más espacio */
  background-image: url('ruta-a-tu-imagen.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 600px; /* Aumentar altura mínima */
}

/* Alternativa: crear un pseudo-elemento para la imagen */
.animated-divider::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('ruta-a-tu-imagen.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

/* Asegurar que el contenido esté por encima de la imagen de fondo */
.carousel-container {
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  position: relative;
  z-index: 1;
}

.cards-container {
  width: 100%;
  max-width: 850px;
  position: relative;
  min-height: 430px;
  z-index: 2;
}

.card {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2rem;
  background-color: rgba(255, 192, 203, 0.9); /* Aumentar opacidad para mejor contraste */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: visible;
  opacity: 1;
  transition: opacity 0.3s ease;
  z-index: 3;
}

.card-content {
  padding: 1.8rem 1.8rem;
  text-align: center;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #F03E81;
  margin-bottom: 1rem;
  text-shadow: none;
}

.card-text {
  font-style: italic;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #333;
  line-height: 1.6;
  flex-grow: 1;
  overflow: visible;
}

.card-attribution {
  font-weight: 500;
  color: #666;
  text-align: right;
  padding-right: 1rem;
}

/* Navigation arrows */
.nav-arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9); /* Aumentar opacidad */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: absolute;
  z-index: 10;
  color: #F03E81;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Sombra más fuerte */
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
  z-index: 5;
  position: relative;
}

.dot {
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.7); /* Aumentar opacidad */
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3); /* Agregar borde para mejor visibilidad */
}

.dot.active {
  background-color: white;
  transform: scale(1.2);
  border-color: white;
}

.dot:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 768px) {
  .animated-divider {
    min-height: 550px; /* Altura mínima ajustada para móvil */
  }
  
  .card-content {
    padding: 1.5rem 1.25rem;
    min-height: 380px;
  }
  
  .card-title {
    font-size: 1.3rem;
  }
  
  .card-text {
    font-size: 0.95rem;
    line-height: 1.4;
  }
  
  .nav-arrow {
    width: 35px;
    height: 35px;
  }

  .cards-container {
    min-height: 400px;
  }
}
</style>