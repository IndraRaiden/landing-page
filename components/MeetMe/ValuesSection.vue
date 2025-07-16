<template>
  <div class="values-section" data-animation="slide-up">
    <div class="values-header">
      <h3 class="section-heading">{{ $t('meetme.valuesSection.heading') }}</h3>
      <p data-animation="blur-in" class="values-intro">{{ $t('meetme.valuesSection.intro') }}</p>
    </div>
    
    <div class="values-grid stagger-children" data-animation="fade-up">
      <div class="value-item" v-for="(value, index) in values" :key="index">
        <h4>{{ value.title }}</h4>
        <p>{{ value.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useNuxtApp } from '#app';

const { $t } = useNuxtApp();

const values = computed(() => [
  {
    title: $t('meetme.valuesSection.values.trust.title'),
    description: $t('meetme.valuesSection.values.trust.description')
  },
  {
    title: $t('meetme.valuesSection.values.care.title'),
    description: $t('meetme.valuesSection.values.care.description')
  },
  {
    title: $t('meetme.valuesSection.values.communication.title'),
    description: $t('meetme.valuesSection.values.communication.description')
  },
  {
    title: $t('meetme.valuesSection.values.knowledge.title'),
    description: $t('meetme.valuesSection.values.knowledge.description')
  },
  {
    title: $t('meetme.valuesSection.values.comfort.title'),
    description: $t('meetme.valuesSection.values.comfort.description')
  },
  {
    title: $t('meetme.valuesSection.values.community.title'),
    description: $t('meetme.valuesSection.values.community.description')
  }
]);
</script>

<style scoped>
.values-section {
  width: 100%;
  padding: 1rem 0;
}

.values-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  gap: 3rem;
}

.section-heading {
  font-size: 3.5rem;
  font-weight: 500;
  color: #ff3366;
  margin: 0;
  line-height: 1.1;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  flex-shrink: 0;
  width: 350px;
}

.values-intro {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
  max-width: 600px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: 0;
  width: 100%;
}

.value-item {
  background-color: #f8a0a0;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 140px;
  width: 100%;
}

.value-item:nth-child(odd) {
  background-color: #f8a0a0;
}

.value-item:nth-child(even) {
  background-color: #f8a0a0;
}

.value-item h4 {
  font-size: 1.2rem;
  margin: 0 0 0.8rem 0;
  font-weight: 600;
  color: #333;
  font-family: "Arial", sans-serif;
}

.value-item p {
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.4;
  color: #333;
}

@media (max-width: 1024px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 0;
    margin-right: 0;
    max-width: 100%;
  }
  
  .values-header {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .section-heading {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .values-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .section-heading {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
    font-size: 2.8rem;
  }
  
  .values-intro {
    text-align: center;
  }
  
  .value-item {
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    min-height: auto;
    padding: 1.2rem;
  }
  
  .value-item h4 {
    text-align: center;
    font-size: 1.1rem;
  }
  
  .value-item p {
    text-align: center;
    font-size: 0.9rem;
  }
}
</style>
