const phrase = "EPICODE è fantastico!";

const ePosition = phrase.indexOf("è");
console.log(ePosition);

const itsFantastic = phrase.slice(ePosition);
console.log(itsFantastic);

const fantasticPosition = phrase.indexOf("fantastico");
const fantastic = phrase.slice(fantasticPosition, -3);

const codePosition = phrase.indexOf("CODE");
const word = "CODE";
const code = phrase.slice(codePosition, codePosition + word.length);

console.log(fantastic);
console.log(code);

const fantasticode = fantastic + code.toLowerCase();
console.log(fantasticode);

// .split()
// per poter usare un qualsiasi metodo degli array su una stringa dovremmo convertirla in un vero array di caratteri
// per farlo arriva in soccorso un metodo utilissimo: .split()

// split vuole sapere attorno a quale carattere cominciare a segmentare la stringa
// nel nostro caso se esplicitiamo di voler separare le parole sugli spazi faremo:

const wordsArr = phrase.split(" "); // inserisco il carattere di spazio come argomento, ottengo un array di singole parole
console.log(wordsArr);
const lettersArr = phrase.split(""); // mi crea un array con tutti i caratteri (spazi inclusi) separati da virgole
console.log(lettersArr);

let newStr = "";

for (let i = 0; i < lettersArr.length; i++) {
  const char = lettersArr[i];
  if (char !== " " && char !== "!") {
    newStr += char;
  }
}

console.log(newStr);

const phrase2 = "Buongiorno signori e signorine, benvenuti signori";
const words = phrase2.split(" ");

let countSignori = 0;
const signoriArr = [];

for (let i = 0; i < words.length; i++) {
  if (words[i].includes("signori")) {
    countSignori++; // aggiungo +1 se trovo una parola che include "signori" tra i suoi caratteri

    signoriArr.push(words[i]); // inserisco la parola che corrisponde alla ricerca in un array che poi trasformerò a stringa
  }
}

console.log("la tua stringa contiene " + countSignori + " signori o signorine");
console.log(signoriArr.join("")); // il metodo join vi permette di ricomporre una stringa a partire da un array,
// permette anche di creare dei separatori in base all'argomento passato, se contiene un simbolo questo verrà usato nell'unione delle stringhe
