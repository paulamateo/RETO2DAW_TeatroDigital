document.addEventListener('DOMContentLoaded', () => {
    let cvvInput = document.getElementById('input-CVV');
    let calendarInput = document.getElementById('input-calendar');
    let cardInput = document.getElementById('input-card');
    let phoneInput = document.getElementById('input-phone');

  
    //Teléfono
    phoneInput.addEventListener('input', () => {
        let phoneValue = phoneInput.value;
        phoneValue = phoneValue.replace(/\D/g, '');
        phoneValue = phoneValue.substring(0, 9);    
        phoneInput.value = phoneValue;

    });

    //Tarjeta
    cardInput.addEventListener('input', () => {
        let cardValue = cardInput.value;
        cardValue = cardValue.replace(/\D/g, '');
        cardValue = cardValue.replace(/(\d{4})/g, match => match + '  ');
        cardValue = cardValue.substring(0, 22);
        cardInput.value = cardValue;
    });

    //Caducidad  de la tarjeta
    calendarInput.addEventListener('input', () => {
        let calendarValue = calendarInput.value;
        calendarValue = calendarValue.replace(/\D/g, '');

        if (calendarValue.length > 2) {
            calendarValue = calendarValue.substring(0, 2) + '/' + calendarValue.substring(2);
        }

        if (calendarValue.length > 5) {
            calendarValue = calendarValue.substring(0, 5);
        }
        
        calendarInput.value = calendarValue;
    });

    //CVV
    cvvInput.addEventListener('input', () => {
        let cvvValue = cvvInput.value;
        cvvValue = cvvValue.replace(/[^\d*]/g, '');
        cvvValue = cvvValue.substring(0, 3).replace(/\d/g, '*');
        cvvInput.value = cvvValue;
    });
});


//Validar email
function validateEmail() {
    let emailInput = document.getElementById('input-email');
    let emailValue = emailInput.value;
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (regex.test(emailValue)) {
        document.getElementById('error-message').textContent = '';
        return true;
    }else {
        document.getElementById('error-message').textContent = 'Correo electrónico no válido';
        return false;
    }
}

//Validar teléfono
function validateMobilePhone() {
    let phoneInput = document.getElementById('input-phone');
    let phoneValue = phoneInput.value;

    if (phoneValue.length < 9) {
        document.getElementById('error-message-2').textContent = 'Teléfono no válido';
        return false;
    }else {
        document.getElementById('error-message-2').textContent = '';
        return true;
    }
}

//Validar tarjeta
function validateCreditCard() {
    let cardInput = document.getElementById('input-card');
    let cardValue = cardInput.value;

    if (cardValue.length < 22) {
        document.getElementById('error-message-3').textContent = 'Tarjeta no válida';
        return false;
    }else {
        document.getElementById('error-message-3').textContent = '';
        return true;
    }
}

//Validar caducidad de la tarjeta
function validateDateCreditCard() {
    let calendarInput = document.getElementById('input-calendar');
    let calendarValue = calendarInput.value;

    if (calendarValue.length < 5) {
        document.getElementById('error-message-4').textContent = 'Fecha no válida';
        return false;
    }else {
        document.getElementById('error-message-4').textContent = '';
        return true;
    }
}

//Validar CVV
function validatePassword() {
    let cvvInput = document.getElementById('input-CVV');
    let cvvValue = cvvInput.value;

    if (cvvValue.length < 3) {
        document.getElementById('error-message-5').textContent = 'CVV no válido';
        return false;
    }else {
        document.getElementById('error-message-5').textContent = '';
        return true;
    }
}