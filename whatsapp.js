// JavaScript para mantener el botón de WhatsApp en la parte inferior derecha
window.addEventListener('scroll', function() {
    var whatsappButton = document.getElementById('whatsapp-button');
    var contentHeight = document.querySelector('.content').offsetHeight;
    var scrollY = window.scrollY;
    var windowHeight = window.innerHeight;
  
    if ((contentHeight - scrollY) < windowHeight) {
      whatsappButton.style.bottom = (windowHeight - (contentHeight - scrollY) + 20) + 'px';
    } else {
      whatsappButton.style.bottom = '20px';
    }
  });
  

  function proximo(){

    swal('Artículos','Algunos artículos están pendientes por publicación');
}
