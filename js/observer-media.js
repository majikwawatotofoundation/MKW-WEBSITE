
  document.addEventListener('DOMContentLoaded', ()=>{
    function lazyLoadImages(){
    const lazyImages = document.querySelectorAll('.lazy-image');
    console.log(`Here are my lazy Images ${lazyImages}`);
    const observer = new IntersectionObserver((entries, observer) => {
    for(let i = 0 ; i < entries.length; i++){
        const entry = entries [i];
        if(entry.isIntersecting){
            const img = entry.target;
            const trueSrc = img.getAttribute('data-src');
            img.setAttribute('src', trueSrc);
            observer.unobserve(img);
        }
    }
    } , { threshold: 0.1 } );
    
    for(let i = 0 ; i < lazyImages.length; i++){
       
        observer.observe(lazyImages[i]);
     }

     loadVideo ()
    }lazyLoadImages();

    function loadVideo () {
        const videos = document.querySelectorAll('.watoto-video');
        
        for (let i = 0; i < videos.length ; i++){
            const video = videos [i];
             if (video){
             // Listen for the `canplaythrough` event to ensure the video is ready
             video.addEventListener('canplaythrough', () => {
        
            // Fade in the video
            video.style.opacity = '1';
        
          });
             }
        }
       
        
    } 
});


