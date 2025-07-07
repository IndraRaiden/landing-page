<template>
  <!-- Large lateral background image -->
  <div class="meetme-container">
    <div class="lateral-image" data-animation="fade-in">
      <img src="https://images.unsplash.com/photo-1506749841726-3df2e72b9564?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Luxury Sayulita Beachfront" />
    </div>
    
  <section class="meetme-section">
    <div class="left" data-animation="fade-right">
      <h2 class="title" data-animation="text-underline" data-text-animation="true">Meet Olivia</h2>
      
      <!-- Left side image and content -->
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
    </div>
    <div class="right">
      <div class="meetme-content">
        <div class="profile-image" data-animation="fade-right">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Olivia Matheson - Real Estate Agent" class="main-profile-image" />
          <div class="featured-property">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070&auto=format&fit=crop" alt="Featured Sayulita Property" class="featured-image" />
            <a href="https://lunamarestates.com/idx/search/?SavedSearch=20250605183630259633000000&Limit=10&SubdivisionName=Sayulita" target="_blank" class="portfolio-button">View Portfolio</a>
          </div>
        </div>
        <div class="profile-info">
          <p class="subtitle" data-animation="text-gradient">Olivia Matheson</p>
          
          <p data-animation="blur-in" class="delay-100">I'm Olivia Matheson, a Canadian-born, Sayulita-based AMPI-certified agent with a heart for helping people feel at home — literally.</p>
          
          <p data-animation="slide-up" class="delay-200">My journey began in journalism and luxury hospitality, where I learned to listen deeply, care intuitively, and notice every detail. Today, I bring that same attention and calm confidence to real estate, helping clients navigate each step with clarity and trust.</p>
          
          <p data-animation="scale-in" class="delay-300">Whether you're buying your dream beach home or listing a legacy property, my goal is to create an experience that feels thoughtful, smooth, and truly yours.</p>
          
          <p data-animation="rotate-in" class="delay-400">Outside of real estate, I love the jungle trails, hidden coves, and artisan markets that make this town so special — and I bring that same love of place to every client I work with.</p>
          
          <p data-animation="text-underline" data-text-animation="true" class="delay-500">Let's connect — and find the life you're dreaming of.</p>
        </div>
      </div>
    </div>
    <div class="values-container">
      <div class="values-section" data-animation="slide-up">
        <h3 class="section-heading" data-animation="text-underline">The Values Behind My Work</h3>
        <p data-animation="blur-in" class="delay-100">Every client, every home, and every journey is unique — but the way I show up remains constant. My work is guided by a mix of professionalism, care, and a genuine love for this community.</p>
        
        <div class="values-grid stagger-children" data-animation="fade-up">
          <div class="value-item">
            <div class="value-image">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" alt="Trust and Integrity" />
            </div>
            <h4 data-animation="text-gradient" style="font-family: 'Times New Roman', Times, serif;">Trust & Integrity</h4>
            <p>As an AMPI-certified agent, my clients know they can count on me — always.</p>
          </div>
          
          <div class="value-item white-background">
            <h4 data-animation="text-gradient" style="font-family: 'Times New Roman', Times, serif;">Calm, Grounded Guidance</h4>
            <p>I approach every step with clarity, patience, and calm professionalism, no matter how big or small the decision.</p>
          </div>
          
          <div class="value-item">
            <h4 data-animation="text-gradient" style="font-family: 'Times New Roman', Times, serif;">Intuitive, Heartfelt Care</h4>
            <p>I don't just check boxes — I listen deeply, understand your needs, and support you with genuine care.</p>
          </div>
          
          <div class="value-item">
            <h4 data-animation="text-gradient" style="font-family: 'Times New Roman', Times, serif;">Obsessed with Details</h4>
            <p>From the right property to the perfect closing process, I focus on details that make your experience seamless.</p>
          </div>
          
          <div class="value-item">
            <h4 data-animation="text-gradient" style="font-family: 'Times New Roman', Times, serif;">Discretion & Clear Communication</h4>
            <p>You'll always know where we stand. Transparent, honest, and respectful of your privacy.</p>
          </div>
          
          <div class="value-item">
            <h4 data-animation="text-gradient" style="font-family: 'Times New Roman', Times, serif;">Local Knowledge, Global Mindset</h4>
            <p>Fluent in Spanish, deeply connected to Sayulita, and tuned into what life here truly means.</p>
          </div>
          
          <div class="value-item">
            <h4 data-animation="text-gradient" style="font-family: 'Times New Roman', Times, serif;">Ease, Comfort & Connection</h4>
            <p>I aim to make this process feel like a natural, exciting next step — not a stressful transaction.</p>
          </div>
          
          
          <div class="value-item white-background">
            <h4 data-animation="text-gradient" style="font-family: 'Times New Roman', Times, serif;">Adaptable, Always</h4>
            <p>My diverse background allows me to pivot, adapt, and meet your needs — however unique they are.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for static component
</script>

<style scoped>
.meetme-container {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  box-sizing: border-box;
}

.lateral-image {
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 30%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 0% 100%);
  max-width: 100%;
  box-sizing: border-box;
}

.lateral-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.2);
  max-width: 100%;
}

.meetme-section {
  display: grid;
  grid-template-columns: 220px 1fr 1fr;
  gap: 3rem;
  width: 100%;
  max-width: 100%;
  margin: 0;
  /* Increased vertical padding to give the component more breathing room */
  padding: 6rem 5%;
  background-color: #FEE8CB;
  color: #444;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  box-sizing: border-box;
}

.title {
  font-size: 1.6rem;
  font-weight: 500;
  color: #333;
  margin: 0 0 2rem 0;
  letter-spacing: 0.03em;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
  font-family: "Times New Roman", Times, serif;
}

.title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: var(--color-yellow);
  transition: width 0.6s ease;
}

.title:hover::after {
  width: 100%;
}

.right {
  max-width: 500px;
  margin-left: auto;
  padding-right: 2%;
  width: 100%;
  box-sizing: border-box;
}

.values-container {
  max-width: 500px;
  width: 100%;
  box-sizing: border-box;
  padding-right: 5%;
  margin-top: 0;
  position: relative;
  z-index: 2;
}

.meetme-content {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 3rem;
  max-width: 700px;
  width: 100%;
  line-height: 1.7;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  box-sizing: border-box;
}

.profile-image .main-profile-image {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  max-width: 100%;
}

.featured-property {
  position: relative;
  margin-top: 1.5rem;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.featured-image {
  width: 100%;
  /* Increase height of featured property image */
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.featured-property:hover .featured-image {
  transform: scale(1.05);
}

.portfolio-button {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(235, 91, 0, 0.85);
  color: white;
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  font-family: "Helvetica Neue", Arial, sans-serif;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.portfolio-button:hover {
  background-color: var(--color-magenta);
  color: white;
  font-weight: 500;
}

.left-showcase {
  position: relative;
  margin-top: 1rem;
}

.left-image {
  width: 100%;
  /* Slightly taller showcase image for better visual balance */
  height: 420px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  max-width: 100%;
}

.experience-badge, .certification-badge {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  padding: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  max-width: calc(100% - 20px);
  box-sizing: border-box;
}

.experience-badge {
  top: 20px;
  right: -20px;
}

.certification-badge {
  bottom: 20px;
  left: -20px;
}

.number {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
}

.text {
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.3;
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

.subtitle {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
  font-family: "Times New Roman", Times, serif;
}

.subtitle::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #666;
  transition: width 0.6s ease;
}

.subtitle:hover::after {
  width: 100%;
}

.profile-info p {
  margin-bottom: 1.5rem;
}

.section-heading {
  font-size: 1.35rem;
  margin: 2rem 0 0.75rem;
  font-weight: 500;
  color: #333;
  letter-spacing: 0.02em;
  position: relative;
  display: inline-block;
  padding-bottom: 6px;
  font-family: "Times New Roman", Times, serif;
}

.section-heading::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: var(--color-magenta);
  transition: width 0.6s ease;
}

.section-heading:hover::after {
  width: 100%;
}

.values-section {
  margin-top: 3rem;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
  box-sizing: border-box;
}

.value-item {
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
}

.value-item:hover {
  transform: translateY(-5px);
}

.white-background {
  background-color: white;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.value-item h4 {
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
  color: #333;
  letter-spacing: 0.02em;
}

.value-item p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .meetme-section {
    grid-template-columns: 180px 1fr 1fr;
    gap: 2rem;
    padding: 0 2%;
  }

  .right {
    padding-right: 0;
  }
  
  .values-container {
    padding-right: 2%;
  }
  
  .lateral-image {
  display: none;
    width: 25%;
  }
}

@media (max-width: 768px) {
  .meetme-section {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }
  
  .meetme-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .right {
    max-width: 100%;
  }
  
  .values-container {
    max-width: 100%;
    padding: 0;
    margin-top: 2rem;
  }
  
  .profile-image {
    text-align: center;
  }
  
  .profile-image img {
    max-width: 220px;
    margin: 0 auto;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .lateral-image {
  display: none;
    display: none; /* Hide on mobile */
  }
}
.meetme-container::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(120deg,
    rgba(254, 232, 203, 0.6) 0%,   /* #FEE8CB */
    rgba(248, 184, 135, 0.6) 40%,  /* #F8B887 */
    rgba(242, 150, 153, 0.6) 70%,  /* #F29699 */
    rgba(224, 174, 208, 0.6) 100%  /* #E0AED0 */);
  mix-blend-mode: multiply;
  z-index: 0;
}

/* raise main content above overlay */
.meetme-container > * {
  position: relative;
  z-index: 2;
}
</style>
