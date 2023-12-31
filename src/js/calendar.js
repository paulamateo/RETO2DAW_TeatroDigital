
const calendarElement = document.getElementById('calendar-panel');
const eventPanel = document.getElementById('events-panel');


function generateCalendar(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInLastMonth = new Date(year, month, 0).getDate();
    const lastMonthStartDay = daysInLastMonth - firstDayOfMonth + 2;

    const totalCells = 35;
    const daysToAddFromNextMonth = totalCells - (daysInMonth + firstDayOfMonth - 1);

    const calendarHTML = `
        <div class="month">
            <svg class="arrow" onclick="prevMonth(${year}, ${month})" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>
            <h2>${getMonthName(month)} ${year}</h2>
            <svg class="arrow" onclick="nextMonth(${year}, ${month})" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
        </div>
        <div class="days">
            ${generateWeekDays()}
            ${generateDays(lastMonthStartDay, daysInLastMonth, 'prevMonth')}
            ${generateDays(1, daysInMonth)}
            ${generateDays(1, daysToAddFromNextMonth, 'nextMonth')}
        </div>
    `;

    calendarElement.innerHTML = calendarHTML;
}



function generateWeekDays() {
    const weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    let html = '';

    weekDays.forEach(day => {
        html += `<div class="weekDay">${day}</div>`;
    });

    return html;
}

function generateDays(startDay, totalDays, cssClass = '') {
    let html = '';
    for (let day = startDay; day <= totalDays; day++) {
        html += `<div class="day ${cssClass}">${day}</div>`;
    }
    return html;
}

function getMonthName(month) {
    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return months[month];
}

function prevMonth(year, month) {
    if (month === 0) {
        generateCalendar(year - 1, 11);
    } else {
        generateCalendar(year, month - 1);
    }
}

function nextMonth(year, month) {
    if (month === 11) {
        generateCalendar(year + 1, 0);
    } else {
        generateCalendar(year, month + 1);
    }
}

const currentDate = new Date();
generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

// function renderEventPanel(date, events) {
//     eventPanel.innerHTML = '';
//     const formattedDate = ` ${getDayOfWeek(date.getDay())}, ${date.getDate()} de ${getMonthName(date.getMonth())} de ${date.getFullYear()}`;
//     const title = document.createElement('h2');
//     title.textContent = `${formattedDate}`;
//     eventPanel.appendChild(title);

//     if (events && events.length > 0) {
//         const eventList = document.createElement('ul');
//         events.forEach(event => {
//             const listItem = document.createElement('li');
//             listItem.textContent = event;
//             eventList.appendChild(listItem);
//         });
//         eventPanel.appendChild(eventList);
//     } else {
//         const noEventsMessage = document.createElement('p');
//         noEventsMessage.textContent = 'No hay ningún espectáculo programado.';
//         eventPanel.appendChild(noEventsMessage);
//     }
// }

// function getDayOfWeek(day) {
//     const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
//     return daysOfWeek[day];
// }



renderEventPanel(currentDate);
