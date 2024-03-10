// SORU 2
// Bir nesnenin her bir özelliğini (key ve value) for döngüsü kullanarak ekrana yazdırın.

let myObject = { name: "John", 
								 age: 30, 
								 city: "New York" };

for (let key in myObject) {
    console.log(key + ": " + myObject[key]);
}

//Çıktısı:
//name: John
//age: 30
//city: New York