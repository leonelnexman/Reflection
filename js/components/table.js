export class Table {
    constructor() {
        this.init();
    }

    init() {
        const wrapper = document.querySelector('.document__wrapper');
        if (wrapper) {
            const maxHeight = wrapper.scrollHeight;

            const buttonTextElement = document.querySelector('.document__btn p');
            if (buttonTextElement) {
                const buttonElement = document.querySelector('.document__btn');
                if (buttonElement) {
                    buttonElement.addEventListener('click', () => {
                        if (wrapper.style.maxHeight === maxHeight + 'px') {
                            wrapper.style.maxHeight = null;
                            buttonTextElement.textContent = 'Показать еще';
                            buttonElement.classList.remove('active');
                        } else {
                            wrapper.style.maxHeight = maxHeight + 'px';
                            buttonTextElement.textContent = 'Скрыть';
                            buttonElement.classList.add('active');
                        }
                    });
                }
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const comparisonTable = document.getElementById('comparison-type__table');
            if (comparisonTable) {
                comparisonTable.querySelectorAll('td').forEach((cell) => {
                    if (!cell.innerHTML.trim()) {
                        cell.innerHTML = '<span></span>';
                    }
                });
            }

            const arrowNextBtn = document.querySelector('.table-arrow-next');

            if (arrowNextBtn) {
                arrowNextBtn.addEventListener('click', () => {
                    const comparisonWrapper = document.querySelector('.comparison-type__wrapper');
                    
                    if (comparisonWrapper) {
                        comparisonWrapper.scrollLeft += 100;
                        
                        // Проверяем, достигнут ли конец прокрутки вправо
                        const isEndReached = comparisonWrapper.scrollLeft + comparisonWrapper.clientWidth === comparisonWrapper.scrollWidth;
                        
                        if (isEndReached) {
                            arrowNextBtn.classList.add('opacity');
                        } else {
                            arrowNextBtn.classList.remove('opacity');
                        }
                    }
                });
            }
            

            const arrowPrevBtn = document.querySelector('.table-arrow-prev');
            if (arrowPrevBtn) {
                arrowPrevBtn.addEventListener('click', () => {
                    const comparisonWrapper = document.querySelector('.comparison-type__wrapper');
                    if (comparisonWrapper) {
                        comparisonWrapper.scrollLeft -= 100;
                        this.updateArrowPrevState();
            
                        // Удаление класса opacity у .table-arrow-next
                        const arrowNextBtn = document.querySelector('.table-arrow-next');
                        if (arrowNextBtn) {
                            arrowNextBtn.classList.remove('opacity');
                        }
                    }
                });
            }

            const comparisonWrapper = document.getElementById('comparisonWrapper');
            if (comparisonWrapper) {
                const maxHeight = comparisonWrapper.scrollHeight;
                const buttonTextElement = document.querySelector('.table-btn p');
                const tableBtn = document.querySelector('.table-btn');
                const bottomBlur = document.querySelector('.bottom-blur'); // Assuming this is the element you want to hide/show

                if (tableBtn && bottomBlur) {
                    tableBtn.addEventListener('click', () => {
                        if (comparisonWrapper.style.maxHeight === maxHeight + 'px') {
                            comparisonWrapper.style.maxHeight = null;
                            buttonTextElement.textContent = 'Показать еще';
                            tableBtn.classList.remove('active');
                            bottomBlur.classList.remove('hidden'); // Add this line to remove the 'hidden' class
                        } else {
                            comparisonWrapper.style.maxHeight = maxHeight + 'px';
                            buttonTextElement.textContent = 'Скрыть';
                            tableBtn.classList.add('active');
                            bottomBlur.classList.add('hidden'); // Add this line to add the 'hidden' class
                        }
                    });
                }
            }

            const comparisonWrapperScroll = document.querySelector('.comparison-type__wrapper');
            if (comparisonWrapperScroll) {
                comparisonWrapperScroll.addEventListener('scroll', () => {
                    this.updateArrowPrevState();
                });
            }

            this.updateArrowPrevState();
        }); 

        const tableBtns = document.querySelectorAll('.table-btn');

        // Добавляем обработчик события для каждого элемента
        tableBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                // Получаем все элементы с классом bottom-blur
                const bottomBlurElements = document.querySelectorAll('.bottom-blur');

                // Добавляем класс hidden ко всем элементам с классом bottom-blur
                bottomBlurElements.forEach((element) => {
                    element.classList.toggle('hidden');
                });
            });
        });
        
    }

    updateArrowPrevState() {
        const arrowPrev = document.querySelector('.table-arrow-prev');
        if (arrowPrev) {
            arrowPrev.classList.toggle('active', document.querySelector('.comparison-type__wrapper')?.scrollLeft > 0);
        }
    }
    
    
}
