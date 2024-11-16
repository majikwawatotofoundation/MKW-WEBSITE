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
  //ADJUST TO MAKE CLICK OUTSIDE SEACH INPUT ALSO CLOSES IT --CHANGE AND UNDERSTAND IF PART
  if (!searchButton.contains(event.target) && !searchInput.contains(event.target) && !closeButton.contains(event.target) ) {
    searchContainer.classList.remove('active');
    searchInput.classList.remove('show');
    closeButton.classList.remove('show');
  }
  

});

// OPENING AND CLOSING THE SEARCH INPUT AND CLOSE BUTTON
const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-btn');
const closeButton = document.querySelector ('.close-btn');

searchButton.addEventListener('click', () =>{
  searchContainer.classList.toggle('active');
  searchInput.classList.toggle('show');
  closeButton.classList.toggle('show');
});

closeButton.addEventListener('click', function () {
  searchContainer.classList.remove('active');
  searchInput.classList.remove('show');
  closeButton.classList.remove('show');

});
//BACK TO TOP BUTTON
 // Add this to your JavaScript file or inside a <script> tag
 const backToTopButton = document.getElementById('back-to-top');
 

 
 // Scroll to the top when the button is clicked
 backToTopButton.addEventListener('click', function() {
   window.scrollTo({ top: 0, behavior: 'smooth' });
 });

};

 initializeNavbar()
});



