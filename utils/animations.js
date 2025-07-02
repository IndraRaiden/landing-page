// Animation utility functions

/**
 * Initializes scroll animations for elements with data-animation attributes
 * Enhanced with more animation types and options
 */
export function initScrollAnimations() {
  // Elements to animate
  const animatedElements = document.querySelectorAll('[data-animation]');
  
  // Check if element is in viewport with offset option
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    // Use a threshold of 75% (0.75) to trigger animation before element is fully in view
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
      rect.bottom >= 0
    );
  };
  
  // Handle scroll animation with animation type
  const handleScrollAnimation = () => {
    animatedElements.forEach(element => {
      if (isInViewport(element)) {
        // Add the animated class which triggers the animation
        element.classList.add('animated');
        
        // Get animation type from data attribute
        const animationType = element.getAttribute('data-animation');
        if (animationType) {
          element.classList.add(animationType);
        }
        
        // Apply any text animation for letter-by-letter effects
        if (element.hasAttribute('data-text-animation') && !element.classList.contains('text-animated')) {
          animateTextContents(element);
          element.classList.add('text-animated');
        }
      }
    });
  };
  
  // Function to animate text contents character by character
  const animateTextContents = (element) => {
    const text = element.textContent;
    element.textContent = '';
    
    // Split text into spans for individual character animation
    // Preserve spacing by using a different approach for space characters
    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i);
      
      // Check if the character is a space
      if (char === ' ') {
        // For spaces, just insert a space directly
        element.appendChild(document.createTextNode(' '));
      } else {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${i * 0.03}s`;
        span.classList.add('animated-char');
        element.appendChild(span);
      }
    }
  };
  
  // Add event listeners
  window.addEventListener('scroll', handleScrollAnimation);
  window.addEventListener('resize', handleScrollAnimation);
  
  // Initial check
  setTimeout(() => {
    handleScrollAnimation();
  }, 200);
}
