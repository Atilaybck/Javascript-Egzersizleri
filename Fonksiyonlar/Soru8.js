// SORU 8
// Bir dizi içindeki en büyük ve en küçük sayıları bulan bir JavaScript fonksiyonu yazın.


function enBuyukEnKucukBul(dizi) {
    var enBuyuk = Math.max(...dizi);
    var enKucuk = Math.min(...dizi);

    return { enBuyuk, enKucuk };
}

// Bir dizi oluştur
var sayiDizisi = [13, 7, 25, 3, 18, 9];

// En büyük ve en küçük sayıları bul
var bulunanSayilar = enBuyukEnKucukBul(sayiDizisi);
console.log("En Büyük Sayı:", bulunanSayilar.enBuyuk);
console.log("En Küçük Sayı:", bulunanSayilar.enKucuk);