// For Each Bilgilendirme

// JavaScript'te **`forEach`** döngüsü, bir dizi (array) veya başka bir yineleyici nesne üzerinde her bir eleman için belirtilen bir işlemi gerçekleştirmek için kullanılır. Bu döngü, dizi elemanları üzerinde sırayla dolaşır ve her bir eleman için belirtilen işlevi çağırır.

//İşlev, her bir eleman için uygulanan bir geri çağrı fonksiyonudur. **`forEach`** fonksiyonu, dizideki her bir elemanı işlemek için bir döngü kullanır ve belirtilen işlevi bu eleman üzerinde çağırır.

//İşte **`forEach`** döngüsünün kullanımına örnek:

var numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});

//Çıktısı:
//1
//2
//3
//4
//5

//Bu örnekte, **`numbers`** dizisi üzerinde **`forEach`** döngüsü kullanılarak her bir eleman ekrana yazdırılır. Fonksiyon, her bir eleman için çağrılacak ve elemanlar sırayla ekrana yazdırılacaktır.

//**`forEach`** döngüsü, geleneksel **`for`** döngüsünden daha okunabilir ve kısa bir syntax sunar. Ayrıca, döngü içindeki işlevi bir kez tanımlamak, her eleman için aynı işlemi gerçekleştirmeyi sağlar.