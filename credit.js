
// CARDHOLDER'S NAME \\

const cardName = document.querySelector('.card-input-name');
const nameSpan = document.getElementById('name-span');

cardName.addEventListener('input', function () {
    const containsDigits = /\d/.test(cardName.value);
    if (containsDigits) {
        cardName.style.borderBottom = "2px solid red"
        nameSpan.style.display = 'block'
        nameSpan.style.color = 'red'
        cardName.classList.remove('validate');
        validateForm();
        // return;
    } else if (cardName.value.trim() === '') {
        cardName.style.borderBottom = '2px solid #9563FF'
        nameSpan.style.display = 'none'
        btn.disabled = false
        cardName.classList.remove('validate');
    } else {
        cardName.style.borderBottom = "2px solid #4ecf79"
        btn.disabled = false
        nameSpan.style.display = 'none'
        cardName.classList.add('validate')
    }
});


// CARD-NUMBER \\

const input = document.querySelector(".card-input-logo");


input.addEventListener('input', function () {
    const inputValue = input.value.replaceAll(' ', '');


    let regexMaster = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/
    let regexVisa = /^4[0-9]{12}(?:[0-9]{3})?$/
    let regexDiscover = /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/



    let test1 = regexMaster.test(inputValue)
    let test2 = regexVisa.test(inputValue)
    let test3 = regexDiscover.test(inputValue)

    if (test1) {
        input.style.backgroundImage = "url(images/mastercard.256x153.png)";
        return
    } else if (test2) {
        input.style.backgroundImage = "url(images/visa.png)";
        return
    }
    else if (test3) {
        input.style.backgroundImage = "url(images/Discover-Logo.png)";//6011123456789012
        return
    } else {
        input.style.backgroundImage = "url(images/Master-CardD.png)";
    }





    const separated = inputValue.match(/.{1,4}/g); // Split into groups of 4 digits
    input.value = separated.join(' '); // Add spaces for every 4 digits
});



const cardSpan = document.getElementById('card-span');

input.addEventListener('input', function () {
    const inputValue = input.value.replaceAll(' ', '');

    if (inputValue.match(/[^0-9]/)) {
        input.style.borderBottom = "2px solid red";
        input.style.backgroundImage = "url(images/error-logo.png)";
        cardSpan.style.display = 'block';
        cardSpan.style.color = 'red';
        input.classList.remove('validate');
        validateForm();
    } else if (inputValue.trim() === '') {
        input.style.borderBottom = '2px solid #9563FF';
        cardSpan.style.display = 'none'
        btn.disabled = false;
        input.classList.remove('validate');
    } else {
        cardSpan.style.display = 'none';
        input.style.borderBottom = "2px solid #4ecf79";
        input.classList.add('validate');
    }
});



// EXPIRY \\

const expiriy = document.querySelector('.card-input-mini');
const exSpan = document.getElementById('expiry-span');

//the next 2 event's change the type of input
expiriy.addEventListener('focus', function () {
    expiriy.type = 'date';
});
expiriy.addEventListener('focusout', function () {
    expiriy.type = 'text';
});


// makes sure u choose a valid date
expiriy.addEventListener('input', function () {
    let now = new Date();

    if (new Date(expiriy.value) < now) {
        expiriy.style.borderBottom = "2px solid red"
        expiriy.classList.remove('validate');
        exSpan.style.display = "block";
        validateForm();
        return;
    } else {
        exSpan.style.display = 'none';
        expiriy.style.borderBottom = "2px solid #4ecf79"
        btn.disabled = false;
    }
});


// CVC \\
//no more then 3-4 digit's
const regNumbersOnly = /^[0-9]{1,4}$/;
const cvc = document.querySelector('.card-input-cvc');
const cvcSpan = document.getElementById('cvc-span')

cvc.addEventListener('input', function () {
    if (regNumbersOnly.test(cvc.value)) {
        cvc.style.borderBottom = "2px solid #4ecf79" //grenn
        btn.disabled = false;
        cvcSpan.style.display = 'none'

    } else if (cvc.value.trim() === '') {
        cvcSpan.style.display = 'block'
        cvc.style.borderBottom = '2px solid red';
        btn.disabled = true;
    } else {
        cvcSpan.style.display = "block"
        cvc.style.borderBottom = "2px solid red"
        cvc.classList.remove('validate');
        validateForm();
    }
});




// DISCOUNT CODE \\
// 8 - uppercase letter's, 2 - numbers, 3 - uppercase letter's

const discount = document.getElementById('userDiscount');
const discountSpan = document.getElementById('Discount-span');


discount.addEventListener('focusout', function () {

    const regex1 = /^[A-Za-z]{8,8}$/
    const regex2 = /^[0-9]{2,2}$/
    const regex3 = /^[A-Z]{3,3}$/

    const discountArray = discount.value.split('-');

    let test1 = regex1.test(discountArray[0]);
    let test2 = regex2.test(discountArray[1]);
    let test3 = regex3.test(discountArray[2]);

    if (test1 & test2 & test3) {
        discount.style.borderBottom = "2px solid #4ecf79"
        discountSpan.style.display = 'none'
        btn.disabled = false;
    } else if (discount.value.trim() === '') {
        discount.style.borderBottom = '2px solid #9563FF';
        discountSpan.style.display = 'none';
        btn.disabled = false;
    } else {
        discount.style.borderBottom = "2px solid red";
        discountSpan.style.display = "block"
        discount.classList.remove('validate');
        validateForm();
        return;
    }
});



// PAY BUTTON\\

const form = document.querySelector('.card-form');
const btn = document.getElementById('btn');
const checkValid = document.querySelectorAll('.validate');
let isValid = true;

function validateForm() {

    isValid = true;
    for (let i = 0; i < checkValid.length; i++) {
        if (!checkValid[i].classList.contains('validate')) {
            isValid = false;
            break;
        }
    }

    if (isValid) {
        // Form is valid, enable the submit button
        btn.disabled = false;
    } else {
        // Form is invalid, disable the submit button
        btn.disabled = true;
    };

}


form.addEventListener('submit', function (event) {
    const cardName = document.querySelector('.card-input-name');
    const input = document.querySelector('.card-input-logo');
    const expiriy = document.querySelector('.card-input-mini');
    const cvc = document.querySelector('.card-input-cvc');
    const discount = document.getElementById('userDiscount');

    if (cardName.value == '' || input.value == '' || expiriy.value == '' || cvc.value == '' || discount.value == '') {
        btn.disabled = true;
        btn.disabled.color = '2px solid #9563ff8f'
    }
    event.preventDefault();
});