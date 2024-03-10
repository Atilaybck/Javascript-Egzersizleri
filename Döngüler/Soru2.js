// SORU 2
// 5 elemanlı bir dizi oluşturun ve bu diziyi ekrana yazdırın. Ardından dizinin toplamını hesaplayın.


// 5 elemanlı bir dizi oluştur
var dizi = [3, 7, 12, 5, 8];

// Diziyi ekrana yazdır
console.log("Dizi:", dizi);

// Dizinin toplamını hesapla
var toplam = 0;
for (var i = 0; i < dizi.length; i++) {
    toplam += dizi[i];
}

// Toplamı ekrana yazdır
console.log("Dizinin toplamı:", toplam);