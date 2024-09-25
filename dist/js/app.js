const swiper = new Swiper('.clients__slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.clients__next',
      prevEl: '.clients__prev',
    },
  });

// Select all slider containers
const sliders = document.querySelectorAll('.category__slider');

sliders.forEach((slider, index) => {
  // Generate unique navigation button classes for each slider
  const prevButton = slider.closest('.category').querySelector('.category__action-prev');
  const nextButton = slider.closest('.category').querySelector('.category__action-next');

  // Initialize Swiper for each slider instance
  new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 30,
    initialSlide: 1,
    navigation: {
      prevEl: prevButton,
      nextEl: nextButton,
    },
  });
});

  const swiper3 = new Swiper('.category__img-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      prevEl: '.img-prev',
      nextEl: '.img-next',
    },
  });