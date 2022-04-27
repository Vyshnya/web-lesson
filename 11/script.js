function createTeam(nameTeam, numberPoints) {
    return {
        name: nameTeam,
        points: numberPoints
    }
}

let currentTeam = [], teamList = [];
let count = prompt("Введіть кількість команд, яку хочете ввести: ");
for (let i = 0; i < count; i++) {
    let str = prompt("Введіть назву команди та її очки через пропуск: ");
    currentTeam = str.split(" ");
    currentTeam[1] = parseInt(currentTeam[1]);
    let team = createTeam(currentTeam[0], currentTeam[1]);
    teamList.push(team);
}

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
table.appendChild(thead);
table.appendChild(tbody);
document.getElementById('body').appendChild(table);

let startRow = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "№";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Назва команди";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Кількість очок";

startRow.appendChild(heading_1);
startRow.appendChild(heading_2);
startRow.appendChild(heading_3);
thead.appendChild(startRow);

let max = teamList[0].points;
let indexMax = 0;

for (let i = 0; i < count; i++) {
    let row = document.createElement('tr');
    let rowNumberTeam = document.createElement('td');
    rowNumberTeam.innerHTML = i + 1;
    let rowNameTeam = document.createElement('td');
    rowNameTeam.innerHTML = teamList[i].name;
    let rowPointsTeam = document.createElement('td');
    rowPointsTeam.innerHTML = teamList[i].points;

    if (teamList[i].points > max) {
        max = teamList[i].points;
        indexMax = i;
    }  

    row.appendChild(rowNumberTeam);
    row.appendChild(rowNameTeam);
    row.appendChild(rowPointsTeam);
    tbody.appendChild(row);
}

document.write(`Команда ${teamList[indexMax].name} зайняла 1-ше місце отримавши ${teamList[indexMax].points} очок!`);






