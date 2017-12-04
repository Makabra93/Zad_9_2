// scripts.js

var maleNames = ['Marek', 'Zbigniew', 'Mateusz', 'Gabriel', 'Ignacy'];
var femaleNames = ['Kasia', 'Ania', 'Patrycja', 'Zosia', 'Klara'];
var allNames = maleNames.concat(femaleNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
    console.log('Dodano imię: ' + newName);
    allNames.push(newName);
} 
else {
    console.log('Imię \"' + newName + '\" już istnieje!');
}

console.log(allNames.join(' / '));

