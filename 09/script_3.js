alert("В програмі зберігається масив з електронними поштами клієнтів. В діалогове вікно вводиться адреса електронної пошти. Вивести у відповідь “така електронна адреса вже зареєстрована!”, якщо вона вже є в цьому масиві, в іншому випадку - додати її до масиву. Продовжити введення до тих пір, поки не буде натиснута кнопка Отмена. Після цього вивести через кому всі адреси електронних пошт  у діалогове вікно.");
let arreyEmail = ['voytenko.taras@kmrf.kiev.ua', 'gaaze.valentyn@kmrf.kiev.ua', 'dobracev.georgy@kmrf.kiev.ua', 'kulish.artem@kmrf.kiev.ua', 'magarovskij.dmitro@kmrf.kiev.ua']
let email, flag, flagEmail;
do {
    flagEmail = true;
    email = prompt("Введіть адресу електронної пошти:");
    if (email == null) {
        break;
    }
    flagEmail = checkmail(email);
    if (flagEmail == false) {
        continue;
    }
    for (el of arreyEmail) {
        flag = true;
        if (el == email) {
            alert("Така електронна адреса вже зареєстрована!");
            flag = false;
            break;
        }
    }
    if (flag) {
        arreyEmail.push(email);
        alert("Електронна адреса успішно додана!");
    }
} while(email != null);
document.write("Адреси електронних пошт: ");
document.write(arreyEmail.join(', '));

function checkmail(email) {
    if (email == "") {
        alert("Введіть адресу електронної пошти.");
        return false;
    }
    if (email.indexOf(".") == -1) {
        alert("Немає символу\".\"");
        return false;
    }
    if((email.indexOf(",") >= 0) || (email.indexOf(";") >= 0) || (email.indexOf(" ") >= 0)){
        alert("Адреса електронної пошти була введена неправильно.");
        return false;
    }
    let dog = email.indexOf("@");
    if (dog == -1) {
        alert("Немає символу\"@\".");
        return false;
    }
    if ((dog < 1) || (dog > email.length - 5)) {
        alert("Адреса електронної пошти була введена неправильно.");
        return false;
    }
    if ((email.charAt(dog - 1) == '.') || (email.charAt(dog + 1) == '.')) {
        alert("Адреса електронної пошти була введена неправильно.");
        return false;
    }
}

