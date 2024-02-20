document.addEventListener('DOMContentLoaded', () => {
    //Icono menú hamburguesa
    var hamburgerIcon = document.getElementById('list-icon');
    var headerPopup = document.getElementById('header__popup');
    
    hamburgerIcon.addEventListener('click', function() {
        headerPopup.classList.toggle('active');
    })

    var buttonPanel = document.getElementById('button-actions__panel');
    var overlayPopUp = document.getElementById('overlay__actions-popup');
    var closePanelAccess = document.getElementById('button__close-popup-panel-access');
    buttonPanel.addEventListener('click', function() {
        overlayPopUp.classList.toggle('active');
    })

    closePanelAccess.addEventListener('click', function() {
        overlayPopUp.classList.remove('active');
    })




    

    //Cambio de logos blanco y negro
    document.addEventListener('scroll', function() {
        var header = document.getElementById('header');
        var headerPopup = document.getElementById('header__popup');
        var logoImage = document.getElementById('logoImage');
        var searchContainer = document.getElementById('search');
        var buttonLogin = document.getElementById('button-actions__login');
        var buttonPanel = document.getElementById('button-actions__panel');
        var scrollPosition = window.scrollY;
    
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
            logoImage.src = '../img/elements/logo_blanco.png';
            searchContainer.classList.add('scrolled');
            headerPopup.classList.add('scrolled');
            buttonLogin.classList.add('scrolled');
            buttonPanel.classList.add('scrolled');
        }else {
            header.classList.remove('scrolled');
            logoImage.src = '../img/elements/logo_negro.png';
            searchContainer.classList.remove('scrolled');
            headerPopup.classList.remove('scrolled');
            buttonLogin.classList.remove('scrolled');
            buttonPanel.classList.remove('scrolled');
        }
    });

});