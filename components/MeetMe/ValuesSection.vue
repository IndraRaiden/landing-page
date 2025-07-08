<template>
  <div class="values-section" data-animation="slide-up">
    <h3 class="section-heading" data-animation="text-underline">The Values Behind My Work</h3>
    <p data-animation="blur-in" class="delay-100">Every client, every home, and every journey is unique — but the way I show up remains constant. My work is guided by a mix of professionalism, care, and a genuine love for this community.</p>
    
    <div class="values-grid stagger-children" data-animation="fade-up">
      <div class="value-item" v-for="(value, index) in values" :key="index" :class="{ 'white-background': value.whiteBackground }">
        <div class="value-image" v-if="value.image">
          <img :src="value.image" :alt="value.title" />
        </div>
        <h4 data-animation="text-gradient" style="font-family: 'Times New Roman', Times, serif;">{{ value.title }}</h4>
        <p>{{ value.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const values = [
  {
    title: 'Trust & Integrity',
    description: 'As an AMPI-certified agent, my clients know they can count on me - always.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
    whiteBackground: false
  },
  {
    title: 'Calm, Grounded Guidance',
    description: 'I approach every step with clarity, patience, and calm professionalism, no matter how big or small the decision.',
    whiteBackground: true
  },
  {
    title: 'Intuitive, Heartfelt Care',
    description: "I don't just check boxes - I listen deeply, understand your needs, and support you with genuine care.",
    whiteBackground: false
  },
  {
    title: 'Obsessed with Details',
    description: 'From the right property to the perfect closing process, I focus on details that make your experience seamless.',
    whiteBackground: false
  },
  {
    title: 'Discretion & Clear Communication',
    description: "You'll always know where we stand. Transparent, honest, and respectful of your privacy.",
    whiteBackground: false
  },
  {
    title: 'Local Knowledge, Global Mindset',
    description: 'Fluent in Spanish, deeply connected to Sayulita, and tuned into what life here truly means.',
    whiteBackground: false
  },
  {
    title: 'Ease, Comfort & Connection',
    description: 'I aim to make this process feel like a natural, exciting next step - not a stressful transaction.',
    whiteBackground: false
  },
  {
    title: 'Adaptable, Always',
    description: 'My diverse background allows me to pivot, adapt, and meet your needs - however unique they are.',
    whiteBackground: true
  }
];
</script>

<style scoped>
.section-heading {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--accent-magenta-dark);
  margin: 0 0 1.5rem 0;
  letter-spacing: 0.02em;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  font-family: "Times New Roman", Times, serif;
}

.section-heading::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-yellow) 0%, var(--accent-orange) 50%, var(--accent-magenta) 100%);
  transition: transform 0.6s ease;
  transform-origin: left;
  transform: scaleX(0.7);
}

.section-heading:hover::after {
  transform: scaleX(1);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.value-item {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 6px;
  padding: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.8);
  position: relative;
  overflow: hidden;
  height: 220px; /* Fixed height for all cards */
  display: flex;
  flex-direction: column;
}

.value-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.value-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-yellow) 0%, var(--accent-orange) 50%, var(--accent-magenta) 100%);
}

.white-background {
  background-color: rgba(255, 255, 255, 0.9);
}

.value-image {
  width: 100%;
  height: 120px;
  margin-bottom: 0.8rem;
  overflow: hidden;
  border-radius: 4px;
}

.value-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  max-width: 100%;
}

.value-item:hover .value-image img {
  transform: scale(1.1);
}

.value-item h4 {
  font-size: 1.1rem;
  margin: 0 0 0.8rem 0;
  font-weight: 600;
  color: var(--accent-magenta-dark);
  background: linear-gradient(90deg, var(--accent-magenta-dark), var(--accent-orange));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  height: 40px; /* Fixed height for titles */
  display: flex;
  align-items: center;
}

.value-item p {
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.stagger-children > * {
  animation-delay: calc(var(--i, 0) * 100ms);
}

.delay-100 { animation-delay: 100ms; }

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

  .section-heading::after {
    left: 50%;
    transform: translateX(-50%) scaleX(0.7);
  }

  .section-heading:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
}
</style>
