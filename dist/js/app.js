// import { Fixed } from './components/header-fixed.js';
// import { Nav } from './components/navbar.js';
// import { Zoomed } from './components/zoomed-main.js';
// import { Footer } from './components/dropwodn-footer.js';

// import { SwiperInit } from './components/swiperinit.js';
// import { Tabs } from './components/tabs.js';
// import { TextVisible } from './components/text-visible.js';
// import { Accordion } from './components/accordion.js';
// import { Video } from './components/video.js';
// import { Table } from './components/table.js';


// import { Modal } from './components/modal.js';

// const fixedInstance = new Fixed();
// const NavInstance = new Nav();
// const zoomedInstance = new Zoomed();
// const FooterInstance = new Footer();
// const SwiperInstance = new SwiperInit();
// const TabsInstance = new Tabs();
// const TextVisibleInstance = new TextVisible();
// const AccordionInstance = new Accordion();
// const ModalInstance = new Modal();
// const VideoInstance = new Video();
// const TableInstance = new Table();

document.addEventListener("DOMContentLoaded", function() {
    var deliveryCountBtn = document.querySelector('.delivery-count');
    var pickupCountBtn = document.querySelector('.pickup-count');
    var informations = document.querySelector('.delivery__informations');

    if (deliveryCountBtn && pickupCountBtn && informations) {
        deliveryCountBtn.addEventListener('click', function() {
            deliveryCountBtn.classList.add('active');
            pickupCountBtn.classList.remove('active');
            informations.classList.remove('pickup');
        });

        pickupCountBtn.addEventListener('click', function() {
            pickupCountBtn.classList.add('active');
            deliveryCountBtn.classList.remove('active');
            informations.classList.add('pickup');
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var btnFirst = document.querySelector('.delivery__btn-first');
    var informations = document.querySelector('.delivery__informations');

    if (btnFirst && informations) {
        btnFirst.addEventListener('click', function() {
            btnFirst.classList.add('active');
            informations.classList.add('active');
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const filtersItems = document.querySelectorAll('.filters__item');
    if (filtersItems.length > 0) {
        filtersItems.forEach(item => {
            item.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
    }

    const filtersTops = document.querySelectorAll('.filters__top');
    const filtersBlocks = document.querySelectorAll('.filters__block');

    if (filtersTops.length > 0 && filtersBlocks.length > 0) {
        filtersTops.forEach((filtersTop, index) => {
            filtersTop.addEventListener('click', function() {
                this.classList.toggle('active');
                if (this.classList.contains('active')) {
                    const maxHeight = Math.max(...Array.from(filtersBlocks).map(block => block.scrollHeight));
                    filtersBlocks.forEach(block => {
                        block.style.maxHeight = maxHeight + "px";
                    });
                } else {
                    filtersBlocks.forEach(block => {
                        block.style.maxHeight = null;
                    });
                }
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.querySelector('.product__cart');

    if (addToCartBtn) {
        const colDisplay = addToCartBtn.querySelector('.col');
        const minusBtn = addToCartBtn.querySelector('.minus');
        const plusBtn = addToCartBtn.querySelector('.plus');

        let colValue = 0;
        let cartSecAdded = false; 

        addToCartBtn.addEventListener('click', function(event) {
            if (!event.target.classList.contains('minus') && !event.target.classList.contains('plus')) {
                if (!cartSecAdded) {
                    addToCartBtn.classList.add('cart_sec');
                    colValue = 1;
                    colDisplay.textContent = colValue;
                    cartSecAdded = true;
                } else {
                    addToCartBtn.classList.toggle('cart_sec');
                    cartSecAdded = false;
                }
            }
        });

        minusBtn.addEventListener('click', function() {
            if (colValue > 0) {
                colValue--;
                colDisplay.textContent = colValue;
            }
            if (colValue === 0) {
                addToCartBtn.classList.remove('cart_sec');
                cartSecAdded = false;
            }
        });

        plusBtn.addEventListener('click', function() {
            colValue++;
            colDisplay.textContent = colValue;
            addToCartBtn.classList.add('cart_sec');
            cartSecAdded = true;
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const sizes = document.querySelectorAll('.product__size');

    if (sizes.length > 0) {
        sizes.forEach(function(size) {
            size.addEventListener('click', function() {
                // Удаляем класс 'active' у всех элементов
                sizes.forEach(function(item) {
                    item.classList.remove('active');
                });
                // Добавляем класс 'active' только выбранному элементу
                this.classList.add('active');
            });
        });
    }

    if (document.getElementById('main-slider') && document.getElementById('thumbnail-slider')) {
        var mainSlider = new Splide('#main-slider', {
          type       : 'fade',
          heightRatio: 0.5,
          pagination : false,
          arrows     : false,
        }).mount();

        var thumbnailSlider = new Splide('#thumbnail-slider', {
          fixedWidth  : 100,
          fixedHeight : 300,
          isNavigation: true,
          focus       : 'center',
          arrows: false,
          pagination  : false,
          direction   : 'ttb',
          heightRatio : 0.5,
        }).mount();

        mainSlider.sync(thumbnailSlider);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.documentation__item');

    // Проверяем, есть ли элементы с классом .documentation__item на странице
    if (items.length > 0) {
        // Добавляем обработчик событий для каждого элемента
        items.forEach(function(item) {
            item.addEventListener('click', function() {
                var isActive = item.classList.contains('active');

                // Удаляем класс active у всех элементов
                items.forEach(function(element) {
                    element.classList.remove('active');
                    var content = element.querySelector('.documentation__item-content');
                    content.style.maxHeight = 0; // Возвращаем max-height на 0
                });

                // Если элемент не был активным, добавляем класс active и вычисляем max-height
                if (!isActive) {
                    item.classList.add('active');
                    var content = item.querySelector('.documentation__item-content');
                    var contentHeight = content.scrollHeight;
                    content.style.maxHeight = contentHeight + 'px';
                }
            });
        });
    }
});


const headerSearch = document.querySelector('.header__search');
if (headerSearch) {
    headerSearch.addEventListener('click', function() {
        headerSearch.classList.add('active');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const myInput = document.getElementById('myInput');
    if (myInput) {
        myInput.focus();
    }
});

const editBtn = document.querySelector('.payment__btn-edit');

if (editBtn) {
    editBtn.addEventListener('click', () => {
        editBtn.classList.toggle('active');
    });
}

const rememberBtn = document.querySelector('.payment__remember');

if (rememberBtn) {
    rememberBtn.addEventListener('click', () => {
        rememberBtn.classList.toggle('active');
    });
}

const clientImage = document.getElementById('client-image');
if (clientImage) {
    const staticSrc = clientImage.src;
    const hoverSrc = clientImage.getAttribute('data-hover');

    // Добавляем обработчики событий для наведения и ухода мыши
    clientImage.addEventListener('mouseenter', function() {
        clientImage.src = hoverSrc;
    });

    clientImage.addEventListener('mouseleave', function() {
        clientImage.src = staticSrc;
    });
}

// Get all elements with class "product-item"
const productItems = document.querySelectorAll('.product-item');

// Проверяем, есть ли элементы с классом "product-item"
if (productItems.length > 0) {
    // Loop through each product-item element
    productItems.forEach(item => {
        // Проверяем, находится ли элемент внутри элемента с классом "payment__wrapper"
        if (item.closest('.payment__wrapper')) {
            // Добавляем класс "active" и активируем чекбокс по умолчанию
            item.classList.add('active');
            const checkbox = item.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.checked = true;
            }
        }

        // Add a click event listener
        item.addEventListener('click', () => {
            // Toggle the "active" class for the clicked product-item
            item.classList.toggle('active');

            // Toggle the checkbox inside the clicked product-item
            const checkbox = item.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
            }
        });
    });
}

       // Находим кнопку "payment__btn-next"
const nextBtn = document.querySelector('.payment__btn-next');

// Находим элемент "payment__wrapper"
const paymentWrapper = document.querySelector('.payment__wrapper');

// Переменная для отслеживания количества кликов
let clickCount = 0;

// Проверяем, что кнопка и элемент существуют
if (nextBtn && paymentWrapper) {
    // Добавляем обработчик события на клик по кнопке "payment__btn-next"
    nextBtn.addEventListener('click', () => {
        // Проверяем, есть ли у элемента "payment__wrapper" класс "active"
        const isActive = paymentWrapper.classList.contains('active');

        // Если клик произошел первый раз, добавляем класс "active" и устанавливаем высоту
        if (clickCount === 0) {
            const maxHeight = paymentWrapper.scrollHeight + 'px';
            paymentWrapper.classList.add('active');
            paymentWrapper.style.maxHeight = maxHeight;
            clickCount++;
        } else {
            // Если клик произошел второй раз, перебрасываем на страницу /track.html
            window.location.href = '/track.html';
        }
    });
}
        
        document.addEventListener("DOMContentLoaded", function() {
            if (document.getElementById('splide')) {
                const splide = new Splide('#splide', {
                    type: 'loop',
                    drag: 'free',
                    focus: 'center',
                    autoWidth: true,
                    arrows: false,
                    pagination: false,
                    autoScroll: {
                        speed: 1,
                    },
                });
                splide.mount(window.splide.Extensions);
            }
        
            if (document.getElementById('splide2')) {
                const splideTwo = new Splide('#splide2', {
                    type: 'loop',
                    drag: 'free',
                    focus: 'center',
                    autoWidth: true,
                    arrows: false,
                    pagination: false,
                    autoScroll: {
                        speed: 1,
                    },
                });
                splideTwo.mount(window.splide.Extensions);
            }
        
            if (document.getElementById('splide3')) {
                let perPageValue = 5; // значение по умолчанию
                let gapValue = '6rem'; // значение по умолчанию
            
                // Проверяем разрешение экрана
                if (window.innerWidth < 962) {
                    perPageValue = 4; // устанавливаем значение для разрешения < 962px
                    gapValue = '5rem'; // устанавливаем значение gap для разрешения < 962px
                }
            
                const splide3 = new Splide('#splide3', {
                    type: 'loop',
                    autoWidth: true,
                    gap: gapValue, // используем установленное значение
                    arrows: true,
                    pagination: false,
                    perPage: perPageValue, // используем установленное значение
                });
            
                splide3.mount();
            }

            if (document.getElementById('splideSelRec')) {
                const splideSelRec = new Splide('#splideSelRec', {
                    type: 'loop',
                    focus: 'center',
                    autoWidth: true,
                    gap: '8rem',
                    arrows: true,
                    pagination: false,
                    perPage: 5,
                });
                splideSelRec.mount();
            }
        
            if (document.getElementById('splide4')) {
                const splide4 = new Splide('#splide4', {
                    autoWidth: true,
                    gap: '8.7rem',
                    arrows: true,
                    pagination: false,
                    perPage: 4, 
                });
                splide4.mount();
            }
        
            if (document.getElementById('splide5')) {
                let perPageValue = 4;
                let gapValue = '9.1rem'
            
                if (window.matchMedia('(max-width: 962px)').matches) {
                    perPageValue = 3;
                    gapValue = '7rem'
                }
            
                const splide5 = new Splide('#splide5', {
                    autoWidth: true,
                    gap: gapValue,
                    arrows: true,
                    pagination: false,
                    perPage: perPageValue, 
                });
                splide5.mount();
            }
        
            if (document.getElementById('splide6')) {
                const splide6 = new Splide('#splide6', {
                    autoWidth: true,
                    gap: '9.1rem',
                    arrows: true,
                    pagination: false,
                    perPage: 4, 
                });
                splide6.mount();
            }
            if (document.getElementById('splide11')) {
                const splide11 = new Splide('#splide11', {
                    autoWidth: true,
                    gap: '9.1rem',
                    arrows: true,
                    pagination: false,
                    perPage: 4,
                });
                splide11.mount();
            }
        
            if (document.getElementById('splide12')) {
                const splide12 = new Splide('#splide12', {
                    autoWidth: true,
                    gap: '9.1rem',
                    arrows: true,
                    pagination: false,
                    perPage: 4,
                });
                splide12.mount();
            }
        
            if (document.getElementById('splide13')) {
                const splide13 = new Splide('#splide13', {
                    autoWidth: true,
                    gap: '9.1rem',
                    arrows: true,
                    pagination: false,
                    perPage: 4,
                });
                splide13.mount();
            }
        });





// export class Component1 {
//   // Ваш код здесь
// }