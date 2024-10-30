document.addEventListener('DOMContentLoaded', () =>{
function initializeNavbar() {
    
    
    //TRANFORMING THE HAMBURGER BUTTON INTO AN X
 const toggler = document.getElementById('custom-toggler');
 const navbarContent = document.getElementById('navbar-content');
//  const navbarContent = document.querySelector('navbar-collapse');
 
 toggler.addEventListener('click', () => {
   toggler.classList.toggle('active');
   navbarContent.classList.toggle('show');
 });
 //Clicking outside the NavBar makes navbar collapse to close
//  toggler.addEventListener('click', (event) => {
//   event.stopPropagation(); // Prevents the click event from bubbling up to the window
//   toggler.classList.toggle('active');
//   navbarContent.classList.toggle('show');
// });


// Collapse the navbar when clicking outside of it
window.addEventListener('click', (event) => {
  // Check if the clicked element is outside the navbar and the toggler
  if (!navbarContent.contains(event.target) && !toggler.contains(event.target)) {
      navbarContent.classList.remove('show');
      toggler.classList.remove('active');
  }
});
};
 initializeNavbar()
});


