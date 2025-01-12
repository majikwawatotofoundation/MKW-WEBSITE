document.addEventListener('DOMContentLoaded', () => {
  const headerObserver = new IntersectionObserver((entries) => {
    const navbar = document.querySelector('.navbar');
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        // When the header logo is out of view, hide the navbar
        navbar.classList.add('absolute');
        navbar.classList.remove('fixed');
      } else {
        // When the header logo is in view, fix the navbar
        navbar.classList.add('fixed');
        navbar.classList.remove('absolute');
      }
    });
  }, {
    threshold: 0.01 // 1% visibility threshold
  });

  const headerLogo = document.querySelector('.watoto-logo');
  headerObserver.observe(headerLogo);


//ANIMATIONS
 // Create the Intersection Observer
 const observer = new IntersectionObserver((entries) => {
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    if (entry.isIntersecting) {
    //   entry.target.classList.add('scrolled'); // Add the animation class
    //   observer.unobserve(entry.target); // Stop observing once animated
    if(entry.target.classList.contains('slide-up')) {
      entry.target.classList.add('scrolled');
    }else if(entry.target.classList.contains('from-left')){
      entry.target.classList.add('slide-left');
    }else if(entry.target.classList.contains('from-right')){
      entry.target.classList.add('slide-right');
    }else if(entry.target.classList.contains('go-up')){
      entry.target.classList.add('fade-scale-up')
    }
    else if(entry.target.classList.contains('drop-up')){
      entry.target.classList.add('drop-up')
    }else if(entry.target.classList.contains('drop-down')){
      entry.target.classList.add('drop-down')
    }
    observer.unobserve(entry.target);
    }
    
  }
});

// Select all elements you want to animate
const elementsToAnimate = document.querySelectorAll('.animated');

// Observe each element using a for loop
for (let i = 0; i < elementsToAnimate.length; i++) {
  observer.observe(elementsToAnimate[i]);
  console.log(`Observing element at index ${i}`); // Debugging: shows the index being observed
}



});



// document.addEventListener('DOMContentLoaded', () =>{
//     const headerObserver = new IntersectionObserver((entries, headerObserver)=>{
//         const navbar = document.querySelector('.navbar');
//         for (let i = 0 ; i < entries.length; i++ ){
//             const entry = entries[i];
//             if (!entry.isIntersecting){
//                 // entry.target = header;
//               navbar.style.display = 'none';
//              } else if (entry.isIntersecting) {
//                 navbar.style.display = 'block';
//              } 
//         }
     
    
     
//     }, {
//         // threshold: 0.01 // 1% visibility threshold
//       });
//     const header = document.getElementById('header-contents');
//     headerObserver.observe(header);
//     console.log(`Here is the header ${header}`);
// } );