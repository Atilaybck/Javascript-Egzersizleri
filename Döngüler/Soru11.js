// SORU 11
// Bir kullanıcının doğru şifreyi girene kadar şifre sormaya devam eden bir JavaScript programı yazın. Kullanıcının girmesi gereken doğru şifreyi belirleyin ve kullanıcıdan şifreyi girmesini isteyin. Doğru şifre girilene kadar şifre sormaya devam eden bir do-while döngüsü kullanın.


// Doğru şifreyi belirle
var dogruSifre = "gizli123";

// Kullanıcıdan şifreyi girmesini iste
do {
    var girilenSifre = prompt("Lütfen şifrenizi girin:");

    // Girilen şifreyi kontrol et
    if (girilenSifre === dogruSifre) {
        console.log("Şifre doğru. Giriş başarılı!");
    } else {
        console.log("Şifre yanlış. Tekrar deneyin.");
    }
} while (girilenSifre !== dogruSifre);