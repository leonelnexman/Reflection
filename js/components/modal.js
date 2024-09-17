export class Modal {
    constructor() {
      document.addEventListener('DOMContentLoaded', function () {
        
        var openModalButtons = document.querySelectorAll('.open-modal');
        var closeModalBtn = document.getElementById('closeModalBtn');
        var modalQuestion = document.getElementById('modal-question');
        var body = document.body;
  
        function openModal() {
          if (modalQuestion) {
            modalQuestion.classList.add('active');
          }
          if (body) {
            body.classList.add('overflow-hidden');
          }
        }
  
        function closeModal() {
          if (modalQuestion) {
            modalQuestion.classList.remove('active');
          }
          if (body) {
            body.classList.remove('overflow-hidden');
          }
        }
  
        openModalButtons.forEach(function (button) {
          button.addEventListener('click', openModal);
        });
  
        if (closeModalBtn) {
          closeModalBtn.addEventListener('click', closeModal);
        }
      });
    }
  }