// FUNZIONI
// Una funzione è un blocco di codice predefinito che può venire richiamato (o eseguito) più di una volta

// permette di non ripetere porzioni di codice sempre uguale e quindi di aderire all'approccio DRY - Don't Repeat Yourself
// lavoreremo con blocchi di codice riutilizzabile
// che POSSONO ricevere degli INPUT
// e POSSONO tornare degli OUTPUT

// defifiniamo una semplice funzione senza input e senza output

// FUNZIONI VOID
// 1) DEFINIZIONE DI FUNZIONE
function bark() {
  console.log("BAU");
  console.log("BAU");
  console.log("BAU");
}

// 2) ESECUZIONE DI FUNZIONE
bark(); // produce 3 log in console
console.log(bark()); // cercare di leggere il valore di ritorno di bark produce => undefined

function barkWithReturn() {
  return "WOOOFFF";
  console.log("NON MI VEDRETE MAIII AHAHAHAHAH");
}

const doggieBarks = barkWithReturn() + "!!!";
console.log(doggieBarks);

const doggieAsks = barkWithReturn() + "???";
console.log(doggieAsks);

console.log(typeof barkWithReturn()); // mi restituisce "string"

let total = 0;

function sumExternal() {
  total += 1;
}

console.log("primo total", total);

sumExternal();
console.log("secondo total", total);
sumExternal();
console.log("terzo total", total);
sumExternal();
console.log("quarto total", total);

// FUNZIONI FRUTTIFERE o FRUITFUL FUNCTIONS (quelle che ritornano qualcosa, un output)

function sum() {
  const result = 10 + 5;
  return result;
}

// console.log(result); // result nel contesto esterno NON ESISTE
// l'unico modo per leggere result è quello di usare un return nella funzione per poter fare "uscire" il valore di result
// il return serve anche a portarsi "fuori" un valore, nel contesto esterno

// a questo punto possiamo trattare la chiamata di funzione come il valore che lei ritorna
console.log(sum());

const summed = sum() + 5;
console.log(summed);

sumExternal();
console.log("quinto total", total);

function benchmarkScore() {
  const score = 50;
  return score;
}

function composeCertificate() {
  const student = {
    name: "Antonio",
    surname: "Rossi",
    batch: "FS0523A",
    module: "HTML & CSS"
  };

  const certificate = `${student.name} ${student.surname}, sei nel batch ${student.batch}, 
  hai conseguito il certificato per ${student.module} e hai ottenuto una valutazione di ${benchmarkScore()}%`;

  return certificate;
}

// alert(composeCertificate());

// PARAMETRI DI UNA FUNZIONE

function sumWithParameters(num1, num2, num3) {
  console.log("num1", num1);
  console.log("num2", num2);
  console.log("num3", num3);

  // controlliamo l'esistenza di tutti e 3 i parametri, se anche uno di loro arriva undefined finiremo nell'else
  if (num1 && num2 && num3) {
    // dopo aver controllato che esistano controlliamo che siano di tipo numero, altrimenti finiamo nell'else
    if (typeof num1 === "number" && typeof num2 === "number" && typeof num3 === "number") {
      const result = num1 + num2 + num3;
      return result;
    } else {
      return "attento che non hai passato dei numeri";
    }
  } else {
    return "stai attento che non hai inserito tutti i valori necessari";
  }
}

const functionResult = sumWithParameters(10);
const functionResult2 = sumWithParameters(15, 1);
const functionResult3 = sumWithParameters(3, 8, 10);
const functionResult4 = sumWithParameters("10", "25", "1");
console.log(functionResult);
console.log(functionResult2);
console.log(functionResult3);
console.log(functionResult4);

// raccogliamo i 3 valori dall'utente tramite interfaccia prompt, e contestualmente convertiamo le stringhe del prompt in numeri
// const userNum1 = parseInt(prompt("Inserisci il primo numero"));
// const userNum2 = parseInt(prompt("Inserisci il secondo numero"));
// const userNum3 = parseInt(prompt("Inserisci il terzo numero"));

// utilizziamo i 3 numeri come i 3 argomenti passati a sumWithParameters
// const functionResult5 = sumWithParameters(userNum1, userNum2, userNum3);
// console.log("PROMPT RESULTS", functionResult5);

// altro esempio di utilizzo di parametri
// function greet(epicoderName, char) {
//   console.log("Ciao Epicoder! il tuo nome è", epicoderName + char);
// }

// metodo un po' più solido per creare funzioni senza accidentali sovrascritture e senza hoisting
const greet = function (epicoderName, char) {
  console.log("Ciao Epicoder! il tuo nome è", epicoderName + char);
};

greet("Stefano", "!");
greet("Vittorio", "?");
greet("Giordano", ".");
greet("Gianni", "...");
greet("Federico", " #ciao");
