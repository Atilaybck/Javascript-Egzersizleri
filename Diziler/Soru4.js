// SORU 4 
// Bir diziyi küçükten büyüğe sıralayan bir fonksiyon yazın.


function sirala(dizi) {
    return dizi.sort(function (a, b) {
        return a - b;
    });
}

// Kullanım örneği:
let sayilar = [5, 2, 8, 1, 3];
console.log(sirala(sayilar)); // Beklenen çıktı: [1, 2, 3, 5, 8]

//Bu JavaScript fonksiyonu, bir dizi içindeki öğeleri küçükten büyüğe sıralamak için sort fonksiyonunu kullanır. sort fonksiyonu, bir dizi içindeki öğeleri sıralamak için kullanılan genel bir dizi yöntemidir.

//Bu karşılaştırma fonksiyonu, sıralama işlemi sırasında kullanılan temel bir karşılaştırmadır. Eğer a ve b'nin farkı negatif ise, a'yı b'den önce sıralar. Eğer fark 0 ise, sıralamada bir değişiklik olmaz. Eğer fark pozitif ise, b'yi a'dan önce sıralar.

