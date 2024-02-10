// SORU - 7
// JavaScript'te switch yapısı kullanarak bir harfin sesli mi, yoksa sessiz mi olduğunu nasıl kontrol edebiliriz?

// Kullanıcıdan bir harf al
var harf = prompt("Bir harf girin:").toLowerCase();

// Harfin sesli veya sessiz olduğunu kontrol et
switch (harf) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Girilen harf bir sesli harftir.");
        break;
    case 'b':
    case 'c':
    case 'd':
    // Diğer sessiz harfleri ekleyebilirsiniz.
        console.log("Girilen harf bir sessiz harftir.");
        break;
    default:
        console.log("Girilen karakter bir harf değildir veya geçersiz bir harftir.");
}