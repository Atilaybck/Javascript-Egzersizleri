// Bir dizi oluşturuyoruz
const fruits = ['elma', 'armut', 'muz', 'çilek', 'portakal'];

// Diziden destructuring kullanarak elemanları çıkarıyoruz
const [firstFruit, secondFruit, ...restFruits] = fruits;

// Ayıkılan elemanları kullanma
console.log(firstFruit); // 'elma'
console.log(secondFruit); // 'armut'
console.log(restFruits); // ['muz', 'çilek', 'portakal']