export class Footer {
    constructor() {
      this.initDropdowns();
    }
  
    initDropdowns() {
      document.addEventListener('DOMContentLoaded', () => {
        const dropdowns = document.querySelectorAll('.footer__nav-list');
  
        dropdowns.forEach(function (dropdown) {
          const dropdownName = dropdown.querySelector('.footer__nav-list-name');
          const dropdownContent = dropdown.querySelector('.footer__nav-list-b');
  
          dropdownName.addEventListener('click', function () {
            // Проверяем, есть ли у элемента класс 'all-list'
            if (!dropdown.classList.contains('all-list')) {
              dropdown.classList.toggle('active');
  
              if (dropdown.classList.contains('active')) {
                // Вычисляем высоту контента и присваиваем max-height
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
              } else {
                // Убираем max-height при закрытии
                dropdownContent.style.maxHeight = null;
              }
            }
          });
        });
      });
    }
  }
  