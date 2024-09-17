export class Accordion {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            const faqItems = document.querySelectorAll('.faq__item-top');
            const currentAccordion = null;
            const currentSubAccordion = null;

            function closeAccordion(accordion) {
                accordion.classList.remove('active');
                const accordionContent = accordion.nextElementSibling;
                accordionContent.style.maxHeight = '0';

                const faqItem = accordion.closest('.faq__item');
                if (faqItem && !accordion.classList.contains('faq__sub-item-top')) {
                    faqItem.classList.remove('active');
                    const faqItemContent = faqItem.querySelector('.faq__item-content');
                    if (faqItemContent) {
                        faqItemContent.style.maxHeight = ''; // Reset the max height
                        faqItemContent.classList.remove('active');
                    }
                }

                const faqSubItem = accordion.closest('.faq__sub-item');
                if (faqSubItem) {
                    faqSubItem.classList.remove('active');
                    const faqSubItemContent = faqSubItem.querySelector('.faq__sub-item-content');
                    if (faqSubItemContent) {
                        faqSubItemContent.style.maxHeight = ''; // Reset the max height
                        faqSubItemContent.classList.remove('active');
                    }
                }
            }

            function updateAccordionHeight(item, content) {
                const faqItem = item.closest('.faq__item');
                const faqItemContent = faqItem.querySelector('.faq__item-content');

                if (faqItem && faqItemContent) {
                    const newHeight = faqItemContent.scrollHeight + content.scrollHeight;
                    faqItemContent.style.maxHeight = newHeight + 'px';
                    faqItemContent.classList.add('active');
                }
            }

            // Open the first accordion by default
            if (faqItems.length > 0) {
                const firstItem = faqItems[0];
                const firstContent = firstItem.nextElementSibling;
                firstItem.classList.add('active');
                firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
            }

            faqItems.forEach(function (item) {
                item.addEventListener('click', function () {
                    const content = this.nextElementSibling;

                    this.classList.toggle('active');
                    const isActive = this.classList.contains('active');

                    if (currentAccordion && currentAccordion !== this) {
                        closeAccordion(currentAccordion);
                    }

                    content.style.maxHeight = isActive ? content.scrollHeight + 'px' : '0';

                    if (isActive) {
                        const faqItem = this.closest('.faq__item');
                        faqItem.classList.add('active');
                        updateAccordionHeight(this, content);
                    } else {
                        closeAccordion(this);
                    }

                    if (!this.closest('.faq__sub-item')) {
                        currentAccordion = isActive ? this : null;
                    }
                });

                const subItems = item.nextElementSibling.querySelectorAll('.faq__sub-item-top');
                subItems.forEach(function (subItem) {
                    subItem.addEventListener('click', function (event) {
                        event.stopPropagation();

                        const subContent = this.nextElementSibling;

                        if (currentSubAccordion && currentSubAccordion !== this) {
                            closeAccordion(currentSubAccordion);
                        }

                        this.classList.toggle('active');
                        const isActive = this.classList.contains('active');

                        subContent.style.maxHeight = isActive ? subContent.scrollHeight + 'px' : '0';

                        if (isActive) {
                            const faqSubItem = this.closest('.faq__sub-item');
                            faqSubItem.classList.add('active');
                            updateAccordionHeight(this, subContent);
                        } else {
                            closeAccordion(this);
                        }

                        currentSubAccordion = isActive ? this : null;
                    });
                });
            });
        });
    }
}
