// SORU 8 
// Bir kullanıcıdan alınan pozitif bir tamsayının faktöriyelini hesaplayan bir JavaScript programı yazın. Kullanıcı 0 girene kadar programın devam etmesi gerekmektedir.



// Giriş alma
var sayi = parseInt(prompt("Pozitif bir tamsayı girin (0 girene kadar devam edecek):"));

// Faktöriyel hesaplamak için bir fonksiyon
function faktoriyelHesapla(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktoriyelHesapla(n - 1);
    }
}

// Kullanıcı 0 girene kadar devam et
while (sayi !== 0) {
    // Faktöriyeli hesapla ve ekrana yazdır
    console.log(sayi + "! = " + faktoriyelHesapla(sayi));

    // Yeni bir giriş al
    sayi = parseInt(prompt("Pozitif bir tamsayı girin (0 girene kadar devam edecek):"));
}

// Program sona erdiğinde mesaj yazdır
console.log("Program sona erdi.");