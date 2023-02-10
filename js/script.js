'use strict';

const mainEl = document.querySelector('.main');

const passwordDiv = document.createElement('div');
passwordDiv.classList.add('password-div');

const passwordEl = document.createElement('input');
passwordEl.classList.add('password');
passwordEl.setAttribute('placeholder', 'Generate password');
passwordEl.addEventListener('keypress', (el) => el.preventDefault());
passwordEl.addEventListener('focus', (el) => {
    navigator.clipboard.writeText(passwordEl.value);
});

const copyBtn = document.createElement('button');
copyBtn.classList.add('password-btn');
copyBtn.innerText = 'Copy';
copyBtn.addEventListener('click', (el) => {
    passwordEl.select();
    passwordEl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordEl.value);
});

const generateBtn = document.createElement('button');
generateBtn.classList.add('password-btn');
generateBtn.innerText = 'Generate';
generateBtn.addEventListener('click', (el) => {
    let password = generatePassword(12);
    passwordEl.value = password;
});

function generatePassword(passwordLength) {
    const numberChars = '0123456789';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = upperChars.toLocaleLowerCase();
    const symbolChars = '!#$^-_+';
    const allChars = numberChars + upperChars + lowerChars + symbolChars;

    let randomStr = '';

    for (let i = 0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * allChars.length);
        randomStr += allChars.substring(randomNum, randomNum+1);
    }
   
    return randomStr;
}

mainEl.appendChild(passwordEl);
mainEl.appendChild(passwordDiv);
passwordDiv.appendChild(copyBtn);
passwordDiv.appendChild(generateBtn);

