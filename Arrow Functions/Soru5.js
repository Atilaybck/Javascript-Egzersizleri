// SORU 5
// Verilen bir dizideki sayıların toplamını bulan bir arrow function yazın.


// Arrow function kullanarak dizideki sayıların toplamını bulan fonksiyon
const toplamBul = (dizi) => {
    return dizi.reduce((toplam, sayi) => toplam + sayi, 0);
  };
  
  // Örnek kullanım
  const sayilar = [1, 2, 3, 4, 5];
  const toplam = toplamBul(sayilar);
  console.log(`Dizideki sayıların toplamı: ${toplam}`); // Çıktı: Dizideki sayıların toplamı: 15