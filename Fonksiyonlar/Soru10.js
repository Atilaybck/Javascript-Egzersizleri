// SORU 10
// Bir sayacı her saniye bir arttıran bir program yazın. Sayacın değeri her arttığında, sayacın güncel değerini console'a yazdırın.

let sayac = 0;

function artirVeYazdir() {
  sayac++;
  console.log("Sayac Değeri: " + sayac);
}

// Her saniye bir arttır ve yazdır
const intervalID = setInterval(artirVeYazdir, 1000);

// Örnek olarak 5 saniye sonra setInterval'ı durdur
setTimeout(() => {
  clearInterval(intervalID);
  console.log("Interval durduruldu.");
}, 5000);