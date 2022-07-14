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


