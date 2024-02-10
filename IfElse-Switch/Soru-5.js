// SORU - 5
// Kullanıcının girdiği bir kelimenin palindrom olup olmadığını kontrol eden bir JavaScript programı yazın. (Palindrom, tersten okunduğunda aynı olan kelimelerdir.)

// Kullanıcıdan kelime al
var kelime = prompt("Bir kelime giriniz:");

// Palindrom kontrolü
var tersKelime = kelime.split('').reverse().join('');
if (kelime === tersKelime) {
    console.log("Bu kelime bir palindromdur.");
} else {
    console.log("Bu kelime bir palindrom değildir.");
}