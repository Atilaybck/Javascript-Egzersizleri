// SORU 1 
//  Bir dizideki tüm elemanları toplayan bir fonksiyon yazın.

function toplamDiziElemanlari(dizi) {
    let toplam = 0;
    for (let i = 0; i < dizi.length; i++) {
        toplam += dizi[i];
    }
    return toplam;
}

// Kullanım örneği:
let sayilar = [1, 2, 3, 4, 5];
console.log(toplamDiziElemanlari(sayilar)); // Beklenen çıktı: 15