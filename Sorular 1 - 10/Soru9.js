/*
SORU - 9 :
Bir dizi içindeki çift sayıları bulan bir fonksiyon yazın. Ardından bu fonksiyonu kullanarak bir dizi içindeki çift sayıları ekrana yazdırın.
*/

// Çift sayıları bulan fonksiyon
function cifSayilariBul(dizi) {
    var ciftSayilar = [];

    for (var i = 0; i < dizi.length; i++) {
        if (dizi[i] % 2 === 0) {
            ciftSayilar.push(dizi[i]);
        }
    }

    return ciftSayilar;
}

// Bir dizi oluştur
var sayiDizisi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Çift sayıları bul ve ekrana yazdır
var bulunanCiftSayilar = cifSayilariBul(sayiDizisi);
console.log("Çift Sayılar:", bulunanCiftSayilar);