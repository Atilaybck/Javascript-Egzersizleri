// SORU 12 
// Bir kullanıcıya 1 ile 10 arasında bir sayı seçmesini isteyen ve kullanıcının seçtiği sayıyı tahmin etmeye çalışan bir JavaScript programı yazın. Kullanıcı doğru sayıyı girene kadar programın devam etmesini sağlayın.


// Bilgisayarın seçtiği sayı (1 ile 10 arasında)
var bilgisayarSecimi = Math.floor(Math.random() * 10) + 1;

// Kullanıcıdan tahmin yapmasını iste
do {
    var kullaniciTahmini = parseInt(prompt("1 ile 10 arasında bir sayı tahmin edin:"));

    // Kullanıcının tahminini kontrol et
    if (kullaniciTahmini === bilgisayarSecimi) {
        console.log("Tebrikler! Doğru tahmin.");
    } else {
        console.log("Maalesef yanlış tahmin. Tekrar deneyin.");
    }
} while (kullaniciTahmini !== bilgisayarSecimi);