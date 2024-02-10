// SORU - 8
// JavaScript'te switch yapısı kullanarak bir kullanıcının girdiği gün adına göre, haftanın hangi günü olduğunu nasıl bulabiliriz?


// Kullanıcıdan gün adını al
var gunAdi = prompt("Bir gün adı girin:").toLowerCase();

// Gün adına göre haftanın hangi günü olduğunu bul
switch (gunAdi) {
    case 'pazartesi':
        console.log("Girilen gün Pazartesi.");
        break;
    case 'salı':
        console.log("Girilen gün Salı.");
        break;
    case 'çarşamba':
        console.log("Girilen gün Çarşamba.");
        break;
    case 'perşembe':
        console.log("Girilen gün Perşembe.");
        break;
    case 'cuma':
        console.log("Girilen gün Cuma.");
        break;
    case 'cumartesi':
        console.log("Girilen gün Cumartesi.");
        break;
    case 'pazar':
        console.log("Girilen gün Pazar.");
        break;
    default:
        console.log("Geçersiz gün adı girdiniz.");
}