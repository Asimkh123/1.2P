function toUpperCase() {
    let inputVal = document.getElementById('someInput').value;
    inputVal = inputVal.toUpperCase();
    document.getElementById('resultBox').innerHTML = inputVal;
}

function toLowerCase() {
    let inputValue = document.getElementById('someInput').value;
    inputValue = inputValue.toLowerCase();
    document.getElementById('resultBox').innerHTML = inputValue;
}

function toTitleCase() {
    let inputValue = document.getElementById('someInput').value;
    inputValue = inputValue.toLowerCase().split(' ');
    for (let i = 0; i < inputValue.length; i++) {
        inputValue[i] = inputValue[i].charAt(0).toUpperCase() + inputValue[i].substring(1);
    }
    document.getElementById('resultBox').innerHTML = inputValue.join(' ');
}

// function to replace the word 'hate' with 'love'
function replaceContent() {
    let inputValue = document.getElementById('someInput').value;
    document.getElementById('resultBox').innerHTML = inputValue.replace(/hate/gi, 'love');
}

function highlightContent() {
    let searchText = prompt("Please enter the string or character you are searching for:");
    if (searchText) {
        let inputValue = document.getElementById('someInput').value;
        let regex = new RegExp(searchText, 'gi');
        let highlightedText = inputValue.replace(regex, function(match) {
            return '<span class="highlight">' + match + '</span>';
        });
        document.getElementById('resultBox').innerHTML = highlightedText;
    }
}


//NUMBER METHODS

function doubleNumber() {
    let inputValue = parseFloat(document.getElementById('numberInput').value);
    let result = inputValue * 2;
    document.getElementById('resultBox2').innerHTML = result;
}

function halfNumber() {
    let inputValue = parseFloat(document.getElementById('numberInput').value);
    let result = inputValue / 2;
    document.getElementById('resultBox2').innerHTML = result;
}

function squareNumber() {
    let inputValue = parseFloat(document.getElementById('numberInput').value);
    let result = inputValue * inputValue;
    document.getElementById('resultBox2').innerHTML = result;
}

function squareRootNumber() {
    let inputValue = parseFloat(document.getElementById('numberInput').value);
    let result = Math.sqrt(inputValue);
    document.getElementById('resultBox2').innerHTML = result;
}

function roundNumber() {
    let inputValue = parseFloat(document.getElementById('numberInput').value);
    let result = Math.round(inputValue);
    document.getElementById('resultBox2').innerHTML = result;
}

//ARRAY METHODS
let array = [];

function addToArray() {
    let arrayInputValue = document.getElementById('arrayInput').value;
    array.push(arrayInputValue);
    document.getElementById('resultBox3').innerText = array.join(', ');
}

function removeLast() {
    array.pop();
    document.getElementById('resultBox3').innerText = array.join(', ');
}

function getArrayLength() {
    let length = array.length;
    document.getElementById('resultBox3').innerText = "Array Length: " + length;
}

function sortArray() {
    array.sort();
    document.getElementById('resultBox3').innerText = array.join(', ');
}

function reverseArray() {
    array.reverse();
    document.getElementById('resultBox3').innerText = array.join(', ');
}

//DATE METHODS
function formatSelectedDate() {
    const selectedDate = document.getElementById('dateInput').value;
    if (selectedDate) {
        const [year, month, day] = selectedDate.split('-');
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const formattedMonth = monthNames[parseInt(month) - 1];

        const ordinalDay = getOrdinal(day);
        
        const formattedDate = `${ordinalDay} ${formattedMonth} ${year}`;
        document.getElementById('resultBox4').innerText = formattedDate;
    } else {
        document.getElementById('resultBox4').innerText = "No date selected";
    }
}

function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}


function getDay() {
    const dateInput = document.getElementById('dateInput').value;
    const dateObj = new Date(dateInput);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById('resultBox4').innerText = daysOfWeek[dateObj.getDay()];
}

function addDays() {
    const dateInput = document.getElementById('dateInput').value;
    const dateObj = new Date(dateInput);
    const daysToAdd = parseInt(prompt("How many days do you want to add?"));
    dateObj.setDate(dateObj.getDate() + daysToAdd);
    document.getElementById('resultBox4').innerText = dateObj.toDateString();
}

function subtractDays() {
    const dateInput = document.getElementById('dateInput').value;
    const dateObj = new Date(dateInput);
    const daysToSubtract = parseInt(prompt("How many days do you want to subtract?"));
    dateObj.setDate(dateObj.getDate() - daysToSubtract);
    document.getElementById('resultBox4').innerText = dateObj.toDateString();
}

function getMonthName() {
    const dateInput = document.getElementById('dateInput').value;
    const dateObj = new Date(dateInput);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById('resultBox4').innerText = months[dateObj.getMonth()];
}

// FUNCTION METHODS
function calculateArea(width, height) {
    return width * height;
}

function displayArea() {
    const width = parseFloat(document.getElementById('widthInput').value);
    const height = parseFloat(document.getElementById('heightInput').value);
    const area = calculateArea(width, height);
    document.getElementById('areaResultBox').innerText = `Area: ${area} cm²`;
}

function checkPalindrome() {
    const textValue = document.getElementById('palindromeInput').value;
    const sanitizedText = textValue.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    const isPalindrome = sanitizedText === sanitizedText.split("").reverse().join("");
    if (isPalindrome) {
        document.getElementById('palindromeResultBox').innerText = "The text is a palindrome!";
    } else {
        document.getElementById('palindromeResultBox').innerText = "The text is not a palindrome.";
    }
}

