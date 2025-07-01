// Animation utility functions

/**
 * Initializes scroll animations for elements with data-animation attributes
 */
export function initScrollAnimations() {
  // Elements to animate
  const animatedElements = document.querySelectorAll('[data-animation]');
  
  // Check if element is in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
      rect.bottom >= 0
    );
  };
  
  // Handle scroll animation
  const handleScrollAnimation = () => {
    animatedElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animated');
      }
    });
  };
  
  // Add event listeners
  window.addEventListener('scroll', handleScrollAnimation);
  window.addEventListener('resize', handleScrollAnimation);
  
  // Initial check
  handleScrollAnimation();
}
