//creo una funzione per stabilire se una parola è palindroma
function invertiParola(parola) {
    //definisco variabile che voglio venga restituita
    let parolaInvertita = '';
     //inizializzo ciclo while all'ultima posizione della stringa richiesta
    let i = parola.length - 1;
    //definisco il ciclo while fino alla posizione 0 della stringa
    //compongo la parola invertita grazie a questo ciclo
    while (i >= 0) {
        parolaInvertita += parola[i];
        i--;
    }
    //chiedo che dalla funzione mi venga restituito questo valore
    return parolaInvertita;
} 

//chiediamo all'utente di inserire una parola
let request = prompt('inserisci una parola');
//grazie alla nostra funzione invertiamo la parola
let parolaInversa = invertiParola(request);
//confrontiamo le parole con un if
if (request == parolaInversa){

    alert('La parola è palindroma');

} else {

    alert('La parola non è palindroma');

}
