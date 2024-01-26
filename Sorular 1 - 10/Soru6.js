/*
SORU - 6
Kullanıcıdan bir isim alın ve bu ismi ters çevirerek ekrana yazdırın.
*/

// Kullanıcıdan isim al
var isim = prompt("Bir isim giriniz:");

// İsmi ters çevir
var tersIsim = "";
for (var i = isim.length - 1; i >= 0; i--) {
    tersIsim += isim[i];
}

// Ters çevrilmiş ismi ekrana yazdır
console.log("Ters Çevrilmiş İsim:", tersIsim);