//definisco funzione per generare numero random compreso tra un min e un max
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//funzione per stabilire se il valore è pari o dispari
function pariDispari(valore) {

    let ritorno;

    if (valore % 2 == 0) {
        ritorno = "pari";
    } else {
        ritorno = "dispari";
    }

    return ritorno;

}
 // inizializzo variabili richiamando oggetti html
let sceltaUtente = document.getElementById('select');
let numeroUtente = document.getElementById('numero');
let button = document.getElementById('button');

let esito = document.getElementById('risultato');
//aggiungo un ascoltatore di eventi a button
button.addEventListener('click',
function() {
    
    let casuale = random(1,5);
    //inserisco parseInt nella sommatoria perchè altrimenti considera il valore inserito come stringa e non fa somma ma concatenazione
    let somma = parseInt(numeroUtente.value) + casuale;
    console.log(somma);
    let risultato = pariDispari(somma);
    console.log(risultato);
    
    if (sceltaUtente.value == risultato) {
        esito.innerHTML = 'hai vinto';
    } else {
        esito.innerHTML = 'hai perso';
    }

}

)



