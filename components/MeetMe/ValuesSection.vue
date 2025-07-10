<template>
  <div class="values-section" data-animation="slide-up">
    <div class="values-header">
      <h3 class="section-heading">Values behind<br>my work</h3>
      <p data-animation="blur-in" class="values-intro">Every client, every home, and every journey is unique — but the way I show up remains constant. My work is guided by a mix of professionalism, care, and a genuine love for this community.</p>
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
const values = [
  {
    title: 'Trust & Integrity',
    description: 'As an AMPI-certified agent, my clients know they can count on me — always.'
  },
  {
    title: 'Intuitive, Heartfelt Care',
    description: "I don't just check boxes — I listen deeply, understand your needs, and support you with genuine care."
  },
  {
    title: 'Discretion & Clear Communication',
    description: "You'll always know where we stand. Transparent, honest, and respectful of your privacy."
  },
  {
    title: 'Local Knowledge, Global Mindset',
    description: "Fluent in Spanish, deeply connected to Sayulita, and tuned into what life here truly means."
  },
  {
    title: 'Ease, Comfort & Connection',
    description: "I aim to make this process feel like a natural, exciting next step - not a stressful transaction."
  },
  {
    title: 'Rooted in Community',
    description: "I believe in supporting local businesses, culture, and people — because that's what makes this place magic."
  }
];
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
}

.value-item {
  background-color: #f8a0a0;
  border-radius: 10px;
  padding: 1.75rem;
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 160px;
}

.value-item:nth-child(odd) {
  background-color: #f8a0a0;
}

.value-item:nth-child(even) {
  background-color: #f8a0a0;
}

.value-item h4 {
  font-size: 1.35rem;
  margin: 0 0 1rem 0;
  font-weight: 600;
  color: #333;
  font-family: "Arial", sans-serif;
}

.value-item p {
  font-size: 1.1rem;
  margin: 0;
  line-height: 1.5;
  color: #333;
}

@media (max-width: 1024px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
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
  }
  
  .section-heading {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}
</style>
