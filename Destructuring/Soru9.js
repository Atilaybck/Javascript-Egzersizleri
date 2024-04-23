// Bir dizi oluşturuyoruz
const vegetables = ['havuç', 'patates', 'domates', 'salatalık', 'biber'];

// Diziden destructuring kullanarak elemanları çıkarıyoruz
const [firstVegetable, secondVegetable, ...restVegetables] = vegetables;

// Ayıkılan elemanları kullanma
console.log(firstVegetable); // 'havuç'
console.log(secondVegetable); // 'patates'
console.log(restVegetables); // ['domates', 'salatalık', 'biber']