// SORU - 14

// Bir dikdörtgenin alanını hesaplayan bir JavaScript programı yazın. Dikdörtgenin uzunluğu ve genişliği kullanıcıdan alınmalıdır. İpucu: Alan = Uzunluk x Genişlik


// Kullanıcıdan uzunluk ve genişlik bilgisini al
let uzunluk = parseFloat(prompt("Dikdörtgenin uzunluğunu giriniz:"));
let genislik = parseFloat(prompt("Dikdörtgenin genişliğini giriniz:"));

// Alanı hesapla
let alan = uzunluk * genislik;

// Sonucu ekrana yazdır
console.log("Dikdörtgenin alanı:", alan);