
let money = prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};



for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = prompt("Во сколько обойдется?");

    if((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null    && a != '' && b != '' && a.length <50){
        console.log("done");
        appData.expenses[a] = b;

    } else {
        alert("Одно из значений неверно! Введите заново");
        break;
    }
    
}


alert("Ваш бюджет на день= " + (appData.budget / 30));




