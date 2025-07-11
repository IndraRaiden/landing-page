// Animation utility functions

/**
 * Initializes scroll animations for elements with data-animation attributes
 * Simplified version with only essential animations
 */
export function initScrollAnimations() {
  // Elements to animate
  const animatedElements = document.querySelectorAll('[data-animation]');
  
  // Check if element is in viewport with offset option
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    // Use a threshold of 80% to trigger animation before element is fully in view
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };
  
  // Handle scroll animation with animation type
  const handleScrollAnimation = () => {
    animatedElements.forEach(element => {
      if (isInViewport(element)) {
        // Add the animated class which triggers the animation
        element.classList.add('animated');
      }
    });
  };
  
  // Add event listeners with throttling to improve performance
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        handleScrollAnimation();
        scrollTimeout = null;
      }, 100);
    }
  });
  
  window.addEventListener('resize', handleScrollAnimation);
  
  // Initial check
  setTimeout(() => {
    handleScrollAnimation();
  }, 200);
}
