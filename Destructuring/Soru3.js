// Bir kullanıcı nesnesi
const user = {
    name: 'Alice',
    age: 25,
    address: {
      city: 'Ankara',
      country: 'Turkey'
    }
  };
  
  // Destructuring kullanarak kullanıcının adını ve yaşını ayırma
  const { name, age } = user;
  
  // İç içe geçmiş nesnelerden değişkenleri çıkarma
  const { address: { city, country } } = user;
  
  // Ayırılan özellikleri kullanma
  console.log(name); // 'Alice'
  console.log(age); // 25
  console.log(city); // 'Ankara'
  console.log(country); // 'Turkey'