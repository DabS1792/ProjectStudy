// "use strict";

// const str = "Igor";
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(str[2]);


// const fruit = 'Some fruict';
// console.log(fruit.indexOf('fruict'));

// const logg = 'Hello World';
// console.log(logg.slice(8,11));

// const test = '12.2px';
// console.log(parseInt(test));

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }

// showFirstMessage('Привет Мир!');
// console.log(num);

// console.log(calc(10, 20));
// console.log(calc(5, 6));
// console.log(calc(2, 4));

// function calc(a, b) {
//     return (a + b);

// }

// function ret() {
//     let num = 50;
//     // some code
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//     console.log('Hello World');
// };

// logger();


// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
//     return amount * curr;
// }

// convert(500, usdCurr);

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);

// promotion(res);


// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) { return; }
//     }
//     console.log('Done');
// }

// test();

// function doNothing() {};
// console.log(doNothing() === undefined);


// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// const result = sayHello('Антон');
// console.log(result);

// function returnNeighboringNumbers(number) {
//     return [number, number - 1, number +1];
// };

// const result = returnNeighboringNumbers(1);
// console.log(result);


// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// getMathResult(10, 5);