// SORU 5
// Verilen bir ismi ve bir mesleği içeren iki string'i birleştiren ve oluşturduğu cümleyi büyük harflerle yazdıran bir JavaScript fonksiyonu yazın.


function buyukHarfCümlesiOlustur(isim, meslek) {
    const birlesikCumle = `${isim} bir ${meslek} olarak çalışıyor.`.toUpperCase();
    return birlesikCumle;
  }
  
  // Örnek kullanım:
  const sonuc = buyukHarfCümlesiOlustur("Ahmet", "mühendis");
  console.log(sonuc);