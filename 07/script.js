function conversion() {
    alert("Вітаємо у програмі Конвектор температури!");
    let repeatProgram = true;
    while(repeatProgram){
        let temperatureCelsius = prompt("Введіть температуру в градусах Цельсія:");
        if (!/\D/.test(temperatureCelsius)) {
            let choise = prompt("Бажаєте конвертувати в градуси Кельвіна - ввведіть 1, конвертувати в градуси Фаренгейта - введіть 2");
            let temperatureKelvin, temperatureFahrenheit;
            if (choise == 1) {
                temperatureKelvin = +temperatureCelsius + 273.15;
                alert(temperatureCelsius + " градусів Цельсія = " + temperatureKelvin + " градусів Кельвіна");
                console.log(temperatureCelsius + " градусів Цельсія = " + temperatureKelvin + " градусів Кельвіна");
            }
            else if (choise == 2) {
                temperatureFahrenheit = +temperatureCelsius * (9 / 5) + 32;
                alert(temperatureCelsius + " градусів Цельсія = " + temperatureFahrenheit + " градусів по Фаренгейту");
                console.log(temperatureCelsius + " градусів Цельсія = " + temperatureFahrenheit + " градусів по Фаренгейту");
            }
            else alert("Ви ввели невірні дані!");
        }
        else alert("Ви ввели невірні дані!");
        repeatProgram = prompt("Бажаєте продовжити?");
        if (repeatProgram == "так" || repeatProgram == "Так" || repeatProgram == 1) repeatProgram = true;
        else repeatProgram = false;
    }
}

function calculateSqrt() { 
    let repeatProgram = true;
    alert("Вас вітає програма для знаходження квадратного числа кореня!");
    while(repeatProgram){
        let number = prompt("Введіть число, корінь квадратний якого треба знайти:");
        if (!/\D/.test(number)) {
            if (number > 0) {
                alert("Корінь квадратний числа " + number + " = " + Math.sqrt(number));
                console.log("Корінь квадратний числа " + number + " = " + Math.sqrt(number));
            }
            else alert("Неможливо знайти корінь квадратний від'ємного числа!");
        }
        else alert("Ви ввели невірні дані!");
        repeatProgram = prompt("Бажаєте продовжити?");
        if (repeatProgram == "так" || repeatProgram == "Так" || repeatProgram == 1) repeatProgram = true;
        else repeatProgram = false;
    }
}