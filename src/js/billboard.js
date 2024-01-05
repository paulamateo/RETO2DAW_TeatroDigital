window.onload = function() {
  const container = document.getElementById('container');

  fetch('http://localhost:3000/shows')
    .then(response => response.json())
    .then(shows => {
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

        container.appendChild(showItem);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}