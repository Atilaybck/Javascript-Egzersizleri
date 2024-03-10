//SORU 12
//Bir dizi içindeki elemanların toplamını bulun.

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let index in numbers) {
    sum += numbers[index];
}

console.log("Toplam: " + sum);