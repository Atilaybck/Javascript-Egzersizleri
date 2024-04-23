// Bir kullanıcı nesnesi
const user = {
    isim: 'John',
    yas: 30,
    sehir: 'New York'
  };
  
  // Destructuring kullanarak kullanıcı özelliklerini ayırma
  const { isim, yas, sehir } = user;
  
  // Ayırılan özellikleri kullanma
  console.log(isim); // 'John'
  console.log(yas); // 30
  console.log(sehir); // 'New York'