document.addEventListener('DOMContentLoaded', () => {
    const areaSeatsContainer = document.getElementById('area-seats');
    const seatsPerRow = 15;
    const totalSeats = 135;
    const seatsToRemove = [68, 83, 98, 113, 128];
    let seatCounter = 1;

    for (let i = 1; i <= totalSeats; i++) {
        if (i % seatsPerRow === 1) {
            const row = document.createElement('div');
            row.classList.add('seat-row');
            areaSeatsContainer.appendChild(row);
        }

        if (seatsToRemove.includes(i)) {
            const removeSeat = document.createElement('div');
            removeSeat.classList.add('seat-deleted');
            areaSeatsContainer.lastChild.appendChild(removeSeat);
        } else {
            const seatItem = document.createElement('div');
            seatItem.classList.add('seat');
            seatItem.textContent = seatCounter++;
            areaSeatsContainer.lastChild.appendChild(seatItem);

            seatItem.addEventListener('click', function () {
                seatItem.classList.toggle('selected');

                if (seatItem.classList.contains('selected')) {
                    createTicket(seatItem.textContent);
                } else {
                    removeTicket(seatItem.textContent);
                }
            });
        }
    }
});

function createTicket(seatNumber) {
    const containerTickets = document.getElementById('selected-tickets');
    let ticketItem = document.createElement('div');
    ticketItem.classList.add('individual-ticket');
    ticketItem.dataset.seatNumber = seatNumber;
    ticketItem.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="trash-icon" id="trash-icon" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
        </svg>
        <p><strong>Entrada para "EDIPO REY"</strong></p>
        <p>BUTACA ${seatNumber}</p>
        <div class="individual-ticket__data">
            <p>Fila ${calculateRow(seatNumber)} | Columna ${calculateColumn(seatNumber)}</p>
            <p><strong>15,90€</strong></p>
        </div>
    `;
    containerTickets.appendChild(ticketItem);
}

function removeTicket(seatNumber) {
    const containerTickets = document.getElementById('selected-tickets');
    const tickets = containerTickets.getElementsByClassName('individual-ticket');

    for (let ticket of tickets) {
        if (ticket.dataset.seatNumber === seatNumber) {
            containerTickets.removeChild(ticket);
        }
    }
}

function calculateRow(seatNumber) {
    if (seatNumber <= 60) {
        return Math.ceil(seatNumber / 15);
    } else {
        const remainingSeats = seatNumber - 60;
        return Math.ceil(remainingSeats / 14) + 4;
    }
}

function calculateColumn(seatNumber) {
    const columns = 12;
    return (seatNumber - 1) % columns + 1;
}