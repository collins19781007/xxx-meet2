var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

   y = document.querySelector(".nav-menu");
  function slide(){
    y.classList.toggle("slide");
  };

  
  