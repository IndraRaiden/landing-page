<template>
  <div class="profile-image-container" data-animation="fade-right">
    <div class="featured-property">
      <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070&auto=format&fit=crop" alt="Featured Sayulita Property" class="featured-image" />
      <a href="https://lunamarestates.com/idx/search/?SavedSearch=20250605183630259633000000&Limit=10&SubdivisionName=Sayulita" target="_blank" class="portfolio-button">View Portfolio</a>
    </div>
  </div>
</template>

<style scoped>


.featured-property {
  position: relative;
  margin-top: 1.5rem;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--accent-yellow);
}

.featured-image {
  width: 100%;
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
  background: linear-gradient(90deg, var(--accent-magenta) 0%, var(--accent-orange) 100%);
  color: white;
  padding: 1rem;
  font-size: 0.95rem;
  font-family: "Helvetica Neue", Arial, sans-serif;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.2);
}

.portfolio-button:hover {
  background: linear-gradient(90deg, var(--accent-orange) 0%, var(--accent-yellow) 100%);
  color: #333;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .profile-image-container {
    text-align: center;
    max-width: 320px;
    margin: 0 auto;
  }
  
  .profile-image-container img {
    max-width: 280px;
    margin: 0 auto;
  }
}
</style>
