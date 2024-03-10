// SORU 5 
// Birkaç diziyi birleştiren bir fonksiyon yazın.


function birlestir(...diziler) {
    return diziler.reduce(function (birlesim, dizi) {
        return birlesim.concat(dizi);
    }, []);
}

// Kullanım örneği:
let dizi1 = [1, 2, 3];
let dizi2 = [4, 5, 6];
let dizi3 = [7, 8, 9];
console.log(birlestir(dizi1, dizi2, dizi3)); // Beklenen çıktı: [1, 2, 3, 4, 5, 6, 7, 8, 9]