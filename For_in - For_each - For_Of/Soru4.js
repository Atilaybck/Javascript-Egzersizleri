//SORU 4 
//Bir dizi içindeki çift sayıları bulup ekrana yazdırın (forEach fonksiyonu kullanarak).

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(number) {
    if (number % 2 === 0) {
        console.log(number);
    }
});