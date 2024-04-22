//SORU 3
//Verilen bir metni ters çeviren (reverse) bir arrow function yazın.


// Arrow function kullanarak metni ters çeviren fonksiyon
const tersCevir = (metin) => {
    return metin.split('').reverse().join('');
  };
  
  // Örnek kullanım
  const orijinalMetin = "Merhaba Dünya!";
  const tersMetin = tersCevir(orijinalMetin);
  console.log(tersMetin); // Çıktı: "!aynlüD abahreM"