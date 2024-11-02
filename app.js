



var passBox = document.getElementById("inputBox");
var number_Che = document.getElementById("numCheck");
var lowerCase_check = document.getElementById("lowerCase_check");
var upperCase_check = document.getElementById("upperCase_check");
var symbol_check = document.getElementById("symbole_check");
var inputSlider = document.getElementById("inputSlider");
var sliderValue = document.getElementById("sliderValue");
var genBtn = document.getElementById("genBtn");
var plusBtn = document.getElementById("plusBtn");

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
    updatePassword();
});

genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
});

//      plus btn 
function plus_Btn(){
   
    var increment = ++inputSlider.value;
    sliderValue.textContent = increment;
   increment = updatePassword()
}
//      minus btn 
function minus_Btn(){
    var decrement = --inputSlider.value;
    sliderValue.textContent = decrement;
    decrement = updatePassword()
}

// Characters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "!@#$%^&*";

//  generate the password
function generatePassword() {
    var genPassword = "";
    var allCharacters = "";

    if (lowerCase_check.checked) {
        allCharacters += lowerCase;
    }
    if (upperCase_check.checked) {
        allCharacters += upperCase;
    }
    if (number_Che.checked) {
        allCharacters += numbers;
    }
    if (symbol_check.checked) {
        allCharacters += symbols;
    }
    if (allCharacters === "") {
        return genPassword;
    }

    for (var i = 1; i <= inputSlider.value; i++) {
        genPassword += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
    return genPassword;
}

function updatePassword() {
    passBox.value = generatePassword();
}

lowerCase_check.addEventListener('change', updatePassword);
upperCase_check.addEventListener('change', updatePassword);
number_Che.addEventListener('change', updatePassword);
symbol_check.addEventListener('change', updatePassword);


