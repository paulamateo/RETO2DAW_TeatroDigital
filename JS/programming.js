document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button-show-1');
    const button2 = document.getElementById('button-show-2');
    const button3 = document.getElementById('button-show-3');
    const button4 = document.getElementById('button-show-4');
    const button5 = document.getElementById('button-show-5');
    const button6 = document.getElementById('button-show-6');
    const button7 = document.getElementById('button-show-7');
    const button8 = document.getElementById('button-show-8');
    
    button1.addEventListener('click', () => {
        redirectToReservationPage(1);
    });
    button2.addEventListener('click', () => {
        redirectToReservationPage(2);
    });
    button3.addEventListener('click', () => {
        redirectToReservationPage(3);
    });
    button4.addEventListener('click', () => {
        redirectToReservationPage(4);
    });
    button5.addEventListener('click', () => {
        redirectToReservationPage(5);
    });
    button6.addEventListener('click', () => {
        redirectToReservationPage(6);
    });
    button7.addEventListener('click', () => {
        redirectToReservationPage(7);
    });
    button8.addEventListener('click', () => {
        redirectToReservationPage(8);
    });
});