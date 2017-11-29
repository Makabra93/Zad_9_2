// scripts.js

// OPCJA PIERWSZA: 

function getTriangleArea(a, h) {
    if ( a <= 0 || h <= 0 ) {
        return 'Nieprawidłowe dane';
    }

    return a*h/2;  
}

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(30, 52);
var triangle3Area = getTriangleArea(-5, 10);

console.log('1 Pole = ' + triangle1Area);
console.log('2 Pole = ' + triangle2Area);
console.log('3 Pole = ' + triangle3Area);


// OPCJA DRUGA :

function getTriangle2Area(a, h) {
return (a > 0 && h > 0) ? a * h / 2 : "nieprawidlowe dane";
}  

console.log(getTriangle2Area(10, 15));
