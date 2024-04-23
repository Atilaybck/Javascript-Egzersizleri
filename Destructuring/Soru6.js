// Bir dizi oluşturuyoruz
const numbers = [1, 2, 3, 4, 5];

// Diziden destructuring kullanarak elemanları çıkarıyoruz
const [first, second, ...rest] = numbers;

// Ayıkılan elemanları kullanma
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]