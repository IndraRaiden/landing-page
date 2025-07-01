<template>
  <section class="meetme-section">
    <div class="left">
      <h2 class="title">Meet Me</h2>
    </div>
    <div class="right">
      <div class="meetme-content">
        <div class="profile-image">
          <img src="https://picsum.photos/400" alt="Olivia's profile" />
        </div>
        <div class="profile-info">
          <p class="subtitle">Olivia Matheson</p>
          
          <p>I'm Olivia Matheson, a Canadian-born, Sayulita-based AMPI-certified agent with a heart for helping people feel at home — literally.</p>
          
          <p>My journey began in journalism and luxury hospitality, where I learned to listen deeply, care intuitively, and notice every detail. Today, I bring that same attention and calm confidence to real estate, helping clients navigate each step with clarity and trust.</p>
          
          <p>Whether you're buying your dream beach home or listing a legacy property, my goal is to create an experience that feels thoughtful, smooth, and truly yours.</p>
          
          <p>Outside of real estate, I love the jungle trails, hidden coves, and artisan markets that make this town so special — and I bring that same love of place to every client I work with.</p>
          
          <p>Let's connect — and find the life you're dreaming of.</p>
          
          <div class="values-section">
            <h3 class="section-heading">The Values Behind My Work</h3>
            <p>Every client, every home, and every journey is unique — but the way I show up remains constant. My work is guided by a mix of professionalism, care, and a genuine love for this community.</p>
            
            <div class="values-grid">
              <div class="value-item">
                <h4>Trust & Integrity</h4>
                <p>As an AMPI-certified agent, my clients know they can count on me — always.</p>
              </div>
              
              <div class="value-item">
                <h4>Calm, Grounded Guidance</h4>
                <p>I approach every step with clarity, patience, and calm professionalism, no matter how big or small the decision.</p>
              </div>
              
              <div class="value-item">
                <h4>Intuitive, Heartfelt Care</h4>
                <p>I don't just check boxes — I listen deeply, understand your needs, and support you with genuine care.</p>
              </div>
              
              <div class="value-item">
                <h4>Obsessed with Details</h4>
                <p>From the right property to the perfect closing process, I focus on details that make your experience seamless.</p>
              </div>
              
              <div class="value-item">
                <h4>Discretion & Clear Communication</h4>
                <p>You'll always know where we stand. Transparent, honest, and respectful of your privacy.</p>
              </div>
              
              <div class="value-item">
                <h4>Local Knowledge, Global Mindset</h4>
                <p>Fluent in Spanish, deeply connected to Sayulita, and tuned into what life here truly means.</p>
              </div>
              
              <div class="value-item">
                <h4>Ease, Comfort & Connection</h4>
                <p>I aim to make this process feel like a natural, exciting next step — not a stressful transaction.</p>
              </div>
              
              <div class="value-item">
                <h4>Rooted in Community</h4>
                <p>I believe in supporting local businesses, culture, and people — because that's what makes this place magic.</p>
              </div>
              
              <div class="value-item">
                <h4>Adaptable, Always</h4>
                <p>My diverse background allows me to pivot, adapt, and meet your needs — however unique they are.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script logic needed for static component
</script>

<style scoped>
.meetme-section {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 7rem;
  max-width: 100%;
  margin: 5rem 0;
  padding: 0 5%;
  font-family: "Times New Roman", Times, serif;
  color: #444;
  justify-content: space-between;
}

.title {
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
  margin: 0;
  letter-spacing: 0.03em;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
}

.title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #333;
  transition: width 0.6s ease;
}

.title:hover::after {
  width: 100%;
}

.right {
  max-width: 800px;
  margin-left: auto;
  padding-right: 5%;
}

.meetme-content {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 3rem;
  max-width: 700px;
  line-height: 1.7;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
}

.profile-image img {
  width: 100%;
  height: auto;
  display: block;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
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
  font-size: 1.15rem;
  margin: 2rem 0 0.75rem;
  font-weight: 500;
  color: #333;
  letter-spacing: 0.02em;
  position: relative;
  display: inline-block;
  padding-bottom: 6px;
}

.section-heading::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #666;
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
}

.value-item {
  margin-bottom: 0.5rem;
}

.value-item h4 {
  font-size: 1rem;
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

@media (max-width: 768px) {
  .meetme-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .meetme-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .right {
    max-width: 100%;
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
}
</style>
