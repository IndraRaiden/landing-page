<template>
  <div class="profile-info">
    <p class="subtitle" data-animation="text-gradient">{{ $t('meetme.profileInfo.name') }}</p>
    
    <p data-animation="blur-in" class="delay-100">{{ $t('meetme.profileInfo.intro') }}</p>
    
    <p data-animation="slide-up" class="delay-200">{{ $t('meetme.profileInfo.background') }}</p>
    
    <p data-animation="scale-in" class="delay-300">{{ $t('meetme.profileInfo.approach') }}</p>
    
    <p data-animation="rotate-in" class="delay-400">{{ $t('meetme.profileInfo.personal') }}</p>
    
    <p data-animation="text-underline" data-text-animation="true" class="delay-500">{{ $t('meetme.profileInfo.callToAction') }}</p>
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
