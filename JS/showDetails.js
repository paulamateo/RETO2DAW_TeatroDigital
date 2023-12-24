document.addEventListener('DOMContentLoaded', () => {
    const areaSeatsContainer = document.getElementById('area-seats');


    for (let i = 1; i <= 133; i++) {
        const seatItem = document.createElement('div');
        seatItem.classList.add('seat');
        seatItem.textContent = i;

        areaSeatsContainer.appendChild(seatItem);
    }

    const seats = document.querySelectorAll('.seat');
    seats.forEach((seat) => {
        seat.addEventListener('click', function() {
            seat.classList.toggle('selected');
        });
    });
 
});


