const shows = [
    { id: 1, title: 'El Fantasma de la Ópera', author: 'Gaston Leroux', director: 'Sara García', genre: 'Musical', price: '20,90€', age: '18+', length: '2h 30min', date: '15/02/2024 | 20:00h', overview: 'En el majestuoso Teatro de la Ópera de París, un enigmático Fantasma se enamora de la talentosa soprano Christine. A medida que su obsesión crece, desata una serie de eventos sobrenaturales que llevan a Christine a enfrentarse a sus propios miedos y al oscuro pasado que acecha en los pasillos del teatro.', poster: '../IMG/banner-phantom.png'},
    { id: 2, title: 'Macbeth', author: 'William Shakespeare', director: 'Carlos Montoya', genre: 'Tragedia', price: '15,90€', age: '16+', length: '2h 40min', date: '20/12/2023 | 21:00h', overview: 'Ambición, brujería y traición se entrelazan en la oscura tragedia de Macbeth, un valiente general cegado por la sed de poder. Incitado por profecías sobrenaturales, Macbeth comete actos atroces para alcanzar la corona, desatando una espiral de violencia y locura que lo consume y consume a todos a su alrededor.', poster: '../IMG/banner-macbeth.png'},
    { id: 3, title: 'Hamlet', author: 'William Shakespeare', director: 'Ana Sánchez', genre: 'Musical', price: '15,90€', age: '14+', length: '2h 15min', date: '29/12/2023 | 20:00h', overview: 'En la corte danesa, el príncipe Hamlet se ve envuelto en una red de engaños y traiciones cuando descubre que su tío ha asesinado a su padre para usurpar el trono. Atormentado por dilemas morales y existenciales, Hamlet enfrenta el desafío de vengar la muerte de su padre mientras lucha con sus propios demonios internos.', poster: '../IMG/banner-hamlet.png'},
    { id: 4, title: 'El Cascanueces', author: 'Andrew Lloyd Webber', director: 'Daniela Méndez', genre: 'Ballet', price: '20,99€', age: '16+', length: '2h 30min', date: '10/01/2024 | 20:30h', overview: 'En la víspera de Navidad, la joven Clara recibe un cascanueces mágico que la lleva a un mundo encantado de dulces y sueños. Acompañada por su príncipe, se embarca en un viaje festivo lleno de bailarines, ratones y hadas, descubriendo la magia y la imaginación en cada rincón de este cuento de hadas musical.', poster: '../IMG/banner-nutcracker.png'},
    { id: 5, title: 'Divina Comedia', author: 'Dante Alighieri', director: 'Luis Rosa', genre: 'Drama Épico', price: '14,90€', age: '18+', length: '2h 30min', date: '15/01/2024 | 21:00h', overview: 'Dante Alighieri, guiado por el poeta Virgilio, emprende un épico viaje a través del Infierno, el Purgatorio y el Paraíso. En su travesía, enfrenta las consecuencias de sus acciones pasadas, encuentra almas atormentadas y descubre las complejidades del bien y el mal en esta adaptación teatral de su obra maestra.', poster: '../IMG/banner-comedy.png'},
    { id: 6, title: 'Edipo Rey', author: 'Sófocles', director: 'Rafael López', genre: 'T. Griega', price: '19,90€', age: '16+', length: '2h 45min', date: '02/02/2024 | 21:00h', overview: 'En la ciudad de Tebas, el rey Edipo se embarca en una búsqueda para descubrir la verdad detrás de una oscura profecía que predice su propio destino trágico. A medida que se desenmaraña la verdad, Edipo se enfrenta a las consecuencias de sus elecciones y la inevitable tragedia que marcará su reinado.', poster: '../IMG/banner-oedipus.png'},
    { id: 7, title: 'Romeo y Julieta', author: 'William Shakespare', director: 'Marta Váldez', genre: 'Tragedia', price: '9,99€', age: '16+', length: '2h 30min', date: '15/12/2023 | 21:00h', overview: 'En la ciudad de Verona, dos jóvenes enamorados, Romeo y Julieta, se encuentran atrapados en una enemistad ancestral entre sus familias. A pesar de las adversidades y el destino trágico que les espera, su amor florece en secreto, llevándolos a decisiones desgarradoras que cambiarán el curso de sus vidas y las de sus familias para siempre.', poster: '../IMG/banner-romeo.png'},
    { id: 8, title: 'Bodas de Sangre', author: 'Federico García Lorca', director: 'Manuel Pérez', genre: 'Tragedia', price: '14,90€', age: '18+', length: '2h 30min', date: '25/02/2024 | 21:00h', overview: 'En una remota aldea española, una boda se convierte en el telón de fondo de una tragedia apasionada. La novia, atrapada entre la tradición y el deseo, escapa con su amante, desencadenando una serie de eventos trágicos que exploran las complejidades del amor, el honor y la inevitabilidad del destino.', poster: '../IMG/banner-blood.png'}
];

const showsContainer = document.getElementById('container-show');

function createShowElement(show) {
    const showItem = document.createElement('div');
    showItem.classList.add('container-show-item');

    showItem.innerHTML = `
        <div class="container-show-img">
            <img id="image" src="${show.poster}" alt="${show.title}">
        </div>
        <div class="container-show-data">
            <h1 id="title">${show.title}</h1>
            <h3 id="author">${show.author}</h3>
            <p><strong>Director: </strong><span id="director">${show.director}</span></p>
            <div class="data-information">
                <div class="data-1">
                    <p id="genre">${show.genre}</p>
                    <p id="price">${show.price}</p>
                </div>
                <div class="data-2">
                    <div class="data-2__item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-popup" viewBox="0 0 16 16"><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
                        <p id="age">${show.age}</p>
                    </div>
                    <div class="data-2__item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-popup" viewBox="0 0 16 16"><path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5z"/><path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3"/></svg>
                    <p id="length">${show.length}</p>
                    </div>
                    <div class="data-2__item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-popup" viewBox="0 0 16 16"><path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg>
                    <p id="date">${show.date}</p>
                    </div>
                </div>
            </div>
            <p id="overview">${show.overview}</p>
            <div class="container-button">
            </div>
        </div>
    `;

    const reserveButton = document.createElement('button');
    reserveButton.classList.add('button', 'button--billboard');
    reserveButton.innerHTML = `RESERVAR ENTRADAS`;
    
    reserveButton.addEventListener('click', () => {
        redirectToReservationPage(show.id);
    });

    showItem.querySelector('.container-button').appendChild(reserveButton);

    showsContainer.appendChild(showItem);


}

shows.forEach(createShowElement);



function redirectToReservationPage(showId) {
    window.location.href = `../HTML/ReserveTickets.html?id=${showId}`;
}

