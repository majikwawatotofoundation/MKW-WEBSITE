 document.addEventListener('DOMContentLoaded', function () {
    const heroSwiper= new Swiper('.hero-swiper', {
      loop: true,
      parallax: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.hero-button-next',
        prevEl: '.hero-button-prev',
      },
    });
    // Initialize Swiper
   // Initialize Swiper
    const portfolioSwiper = new Swiper(".portfolio-swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".portfolio-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".portfolio-button-next",
        prevEl: ".portfolio-button-prev",
      },
      loop: true,
     
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }
    });
    const impactSwiper = new Swiper(".impact-swiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".impact-pagination",
        clickable: true,
        bulletClass: 'impact-pagination-bullet',
        bulletActiveClass: 'impact-pagination-bullet-active',
      },
      navigation: {
        nextEl: ".impact-button-next",
        prevEl: ".impact-button-prev",
      },
      breakpoints: {
        992: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        100: { slidesPerView: 2, spaceBetween: 8 }
      }
    });
    new Swiper(".outreach-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".outreach-pagination",
      clickable: true,
      bulletClass: 'outreach-pagination-bullet',
      bulletActiveClass: 'outreach-pagination-bullet-active',
    },
    navigation: {
      nextEl: ".outreach-button-next",
      prevEl: ".outreach-button-prev",
    },
    breakpoints: {
       992: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        100: { slidesPerView: 2, spaceBetween: 8 }
    }
  });


  });


