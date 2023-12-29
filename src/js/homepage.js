document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', changeMenuStyleOnScroll);
    displayIconMenuResponsive();
    scrollToShowsSection();
});


function changeMenuStyleOnScroll() {
    var header = document.getElementById('header');
    var headerPopup = document.getElementById('header__popup');
    var logoImage = document.getElementById('logoImage');
    var searchContainer = document.getElementById('search');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.classList.add('scrolled');
        logoImage.src = '../img/logo_blanco.png';
        searchContainer.classList.add('scrolled');
        headerPopup.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        logoImage.src = '../img/logo_negro.png';
        searchContainer.classList.remove('scrolled');
        headerPopup.classList.remove('scrolled');
    }
}

function displayIconMenuResponsive() {
    var hamburgerIcon = document.getElementById('list-icon');
    var headerPopup = document.getElementById('header__popup');

    hamburgerIcon.addEventListener('click', function() {
        headerPopup.classList.toggle('active');
    })
}

function scrollToShowsSection() {
    var arrowIcon = document.getElementById('chevronleft-icon');
    var showsSection = document.querySelector('.shows');
    arrowIcon.addEventListener("click", function() {
        showsSection.scrollIntoView({ behavior: 'smooth' });
    })
}