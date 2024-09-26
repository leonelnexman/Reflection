const swiper = new Swiper('.clients__slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.clients__next',
      prevEl: '.clients__prev',
    },
    breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 0,
      },
      962: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
  }
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
    breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 0,
      },
      962: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
  }
  });
});

  const swiper3 = new Swiper('.category__img-slider', {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      prevEl: '.img-prev',
      nextEl: '.img-next',
    },
  });

  const product = new Swiper('.product__img-slider', {
    slidesPerView: "auto",
    spaceBetween: 0,
    centeredSlides: true,
    initialSlide: 1,
    navigation: {
      prevEl: '.img-prev',
      nextEl: '.img-next',
    },
  });

  const catalog = new Swiper('.page-top__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      prevEl: '.catalog-prev',
      nextEl: '.catalog-next',
    },
  });

  document.querySelectorAll('.faq__top').forEach(top => {
    top.addEventListener('click', function() {
        const faqItem = this.closest('.faq__item');
        const faqContent = faqItem.querySelector('.faq__content');
        
        // Переключаем класс active у faq__item
        faqItem.classList.toggle('active');
        
        // Если элемент активен, задаем ему max-height
        if (faqItem.classList.contains('active')) {
            faqContent.style.maxHeight = faqContent.scrollHeight + 'px';
        } else {
            // Убираем max-height, если класс active удаляется
            faqContent.style.maxHeight = null;
        }
    });
});

function setupFilter(block) {
  const rangeInput = block.querySelectorAll(".range-input input"),
    priceInput = block.querySelectorAll(".price-input input"),
    range = block.querySelector(".slider .progress");
  let priceGap = 1000;

  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });
}

document.querySelector('.product__all').addEventListener('click', function() {
  const catalogItems = document.querySelectorAll('.catalog__item');
  
  // Показываем все элементы с классом .catalog__item
  catalogItems.forEach(item => {
      item.style.display = 'block';
  });
  
  // Прячем кнопку после нажатия
  this.style.display = 'none';
});

document.querySelector('.catalog__filter-btn-open').addEventListener('click', function() {
  const filterForm = document.querySelector('.catalog__form');
  const isActive = this.classList.contains('active');

  // Добавляем/удаляем класс active
  this.classList.toggle('active');

  if (isActive) {
      // Если активен, сворачиваем форму
      filterForm.style.maxHeight = '0';
  } else {
      // Если не активен, разворачиваем форму и автоматически рассчитываем высоту
      filterForm.style.maxHeight = filterForm.scrollHeight + 'px';
  }
});