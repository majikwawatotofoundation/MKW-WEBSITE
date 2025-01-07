// document.addEventListener('DOMContentLoaded', ()=>{
    
//     function lazymedia(){
//         const videoElements = document.querySelectorAll('.watoto-video');
//         const imageElements = document.querySelectorAll('.lazy-observe');
//         const observer = new IntersectionObserver ((entries,observer){

//         }
//         // for(let i= 0; i < entries.length; i++){
//         //    const entry = entries[i];
//         //    if (entry.isIntersecting) {

//         //    }
//         // }
//         );
//         for(let i= 0; i < imageElements.length; i++){
//             observer.observe(imageElements[i]);
//         }
    
//     }
//     lazymedia();
// });








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
  
// Function to lazy-load videos
const slowLoadVideo = () => {
    // const videoElements = document.querySelectorAll('.watoto-video');
    
    // const videoText = document.querySelector('.video-text');
  
    for (let i = 0; i < videoElements.length; i++) {
      const media = videoElements[i];
      const src = media.getAttribute('data-src');
      const placeholder = document.querySelector('.video-placeholder');
      const fallbackImage = document.querySelector('.video-fallback');
     
      if (src && isElementInViewport(media)) {
        media.src = src; 
        media.load(); // Start loading the video
     // Placeholder fades out after 2 seconds and lowers z-index
      setTimeout(() => {
        placeholder.style.zIndex = '0';
      }, 2000);
  
        media.addEventListener('canplaythrough', () =>  {
          media.classList.add('finished-loading'); // Add fade-in transition
          media.style.opacity = '1'; // Ensure video is visible
          fallbackImage.style.opacity ='0';
           console.log(`Video loaded successfully: ${src}`);
        }); 
        
      }else {
       // Show fallback image and keep placeholder visible if video is not ready
       fallbackImage.style.opacity = '1';
       console.log('Video not in viewport or missing src, showing fallback.');
      }
    };
  };
  // window.addEventListener('scroll', slowLoadVideo);
window.addEventListener('resize', slowLoadVideo);
window.addEventListener('load', slowLoadVideo);


