document.addEventListener('DOMContentLoaded', function() {

    const openBtn = document.getElementById('open-menu');
    const closeBtn = document.getElementById('close-menu');
  
    const navegation = document.getElementById('navegation');
  
    openBtn.addEventListener('click', function(){
      navegation.classList.add('visible');
    });
  
    closeBtn.addEventListener('click', function(){
      navegation.classList.remove('visible');
    });
  
  });