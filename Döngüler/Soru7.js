// SORU 7 
// Bir sayı dizisi verildiğinde, bu dizideki çift sayıları bulan ve bunları ekrana yazdıran bir JavaScript programı yazın. Dizinin sonuna ulaşıldığında programın sona ermesi gerekmektedir.


// Verilen dizi
var sayiDizisi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Döngü değişkeni
var i = 0;

// While döngüsü
while (i < sayiDizisi.length) {
    // Dizideki eleman çift mi kontrol et
    if (sayiDizisi[i] % 2 === 0) {
        // Çift sayıları ekrana yazdır
        console.log(sayiDizisi[i]);
    }

    // Döngü değişkenini artır
    i++;
}