// SORU - 10
// 20.04.2017 tarihinde trafiğe çıkan bir aracın servis bakım süreleri aşağıda verilmiştir. Bu bilgilere göre servis uyarısını veriniz.

// 1. Bakım: 1 yıl
// 2. Bakım: 2yıl
// 3. Bakım: 3yıl


// Araç trafiğe çıkış tarihini girin
var trafigeCikisTarihi = new Date('2017-04-20');

// Şuanki tarihi al
var suankiTarih = new Date();

// Araç yaşını hesapla (yıllar cinsinden)
var aracYasi = suankiTarih.getFullYear() - trafigeCikisTarihi.getFullYear();

// Servis uyarısını kontrol et
if (aracYasi === 1) {
    console.log("1. Bakım zamanı geldi.");
} else if (aracYasi === 2) {
    console.log("2. Bakım zamanı geldi.");
} else if (aracYasi === 3) {
    console.log("3. Bakım zamanı geldi.");
} else {
    console.log("Servis zamanı değil.");
}