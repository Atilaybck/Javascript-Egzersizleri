// SORU 3
//Kullanıcıdan bir kelime alın. Bu kelimenin her harfini ayrı ayrı ekrana yazdırın.

// Kullanıcıdan kelime al
var kelime = prompt("Bir kelime giriniz:");

// Her harfi ayrı ayrı ekrana yazdır
for (var i = 0; i < kelime.length; i++) {
    console.log(kelime[i]);
}