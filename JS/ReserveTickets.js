document.addEventListener('DOMContentLoaded', () => {
    const seatsContainer = document.getElementById('seats');
    const count = document.getElementById('count');
    const total = document.getElementById('total');

    const rows = 18;
    const seatsPerRow = 36;
    const aisleIndex = 19;

    for (let row = 1; row <= rows; row++) {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');
      seatsContainer.appendChild(rowElement);

      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatElement = document.createElement('div');
        seatElement.classList.add('seat');
        seatElement.setAttribute('data-row', row);
        seatElement.setAttribute('data-seat', seat);

        if (seat === aisleIndex) {
          const aisleElement = document.createElement('div');
          aisleElement.classList.add('aisle');
          rowElement.appendChild(aisleElement);
        }

        rowElement.appendChild(seatElement);
      }
    }

    const seats = document.querySelectorAll('.seat');

    seats.forEach((seat) => {
      seat.addEventListener('click', () => {
        if (!seat.classList.contains('reserved')) {
          seat.classList.toggle('selected');
          updateSelectedCount();
        }
      });
    });

    function updateSelectedCount() {
      const selectedSeats = document.querySelectorAll('.seat.selected');
      const selectedSeatsCount = selectedSeats.length;

      count.innerText = selectedSeatsCount;
      total.innerText = selectedSeatsCount * 10;
    }
  });



document.getElementById('payment-button').addEventListener('click', () => {
    document.getElementById('payment-accepted').classList.add('active');
});

document.getElementById('close-payment').addEventListener('click', () => {
    document.getElementById('payment-accepted').classList.remove('active');
});
