//SORU13
//Bir nesnenin özelliklerini (key ve value) kullanarak yeni bir dizi oluşturun.

let myObject = { a: 1, b: 2, c: 3 };
let newArray = [];

for (let key in myObject) {
    newArray.push({ key: key, value: myObject[key] });
}

console.log(newArray);

/*

Çıktısı:

[
    { key: 'a', value: 1 },
    { key: 'b', value: 2 },
    { key: 'c', value: 3 }
]

*/