//  SORU 1 
// Kullanıcıdan alınan iki sayıyı toplayan bir fonksiyon yazın. Fonksiyonu kullanarak kullanıcıdan iki sayı alın, toplamı hesaplayın ve ekrana yazdırın.

// Toplama fonksiyonu
function toplama(sayi1, sayi2) {
    return sayi1 + sayi2;
}

// Kullanıcıdan iki sayı al
var sayi1 = parseFloat(prompt("Birinci sayıyı giriniz:"));
var sayi2 = parseFloat(prompt("İkinci sayıyı giriniz:"));

// Toplamı hesapla ve ekrana yazdır
var sonuc = toplama(sayi1, sayi2);
console.log("Toplam:", sonuc);