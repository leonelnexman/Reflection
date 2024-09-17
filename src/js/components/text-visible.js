export class TextVisible {
    constructor() {
        this.init();
    }

    handleButtonClick(rexContentInfoSelector, buttonSelector, showText, hideText, txtBlurElementSelector) {
        const rexContentInfo = document.querySelector(rexContentInfoSelector);
        const button = document.querySelector(buttonSelector);
        const txtBlurElement = document.querySelector(txtBlurElementSelector);
    
        if (rexContentInfo && button && txtBlurElement) {
            // Store the initial max-height value from CSS
            const initialMaxHeight = window.getComputedStyle(rexContentInfo).maxHeight;
    
            // Set initial max-height based on CSS value
            rexContentInfo.style.maxHeight = initialMaxHeight;
    
            button.addEventListener('click', function () {
                txtBlurElement.classList.toggle('hidden');
                rexContentInfo.classList.toggle('active');
    
                if (rexContentInfo.classList.contains('active')) {
                    rexContentInfo.style.maxHeight = rexContentInfo.scrollHeight + 'px';
                    button.textContent = hideText;
                } else {
                    // Reset max-height to the initial CSS value
                    rexContentInfo.style.maxHeight = initialMaxHeight;
                    button.textContent = showText;
                }
            });
        }
    }

    init() {
        const isMobile = window.matchMedia("(max-width: 962px)").matches;

        if (isMobile) {
            document.addEventListener('DOMContentLoaded', () => {
                this.handleButtonClick('.about-descr__text', '.about-descr__btn', 'Смотреть все', 'Скрыть', '.txt-blur');
                this.handleButtonClick('.rex__content-info', '.rex__btn', 'Смотреть все', 'Скрыть', '.txt-blur');
                this.handleButtonClick('.subcategoirs-advantages__info', '.subcategoirs-advantages__btn', 'Смотреть все', 'Скрыть', '.txt-blur2');
                this.handleButtonClick('.tabs__content', '.filials__btn--all', 'Смотреть все', 'Скрыть', '.txt-blur');
                this.handleButtonClick('.payment-requirements__inner', '.payment-requirements__all-btn', 'Смотреть все', 'Скрыть', '.text-blur');
                this.handleButtonClick('.news-page__wrapper', '.material__all-btn', 'смотреть еще 10 из 20', 'Свернуть', '.blur-container');
            });
        }

        const isMobil = window.matchMedia("(max-width: 962px)").matches;

        if (isMobil) {
            const mobileButton = document.querySelector('.support-form__btn--mobile');

            if (mobileButton) {
                // Устанавливаем новый текст
                mobileButton.textContent = 'Отправить заявку';
            }
        }


        document.addEventListener('DOMContentLoaded', function() {
            var infoElements = document.querySelectorAll('.info');
        
            infoElements.forEach(function(infoElement) {
                var infoContentElement = infoElement.querySelector('.info__content');
        
                infoElement.addEventListener('mouseenter', function() {
                    infoElement.classList.add('active');
                    infoContentElement.classList.add('active');
                });
        
                infoElement.addEventListener('mouseleave', function() {
                    infoElement.classList.remove('active');
                    infoContentElement.classList.remove('active');
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function () {
            var btn = document.querySelector('.document__btn');
            var materialBlur = document.querySelector('.material-blur');
    
            // Проверка на наличие элементов
            if (btn && materialBlur) {
                btn.addEventListener('click', function () {
                    // Переключение класса hidden
                    materialBlur.classList.toggle('hidden');
                });
            }
        });
    }
}
