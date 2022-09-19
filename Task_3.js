//Дана строка. Необходимо вывести в консоль перевёрнутый вариант.
//Например, "Hello" -> "olleH".

let str = "Hello";
function reverseStr(str) {
    return str.split("").reverse().join("");
}
let prn = reverseStr (str);
console.log (prn);
