let myObject = { name: "Alice", age: 25, city: "London" };

let keyValuePairs = Object.entries(myObject).map(function([key, value]) {
    return { key: key, value: value };
});

console.log(keyValuePairs);
//NOT: Object.entires() metodunu diğer örnekte  açıkladım.


/*

[
    { key: "name", value: "Alice" },
    { key: "age", value: 25 },
    { key: "city", value: "London" }
]

*/