// Soru 1: Bir dikdörtgenin alanını hesaplayan bir JavaScript programı yazın.
var uzunluk = parseFloat(prompt("Dikdörtgenin uzunluğunu giriniz:"));
var genislik = parseFloat(prompt("Dikdörtgenin genişliğini giriniz:"));
var alan = uzunluk * genislik;
console.log("Dikdörtgenin alanı:", alan);

// Soru 2: Kullanıcıdan bir sayı alın ve sayının pozitif, negatif veya sıfır olduğunu belirleyen bir program yazın.
var sayi = parseFloat(prompt("Bir sayı giriniz:"));
if (sayi > 0) {
    console.log("Sayı pozitif");
} else if (sayi < 0) {
    console.log("Sayı negatif");
} else {
    console.log("Sayı sıfır");
}

// Soru 3: 1'den 10'a kadar olan sayıları ekrana yazdıran bir program yazın.
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// Soru 4: 5 elemanlı bir dizi oluşturun, ekrana yazdırın, ve dizinin toplamını hesaplayın.
var dizi = [3, 7, 12, 5, 8];
console.log("Dizi:", dizi);
var toplam = 0;
for (var i = 0; i < dizi.length; i++) {
    toplam += dizi[i];
}
console.log("Dizinin toplamı:", toplam);

// Soru 5: Kullanıcıdan alınan iki sayıyı toplayan bir fonksiyon yazın ve kullanın.
function toplama(sayi1, sayi2) {
    return sayi1 + sayi2;
}
var sayi1 = parseFloat(prompt("Birinci sayıyı giriniz:"));
var sayi2 = parseFloat(prompt("İkinci sayıyı giriniz:"));
var sonuc = toplama(sayi1, sayi2);
console.log("Toplam:", sonuc);

// Soru 6: Kullanıcıdan bir isim alın ve bu ismi ters çevirerek ekrana yazdırın.
var isim = prompt("Bir isim giriniz:");
var tersIsim = "";
for (var i = isim.length - 1; i >= 0; i--) {
    tersIsim += isim[i];
}
console.log("Ters Çevrilmiş İsim:", tersIsim);

// Soru 7: Bir araç objesi oluşturun ve ekrana yazdırın.
var arac = {
    marka: "Toyota",
    model: "Corolla",
    yil: 2022
};
console.log("Araç Bilgileri:", arac);

// Soru 8: Kullanıcıdan bir kelime alın. Bu kelimenin her harfini ayrı ayrı ekrana yazdırın.
var kelime = prompt("Bir kelime giriniz:");
for (var i = 0; i < kelime.length; i++) {
    console.log(kelime[i]);
}

// Soru 9: Bir dizi içindeki çift sayıları bulan bir fonksiyon yazın ve kullanın.
function cifSayilariBul(dizi) {
    var ciftSayilar = [];
    for (var i = 0; i < dizi.length; i++) {
        if (dizi[i] % 2 === 0) {
            ciftSayilar.push(dizi[i]);
        }
    }
    return ciftSayilar;
}
var sayiDizisi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var bulunanCiftSayilar = cifSayilariBul(sayiDizisi);
console.log("Çift Sayılar:", bulunanCiftSayilar);

// Soru 10: 5 saniye sonra ekrana "Merhaba!" yazdıran bir program yazın.
setTimeout(function() {
    console.log("Merhaba!");
}, 5000);

// Soru 11: Kullanıcıdan alınan bir sayının karesini hesaplayan asenkron bir fonksiyon yazın.
function kareHesaplaAsync(sayi, callback) {
    setTimeout(function() {
        var kare = sayi * sayi;
        callback(kare);
    }, 1000); // 1 saniye sonra hesaplama tamamlansın
}
var kullaniciSayisi = parseFloat(prompt("Bir sayı giriniz:"));
kareHesaplaAsync(kullaniciSayisi, function(sonuc) {
    console.log("Sayının karesi:", sonuc);
});

// Soru 12: HTML'de bir buton ve bir div elementi bulun. Butona tıklandığında div'in içine "Merhaba Dünya!" yazdıran bir JavaScript programı yazın.
var buton = document.getElementById("merhabaBtn");
var divElement = document.getElementById("merhabaDiv");
buton.addEventListener("click", function() {
    divElement.textContent = "Merhaba Dünya!";
});

// Soru 13: Verilen iki ismi birleştirerek bir cümle oluşturan bir template literal kullanarak bir JavaScript fonksiyonu yazın
function birlikteDolasiyorlar(isim1, isim2) {
  const cumle = `${isim1} ve ${isim2} birlikte dolaşıyorlar.`;
  return cumle;
}
const sonuc13 = birlikteDolasiyorlar("Cem", "Ayşe");
console.log(sonuc13);

// Soru 14: Verilen bir sayının karesini hesaplayan bir JavaScript fonksiyonu yazın.
function kareHesapla14(sayi) {
  const kare14 = sayi * sayi;
  return kare14;
}
const sonuc14 = kareHesapla14(5);
console.log("5'nin karesi:", sonuc14);

// Soru 15: Bir restoranın adını, türünü ve bulunduğu şehri içeren bir nesne (object) tanımlayın ve bilgileri kullanarak bir cümle oluşturan bir template literal kullanarak bir JavaScript fonksiyonu yazın.
let restoran15 = {
  ad:
