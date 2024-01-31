window.onload = function() {
    //Ir a la sección 'Vive la magia musical'
    var arrowIcon = document.getElementById('chevronleft-icon');
    var showsSection = document.querySelector('.shows');
    arrowIcon.addEventListener("click", function() {
        showsSection.scrollIntoView({ behavior: 'smooth' });
    })

    //Cargar las obras que tienen el género 'musical'
    let grid = document.getElementById('shows-grid__musical-genre'); 

    fetch('http://localhost:3000/shows/genre/musical')
        .then(response => response.json())
        .then(shows => {
            shows.forEach(show => {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');

                gridItem.innerHTML = `
                    <h2>${show.title}</h2>
                    <button class="button button--index" type="submit" id="button">VER ENTRADAS</button>
                `;

                gridItem.style.backgroundImage = `url(${show.scene})`;

                grid.appendChild(gridItem);

                let button_grid = gridItem.querySelector('.button--index');
                button_grid.addEventListener('click', function() {
                    window.location.href = `show.html?title=${show.title}&id=${show.id}`;
                })
            })
        })
        .catch(error => console.error('Error:', error));
}