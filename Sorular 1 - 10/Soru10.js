/*
SORU - 10:
5 saniye sonra ekrana "Merhaba!" yazdıran bir program yazın.
*/

// 5 saniye sonra "Merhaba!" mesajını gösteren fonksiyon
function merhabaMesaji() {
    console.log("Merhaba!");
}

// setTimeout kullanarak fonksiyonu 5 saniye sonra çalıştırma
setTimeout(merhabaMesaji, 5000); // 5000 milisaniye = 5 saniye
