/* **For İn - For Of Döngüsü:**

**`for in`** ve **`for of`** döngülerinin farklarından biri, döngünün döndürdüğü değerlerdir.

**for in döngüsü:**

- **`for in`** döngüsü, nesnenin özellikleri üzerinde dolaşır.
- Döngü, her iterasyonda nesnenin özellik adını (yani indeksi veya anahtarı) döndürür.

Örneğin: */

const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(key); // a, b, c
  console.log(obj[key]); // 1, 2, 3 (değerlere erişim)
}

/*
**for of döngüsü:**

- **`for of`** döngüsü, sadece iterable (yinelenebilir) nesnelerde çalışır (örneğin, dizilerde).
- Döngü, her iterasyonda nesnenin değerini döndürür.

Örneğin:
*/
const arr = [1, 2, 3];

for (let value of arr) {
  console.log(value); // 1, 2, 3
}

//for in döngüsü indeksleri (nesne özellik adlarını) döndürürken, for of döngüsü nesnenin değerlerini döndürür.
