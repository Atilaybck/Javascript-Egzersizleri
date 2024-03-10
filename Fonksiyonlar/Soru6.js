// SORU 6 
//Bir dizi (arr) alır ve elemanlarının ortalamasını hesaplayarak döndürür.


function ortalamaHesapla(arr) {
    // Dizi boşsa veya undefined ise hata durumu kontrolü
    if (!arr || arr.length === 0) {
      return "Dizi boş veya tanımsız.";
    }
  
    // Dizi elemanlarının toplamını hesapla
    var toplam = 0;
    for (var i = 0; i < arr.length; i++) {
      toplam += arr[i];
    }
  
    // Ortalamayı hesapla ve döndür
    var ortalama = toplam / arr.length;
    return ortalama;
  }
  
  // Örnek kullanım
  var myArray = [1, 2, 3, 4, 5];
  var ortalamaSonucu = ortalamaHesapla(myArray);
  console.log("Dizi Ortalaması:", ortalamaSonucu);
  