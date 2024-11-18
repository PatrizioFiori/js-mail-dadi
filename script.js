/*
Mail: 
Creo un'array con varie mail che possono accedere. Tramite una if all'interno di un ciclo controllo se la mail che verrà fornita dall'utente può accedere o meno e stampo il conseguente output
*/


let mail = ["mario@gmail.com", "marco@gmail.com", "luca@gmail.com", "paolo@gmail.com" , "matteo@gmail.com"];
let mailUtente;
let mailUtentePresente = false
let tentativiMassimi = 0

while (mailUtentePresente == false){
    mailUtente = prompt("Inserisci la tua mail");
    if (typeof mailUtente === 'string' && mail.includes(mailUtente)){
        mailUtentePresente = true
        console.log ("Accesso consentito")
    } else {
        console.log("Accesso non consentito");
        tentativiMassimi++
        if(tentativiMassimi == 5) {
            console.log("Tentativi d'accesso falliti!");
            break
            
        }
    }
}

/*
Dadi:
Viene generato randomicamente un numero da 1 a 6 (senza virgola) e ne viene inserito uno dal giocatore tramite prompt e viene calcolato il più alto stabilendo di conseguenza il vincitore
*/


let dadiLanciatiDalPc = Math.floor(Math.random() * 6) + 1;
let dadiLanciatiDalGiocatore = Math.floor(Math.random()* 6 ) +1;
let stessoRisultato = false

while (not)
if (dadiLanciatiDalGiocatore > dadiLanciatiDalPc) {
    console.log (`vince il giocatore con ${dadiLanciatiDalGiocatore} contro ${dadiLanciatiDalPc} del pc`)
} else if ( dadiLanciatiDalPc > dadiLanciatiDalGiocatore){
    console.log (`vince il pc con ${dadiLanciatiDalPc} contro ${dadiLanciatiDalGiocatore} del giocatore`)
} else {
    console.log (`Il giocatore ha rollato ${dadiLanciatiDalGiocatore} e il pc ha rollato ${dadiLanciatiDalPc} ottenendo quindi lo stesso risultato`)
}

