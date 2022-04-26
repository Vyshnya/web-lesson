alert("Ввести речення в діалогове вікно. Підрахувати кількість слів.");
let sentence = prompt("Введіть речення в діалогове вікно:");
let words = [];
words = sentence.split(" ");
let count = 0;
for (el of words) {
    count++;
}
document.write("Введене речення має " + count + " слова(ів)");