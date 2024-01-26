/*
SORU-5:
Kullanıcıdan alınan iki sayıyı toplayan bir fonksiyon yazın. Fonksiyonu kullanarak kullanıcıdan iki sayı alın, toplamı hesaplayın ve ekrana yazdırın.
*/

function toplama(num1 , num2) {
    return (num1 + num2)
}

kullanıcı1 = parseInt(prompt("Bir sayı giriniz: "))
kullanıcı2 = parseInt(prompt("Bir sayı giriniz: "))

console.log(toplama(kullanıcı1, kullanıcı2));
