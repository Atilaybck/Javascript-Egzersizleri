// SORY - 4 
// JavaScript'te if-else koşulları kullanarak bir kullanıcının girdiği üç sayı arasındaki en küçük sayıyı nasıl bulabiliriz?


// Kullanıcıdan üç sayı al
var sayi1 = prompt("Birinci sayıyı girin:");
var sayi2 = prompt("İkinci sayıyı girin:");
var sayi3 = prompt("Üçüncü sayıyı girin:");

// Girilen sayıları sayıya dönüştür
sayi1 = parseFloat(sayi1);
sayi2 = parseFloat(sayi2);
sayi3 = parseFloat(sayi3);

// Üç sayı arasındaki en küçük sayıyı bul
if (isNaN(sayi1) || isNaN(sayi2) || isNaN(sayi3)) {
    console.log("Geçerli sayılar giriniz.");
} else {
    var enKucukSayi = Math.min(sayi1, sayi2, sayi3);
    console.log("En küçük sayı: " + enKucukSayi);
}