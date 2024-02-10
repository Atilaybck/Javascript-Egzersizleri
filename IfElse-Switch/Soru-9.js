// SORU - 9
// JavaScript'te switch yapısı kullanarak bir kullanıcının girdiği bir sayının pozitif, negatif veya sıfır olduğunu nasıl kontrol edebiliriz?


// Kullanıcıdan bir sayı al
var sayi = prompt("Bir sayı girin:");

// Sayının pozitif, negatif veya sıfır olduğunu kontrol et
switch (true) {
    case (sayi > 0):
        console.log("Girilen sayı pozitif.");
        break;
    case (sayi < 0):
        console.log("Girilen sayı negatif.");
        break;
    case (sayi == 0):
        console.log("Girilen sayı sıfır.");
        break;
    default:
        console.log("Geçersiz bir sayı girdiniz.");
}