// Utility function to check if an element is in the viewport
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Function to lazy-load images
const slowLoadImages = () => {
  const imageElements = document.querySelectorAll('.slow-load');

  for (let i = 0; i < imageElements.length; i++) {
    const shimmerWrapper = imageElements[i];
    const img = shimmerWrapper.querySelector('img')
        
    if(img) {
      const src = img.getAttribute('data-src');
      

    if (src && isElementInViewport(shimmerWrapper)) {
      // Preload image
      const tempImage = new Image();
      tempImage.src = src;

      tempImage.onload = () => {
        img.src = src; // Set real image source
        shimmerWrapper.classList.remove('shimmer'); // Remove shimmer
        img.classList.add('finished-loading'); // Add fade-in transition
      };

      tempImage.onerror = () => {
        console.error(`Failed to load image: ${src}`);
      };
    } else{
      console.warn('No image found insshimmer wrapper:', shimmerWrapper)
    }
      
    }
  }
};








// Add scroll and resize listeners for images and videos
window.addEventListener('scroll', slowLoadImages);
window.addEventListener('resize', slowLoadImages);
window.addEventListener('load', slowLoadImages);

// window.addEventListener('scroll', slowLoadVideo);
window.addEventListener('resize', slowLoadVideo);
window.addEventListener('load', slowLoadVideo);










