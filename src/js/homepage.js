document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', changeMenuStyleOnScroll);
    displayIconMenuResponsive();
    scrollToShowsSection();

    let grid = document.getElementById('shows-grid__musical-genre');
    fetch('http://localhost:3000/shows/genre/musical')
        .then(response => response.json())
        .then(shows => {
            shows.forEach(show => {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');

                gridItem.innerHTML = `
                    <h2>${show.title}</h2>
                    <button class="button button--index" type="submit">VER ENTRADAS</button>
                `;

                gridItem.style.backgroundImage = `url(${show.scene})`;

                grid.appendChild(gridItem);
            })
        })
        .catch(error => console.error('Error fetching genre:', error));
});


/* <div class="grid-item grid-item--image-1">
<h2>Divina Comedia</h2>
<button class="button button--index" type="submit" id="button-show-5">VER ENTRADAS</button>
</div>
<div class="grid-item grid-item--image-2">
<h2>Bodas de Sangre</h2>
<button class="button button--index" type="submit" id="button-show-8">VER ENTRADAS</button>
</div>
<div class="grid-item grid-item--image-3">
<h2>Edipo Rey</h2>
<button class="button button--index" type="submit" id="button-show-6">VER ENTRADAS</button>
</div> */



// fetch('http://localhost:3000/shows')
//     .then(response => response.json())
//     .then(shows => {
//       shows.forEach(show => {
//         const showItem = document.createElement('div');
//         showItem.classList.add('container-item');

//         showItem.innerHTML = `
//           <div class="genre">${show.genre}</div>
//           <img src="${show.poster}" alt="${show.title}"/>
//           <div class="title">
//             <h3>${show.title}</h3>
//           </div>
//         `;

//         showItem.addEventListener('click', function() {
//           window.location.href = `show.html?title=${show.title}&id=${show.id}`;
//         })

//         container.appendChild(showItem);
//       });
//     })
//     .catch(error => console.error('Error fetching data:', error));







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