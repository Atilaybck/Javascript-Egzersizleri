// SORU 3
// Bir nesnenin her bir özelliğini (key ve value) forEach fonksiyonu kullanarak ekrana yazdırın.


let myObject = { name: "John", age: 30, city: "New York" };

Object.entries(myObject).forEach(function([key, value]) {
    console.log(key + ": " + value);
});