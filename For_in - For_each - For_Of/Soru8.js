// SORU 9 
// Bir dizi içindeki tek sayıları ekrana yazdırın.

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    if (number % 2 !== 0) {
        console.log(number);
    }
});