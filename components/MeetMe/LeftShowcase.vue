<template>
  <div class="left-showcase" data-animation="fade-up">
    <img src="https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=2069&auto=format&fit=crop" alt="Sayulita Beach View" class="left-image">
    <div class="experience-badge">
      <span class="number">10+</span>
      <span class="text">Years in Real Estate</span>
    </div>
    <div class="certification-badge">
      <span class="text">AMPI Certified</span>
    </div>
  </div>
</template>

<style scoped>
.left-showcase {
  position: relative;
  margin-top: 1.5rem;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--accent-yellow);
}

.left-image {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  max-width: 100%;
}

.experience-badge, .certification-badge {
  position: absolute;
  background: linear-gradient(135deg, var(--accent-yellow-light) 0%, var(--accent-orange-light) 100%);
  border-radius: 6px;
  padding: 0.8rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  max-width: calc(100% - 20px);
  box-sizing: border-box;
  border: 1px solid white;
  transition: transform 0.3s ease;
}

.experience-badge:hover, .certification-badge:hover {
  transform: translateY(-5px);
}

.experience-badge {
  top: 20px;
  right: -15px;
  z-index: 5;
}

.certification-badge {
  bottom: 20px;
  left: -15px;
  background: linear-gradient(135deg, var(--accent-magenta-light) 0%, var(--accent-pink-light) 100%);
  z-index: 5;
}

.number {
  font-size: 2rem;
  font-weight: bold;
  color: var(--accent-magenta-dark);
  text-shadow: 1px 1px 0 rgba(255,255,255,0.8);
}

.text {
  font-size: 0.85rem;
  text-align: center;
  line-height: 1.3;
  font-weight: 600;
  color: #333;
}
</style>
