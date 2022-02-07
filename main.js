let message = document.getElementById("message")
let numberBox = document.getElementById("numberBox")

// Funzione per ottenere x numeri casuali diversi tra loro
function ruotaDiMilano (totale) {
    let numbers = [];
    while(numbers.length<totale) {
        let randomNumber = Math.floor(Math.random() * 100);
        if(!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

// Funzione che prende come parametro un array di numeri e chiede all'utente di inserire tot numeri in base a quanto è lungo l'array
function sameAmount(array) {
    let remembered = [];
    while(remembered.length < array.length) {
        let number = parseInt(prompt("Inserisci un numero"));
        if(isNaN(number)) {
            alert("Non hai inserito un numero");
        } else {
            remembered.push(number);
        }
    }
    return remembered;
}

// Funzione che dati due array di numeri della stessa lunghezza come parametri ne restituisce un terzo che include i numeri in comune
function comparison(primo, secondo) {
    let common = [];
    for (let i = 0; i < primo.length; i++) {
        if(secondo.includes(primo[i])) {
            common.push(primo[i]);
        }
    }
    return common;
}

// Genero cinque numeri casuali e li mostro
let randomNumbers = ruotaDiMilano(5);
numberBox.innerText = randomNumbers;

// Cancello i numeri dallo schermo
setTimeout(function() {
    message.innerHTML = "";
    numberBox.innerHTML = "Inserisci i numeri";
}, 30000);

// Richiedo i numeri e mostro quelli indovinati
setTimeout(simonSays, 31000);
function simonSays(primoArray) {
    let secondoArray = sameAmount(randomNumbers);
    let ricordati = comparison(randomNumbers, secondoArray);
    message.innerHTML = `Questi sono i ${ricordati.length} numeri che hai ricordato`
    if(ricordati.length == 0) {
        numberBox.innerHTML = "&#128076;"
    } else {
        numberBox.innerHTML = ricordati;
    }

}

