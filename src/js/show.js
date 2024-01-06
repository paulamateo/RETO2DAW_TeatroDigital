document.addEventListener('DOMContentLoaded', () => {
    initializeSeats();
});


function initializeSeats() {
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
        }
    }

    const seats = document.querySelectorAll('.seat');
    seats.forEach((seat) => {
        seat.addEventListener('click', function () {
            seat.classList.toggle('selected');
        });
    });
}