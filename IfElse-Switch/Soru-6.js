// SORU - 6
// Kullanıcıdan alınan bir ay numarasına göre, o ayın kaç gün içerdiğini bulan bir JavaScript programı nasıl yazılır?

// Kullanıcıdan ay numarasını al
var ayNumarasi = prompt("Bir ay numarası girin (1-12):");

// Ay numarasına göre gün sayısını bul
switch (parseInt(ayNumarasi)) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Bu ay 31 gün içerir.");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Bu ay 30 gün içerir.");
        break;
    case 2:
        console.log("Bu ay 28 veya 29 gün içerir.");
        break;
    default:
        console.log("Geçersiz ay numarası girdiniz.");
}