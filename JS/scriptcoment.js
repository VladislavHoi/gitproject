 "use strict";

//alert('Hello');

//const result = confirm("Are you here?");
 //console.log(result);   

 //const answer = +prompt("Are you 18?","");
 //console.log(answer+5);   

//const answers = [];
//answers [0]=prompt('What is you name?', '');
//answers [1]=prompt('What is you last name?', '');
//answers [2]=prompt('How old are you?', ''); 

//document.write(answers); 

//console.log(typeof(answers));

//const category = 'toys';
//console.log(`https://someurl.com/${category}/5`);
//const user = 'Vlad'
//alert(`Hello,${user}`);

//let incr = 10,
   //decr = 10;
    //incr++;
    //decr--;
    //console.log(incr);
    //console.log(decr);

    //console.log(5%2);
    //console.log(2*4 === 8);
    //*my* == string, === number;
    // && = и;(2 true) || = или(хоча б 1 true);
    // ! = отрицания
    // != = не равно
    
// УСЛОВИЯ ..
//if (4 == 9) {
//    console.log('Ok!');
//} else { 
//    console.log('Error!');
//}
//const num = 50;
//if (num < 49) {
//    console.log('Error!');
//} else if (num > 100) {
//    console.log('Error!');
//} else {
//    console.log('Ok!');
//}

//(num === 50) ? console.log('Ok!') : console.log('Error!');

//const num = 50;
//switch(num) {
//  case 49:
//    console.log( 'Error!');
//    break;
//  case 50:
//    console.log( 'Excellent!');
//    break;  
//    default:
//    console.log( 'Ups!');
//    break; 
//}
//ЦИКЛИ ..
//let num = 50;

//while (num < 55) {
//    console.log(num); 
//    num++;
//}

//do {
//    console.log(num); 
//    num++;
//}
//while (num < 55);

//for (let i = 1; i < 8; i++) {
//    if( i === 6) {
//    break;
//    continue;
//}
//console.log(i);
//}

//for (let i = 0; i < 3; i++) {
//    console.log(i);
//    for (let j = 0; j < 3; j++) {
//        console.log(j);
//    }
//}

// Asterics task //
//let result = '';
//const length = 7;
//for (let i =  1; i < length; i++) {
//    for( let j = 0; j < i; j++ ) {
//        result+= '*';
//    }
//    result+= '\n';
//}
//console.log(result);

//first: for (let i = 0; i < 3; i++) {
//        console.log(`First Level: ${i}`);
//        for (let j = 0; j < 3; j++) {
//        console.log(`Second Level: ${j}`);
//       for (let k = 0; k < 3; k++) {
//           if (k === 2) continue first;
//          console.log(`Third Level: ${k}`);
//    }
//}  
//}
// First Level
//for (let i = 5; i < 11; i++) {
//    console.log(i);
//}

//for (let i = 20; i >9; i--){
//    if( i === 12) {
//        break;
//    }
//    console.log(i);
//}

//for (let i = 2; i <= 10; i++) {
//    if (i % 2 == 0) {
//      console.log( i );
//    }
//  }

//    for (let i = 2; i <= 16; i++) {
//        if (i % 2 === 0) {
//             continue;
//         } else {
//             console.log(i);
//         }
//     }

//let num = 2;
//while (num < 16) {
//    num++;
//    if ( num % 2=== 0) {
//        continue;
//    } else {
//       console.log(num);
//    }
//}

//let arr = [];
//for(let i = 5; i <= 10; i++) {
//    arr[i-5] = i;
//}
//console.log(arr);
// Second Level
//const arrNumber = [3, 5, 8, 16, 20, 23, 50];
//const result = [];
//for (let i = 0; i < arr.length; i++) {
//result[i] = arrNumber[i];
//}
//console.log(result);

//const data = [5, 10, 'Shopping', 20, 'Homework'];
//for (let i = 0; i < data.length; i++) {
//    if(typeof(data[i]) === 'number') {
//        data[i] = data[i] * 2;
//    }
//    if (typeof(data[i]) === 'string') {
//        data[i] =`${data[i]} - done`;
//    }
//    console.log(data);
//}

//const dataThirdTask = [5, 10, 'Shopping', 20, 'Homework'];
//const resultThirdTask = [];
//for (let i = 1; i <= dataThirdTask.length; i++) {
//    result[i-1] = dataThirdTask [dataThirdTask.length- i];
//    console.log(resultThirdTask);
//}

// Third Level

//const lines = 5;
//let resultEndLevel = '';
//for (let i = 0; i <= lines; i++) {
//    for ( let j = 0; j < lines - i; j++) {
//        resultEndLevel += ' ';
//    }
//    for (let j = 0; j < 2 * i + 1; j++) {
//        resultEndLevel += '*';
//    }
//    resultEndLevel += '\n';
//}
//console.log(resultEndLevel);

// ФУНКЦИИ ..

//let num = 20;
//function showFirstMessage(text) {
//    console.log(text);
//    let num = 10;
//    console.log(num);
//}
//showFirstMessage('Hello World!');
//console.log(num);

//function calc(a, b) {
//    return ( a + b);
//}
//console.log(calc(4, 3));
//console.log(calc(5, 6));
//console.log(calc(10, 6));

//function ret() {
//    let num = 50;
//    // ...another code
//    return num;
//}
//const anotherNum = ret();
//console.log(anotherNum);

//const calcSecond = (a, b) => a + b;
//const calcSecond = (a, b) => {
//    console.log('1');
//    return a + b;
//};
// Converter Currency
//const usdCurr = 34.5;
//const eurCurr = 36;
//const plnCurr = 7;
//const discount = 0.9;
//function convert (amount, curr) {
//    return curr * amount;
//}
//function promotion (result) {
//    console.log(result * discount);
//}
//convert(500, usdCurr);
//convert(500, eurCurr);
//convert(500, plnCurr);
//const res = convert(500, usdCurr);
//promotion(res);

// function test() {
//    for(let i = 0; i < 5; i++) {
//        console.log(i);
//        if( i === 3) return
//    }
//    console.log('Done');
// }
// test();
// No Return => undefined(always);// Undefined * something = NaN;
//function doNothing() {}
//console.log(doNothing() === undefined); 
 // Coding Excercize 'Function'//
//function sayHello(name) {
//    return `Hello, ${name}!`;
//}
//sayHello('Vlad');

//function returnNeighbouringNumbers(num) {
//    return [num - 1, num, num + 1];
//}
//returnNeighbouringNumbers(10);

//function getMathResult(num, degree) {
//if (typeof(degree) != 'number' || degree <= 0) {
//    return num;
//}
//let str = '';
//for (let i = 1; i <= degree; i++) {
//    if(i === degree) {
//        str += `${num * i}`;
//    } else {
//        str += `${num * i}---`;
//    } 
//}
//return str;
//}
//getMathResult(5,3);
//getMathResult(3,10);
//getMathResult(10,5);
//getMathResult(10,'5');
//getMathResult(10,0);
//getMathResult(20, -5);
// Методи і Властивості ..
//const str = 'test';
//console.log(str.toLowerCase());
//console.log();

//const fruit = 'Some fruit';
//console.log(fruit.indexOf('fruit'));

//const logg = 'Hello, World!';
//console.log(logg.slice(6, 12)); // logg.slice(-5, -1) - с конца отчет по индексу!
//console.log(logg.substring(6, 12));
//console.log(logg.substr(6, 5));

//const num = 12.2;
//console.log(Math.round(num));

//const test = '12.2px';
//console.log(parseInt(test));
//console.log(parseFloat(test));

// First Level Function Task

//S cube = 6a^2; V cube = a^3

//function calculateVolumeAndArea(length) {
//if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//    return "При вычислении произошла ошибка";
//}

//let volume = 0,
//    area = 0;

//volume = length * length * length;
// length ** 3 - это тоже самое, что и выше или варианты через цикл.
// ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//area = 6 * (length * length);

//return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
//}
//calculateVolumeAndArea(5);

//function getCoupeNumber(seatNumber) {
//if( typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//    return 'Error! Check the correctness of the entered seat number.';
//}
//if (seatNumber === 0 || seatNumber > 36) {
//    return ' There are no such places in the car.';
//}
//for( let i = 4; i <= 36; i + 4) {
//    if(seatNumber <= i) {
//        return Math.ceil(i / 4);   
//    }
//}
//}
//getCoupeNumber(12);

// Second Level Function Task

//function getTimeFromMinutes(mins) {
//if(typeof(mins) !== 'number' || mins < 0 || !Number.isInteger(mins)) {
//    return ' Error,check the data!';
//}
//for (let i = 1; i <= 600; i++) {
//   if(mins <= i) {
//            let hours = Math.trunc(mins/60);
//            let minutes = mins % 60;
//            return hours + 'ч. ' + minutes + 'м.';
//        }
//    }
//}
//console.log(getTimeFromMinutes(80));

//function findMaxNumber(a, b, c, d) {
//if(typeof(a, b, c, d) !== 'number') {
//    return 0;
//} else {
//    return Math.max(a, b ,c, d);
//}
//}
//console.log(findMaxNumber(1, '5', 6.6, 10.5));

// Third Level, Fibonacci Numbers

//function fib(length) {
//  if(typeof(length) !== 'number' || length <= 0 || !Number.isInteger(length)) {
//    return '';
//   }
//    let result = '';
//    let firstNum = 0;
//    let secondNum = 1;
//   for(let i = 0; i < length ; i++) {
//    if (i + 1 === length) {
//        result += `${firstNum}`;
//    }
//        else {
//            result +=`${firstNum} `;
//        }
//        let thirdNum = firstNum + secondNum;
//        firstNum = secondNum;
//        secondNum = thirdNum;
//   }
//    return result;
//   }
//console.log(fib(14));

// Call-Back Function ..

//function learnJS(lang, callback) {
//    console.log(`I learn: ${lang}`);
//    callback();
//}

//function done() {
//    console.log('I passed this lesson!');
//}
//learnJS('JavaScript', done);

// Об'єкти, деструктиризація об'єктів ..

//const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//        border: 'black',
//        bg: 'red'
//    },
//    makeTest: function () {
//        console.log('Test');
//    }
//};

//options.makeTest();

//const {border, bg} = options.colors;
//console.log(border);

//console.log(Object.keys(options).length);

//console.log(options.name);
//delete options.name;
//console.log(options);

//let counter = 0;
//for( let key in options) {
//    if(typeof(options[key]) === 'object') {
//        for (let i in options[key]) {
//            console.log(`Options ${i} matter ${options[key][i]}`);
//            counter++;
//        }
//    } else {
//        console.log(`Options ${key} matter ${options[key]}`);
//        counter++;
//    }
//}
//console.log(counter);

//console.log(Object.keys(options).length);

// Масиви і псевдомавсиви ..
//const arr = [1, 4, 16, 6, 8];
//arr.sort(compareNum);
//console.log(arr);
//function compareNum(a, b) {
//    return a - b;
//}

//arr.pop(); //удаляет последний елемент массива
//arr.push(10); //добавляет последний елемент

//for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//}

//for(let value of arr) {
//    console.log(value);
//}

//arr.forEach(function(item, i, arr) {
//    console.log(`${i}: ${item} inside an array ${arr}`);
//})

//const str = prompt('', '');
//const products = str.split(', ');
//products.sort();
//console.log(products.join('; '));

// Передача по посиланню или по значенню, Spread оператор ..
// let a = 5,
//     b = a;
// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//    a: 5,
//    b: 1
//};
//const copy = obj; // Посилання
//copy.a = 10;
//console.log(copy);
//console.log(obj);

//function copy(mainObj) {
//    let objCopy = {};
//    let key;
//    for (key in mainObj) {
//        objCopy[key] = mainObj[key];
//    }
//    return objCopy;
//}

//const numbers = {
//    a: 2,
//    b: 5,
//    c:{
//        x: 7,
//        y: 4
//    }
//};
//const newNumbers = copy(numbers);
//newNumbers.a = 10;
//newNumbers.a.x = 10; // Посилання знову..
//console.log(newNumbers); 
//console.log(numbers);

//const add =  {
//    d: 17,
//    e: 20
//};

//console.log(Object.assign(numbers, add));

//const clone = Object.assign({},add);
//clone.d = 20;
//console.log(add);
//console.log(clone);

//const oldArray = ['a', 'b', 'c'];
//const newArray = oldArray.slice();
//newArray[1] = 'hard';
//console.log(newArray);
//console.log(oldArray);

//const video = ['youtube', 'vimeo', 'rutube'],
//      blogs = ['wordpress', 'livejournal', 'blogger'],
//      internet = [...video, ...blogs, 'vk', 'facebook '];

//console.log(internet);

//function log(a, b, c) {
//    console.log(a);
//    console.log(b);
//    console.log(c);
//}

//const num = [2, 5, 7];

//log(...num);

// const array = ['a', 'b'];
// const newAarray = [...array]; 
// console.log(newAarray);

// const q  = {
//    one: 1,
//    two: 2
// };
// const newObj = {...q};
//console.log(newObj);

// First Level Objects Tasks ..
//const personalPlanPeter = {
//    name: "Peter",
//    age: "29",
//    skills: {
//        languages: ['ru', 'eng'],
//        programmingLangs: {
//            js: '20%',
//            php: '10%'
//        },
//        exp: '1 month',
//    },
//    showAgeAndLangs: function (al) {
//        const {age} = al;
//        const {languages} = al.skills;
//        let str = `Мне ${age} и я владею языками: `;
//        languages.forEach(function(lang) {
//            str += `${lang.toUpperCase()} `;
//        });
//        return str;
//    }
//};
//console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

//function showExperience() {
//    const newExp = personalPlanPeter.skills.exp;
//   return newExp;    
//}
//console.log(showExperience(personalPlanPeter));

//'Language js learned by 20% Language PHP learned by 10%';
//function showProgrammingLangs(plan) {
//    let str = '';
//    const {programmingLangs} = plan.skills;
//    for (let key in programmingLangs) {
//        str += `Language ${key} learned by ${programmingLangs[key]}\n`;
//    }
//    return str;
//}
    
//console.log(showProgrammingLangs(personalPlanPeter));

// Second Level ..
// МІЙ СПОСІБ
//const family = ['Peter', 'Ann', 'Alex', 'Linda'];
//'Family consist of :[...]'
//function showFamily(family) {
//    let str = '';
//    if (str === []) {
//        str = 'Family is empty';
//    } else {
//    str += `Family consist of : ${[...family]}`;
//    return str;
//    }
//}
//console.log(showFamily(family));

// Запропонований варіант 
//function showFamily(arr) {
//    let str = '';

//    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//    arr.forEach(member => {
//        str += `${member}`
//    });

//    return str;
//}
//console.log(showFamily(family));

//const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

//function standardizeStrings (arr) {
//  arr.forEach(cities => {
//    console.log(cities.toLowerCase());
//  });
//}
//standardizeStrings(favoriteCities);

// Third Level ..
//const someString = 'This is some strange string';
//function reverse(str) {
//    if (typeof(str) !== 'string') {
//        return "Error!";
//    }
//    return str.split('').reverse().join('');
//}
//console.log(reverse(someString));

//' No currencies available'
//const baseCurrencies = ['USD', 'EUR'];
//const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

//function availableCurr(arr, missingCurr) {
//    let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === missingCurr) {
//             continue;
//         }
//         str += `${arr[i]}\n`;
//     }
//
//    return str;
//}

//console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

// Основи ООП ..

//const soldier = {
//    health : 400,
//    armor : 100,
//    sayHello : function() {
//        console.log('Hello!');
//    }
//};
//const john = Object.create(soldier);
//const john = {
//    health : 100
//};

//Object.setPrototypeOf(john, soldier); 
//john.sayHello();

// First Advanced Level Work with Objects ..

//const shoppingMallData = {
//    shops: [
//        {
//            width: 10,
//            length: 5
//        },
//        {
//            width: 15,
//            length: 7
//        },
//        {
//            width: 20,
//            length: 5
//        },
//        {
//            width: 8,
//            length: 10
//        }
//    ],
//    height: 5,
//    moneyPer1m3: 30,
//    budget: 50000
//};

//function isBudgetEnough(data) {
//    let square = 0;
//    let volume = 0;

//    data.shops.forEach(shop => {
//        square += shop.width * shop.length;
//    });

//    volume = data.height * square;

//    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//        return 'Бюджета достаточно';
//    } else {
//        return 'Бюджета недостаточно';
//    }
//}

//isBudgetEnough(shoppingMallData);

// Second Level ..

//const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

//function sortStudentsByGroups(arr) {
//    arr.sort();
//    const a = [], b = [], c = [], rest = [];

//    for (let i = 0; i < arr.length; i++) {
//        if (i < 3) {
//            a.push(arr[i]);
//        } else if (i < 6) {
//            b.push(arr[i]);
//        } else if (i < 9) {
//            c.push(arr[i]);
//        } else {
//            rest.push(arr[i]);
//        }
//    }
//    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
//}

//console.log(sortStudentsByGroups(students));

// Breakpoints ..
//function hello () {
//    console.log('Hello World!');
//}
//hello();
//function hi() {
//    console.log('Hi!');
//}
//hi();
//const arr = [1, 14, 4, 30, 54 ],
//      sorted = arr.sort(compareNum);
//function compareNum(a, b) {
//    return a - b;
//}

// Динамічна типизація данних в JS...

// To String
//1)
//console.log(typeof(String(null)));
//2)
//console.log(typeof(5 + ''));
//const fontSize = 26 + 'px';

// To Number
//1)
//console.log(typeof(Number('4')));

//2)
//console.log(typeof(+'5'));

//3)
//console.log(typeof(parseInt('15px', 10)));

//let answer = + prompt('Hello', '');

// To Boolean
//0, '', null, undefined, NaN = FALSE;
//1)
//let switcher = null;
//if (switcher) {
//    console.log('Working..');
//}
//switcher = 1;
//if (switcher) {
//    console.log('Working..');
//}

//2)
//console.log(typeof(Boolean('4'))); 

//3)
//console.log(typeof(!!'4')); 

// DOM ..
//const box = document.getElementById('');
//console.log();

//const btns = document.getElementsByTagName(''); - 'псевдомасив'
//const btns = document.getElementsByTagName('')[1];
//console.log(btns[1]); 

//const circles = document.getElementsByClassName(''); 
//console.log();

//const hearts = document.querySelectorAll('.heart');
//hearts.forEach(item => {
//    console.log();
//});

//const oneHeart = document.querySelector('.heart');
//console.log();

//const box = document.getElementById('box'),
//      btns = document.getElementsByTagName('button'),
//      circles = document.getElementsByClassName('circle'),
//      hearts = document.querySelectorAll('.heart'),
//      oneHeart = document.querySelector('.heart'),
//      wrapper = document.querySelector('wrapper');

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';
//box.style.cssText = 'background - color: blue; width: 500px';

//btns[1].style.borderRadius = '100%';
//circles[0].style.backgroundColor = 'red';

//for( let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'blue';
//}
//hearts.forEach(item => {
//    item.style.backgroundColor = 'blue';
//});

//const div = document.createElement('div');
//const text = document.createTextNode('Text');

//div.classList.add('black');
//document.body.append(div);

//wrapper.append(div);

//wrapper.prepend(div);

//hearts[0].before(div);
//hearts[0].after(div);

//wrapper.insertBefore(div, hearts[0]);
//wrapper.removeChild(hearts[1]);
//circles[0].remove();

//hearts[0].replaceWith(circles[0]);

//div.innerHTML = 'Hello World';
//div.textContent = 'Hello World';

// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');















