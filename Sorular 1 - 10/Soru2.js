/*
SORU-2
Kullanıcıdan bir sayı alın ve sayının pozitif, negatif veya 
sıfır olduğunu belirleyen bir program yazın.
*/

// Kullanıcıdan sayı al
let sayi = parseFloat(prompt("Bir sayı giriniz:"));

// Koşullu ifadelerle sayının durumunu belirle
if (sayi > 0) {
    console.log("Sayı pozitif");
} else if (sayi < 0) {
    console.log("Sayı negatif");
} else {
    console.log("Sayı sıfır");
}