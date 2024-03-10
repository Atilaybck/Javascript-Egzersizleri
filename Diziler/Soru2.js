//SORU 2
//Bir dizideki çift sayıları filtreleyen bir fonksiyon yazın.

function ciftSayilariFiltrele(dizi) {
    return dizi.filter(function (eleman) {
        return eleman % 2 === 0;
    });
}

// Kullanım örneği:
let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(ciftSayilariFiltrele(sayilar)); // Beklenen çıktı: [2, 4, 6, 8]


