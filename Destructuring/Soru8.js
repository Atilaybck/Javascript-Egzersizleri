// Bir dizi oluşturuyoruz
const animals = ['kedi', 'köpek', 'kuş', 'tavşan', 'balık'];

// Diziden destructuring kullanarak elemanları çıkarıyoruz
const [firstAnimal, ...restAnimals] = animals;

// Ayıkılan elemanları kullanma
console.log(firstAnimal); // 'kedi'
console.log(restAnimals); // ['köpek', 'kuş', 'tavşan', 'balık']