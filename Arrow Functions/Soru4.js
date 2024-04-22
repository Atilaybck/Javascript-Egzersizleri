//SORU 4
//Bir sayının faktöriyelini hesaplayan bir arrow function yazın.


// Arrow function kullanarak sayının faktöriyelini hesaplayan fonksiyon
const faktoriyelHesapla = (sayi) => {
    if (sayi === 0 || sayi === 1) {
      return 1;
    } else {
      return sayi * faktoriyelHesapla(sayi - 1);
    }
  };
  
  // Örnek kullanım
  const sayi = 5;
  const faktoriyel = faktoriyelHesapla(sayi);
  console.log(`Faktöriyel (${sayi}!) = ${faktoriyel}`); // Çıktı: Faktöriyel (5!) = 120