window.onload = function () {
    const calendarContainer = document.getElementById('calendar-container');
    const datePanel = document.getElementById('date-panel');

    function generateCalendar(year, month) {
        fetch('http://localhost:3000/shows')
            .then(response => response.json())
            .then(data => {
                const showsData = data.map(show => ({
                    id: show.id,
                    name: show.title,
                    date: new Date(show.date2),
                    scene: show.scene
                }));

                const showsByDate = {};

                showsData.forEach(show => {
                    const dayKey = `${show.date.getFullYear()}-${show.date.getMonth() + 1}-${show.date.getDate()}`;
                    if (!showsByDate[dayKey]) {
                        showsByDate[dayKey] = [];
                    }
                    showsByDate[dayKey].push(show);
                });

                const calendarTable = document.createElement('table');

                //Fila días de la semana
                const daysOfWeek = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
                const headerRow = document.createElement('tr');

                daysOfWeek.forEach(day => {
                    const dayHeader = document.createElement('th');
                    dayHeader.textContent = day;
                    headerRow.appendChild(dayHeader);
                });

                calendarTable.appendChild(headerRow);

                const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
                const daysInMonth = new Date(year, month, 0).getDate();
                const currentDate = new Date();

                let dayCounter = 1;

                //Filas del mes correspondiente
                for (let i = 0; i < 5; i++) {
                    const row = document.createElement('tr');

                    for (let j = 0; j < 7; j++) {
                        const cell = document.createElement('td');

                        if (i === 0 && j < firstDayOfMonth - 1) {
                            // Días anteriores al mes
                            const prevMonthDays = new Date(year, month - 1, 0).getDate();
                            const prevMonthDay = prevMonthDays - (firstDayOfMonth - 1 - j) + 1;
                            cell.textContent = prevMonthDay;
                            cell.classList.add('prev-month-day', 'no-hover');
                        }else if (dayCounter <= daysInMonth) {
                            // Días del mes actual
                            const dayKey = `${year}-${month}-${dayCounter}`;
                            const dayShows = showsByDate[dayKey] || [];

                            const dayCellContent = document.createElement('div');
                            dayCellContent.classList.add('day-cell-content');

                            const dayNumber = document.createElement('span');
                            dayNumber.textContent = dayCounter;

                            const showsList = document.createElement('div');
                            showsList.classList.add('shows-list');

                            if (dayShows.length > 0) {
                                const showLine = document.createElement('div');
                                showLine.classList.add('show-line');
                                showsList.appendChild(showLine);
                            }

                            dayCellContent.appendChild(dayNumber);
                            dayCellContent.appendChild(showsList);
                            cell.appendChild(dayCellContent);

                            //Día actual
                            if (currentDate.getFullYear() === year && currentDate.getMonth() + 1 === month && dayCounter === currentDate.getDate()) {
                                cell.classList.add('current-day', 'different-hover');
                            }

                            dayCounter++;

                        }else {
                            // Días posteriores al mes
                            const nextMonthDay = dayCounter - daysInMonth;
                            cell.textContent = nextMonthDay;
                            cell.classList.add('next-month-day', 'no-hover');
                            dayCounter++;
                        }

                        row.appendChild(cell);

                        //Evento (click) para cada celda. Actualización del panel
                        if (!cell.classList.contains('prev-month-day') && !cell.classList.contains('next-month-day')) {
                            cell.addEventListener('click', function () {
                                const clickedDate = new Date(year, month - 1, parseInt(cell.textContent));
                                const dayKey = `${clickedDate.getFullYear()}-${clickedDate.getMonth() + 1}-${clickedDate.getDate()}`;
                                const dayShows = showsByDate[dayKey] || [];
                                updateDatePanel(clickedDate, dayShows);
                            });
                        }

                    }

                    calendarTable.appendChild(row);
                }

                calendarContainer.innerHTML = '';
                calendarContainer.appendChild(createMonthHeader(year, month));
                calendarContainer.appendChild(calendarTable);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    //Cabecera del calendario (mes + botones)
    function createMonthHeader(year, month) {
        const monthHeader = document.createElement('div');
        monthHeader.classList.add('month-header');

        //Mes actual
        const monthName = new Date(year, month - 1, 1).toLocaleString('default', { month: 'long' });
        monthHeader.innerHTML = `<h3>${monthName} ${year}</h3>`;

        //Botones para cambiar de mes
        const monthNavigation = document.createElement('div');
        monthNavigation.classList.add('month-navigation');

        const prevMonthButton = document.createElement('div');
        prevMonthButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="arrow" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                                    </svg>`;

        prevMonthButton.addEventListener('click', () => {
            const newMonth = month === 1 ? 12 : month - 1;
            const newYear = month === 1 ? year - 1 : year;
            generateCalendar(newYear, newMonth);
        });

        const nextMonthButton = document.createElement('div');
        nextMonthButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="arrow" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                    </svg>`;

        nextMonthButton.addEventListener('click', () => {
            const newMonth = month === 12 ? 1 : month + 1;
            const newYear = month === 12 ? year + 1 : year;
            generateCalendar(newYear, newMonth);
        });

        monthNavigation.appendChild(prevMonthButton);
        monthNavigation.appendChild(nextMonthButton);

        monthHeader.appendChild(monthNavigation);

        return monthHeader;
    }


    //Panel de eventos
    function updateDatePanel(date, shows) {
        //Día actual o celda escogida
        const weekdayName = date.toLocaleDateString('default', { weekday: 'long' });
        const capitalizedWeekday = weekdayName.charAt(0).toUpperCase() + weekdayName.slice(1);
        const monthName = date.toLocaleString('default', { month: 'long' });
        datePanel.innerHTML = `<h3 class="weekday-panel">${capitalizedWeekday}, ${date.getDate()} de ${monthName} de ${date.getFullYear()}</h3>`;    

        //Obras
        if (shows.length > 0) {
            const showsList = document.createElement('div');
            shows.forEach(show => {
                const showItem = document.createElement('div');
                showItem.classList.add('show-item');

                const showDateTime = new Date(show.date);
                const showTime = showDateTime.toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric', timeZone: 'UTC' });

                showItem.innerHTML = `
                    <div class="image-container">
                        <img class="img-events-panel" src="${show.scene}"/>
                        <button class="buy-tickets__button">COMPRAR</button>
                    </div>
                    <div class="info-panel">
                        <p>${showTime}h</p>
                        <p class="info-panel__name">${show.name}<p>
                    </div>
                `;

                showsList.appendChild(showItem);

                let button_image_show = showItem.querySelector('.buy-tickets__button');
                button_image_show.addEventListener('click', function() {
                    window.location.href = `show.html?title=${show.title}&id=${show.id}`;
                })

            });

            datePanel.appendChild(showsList);
        } else {
            datePanel.innerHTML += `
                <div class="no-events">
                    <p>No hay ningún espectáculo programado para hoy.</p>
                </div>
            `;
        }
    }


    //Mostrar calendario
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    generateCalendar(currentYear, currentMonth);


    //Actualizar el panel con la fecha actual
    updateDatePanel(currentDate, []);
}