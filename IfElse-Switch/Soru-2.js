// SORU - 2 
// JavaScript'te if-else koşulları ile bir kullanıcının yaşına göre belirli bir mesajı nasıl yazdırabiliriz?


// Kullanıcıdan yaş bilgisini al
var yas = prompt("Yaşınızı girin:");

// Yaşa göre mesajı kontrol et
if (yas < 0) {
    console.log("Geçerli bir yaş değeri giriniz.");
} else if (yas < 18) {
    console.log("Henüz reşit değilsiniz.");
} else if (yas < 65) {
    console.log("Reşitsiniz, çalışabilirsiniz.");
} else {
    console.log("Emekli yaşındasınız.");
}