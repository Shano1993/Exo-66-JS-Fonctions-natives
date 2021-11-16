
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















