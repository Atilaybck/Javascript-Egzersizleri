//SORU8
//Bir arrow functionın parametresi tek bir parametreden oluşuyorsa parantezleri silebiliriz. Bununla ilgili örnek:


// Parantezsiz tek parametreli arrow function
const karesiniAl = x => x * x;

// Örnek kullanım
const sayi = 5;
const kare = karesiniAl(sayi);
console.log(`Girilen sayının karesi: ${kare}`); // Çıktı: Girilen sayının karesi: 25


/*
Normal fonksiyon olarak yazımı:

Parantezsiz tek parametreli normal fonksiyon
function karesiniAl(x) {
  return x * x;
}

Örnek kullanım
const sayi = 5;
const kare = karesiniAl(sayi);
console.log(`Girilen sayının karesi: ${kare}`); // Çıktı: Girilen sayının karesi: 25

*/