alert("Створити об’єкт, який містить інформацію про назву товару, ціну та кількість. Створити метод, який підраховує вартість. Реалізувати фабричну функцію для створення об’єкта.");
function createGoods(nameGoods, priceGoods, numberGoods) {
    return {
        name: nameGoods,
        price: priceGoods,
        number: numberGoods,
        sum: function() {
            return this.price * this.number
        },
        info: function() {
            return `Товар "${this.name}" кількістю ${this.number} штук(а/и) має вартість ${this.sum()} грн.`
        }
    }
}

let goodsList = [];
let totalPrice = 0;
let number = prompt("Введіть кількість товарів, яку хочете купити: ");
for (let i = 0; i < number; i++) {
    let nameGoods = prompt("Введіть назву товару: ");
    let priceGoods = prompt("Введіть ціну товару за одну позицію: ");
    let numberGoods = prompt("Введіть кількість одиниць товару, яку хочете купити: ");
    let goods = createGoods(nameGoods, priceGoods, numberGoods);
    goodsList.push(goods);
    totalPrice += goods.sum();
}

for (el of goodsList) {
    document.write(el.info() + '<br>');
}

document.write(`Вартість всієї покупки дорівнює ${totalPrice} грн.`);

