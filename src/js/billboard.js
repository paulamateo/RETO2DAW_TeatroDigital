window.onload = function() {
  const genreTab = document.getElementById('genre');

  viewByGenre();
  showAllShows();

  genreTab.addEventListener('change', function() {
    const selectedGenre = genreTab.value;  
    clearContainer();

    if (selectedGenre !== "") {
      showShowsByGenre(selectedGenre);
    }else {
      showAllShows();
    }

  });

}


function viewByGenre() {
  const genreTab = document.getElementById('genre');
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
    .catch(error => console.error('Error fetching genres:', error));
}

function showAllShows() {
  fetch('http://localhost:3000/shows')
    .then(response => response.json())
    .then(shows => displayShows(shows))
    .catch(error => console.error('Error fetching shows:', error));
}

function showShowsByGenre(genre) {
  fetch(`http://localhost:3000/shows/genre/${genre}`)
    .then(response => response.json())
    .then(shows => displayShows(shows))
    .catch(error => console.error('Error fetching shows by genre:', error));
}

function clearContainer() {
  const container = document.getElementById('container');
  container.innerHTML = '';
}

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
