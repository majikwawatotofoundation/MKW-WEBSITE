

const isElementInViewarea = (el) => {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};// Function to lazy-load Bannerimages
const slowLoadBannerImages = () => {
    const banners = document.querySelectorAll('.slow-load');
    // const bannerPlaceholder = document.querySelector('.banner-placeholder');
  
    for (let i = 0; i < banners.length; i++) {
      const bannerWrapper = banners[i];
      const img = bannerWrapper.querySelector('img')
          
      if(img) {
        const src = img.getAttribute('data-src');
        
  
      if (src && isElementInViewport(bannerWrapper)) {
        // Preload image
        const tempImage = new Image();
        tempImage.src = src;
  
        tempImage.onload = () => {
          img.src = src; // Set real image source
          bannerWrapper.classList.remove('banner-placeholder'); // 
          // bannerPlaceholder.style.opacity ="0";
          img.classList.add('finished-loading'); // Add fade-in transition
        };
  
        tempImage.onerror = () => {
          console.error(`Failed to load image: ${src}`);
        };
      } else{
        console.warn('No image found insshimmer wrapper:', bannerWrapper)
      }
        
      }
    }
  };
  
  window.addEventListener('scroll', slowLoadBannerImages);
  window.addEventListener('resize', slowLoadBannerImages);
  window.addEventListener('load', slowLoadBannerImages);