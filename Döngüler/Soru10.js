// SORU 10
// Bir futbol takımının puan durumunu takip eden bir JavaScript programı yazın. Program, kullanıcıdan her maçın sonucunu (galibiyet, beraberlik veya mağlubiyet) alacak ve toplam puanı güncelleyecektir. Kullanıcı "q" tuşuna basana kadar program devam etmelidir. Galibiyet 3 puan, beraberlik 1 puan ve mağlubiyet 0 puan kazandırır. Sonunda toplam puanı ekrana yazdırın.

// Toplam puanı tutan değişken
var toplamPuan = 0;

// Kullanıcı "q" tuşuna basana kadar devam et
while (true) {
    // Kullanıcıdan maç sonucunu al
    var sonuc = prompt("Maç sonucunu girin (galibiyet, beraberlik, mağlubiyet) veya 'q' tuşuna basın:");

    // Kullanıcı "q" tuşuna bastıysa döngüyü sonlandır
    if (sonuc.toLowerCase() === 'q') {
        break;
    }

    // Maç sonucuna göre puanları güncelle
    switch (sonuc.toLowerCase()) {
        case 'galibiyet':
            toplamPuan += 3;
            break;
        case 'beraberlik':
            toplamPuan += 1;
            break;
        case 'mağlubiyet':
            // Mağlubiyet durumunda puan güncelleme yapma, çünkü mağlubiyet 0 puan kazandırır
            break;
        default:
            console.log("Geçersiz giriş. Lütfen 'galibiyet', 'beraberlik' veya 'mağlubiyet' girin.");
    }
}

// Toplam puanı ekrana yazdır
console.log("Toplam Puan: " + toplamPuan);