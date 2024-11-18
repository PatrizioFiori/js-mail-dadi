/*
Mail: 
Creo un'array con varie mail che possono accedere. Tramite una if all'interno di un ciclo controllo se la mail che verrà fornita dall'utente può accedere o meno e stampo il conseguente output
*/



/* VERSIONE CON FOR */

let mail = ["mario@gmail.com", "marco@gmail.com", "luca@gmail.com", "paolo@gmail.com" , "matteo@gmail.com"];
let mailUtente = "";
let mailUtentePresente = false
let tentativiMassimi = 0

while (tentativiMassimi < 5 && !mailUtentePresente) {
    mailUtente = prompt("Inserisci la tua @gmail.com valida");
        for (let i = 0; i < mail.length; i++) {
            if (mail[i] === mailUtente) {
                console.log("Accesso consentito");
                mailUtentePresente = true;
                break; 
            }
        }
        if (!mailUtentePresente) {
            console.log("Accesso vietato!");
            tentativiMassimi++;
        }
    }

    if (tentativiMassimi == 5) {
        console.log("Tentativi d'accesso esauriti");
    }



/* VERSIONE CON INCLUDES */
/* 
let mail = ["mario@gmail.com", "marco@gmail.com", "luca@gmail.com", "paolo@gmail.com" , "matteo@gmail.com"];
let mailUtente = "";
let mailUtentePresente = false
let tentativiMassimi = 0

while (tentativiMassimi < 5 && !mailUtentePresente){
    mailUtente = prompt("Inserisci la tua @gmail.com valida"); 
    if (mailUtente.includes("@gmail.com")) {
        if (mail.includes(mailUtente)){
            console.log("Accesso consentito"); 
            mailUtentePresente = true           
        } else {
            console.log ("Accesso vietato !");
            tentativiMassimi++
        }
    } else {
        console.log ("inserisci una mail valida !");
        tentativiMassimi++
    }
    if (tentativiMassimi == 5) {console.log("Tentativi d'accesso esauriti");
    }
}
*/





/* -------------------------------------------------------------- */

/*
Dadi:
Viene generato randomicamente un numero da 1 a 6 (senza virgola) e ne viene inserito uno dal giocatore tramite prompt e viene calcolato il più alto stabilendo di conseguenza il vincitore
*/

let dadiLanciatiDalPc = Math.floor(Math.random() * 6) + 1;
let dadiLanciatiDalGiocatore = Math.floor(Math.random()* 6 ) +1;

if (dadiLanciatiDalGiocatore > dadiLanciatiDalPc) {
    console.log (`vince il giocatore con ${dadiLanciatiDalGiocatore} contro ${dadiLanciatiDalPc} del pc`)
} else if ( dadiLanciatiDalPc > dadiLanciatiDalGiocatore){
    console.log (`vince il pc con ${dadiLanciatiDalPc} contro ${dadiLanciatiDalGiocatore} del giocatore`)
} else {
    console.log (`Il giocatore ha rollato ${dadiLanciatiDalGiocatore} e il pc ha rollato ${dadiLanciatiDalPc} ottenendo quindi lo stesso risultato`)
}