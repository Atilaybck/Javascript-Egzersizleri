/* MAPS NEDİR?
Çıktıda bir dizi döndüren fonksiyondur. */

// SORU 1 

// Öncelikle bir sayılar dizisi oluşturalım
const sayilar = [1, 2, 3, 4, 5];

// Her bir sayıyı iki katına çıkaran bir fonksiyon tanımlayalım
function ikiKatinaCikar(sayi) {
  return sayi * 2;
}

// Şimdi map() fonksiyonunu kullanarak her bir sayıyı iki katına çıkaralım
const ikiKatinaCikarilmisSayilar = sayilar.map(ikiKatinaCikar);

// Sonucu yazdıralım
console.log("İki katına çıkarılmış sayılar:", ikiKatinaCikarilmisSayilar);

//Çıktısı:
//İki katına çıkarılmış sayılar: [2, 4, 6, 8, 10]