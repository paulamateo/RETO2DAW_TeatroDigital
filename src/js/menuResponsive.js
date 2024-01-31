document.addEventListener('DOMContentLoaded', () => {
    //Icono menu hamburguesa
    var hamburgerIcon = document.getElementById('list-icon');
    var headerPopup = document.getElementById('header__popup');
    
    hamburgerIcon.addEventListener('click', function() {
        headerPopup.classList.toggle('active');
    })

    //Cambio de logos blanco y negro
    document.addEventListener('scroll', function() {
        var header = document.getElementById('header');
        var headerPopup = document.getElementById('header__popup');
        var logoImage = document.getElementById('logoImage');
        var searchContainer = document.getElementById('search');
        var scrollPosition = window.scrollY;
    
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
            logoImage.src = '../img/elements/logo_blanco.png';
            searchContainer.classList.add('scrolled');
            headerPopup.classList.add('scrolled');
        }else {
            header.classList.remove('scrolled');
            logoImage.src = '../img/elements/logo_negro.png';
            searchContainer.classList.remove('scrolled');
            headerPopup.classList.remove('scrolled');
        }
    });

});