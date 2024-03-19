// Öncelikle bir kelime dizisi oluşturalım
const kelimeler = ["merhaba", "dünya", "javascript", "programlama"];

// Her bir kelimenin uzunluğunu hesaplayan bir fonksiyon tanımlayalım
function kelimeUzunlugu(kelime) {
  return kelime.length;
}

// Şimdi map() fonksiyonunu kullanarak her bir kelimenin uzunluğunu hesaplayalım
const kelimeUzunluklari = kelimeler.map(kelimeUzunlugu);

// Sonucu yazdıralım
console.log("Kelime uzunlukları:", kelimeUzunluklari);


//Çıktısı:
// Kelime uzunlukları: [7, 5, 10, 11]