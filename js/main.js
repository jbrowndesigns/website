'use strict';

const contactLink = document.querySelector('#contact');
const openModal = document.querySelector('.open-btn');
const closeModal = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');
const submit = document.querySelector('.submit');


openModal.addEventListener('click', ()=>{
  modal.showModal();  
});

contactLink.addEventListener('click', ()=>{
  modal.showModal();  
});


closeModal.addEventListener('click', ()=>{ modal.close();}
);



// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 80
        },
        800
      );
    }
});