// SORU 6 
// Bir dizinin elemanlarını başka bir diziye kopyalayan bir fonksiyon yazın.

function kopyala(dizi) {
    return dizi.slice();
}

// Kullanım örneği:
let meyveler = ["elma", "armut", "kiraz"];
let kopyaMeyveler = kopyala(meyveler);
console.log(kopyaMeyveler); // Beklenen çıktı: ["elma", "armut", "kiraz"]