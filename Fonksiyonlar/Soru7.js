// SORU 7 
//Bir dizi içerisindeki çift sayıları bulan ve bu çift sayıların toplamını hesaplayan bir JavaScript fonksiyonu yazın.


// Verilen dizideki çift sayıları bulan ve toplamını hesaplayan fonksiyon
function toplamCiftSayilar(dizi) {
    let ciftSayilar = [];
    let toplam = 0;
  
    // Dizi üzerinde dolaşarak çift sayıları bulma
    for (let i = 0; i < dizi.length; i++) {
      if (dizi[i] % 2 === 0) {
        ciftSayilar.push(dizi[i]);
        toplam += dizi[i];
      }
    }
  
    console.log("Çift Sayılar:", ciftSayilar);
    console.log("Toplam:", toplam);
  
    return toplam;
  }
  
  // Örnek kullanım
  const numaraDizisi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sonuc = toplamCiftSayilar(numaraDizisi);