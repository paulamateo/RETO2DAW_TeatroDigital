window.onload = function() {

    //Desplegable con los géneros disponibles
    fetch('http://localhost:3000/genres')
        .then(response => response.json())
        .then(genres => {
            genres.forEach(genre => {
                const option = document.createElement("option");
                option.value = genre;
                option.textContent = genre;
                genreTab.appendChild(option);
            });
        })
        .catch(error => console.error('Error:', error));

    
    function displayShows(shows) {
        const container = document.getElementById('container');
        shows.forEach(show => {
            const showItem = document.createElement('div');
            showItem.classList.add('container-item');
          
            showItem.innerHTML = `
                <div class="genre">${show.genre}</div>
                    <img src="${show.poster}" alt="${show.title}"/>
                <div class="title">
                    <h3>${show.title}</h3>
                </div>
            `;
          
            showItem.addEventListener('click', function() {
                window.location.href = `show.html?title=${show.title}&id=${show.id}`;
            });
          
            container.appendChild(showItem);
        });
    }
          
    
    //Ver obras disponibles (inicial)
    fetch('http://localhost:3000/shows')
        .then(response => response.json())
        .then(shows => displayShows(shows))
        .catch(error => console.error('Error:', error));


    //Selección de género y visualización de obras correspondientes
    const genreTab = document.getElementById('genre');
    genreTab.addEventListener('change', function() {
        const selectedGenre = genreTab.value;  

        const container = document.getElementById('container');
        container.innerHTML = '';

        if (selectedGenre !== "") {
            fetch(`http://localhost:3000/shows/genre/${selectedGenre}`)
                .then(response => response.json())
                .then(shows => displayShows(shows))
                .catch(error => console.error('Error:', error));
        }
    });

}