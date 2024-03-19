/*
Object.entries(); metodu:  
Object.entries() metodu ise bizlere hem key'i hem de value'yu bir array içerisinde döner ve object içerisinde kaç tane property varsa her birisi için ayrı array içerisinde ilgili değerleri sunar.Bu metod çıktıyı bir array içine alır. 
*/

let myObject = { name: "Alice", age: 25, city: "London" };

let entries = Object.entries(myObject);

console.log(entries);

/*
Çıktı:

[    ["name", "Alice"],
    ["age", 25],
    ["city", "London"]
]

*/