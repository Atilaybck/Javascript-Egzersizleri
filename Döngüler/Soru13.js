// SORU 13
// Bir oyun programı yazın. Oyuncuya 1 ile 100 arasında rastgele seçilmiş bir sayıyı tahmin etmesini isteyen bir oyun. Kullanıcıya her tahmininde, sayının büyük mü, küçük mü yoksa doğru mu olduğunu söyleyin. Kullanıcı doğru sayıyı bulana kadar oyun devam etmelidir.


// Bilgisayarın rastgele seçtiği sayı (1 ile 100 arasında)
var bilgisayarSecimi = Math.floor(Math.random() * 100) + 1;

// Kullanıcının tahmin sayısı
var tahminSayisi = 0;

// Kullanıcı doğru tahmin yapana kadar devam et
do {
    // Kullanıcıdan bir tahmin al
    var kullaniciTahmini = parseInt(prompt("1 ile 100 arasında bir sayı tahmin edin:"));
    
    // Tahmin sayısını artır
    tahminSayisi++;

    // Kullanıcının tahminini kontrol et
    if (kullaniciTahmini === bilgisayarSecimi) {
        console.log("Tebrikler! " + tahminSayisi + " tahminde doğru sayıyı buldunuz.");
    } else if (kullaniciTahmini < bilgisayarSecimi) {
        console.log("Daha büyük bir sayı girin.");
    } else {
        console.log("Daha küçük bir sayı girin.");
    }
} while (kullaniciTahmini !== bilgisayarSecimi);