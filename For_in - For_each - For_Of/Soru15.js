// SORU 15
// İşte for...of döngüsü kullanarak bir set üzerinde gezinme örneği:

// Bir küme (Set) oluşturalım
let renkler = new Set(["Kırmızı", "Mavi", "Yeşil", "Sarı"]);

// for...of döngüsü ile renkleri gezin
for (let renk of renkler) {
    console.log(renk);
}

// Çıktı: Kırmızı
//        Mavi
//        Yeşil
//        Sarı
