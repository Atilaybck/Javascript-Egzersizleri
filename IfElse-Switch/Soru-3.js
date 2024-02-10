// SORU - 3
// JavaScript'te if-else koşulları kullanarak bir kullanıcının girdiği iki sayı arasındaki en büyük sayıyı nasıl bulabiliriz?


// Kullanıcıdan iki sayı al
var sayi1 = prompt("Birinci sayıyı girin:");
var sayi2 = prompt("İkinci sayıyı girin:");

// Girilen sayıları sayıya dönüştür
sayi1 = parseFloat(sayi1);
sayi2 = parseFloat(sayi2);

// İki sayı arasındaki en büyük sayıyı bul
if (isNaN(sayi1) || isNaN(sayi2)) {
    console.log("Geçerli sayılar giriniz.");
} else {
    var enBuyukSayi = sayi1 > sayi2 ? sayi1 : sayi2;
    console.log("En büyük sayı: " + enBuyukSayi);
}