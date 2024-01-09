window.onload = function() {
    let urlParams = new URLSearchParams(window.location.search);
    let idParam = urlParams.get("id");
    
    fetch(`http://localhost:3000/shows/${idParam}`)
    .then(response => response.json())
    .then(shows => {
        const show = shows[0];

        showAllDetails(show);
        openPopUp();

    })
    .catch(error => console.error('Error: ', error));
}
    

function openPopUp() {
    const button = document.getElementById('button-overview');
    const overview = document.getElementById('popup-overview');
    const closePopUp = document.getElementById('close-popup');

    button.addEventListener('click', function () {
        overview.classList.toggle('active');
    });

    closePopUp.addEventListener('click', function () {
        overview.classList.remove('active');
    });
}

function showAllDetails(show) {
    const showBannerContainer = document.getElementById('container-banner');
    showBannerContainer.innerHTML += `
        <h1>${show.title}</h1>
        <h3>${show.author}</h3>
    `;
    showBannerContainer.style.backgroundImage = `url(${show.banner})`;

    document.getElementById('details-show__genre').textContent = show.genre;
    document.getElementById('details-show__price').textContent = show.price;
    document.getElementById('details-show__director').textContent = show.director;
    document.getElementById('details-show__age').textContent = show.age;
    document.getElementById('details-show__length').textContent = show.length;
    document.getElementById('details-show__day').textContent = show.date;
    document.getElementById('details-show__hour').textContent = show.hour;
    document.getElementById('details-show__overview').textContent = show.overview;
}