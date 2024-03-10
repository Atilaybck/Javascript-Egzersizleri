// SORU 9
// Bir dizi içindeki en büyük sayıyı bulan bir JavaScript programı yazın. Diziye kullanıcı tarafından girilen sayılar eklenecek ve kullanıcı "0" girdiğinde program sona erecektir.

// Kullanıcıdan sayıları almak için bir dizi
var sayiDizisi = [];

// Kullanıcı 0 girene kadar devam et
while (true) {
    // Kullanıcıdan bir sayı al
    var sayi = parseInt(prompt("Bir sayı girin (0 girene kadar devam edecek):"));

    // Kullanıcı 0 girdiyse döngüyü sonlandır
    if (sayi === 0) {
        break;
    }

    // Sayıyı diziye ekle
    sayiDizisi.push(sayi);
}

// Dizideki en büyük sayıyı bulmak için bir değişken
var enBuyukSayi = sayiDizisi[0];

// Dizi içinde dolaşarak en büyük sayıyı bul
for (var i = 1; i < sayiDizisi.length; i++) {
    if (sayiDizisi[i] > enBuyukSayi) {
        enBuyukSayi = sayiDizisi[i];
    }
}

// En büyük sayıyı ekrana yazdır
console.log("En büyük sayı: " + enBuyukSayi);