
/*
    Entier
 */

let entier = document.getElementById('entier');
let i = 10;

entier.innerHTML = parseInt(entier.innerHTML) * i;
console.log(entier.innerHTML);

/*
    Flottant
 */

let flottant = document.getElementById('flottant');

flottant.innerHTML = parseFloat(flottant.innerHTML) * i + parseInt(entier.innerHTML);
console.log(flottant.innerHTML);

/*
    Non-Numérique
 */

let nonNumerique = document.getElementById('non-numerique')
let result = parseInt(nonNumerique.innerHTML);

if(isNaN(nonNumerique.innerHTML)) {
    nonNumerique.innerHTML = 0;
}

/*
    Random
 */

let aleatoire = document.getElementById('random');
for (let x = 0; x < 1; x++) {
    aleatoire.innerHTML = Math.random();
}

/*
    Trunc
 */

let trunc = document.getElementById('trunc');
trunc.innerHTML = Math.trunc(trunc.innerHTML);

/*
    Replace
 */

let remplace = document.getElementById('replace');
remplace.innerHTML = remplace.innerHTML.replace( 'world ', 'Hanotiau Stefan');

console.log(random());



















