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


// Function to lazy-load videos
const slowLoadVideo = () => {
  const videoElements = document.querySelectorAll('.watoto-video');
  const placeholder = document.querySelector('.video-placeholder');
  const fallbackImage = document.querySelector('.video-fallback');
  // const videoText = document.querySelector('.video-text');

  for (let i = 0; i < videoElements.length; i++) {
    const media = videoElements[i];
    const src = media.getAttribute('data-src');

    if (src && isElementInViewport(media)) {
      let isMediaLoaded = false; // Track if the video loads in time
      
      // Set a timeout to handle slow loading or slow connections
      const timeout = setTimeout(() => {
        if (!isMediaLoaded) {
          console.log(`Using fallback for slow video load: ${src}`);
          fallbackImage.style.opacity ='1';
          media.parentNode.replaceChild(fallbackImage.cloneNode(true), media);  //I DONT UNDERSTAND THIS ATLLA
        }
      }, 4000); // Timeout duration (4 seconds)

      // Load the video
      media.src = src; // Set the video source
      media.addEventListener('loadeddata', () => {
      clearTimeout(timeout); // Cancel fallback logic if video loads
      isMediaLoaded = true;
      placeholder.style.opacity = '0'; // Hide placeholder
      // media.classList.remove('video-placeholder'); // Remove placeholder class
      media.classList.add('finished-loading'); // Add fade-in transition
       media.style.opacity = '1'; // Ensure video is visible
        console.log(`Video loaded successfully: ${src}`);
      });
    }
  }
};



// Add scroll and resize listeners for images and videos
window.addEventListener('scroll', slowLoadImages);
window.addEventListener('resize', slowLoadImages);
window.addEventListener('load', slowLoadImages);

window.addEventListener('scroll', slowLoadVideo);
window.addEventListener('resize', slowLoadVideo);
window.addEventListener('load', slowLoadVideo);










