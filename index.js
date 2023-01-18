const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*()_+~`";

const passBox = document.getElementById("pass-box");
const passLength = document.getElementById("total-char");
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

function getRandom(dataSet) {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

function generatePassword(password = "") {
    if (upperCase.checked) {
        password += getRandom(upperSet);
    }
    if (lowerCase.checked) {
        password += getRandom(lowerSet);
    }
    if (numbers.checked) {
        password += getRandom(numberSet);
    }
    if (symbols.checked) {
        password += getRandom(symbolSet);
    }
    
    if(password.length < passLength.value) {        
        return generatePassword(password);
    }
    passBox.innerText = truncate(password, passLength.value);
}

function truncate(password, len) {
    if(password.length > len) {
        return password.substr(0, len);
    } else {
        return password;
    }
}

document.getElementById("btn").addEventListener("click", function() {    
    generatePassword();
});

generatePassword();