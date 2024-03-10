// SORU 7
// Bir dizideki sayıları toplayıp sonucu ekrana yazdırın.

let numbers = [1, 2, 3, 4, 5];

let sum = 0;

numbers.forEach(function(number) {
    sum += number;
});

console.log("Toplam: " + sum);