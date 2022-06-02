"strict use";
/*1) Создайте функцию, которая принимает массив в качестве аргумента и возвращает новый массив с названиями тех фруктов, чья цена выше 200 (сделать через forEach, filter + map, reduce) Поправить пропуски до, после и в середине строк Все строки привести в нижний регистр*/
let food = [
    { name: " ORANGE", price: 500, isFruit: true },
    { name: "burger", price: 100, isFruit: false },
    { name: "watermelon", price: 210, isFruit: false },
    { name: "toast", price: 350, isFruit: false },
    { name: "apple ", price: 140, isFruit: true },
    { name: " bAn ana", price: 380, isFruit: true }
]

//Каждый из методов по отдельности

//1 через forEach
function shop(arr) {
    let expensiveProducts = [];
    arr.forEach((item) => {
        if (item.price > 200) {
            expensiveProducts.push(item.name.toLowerCase().replace(/\s+/g, ''));
        };
    });
    return expensiveProducts;
};

let result = shop(food);
console.log(result);



//2  через  FILTER +MAP
function shop2(arr) {
    let expensiveProducts = arr.filter(item => {
        return item.price > 200;
    }, []).map(item => item.name.toLowerCase().replace(/\s+/g, ''));

    return expensiveProducts;
}
console.log(shop2(food));




//3 через REDUCE
function shop3(arr) {
    let buyExpensive = arr.reduce((acc, item) => {
        if (item.price > 200) {
            acc.push(item.name.toLowerCase().replace(/\s+/g, ''));
        }
        return acc;
    }, []);
    return buyExpensive
};
console.log(shop3(food));








/*2) let salary = [1000, 500, 1200, 230]; Создайте функцию, которая будет принимать в качестве аргумента массив и:Копировать массив и отсортировывать его от меньшей зп к большей После чего изменять порядок на обратный
Новый массив возвращать. А также с помощью оператора проверять, является ли полученный массив массивом(выводить в консоль)*/


//1   опция через  ForEach

let salary = [1000, 500, 1200, 230];

function yearBudget(arr) {
    let earnedIncome = [];
    arr.forEach((item) => {
        earnedIncome.push(item);
    });
    console.log(earnedIncome.sort((a, b) => a - b).reverse());
    if (Array.isArray(earnedIncome)) {
        return true;
    } else {
        return false;
    };

};

yearBudget(salary);

result = yearBudget(salary);
console.log(result);










/*3) let serials = ["How i met your mom", "Friends", "Big bang theory"];
Создайте строку из элементов массива*/

let serials = ["How i met your mom", "Friends", "Big bang theory"];

function sentence(arr) {
    let sum = "";

    arr.forEach((element) => {
        if (typeof element === "string") {
            return sum += element + ' ';
        }
    });
    console.log(sum);

};
sentence(serials);



/*4) Создайте функцию, которая принимает массив в качестве аргумента и возвращает общую сумму всех продуктов
Сделать 2 способами*/

//1 способ
function getPurchasePrice(arr) {
    let sum = 0;

    arr.forEach((item) => {
        sum += item.price;
    });
    return sum;
};
console.log(getPurchasePrice(food));

//2  способ

function getPurchasePrice2(arr) {
    let sumOfAllPuchases = arr.reduce((acc, item) => {
        acc += item.price;
        return acc;
    }, 0); //на выходе ждём число ; если поставлю 1 - добавит

    console.log(sumOfAllPuchases);
};
getPurchasePrice2(food);