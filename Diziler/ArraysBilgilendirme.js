// ARRAYS 

// JavaScript'te diziler (arrays), birden çok değeri bir arada tutmaya ve bu değerlere erişmeye olanak tanıyan veri yapısıdır. Diziler, benzer türdeki verileri düzenlemek ve işlemek için kullanılır. İşte JavaScript dizilerinin bazı temel işlevleri:


//Depolama ve Gruplama: 
//Diziler, benzer veya ilişkili veri öğelerini gruplamak için kullanılır. Örneğin, bir dizi içinde bir liste veya koleksiyon oluşturabilirsiniz.
var renkler = ["kırmızı", "yeşil", "mavi"];


//İndeksleme: 
//Diziler, elemanlara sıfırdan başlayan bir indeks numarası kullanarak erişmenizi sağlar. Bu sayede, belirli bir elemana kolayca ulaşabilirsiniz.
console.log(renkler[0]); // "kırmızı"

//Döngülerle İşleme: 
//Diziler üzerinde döngüler kullanarak, her elemana tek tek erişebilir ve işlemler yapabilirsiniz.
for (var i = 0; i < renkler.length; i++) {
    console.log(renkler[i]);
}

//Dinamik Boyut: 
//Diziler JavaScript'te dinamik boyuta sahiptir, yani eleman sayısını istediğiniz zaman değiştirebilirsiniz.
renkler.push("sarı"); // Diziyi güncelle, yeni bir eleman ekler

//Metotlar ve İşlevler: 
//Diziler, bir dizi üzerinde çeşitli işlemleri gerçekleştirmek için kullanılabilen bir dizi metoduna sahiptir. Örneğin, push, pop, shift, unshift, splice gibi metodlar dizilerde değişiklik yapmanıza yardımcı olabilir.
renkler.pop(); // Son elemanı çıkarır

//Dizileri Birleştirme ve Ayırma: 
//Dizileri birleştirmek veya ayırmak için çeşitli metodlar bulunmaktadır. concat, join, split gibi metodlar bunlara örnektir.
var digerRenkler = ["turuncu", "mor"];
var birlesikRenkler = renkler.concat(digerRenkler); // Dizileri birleştirme

JavaScript dizileri, programlamada veri yönetimi için önemli bir araçtır ve birçok farklı senaryoda kullanılabilirler.
