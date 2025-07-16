<template>
  <div class="profile-info">
    <p data-animation="blur-in" class="bio-paragraph delay-100">
      I'm Olivia Matheson, a Canadian-born, Sayulita-based AMPI-certified agent with a heart for helping people feel at home — literally.
    </p>
    
    <p data-animation="slide-up" class="bio-paragraph delay-200">
      My journey began in journalism and luxury hospitality, where I learned to listen deeply, care intuitively, and notice every detail.
    </p>
    
    <p data-animation="scale-in" class="bio-paragraph delay-300">
      Today, I bring that same attention and calm confidence to real estate, helping clients navigate each step with clarity and trust.
    </p>
    
    <p data-animation="rotate-in" class="bio-paragraph delay-400">
      Whether you're buying your dream beach home or listing a legacy property, my goal is to create an experience that feels thoughtful, smooth, and truly yours.
    </p>
    
    <p data-animation="fade-in" class="bio-paragraph delay-500">
      Outside of real estate, I love the jungle trails, hidden coves, and artisan markets that make this town so special — and I bring that same love of place to every client I work with.
    </p>
  </div>
</template>

<style scoped>
.profile-info {
  width: 100%;
  line-height: 1.7;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  padding-top: 0;
  max-width: 650px;
  text-align: left;
}

.bio-paragraph {
  margin-bottom: 1.2rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  font-family: "Times New Roman", Times, serif;
  text-align: left;
}

.bio-paragraph:last-child {
  margin-bottom: 0;
}

/* Animation delay classes */
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }

@media (max-width: 768px) {
  .profile-info {
    max-width: 100%;
    margin: 0 auto;
  }
  
  .bio-paragraph {
    text-align: center;
    font-size: 0.95rem;
  }
}
</style>
