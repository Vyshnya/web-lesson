alert("Вводити в діалогове вікно числа до тих пір, поки не буде введений будь-який символ, після цього вивести у вікно всі числа через кому, порахувати їх суму та кількість парних та непарних чисел.");
let arreyNumber = [];
let number;
do {
    number = Number(prompt("Введіть число:"));
    if (isNaN(number)) {
        break;
    }
    else {
        arreyNumber.push(number);
    }
} while(number != NaN);
let sum = 0, evenNum = 0, notEvenNum = 0;
document.write("Елементи масиву: ");
for (el of arreyNumber) {
    document.write(el + ", ");
    sum += el;
    if (el % 2 == 0) {
        evenNum++;
    }
    else {
        notEvenNum++;
    }
}
document.write(`сума елементів = ${sum} <br> Кількість парних елементів: ${evenNum}, непарних: ${notEvenNum}`);