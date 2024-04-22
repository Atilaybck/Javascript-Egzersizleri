// SORU 2
//Bir dizi (array) içindeki çift sayıları bulan ve bu çift sayıları yeni bir dizi olarak döndüren bir arrow function yazın.


// Arrow function kullanarak çift sayıları bulan fonksiyon
const ciftSayilariBul = (dizi) => {
    return dizi.filter((sayi) => sayi % 2 === 0);
  };
  
  // Örnek kullanım
  const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ciftSayilar = ciftSayilariBul(sayilar);
  console.log(ciftSayilar); // Çıktı: [2, 4, 6, 8, 10]