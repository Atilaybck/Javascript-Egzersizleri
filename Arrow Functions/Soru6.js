// SORU 6
// Verilen bir metindeki kelime sayısını bulan bir arrow function yazın.


// Arrow function kullanarak metindeki kelime sayısını bulan fonksiyon
const kelimeSayisiBul = (metin) => {
    // Boşluk karakterlerine göre metni böler ve boş elemanları filtreler
    const kelimeler = metin.split(/\s+/).filter((kelime) => kelime.length > 0);
    return kelimeler.length;
  };
  
  // Örnek kullanım
  const metin = "Merhaba, bu bir örnek cümle.";
  const kelimeSayisi = kelimeSayisiBul(metin);
  console.log(`Metindeki kelime sayısı: ${kelimeSayisi}`); 
  // Çıktı: Metindeki kelime sayısı: 6