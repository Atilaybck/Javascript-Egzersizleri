// For İn Döngüsü 

//JavaScript'te for...in döngüsü, nesne (object) içindeki özellikleri (properties) üzerinde dolaşmak için kullanılır. Bu döngü, bir nesnenin tüm numaralandırılabilir (enumerable) özelliklerini alır ve bu özellikler üzerinde döner.

//Örneğin:

var obj = { a: 1, b: 2, c: 3 };

for (var key in obj) {
    console.log(key + ': ' + obj[key]);
}

//Bu örnekte, for...in döngüsü, obj adlı nesnenin özellikleri üzerinde dolaşır ve her özellik için belirtilen kodu çalıştırır. Çıktı şu şekilde olacaktır:

//Çıktısı:
//a: 1
//b: 2
//c: 3


//Bu döngü, nesnenin kendi özellikleri yanı sıra prototip zinciri üzerindeki özellikleri de içerir. Eğer sadece nesnenin kendi özelliklerini almak istiyorsanız, hasOwnProperty metodu ile kontrol eklemek önemlidir:

var obj = { a: 1, b: 2, c: 3 };

for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key + ': ' + obj[key]);
    }
}

//Çıktısı:
//a: 1
//b: 2
//c: 3



