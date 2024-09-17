export class SwiperInit {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      // Swiper for solutions__slider
      if (document.querySelector('.solutions__slider')) {
        const solutions = new Swiper('.solutions__slider', {
          slidesPerView: 'auto',
          spaceBetween: 15,
          initialSlide: 0,
          centerInsufficientSlides: true,
          freeMode: true,
          freeModeSticky: true,
          snap: {
            snapToSlides: true,
          },
          navigation: {
            nextEl: '#swiper-button-next-sol',
            prevEl: '#swiper-button-prev-sol',
          },
        });
      }

      // Swiper for work__slider
      if (document.querySelector('.work__slider')) {
        const work = new Swiper('.work__slider', {
          slidesPerView: 'auto',
          spaceBetween: 15,
          initialSlide: 0,
          centerInsufficientSlides: true,
          freeMode: true,
          freeModeSticky: true,
          snap: {
            snapToSlides: true,
          },
          freeModeMomentum: false,
          navigation: {
            nextEl: '#swiper-button-next-work',
            prevEl: '#swiper-button-prev-work',
          },
        });
      }

      // Swiper for projects__slider
      if (document.querySelector('.projects__slider')) {
        const projects = new Swiper('.projects__slider', {
          slidesPerView: 'auto',
          spaceBetween: 15,
          // initialSlide: 0,
          // centerInsufficientSlides: true,
          freeMode: true,
          freeModeSticky: true,
          navigation: {
            nextEl: '#swiper-button-next-proj',
            prevEl: '#swiper-button-prev-proj',
          },
        });
      }

      // Swiper for reviews__slider
      if (document.querySelector('.reviews__slider')) {
        const reviews = new Swiper('.reviews__slider', {
          slidesPerView: 'auto',
          spaceBetween: 15,
          initialSlide: 0,
          centerInsufficientSlides: true,
          freeMode: true,
          freeModeSticky: true,
          navigation: {
            nextEl: '#swiper-button-next-reviews',
            prevEl: '#swiper-button-prev-reviews',
          },
        });
      }

      // Swiper for partners__slider
      if (document.querySelector('.partners__slider')) {
        const partners = new Swiper('.partners__slider', {
          slidesPerView: 'auto',
          spaceBetween: 30,
          initialSlide: 0,
          centerInsufficientSlides: true,
          loop: true,
          breakpoints: {
            200: {
              freeMode: true,
              freeModeSticky: true,
            },
            1024: {
              freeMode: false,
              freeModeSticky: false,
            },
          },
        });
      }

      // Swiper for history__slider
      if (document.querySelector('.history__slider')) {
        const history = new Swiper('.history__slider', {
          slidesPerView: 'auto',
          spaceBetween: 70,
          initialSlide: 0,
          centerInsufficientSlides: true,
          freeMode: true,
          freeModeSticky: true,
          navigation: {
            nextEl: '#swiper-button-next-his',
            prevEl: '#swiper-button-prev-his',
          },
          breakpoints: {
            200: {
              spaceBetween: 15,
            },
          },
        });
      }

      // Swiper for heating-production__slider
      if (document.querySelector('.heating-production__slider')) {
        const heatingproduction = new Swiper('.heating-production__slider', {
          slidesPerView: 'auto',
          spaceBetween: 20,
          initialSlide: 0,
          centerInsufficientSlides: true,
          freeMode: true,
          freeModeSticky: true,
          navigation: {
            nextEl: '#swiper-button-next-hp',
            prevEl: '#swiper-button-prev-hp',
          },
        });
      }

      // Swiper for workers__slider
      if (document.querySelector('.workers__slider')) {
        const workers = new Swiper('.workers__slider', {
          slidesPerView: 'auto',
          spaceBetween: 20,
          initialSlide: 0,
          centerInsufficientSlides: true,
          freeMode: true,
          freeModeSticky: true,
          navigation: {
            nextEl: '#swiper-button-next-workrs',
            prevEl: '#swiper-button-prev-workrs',
          },
        });
      }

      if (document.querySelector('.subc-slider')) {
        const workers = new Swiper('.subc-slider', {
          slidesPerView: 'auto',
          spaceBetween: 16,
          initialSlide: 0,
          centerInsufficientSlides: true,
          freeMode: true,
          freeModeSticky: true,
          navigation: {
            nextEl: '#swiper-button-next-subc',
            prevEl: '#swiper-button-prev-subc',
          },
        });
      }

      if (document.querySelector('.areas__slider')) {
        const areas = new Swiper('.areas__slider', {
          slidesPerView: 'auto',
          spaceBetween: 16,
          initialSlide: 0,
          centerInsufficientSlides: true,
          freeMode: true,
          freeModeSticky: true,
          navigation: {
            nextEl: '#swiper-button-next-areas',
            prevEl: '#swiper-button-prev-areas',
          },
        });
      }

      if (document.querySelector('.choose-us__slider')) {
        const areas = new Swiper('.choose-us__slider', {
          slidesPerView: 'auto',
          spaceBetween: 35,
          initialSlide: 0,
          centerInsufficientSlides: true,
          freeMode: true,
          freeModeSticky: true,
          navigation: {
            nextEl: '#swiper-button-next-choose-us',
            prevEl: '#swiper-button-prev-choose-us',
          },
          breakpoints: {
            // когда ширина экрана меньше 768 пикселей
            200: {
              spaceBetween: 10,
            },
            600: {
              spaceBetween: 35,
            }
          }
        });
      }

      // Swiper for heation-peculiarities__slider
      if (document.querySelector('.heation-peculiarities__slider')) {
        const heation = new Swiper('.heation-peculiarities__slider', {
          slidesPerView: 'auto',
          spaceBetween: 16,
          initialSlide: 0,
          centerInsufficientSlides: true,
          freeMode: true,
          freeModeSticky: true,
          navigation: {
            nextEl: '#swiper-button-next-pec',
            prevEl: '#swiper-button-prev-pec',
          },
        });
      }
    });

    

    document.addEventListener('DOMContentLoaded', function () {
      if (window.innerWidth < 962) {
        // Swiper for advantages__slider
        if (document.querySelector('.advantages__slider')) {
          const advantages = new Swiper('.advantages__slider', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
          });
        }

        if (document.querySelector('.installations__slider')) {
          const installationsslider = new Swiper('.installations__slider', {
            slidesPerView: 'auto',
            spaceBetween: 12,
            initialSlide: 0,
            centerInsufficientSlides: true,
            freeMode: true,
            freeModeSticky: true,
          });
        }

        if (document.querySelector('.peculiarities-dilers__slider')) {
          const peculiaritiesd = new Swiper('.peculiarities-dilers__slider', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
          });
        }
        
        if (document.querySelector('.people-support__slider')) {
          const peculiaritiesd = new Swiper('.people-support__slider', {
            slidesPerView: 'auto',
            spaceBetween: 5,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
          });
        }

        if (document.querySelector('.payment-option__slider')) {
          const peculiaritiesd = new Swiper('.payment-option__slider', {
            slidesPerView: 'auto',
            spaceBetween: 5,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
          });
        }

        if (document.querySelector('.material__slider')) {
          const photo = new Swiper('.material__slider', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
          });
        }

        if (document.querySelector('.material__video-slider')) {
          const video= new Swiper('.material__video-slider', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
          });
        }

        // Swiper for heating-parameters__slider
        if (document.querySelector('.heating-parameters__slider')) {
          const heatingParameters = new Swiper('.heating-parameters__slider', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
          });
        }

        // Swiper for production__slider
        if (document.querySelector('.production__slider')) {
          const production = new Swiper('.production__slider', {
            slidesPerView: 'auto',
            spaceBetween: 15,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
            snap: {
              snapToSlides: true,
            },
          });
        }

        // Swiper for peculiarities__slider
        if (document.querySelector('.peculiarities__slider')) {
          const peculiarities = new Swiper('.peculiarities__slider', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
            snap: {
              snapToSlides: true,
            },
          });
        }

        // Swiper for services__slider
        if (document.querySelector('.services__slider')) {
          const services = new Swiper('.services__slider', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
            snap: {
              snapToSlides: true,
              snapToSlidesOffset: 70,
            },
          });
        }

        // Swiper for articles__slider
        if (document.querySelector('.articles__slider')) {
          const articles = new Swiper('.articles__slider', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
          });
        }
        if (document.querySelector('.job-in__slider')) {
          const articles = new Swiper('.job-in__slider', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
          });
        }

        if (document.querySelector('.pipe-features__slider')) {
          const articles = new Swiper('.pipe-features__slider', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
          });
        }

        // if (document.querySelector('.installations__slider')) {
        //   const installations = new Swiper('.installations__slider', {
        //     slidesPerView: 'auto',
        //     spaceBetween: 10,
        //     initialSlide: 0,
        //     centerInsufficientSlides: true,
        //     loop: false,
        //     freeMode: true,
        //     freeModeSticky: true,
        //   });
        // }

        if (document.querySelector('.projects__tab-slider')) {
          const projectsTab = new Swiper('.projects__tab-slider', {
            slidesPerView: 'auto',
            spaceBetween: 13,
            initialSlide: 0,
            centerInsufficientSlides: true,
            loop: false,
            freeMode: true,
            freeModeSticky: true,
          });
        }
      }
    });
  }
}
