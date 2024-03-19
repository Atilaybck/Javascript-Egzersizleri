// Öncelikle bir isimler dizisi oluşturalım
const isimler = ["Ahmet", "Ayşe", "Mehmet", "Fatma"];

// Her bir ismi büyük harflerle yazdıran bir fonksiyon tanımlayalım
function buyukHarfeCevir(isim) {
  return isim.toUpperCase();
}

// Şimdi map() fonksiyonunu kullanarak her bir ismi büyük harflerle yazdıralım
const buyukHarfIsimler = isimler.map(buyukHarfeCevir);

// Sonucu yazdıralım
console.log("Büyük harf isimler:", buyukHarfIsimler);

//Çıktısı:
// Büyük harf isimler: ["AHMET", "AYŞE", "MEHMET", "FATMA"]