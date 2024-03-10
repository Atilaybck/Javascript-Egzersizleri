// SORU 3
// Kullanıcıdan alınan bir sayının karesini hesaplayan asenkron bir fonksiyon yazın. Fonksiyon, hesaplama tamamlandığında bir geri çağrı fonksiyonunu çağırmalıdır.

// Asenkron kare hesaplama fonksiyonu
function kareHesaplaAsync(sayi, callback) {
    setTimeout(function() {
        var kare = sayi * sayi;
        callback(kare);
    }, 1000); // 1 saniye sonra hesaplama tamamlansın
}

// Kullanıcıdan sayı al
var kullaniciSayisi = parseFloat(prompt("Bir sayı giriniz:"));

// Asenkron kare hesapla ve sonucu ekrana yazdır
kareHesaplaAsync(kullaniciSayisi, function(sonuc) {
    console.log("Sayının karesi:", sonuc);
});