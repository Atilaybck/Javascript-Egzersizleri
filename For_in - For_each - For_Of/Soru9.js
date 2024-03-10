// SORU 9 
// Bir nesnenin özelliklerini (key ve value) kullanarak ekrana yazdırın.


let myObject = {
    name: "Alice",
    age: 25,
    city: "London"
};

for (let key in myObject) {
    console.log(key + ": " + myObject[key]);
}


//Çıktısı:
//name: Alice
//age: 25
//city: London
