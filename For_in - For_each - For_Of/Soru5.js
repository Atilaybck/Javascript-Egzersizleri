// SORU 5
// Bir dizi içindeki her elemanın karesini alıp ekrana yazdırın.

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    let square = number * number;
    console.log(square);
});