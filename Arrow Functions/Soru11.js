// SORU 11
//Arrow function içinde tek bir ifade varsa, return ifadesini silebilirsiniz. İşte bir örnek:


// Return ifadesi olmadan tek satırlık arrow function
const kareAl = x => x * x;

// Örnek kullanım
const sayi = 4;
const kare = kareAl(sayi);
console.log(`Girilen sayının karesi: ${kare}`); // Çıktı: Girilen sayının karesi: 16