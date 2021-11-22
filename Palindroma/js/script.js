let userWord = prompt('Immetti una parola');
// non serve la parola la possiedo già nell'ordine corretto
// for(i=0;i<userWord.length; i++){
//     console.log(userWord[i]);
// }
// funzione inverte la parola
// perciò input funzione parola nella variabile attribuita a prompt e output alla variabile di uscita della funzione
let reverseWord ='';
function inverti(userWord){
    for( let i = userWord.length -1 ; i>= 0; i--){
        // IN questo modo elenco solo una lettera alla volta e non tutta la stringa
        // let reverseWord = userWord[i]; 
        // in questo modo invece sommo le parole per darmi una parola nuova 
       reverseWord += userWord[i];
    }
    return reverseWord;
}
let parolaInversa = inverti(userWord);
// console.log(parolaInversa);
// if( parolaInversa === userWord ){
//     alert('la parola è palindroma');
// }else{
//     alert('la parola non è palindroma');
// }
// provo a creare una funzione per la comparazione delle stringhe
let parola1 = '';
let parola2 = '';
let Palindroma = 0;
function siPalindroma(parola1 , parola2 ){
    if( parola1 === parola2 ){
        alert('la parola è palindroma');
    }else{
        alert('la parola non è palindroma');
    }
    // return Palindroma;
}
let output1 = siPalindroma( userWord , parolaInversa);
console.log(output1);