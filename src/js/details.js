window.onload = function() {
    let urlParams = new URLSearchParams(window.location.search);
    let idParam = urlParams.get("id");
    const purchasedSeats = [];
    const reservedSeats = [];

    function savePurchasedSeat(seatId) {
        purchasedSeats.push(seatId);
    }

    // function printPurchasedSeats() {
    //     console.log("Asientos comprados:", purchasedSeats.join(", "));
    // }

    function markReservedSeats() {
        const areaSeatsContainer = document.getElementById('area-seats');
        const allSeats = areaSeatsContainer.querySelectorAll('.seat');

        reservedSeats.forEach(reservedSeat => {
            const seatElement = allSeats[reservedSeat - 1]; // -1 because seat numbers start from 1
            if (seatElement) {
                seatElement.classList.add('reserved');
                seatElement.style.cursor = 'default'; 
            }
        });
    }
    

    checkAndRemoveAD();
    
    fetch(`http://localhost:3000/shows/${idParam}`)
    .then(response => response.json())
    .then(shows => {
        const show = shows[0];
        reservedSeats.push(...show.reservedSeats);
        calculatePrice(show);

        showDetails(show);
        
        const areaSeatsContainer = document.getElementById('area-seats');
        const seatsPerRow = 15;
        const totalSeats = show.seats;
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
            }else {
                const seatItem = document.createElement('div');
                seatItem.classList.add('seat');
                seatItem.textContent = seatCounter++;
                areaSeatsContainer.lastChild.appendChild(seatItem);

                if (reservedSeats.includes(seatCounter)) {
                    seatItem.classList.add('reserved');
                    seatItem.style.cursor = 'default'; 
                }

               
                    seatItem.addEventListener('click', function () {
                        if (!seatItem.classList.contains('selected')  && !seatItem.classList.contains('reserved')) {
                            seatItem.classList.toggle('selected');
                            savePurchasedSeat(seatItem.textContent);
        
                            const containerTickets = document.getElementById('selected-tickets');
                            let ticketItem = document.createElement('div');
                            ticketItem.classList.add('individual-ticket');
                            ticketItem.dataset.seatNumber = seatItem.textContent;
                            ticketItem.innerHTML = `
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="trash-icon" id="trash-icon" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                </svg>
                                <p><strong>Entrada para "${show.title}"</strong></p>
                                <p>BUTACA ${seatItem.textContent}</p>
                                <div class="individual-ticket__data">
                                    <p>Fila ${calculateRow(seatItem.textContent)} | Columna ${calculateColumn(seatItem.textContent)}</p>
                                    <p id="show__price"><strong>${show.price}€</strong></p>
                                </div>
                            `;
                            containerTickets.appendChild(ticketItem);
                            calculatePrice(show);
                            // printPurchasedSeats();
            
                            const trashIcon = ticketItem.querySelector('.trash-icon');
                            trashIcon.addEventListener('click', function () {
                                const containerTickets = document.getElementById('selected-tickets');
                                containerTickets.removeChild(ticketItem);
                                seatItem.classList.remove('selected');
                            
                                selectedTicketCount = document.querySelectorAll('.seat.selected').length;
    
                                const indexToRemove = purchasedSeats.indexOf(seatItem.textContent);
                                if (indexToRemove !== -1) {
                                    purchasedSeats.splice(indexToRemove, 1);
                                }
                            
                                checkAndRemoveAD();
                                calculatePrice(show);
                                // printPurchasedSeats();
                            });
                            
                         
                            checkAndRemoveAD();
                        } 
                    });
                
    

            }
        }
        markReservedSeats();
        openPopUpPay();

    })
    .catch(error => console.error('Error: ', error));
}

function openPopUpPay() {
    var nameInput = document.querySelector('input[name="name-lastname_input"]');
    var emailInput = document.querySelector('input[name="email_input"]');
    var phoneInput = document.querySelector('input[name="mobile-phone_input"]');
    var cardHolderInput = document.querySelector('input[name="titular_input"]');
    var cardNumberInput = document.querySelector('input[name="credit-card_input"]');
    var dateInput = document.querySelector('input[name="date_input"]');
    var cvvInput = document.querySelector('input[name="CVV_input"]');

    const overlay = document.getElementById('overlay');
    const buttonPay = document.getElementById('payment-button');
    const buttonClose = document.getElementById('button-close');
    

    buttonPay.addEventListener('click', function() {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        
        if (selectedSeats.length > 0 && nameInput.value !== "" && emailInput.value !== "" && phoneInput.value !== "" && cardHolderInput.value !== "" && cardNumberInput.value !== "" && dateInput.value !== "" && cvvInput.value !== "") {
            overlay.classList.add('active');
            reservation();
            clearSelectedSeatsAndTickets();
        }else if (selectedSeats.length === 0 && nameInput.value !== "" && emailInput.value !== "" && phoneInput.value !== "" && cardHolderInput.value !== "" && cardNumberInput.value !== "" && dateInput.value !== "" && cvvInput.value !== "") {
            alert("Por favor, selecciona alguna butaca.");
        }else {
            alert("Por favor, completa todos los campos.");
        }
    });

    buttonClose.addEventListener('click', function() {
        overlay.classList.remove('active');
    })
}



function clearSelectedSeatsAndTickets() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    const containerTickets = document.getElementById('selected-tickets');

    selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
    });

    const selectedTickets = containerTickets.querySelectorAll('.individual-ticket');
    selectedTickets.forEach(ticket => {
        containerTickets.removeChild(ticket);
    });
    createAD();

    document.getElementById("details-show__total-price").textContent = "0.00";
    document.querySelector('input[name="name-lastname_input"]').value = "";
    document.querySelector('input[name="email_input"]').value = "";
    document.querySelector('input[name="mobile-phone_input"]').value = "";
    document.querySelector('input[name="titular_input"]').value = "";
    document.querySelector('input[name="credit-card_input"]').value = "";
    document.querySelector('input[name="date_input"]').value = "";
    document.querySelector('input[name="CVV_input"]').value = "";
}


function reservation() {
    const selectedSeats = document.querySelectorAll('.seat.selected');

    let urlParams = new URLSearchParams(window.location.search);
    let idParam = urlParams.get("id");


    fetch(`http://localhost:3000/shows/${idParam}/reserved-seats`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ seats: Array.from(selectedSeats).map(seat => parseInt(seat.textContent)) }),
    })
    .then(response => response.json())
    .then(data => {
        selectedSeats.forEach(seatItem => {
            seatItem.classList.toggle('reserved');
            seatItem.style.cursor = 'default'; 
        });    
    })
    .catch(error => console.error('Error al enviar la solicitud:', error));
}




function calculatePrice(show) {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    selectedTicketCount = selectedSeats.length;

    let priceShow = show.price;
    var totalPrice = selectedTicketCount * priceShow;

    document.getElementById("details-show__total-price").textContent = totalPrice.toFixed(2);
}

function showDetails(show) {
    const showBannerContainer = document.getElementById('container-banner');
    showBannerContainer.innerHTML += `
        <h1>${show.title}</h1>
        <h3>${show.author}</h3>
    `;
    showBannerContainer.style.backgroundImage = `url(${show.banner})`;

    document.getElementById('details-show__genre').textContent = show.genre;
    document.getElementById('details-show__price').textContent = show.price;
    document.getElementById('details-show__director').textContent = show.director;
    document.getElementById('details-show__age').textContent = show.age;
    document.getElementById('details-show__length').textContent = show.length;
    document.getElementById('details-show__day').textContent = show.date;
    document.getElementById('details-show__hour').textContent = show.hour;
    document.getElementById('details-show__overview').textContent = show.overview;

    const button = document.getElementById('button-overview');
    const overview = document.getElementById('popup-overview');
    const closePopUp = document.getElementById('close-popup');

    button.addEventListener('click', function () {
        overview.classList.toggle('active');
    });

    closePopUp.addEventListener('click', function () {
        overview.classList.remove('active');
    });
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
    const seatsPerRow = 15;
    const columnsBeforeGap = 7;

    if (seatNumber <= 60) {
        return (seatNumber - 1) % seatsPerRow + 1;
    } else {
        const remainingSeats = seatNumber - 60;
        const columnInRemainingSeats = (remainingSeats - 1) % (seatsPerRow - 1) + 1;

        if (columnInRemainingSeats <= columnsBeforeGap) {
            return columnInRemainingSeats;
        } else {
            return columnInRemainingSeats + 1;
        }
    }
}

function createAD() {
    const container = document.getElementById('ad');
    const text = document.createElement('div');
    text.classList.add('tickets');
    text.innerHTML = `
        <p>¡No has seleccionado ninguna butaca!</p>
    `;
    container.appendChild(text);
}

function checkAndRemoveAD() {
    const containerAD = document.getElementById('ad');
    
    const selectedSeats = document.querySelectorAll('.seat.selected');
    selectedTicketCount = selectedSeats.length;

    if (selectedTicketCount === 0) {
        containerAD.innerHTML = '';
        createAD();
    } else {
        containerAD.innerHTML = '';
    }
}
