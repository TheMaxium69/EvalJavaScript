"use strict";

let composers = [
    'Mozart',
    'Debussy',
    'Juul',
    'Ravel',
    'Berlioz',
    'Schumann',
];

// Boucle for
for (let i = 0; i < composers.length; i++) {
    console.log('Element ' + i + ' : ' + composers[i]);
}

// Boucle forOf
let i = 0;
for (const value of composers) {
    console.log('Element ' + i + ' : ' + value);
    i++;
}

// Boucle While
let j = 0;
while (j < composers.length) {
    console.log('Element ' + j + ' : ' + composers[j]);
    j++;
}

let formUser = -1;
while (isNaN(formUser) || formUser < 6 || formUser > 12) {
    formUser = prompt('Écrivez un nombre entre 6 et 12 (inclus)');
}

console.log(composers[formUser-6]);

