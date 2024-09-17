export class Tabs {
    constructor() {
        document.addEventListener("DOMContentLoaded", () => {
            this.initTabs();
        });
    }

    initTabs() {
        const newsTabs = document.querySelectorAll('.news__tab');

        // Добавляем слушатель события клика для каждого элемента
        newsTabs.forEach(function (tab) {
          tab.addEventListener('click', function () {
            // Удаляем класс active у предыдущего элемента
            const currentActiveTab = document.querySelector('.news__tab.active');
            if (currentActiveTab) {
              currentActiveTab.classList.remove('active');
            }
      
            // Добавляем класс active к текущему элементу
            tab.classList.add('active');
          });
        });
        

        // Получаем все вкладки и слайдеры
        const tabs = document.querySelectorAll('.projects__tab');
        const sliders = document.querySelectorAll('.projects__slider');

        // Проверяем, что есть хотя бы одна вкладка и один слайдер
        if (tabs.length > 0 && sliders.length > 0) {
            // Добавляем обработчик событий click к каждой вкладке
            tabs.forEach((tab, index) => {
                tab.addEventListener('click', () => {
                    // Удаляем класс 'active' у всех вкладок и слайдеров
                    tabs.forEach((t) => {
                        t.classList.remove('active');
                    });
                    sliders.forEach((s) => {
                        s.classList.remove('active');
                    });

                    // Добавляем класс 'active' к кликнутой вкладке и соответствующему слайдеру
                    tab.classList.add('active');
                    sliders[index].classList.add('active');
                });
            });
        }

        // Получаем все вкладки и слайдеры
        const items = document.querySelectorAll('.navigation-sticky__item');

        // Добавляем слушатель событий для каждого элемента
        items.forEach(function(item) {
            item.addEventListener('click', function() {
                // Удаление класса 'active' у всех элементов
                items.forEach(function(innerItem) {
                    innerItem.classList.remove('active');
                });
    
                // Добавление класса 'active' к текущему элементу
                item.classList.add('active');
            });
        });

        const tabsContainers = document.querySelectorAll('.tabs');

tabsContainers.forEach((container) => {
  container.addEventListener('click', (event) => {
    // Check if the click was on an element with the class "tab"
    const clickedTab = event.target.closest('.tab');
    if (clickedTab) {
      // Remove the "active" class from all tabs in the current container
      container.querySelectorAll('.tab').forEach((tab) => {
        tab.classList.remove('active');
      });

      // Add the "active" class only to the clicked tab
      clickedTab.classList.add('active');
    }
  });
});


const tabss = document.querySelectorAll('.filials__tabs-item');

  // Добавляем слушатель события click к каждой вкладке
  tabss.forEach((tab) => {
    tab.addEventListener('click', () => {
      // Убираем класс active у всех элементов
      tabss.forEach((item) => {
        item.classList.remove('active');
      });

      // Добавляем класс active к текущему элементу
      tab.classList.add('active');
    });
  });
        

  const installationTabs = document.querySelectorAll('.navigation-sticky__item');

  installationTabs.forEach((installationTab, index) => {
      installationTab.addEventListener('click', () => {
          installationTabs.forEach(t => t.classList.remove('active'));

          // Добавляем класс active текущему элементу
          installationTab.classList.add('active');

          const navBlock = document.querySelector('.nav-block:nth-child(' + (index + 1) + ')');

          document.querySelectorAll('.nav-block').forEach(block => block.classList.remove('active'));

          navBlock.classList.add('active');
      });
  });
    }
}
