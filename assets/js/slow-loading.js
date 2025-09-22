document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.querySelector('#preloader');
  if (preloader) preloader.remove();

  window.lazyLoadImages = function() {
    const images = document.querySelectorAll('.slow-load');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.classList.add('lazy-loaded');
          observer.unobserve(img);
        }
      });
    }, { threshold: 0.1 });

    images.forEach(img => observer.observe(img));
  };

  lazyLoadImages();
});
