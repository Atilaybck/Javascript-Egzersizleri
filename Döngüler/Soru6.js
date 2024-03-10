// SORU 6 
// Kullanıcının girdiği bir sayının faktöriyelini hesaplayan bir JavaScript fonksiyonu yazın.


function faktoriyelHesapla(sayi) {
    if (sayi === 0 || sayi === 1) {
        return 1;
    } else {
        return sayi * faktoriyelHesapla(sayi - 1);
    }
}

// Kullanıcıdan sayı al
var kullaniciSayi = parseFloat(prompt("Faktöriyelini hesaplamak istediğiniz sayıyı giriniz:"));

// Faktöriyeli hesapla
var faktoriyelSonucu = faktoriyelHesapla(kullaniciSayi);
console.log(kullaniciSayi + "! =", faktoriyelSonucu);