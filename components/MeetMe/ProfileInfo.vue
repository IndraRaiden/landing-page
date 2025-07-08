<template>
  <div class="profile-info">
    <p class="subtitle" data-animation="text-gradient">Olivia Matheson</p>
    
    <p data-animation="blur-in" class="delay-100">I'm Olivia Matheson, a Canadian-born, Sayulita-based AMPI-certified agent with a heart for helping people feel at home — literally.</p>
    
    <p data-animation="slide-up" class="delay-200">My journey began in journalism and luxury hospitality, where I learned to listen deeply, care intuitively, and notice every detail. Today, I bring that same attention and calm confidence to real estate, helping clients navigate each step with clarity and trust.</p>
    
    <p data-animation="scale-in" class="delay-300">Whether you're buying your dream beach home or listing a legacy property, my goal is to create an experience that feels thoughtful, smooth, and truly yours.</p>
    
    <p data-animation="rotate-in" class="delay-400">Outside of real estate, I love the jungle trails, hidden coves, and artisan markets that make this town so special — and I bring that same love of place to every client I work with.</p>
    
    <p data-animation="text-underline" data-text-animation="true" class="delay-500">Let's connect — and find the life you're dreaming of.</p>
  </div>
</template>

<style scoped>
.profile-info {
  width: 100%;
  line-height: 1.7;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  padding-top: 6rem; /* Increased padding from 3rem to 6rem */
}

.subtitle {
  font-size: 1.8rem;
  margin-bottom: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  font-family: "Times New Roman", Times, serif;
  color: var(--accent-magenta-dark);
  background: linear-gradient(90deg, var(--accent-magenta-dark), var(--accent-orange));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Animation delay classes */
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
</style>
