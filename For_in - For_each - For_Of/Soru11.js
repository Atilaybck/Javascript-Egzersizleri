// SORU 11
//Bir nesnenin içindeki belirli bir özelliği kontrol ederek ekrana yazdırın.

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

let targetKey = "age";

for (let key in person) {
    if (key === targetKey) {
        console.log(targetKey + ": " + person[key]);
    }
}