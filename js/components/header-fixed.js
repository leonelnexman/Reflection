export class Fixed {
  constructor() {
    this.initScrollListener();
  }

  initScrollListener() {

    document.addEventListener('scroll', function () {
      var productDetalNav = document.querySelector('.product-detal__nav');
    
      // Check if productDetalNav is not null or undefined before proceeding
      if (!productDetalNav) {
        return;
      }
    
      var sections = [
        { id: 'areas', link: '.product-detal__link1' },
        { id: 'pipe-features', link: '.product-detal__link2' },
        { id: 'kinds-type', link: '.product-detal__link3' },
        { id: 'prod-sect', link: '.product-detal__link4' },
        { id: 'sertificats', link: '.product-detal__link5' },
        { id: 'comparison', link: '.product-detal__link6' },
      ];
    
      var productDetalNavRect = productDetalNav.getBoundingClientRect();
      var activeSection = null;
    
      for (var i = 0; i < sections.length; i++) {
        var section = document.querySelector('#' + sections[i].id);
        var link = document.querySelector(sections[i].link);
        var sectionRect = section.getBoundingClientRect();
    
        if (
          productDetalNavRect.top >= sectionRect.top &&
          productDetalNavRect.bottom <= sectionRect.bottom
        ) {
          activeSection = sections[i].id;
        }
      }
    
      if (activeSection) {
        // Найдена активная секция, добавляем класс только если он отличается от текущего
        for (var i = 0; i < sections.length; i++) {
          var link = document.querySelector(sections[i].link);
          // Check if link is not null or undefined before toggling class
          if (link) {
            link.classList.toggle('active', sections[i].id === activeSection);
          }
        }
      }
    });


    const isScroll = window.matchMedia("(max-width: 962px)").matches;

    if (isScroll) {
      document.addEventListener('DOMContentLoaded', () => {
        const myElement = document.querySelector('.header');
        const navigationSticky = document.querySelector('.navigation-stickys');
        const productNav = document.querySelector('.product-detal__nav');
        
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          // Handle header
          if (scrollTop > lastScrollTop) {
            // Scroll down
            if (scrollTop > 300) {
              myElement.classList.add('top-del');
            }
          } else {
            // Scroll up
            if (scrollTop > 300) {
              myElement.classList.add('fixed');
            } else {
              myElement.classList.remove('fixed');
            }
            myElement.classList.remove('top-del');
          }

          // Handle navigation-stickys
          if (navigationSticky) {
            if (scrollTop > lastScrollTop) {
              // Scroll down
              if (scrollTop > 300) {
                navigationSticky.classList.add('top-del');
              }
            } else {
              // Scroll up
              if (scrollTop > 300) {
                navigationSticky.classList.add('fixed');
              } else {
                navigationSticky.classList.remove('fixed');
              }
              navigationSticky.classList.remove('top-del');
            }
          }

          // Handle product-detal__nav
          if (productNav) {
            if (scrollTop > lastScrollTop) {
              // Scroll down
              if (scrollTop > 300) {
                productNav.classList.add('top-del');
              }
            } else {
              // Scroll up
              if (scrollTop > 300) {
                productNav.classList.add('fixed');
              } else {
                productNav.classList.remove('fixed');
              }
              productNav.classList.remove('top-del');
            }
          }

          lastScrollTop = scrollTop;
        });
      });
    }

    const isScrollDesk = window.matchMedia("(max-width: 962px)").matches;
    if (!isScrollDesk) {
      window.addEventListener('scroll', () => {
        const header = document.getElementById('header');

        // Add the "fixed" class if scroll is more than 50px from the top of the page
        if (window.scrollY > 50) {
          header.classList.add('fixed');
        } else {
          header.classList.remove('fixed');
        }
      });
    }
  }
}
