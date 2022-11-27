"use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDb = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };


// const
//   a = prompt('Один из последних просмотренных фильмов?', ''),
//   b = prompt('На сколько оцените его?', ''),
//   c = prompt('Один из последних просмотренных фильмов?', ''),
//   d = prompt('На сколько оцените его?', '');

// personalMovieDb.movies[a] = b;
// personalMovieDb.movies[c] = d;

// console.log(personalMovieDb);

// const num = '51';

// switch (num) {
//   case 49:
//     console.log('Неверно');
//     break;
//   case '51':
//     console.log('Верно');
//     break;
//   default:
//     console.log('Не угадал, в следующий раз тебе повезёт');
//     break;
// }

// const hamburger = 5;
// const fries = 0;


// if (hamburger && fries) {
//   console.log('Я сыт');
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets === 1) {
  console.log('Я сыт');
} else {
  console.log("Идём в другой ресторан");
}

let johnReport, alexReport, samReport, mariReport = 'done';

console.log(johnReport || alexReport || samReport || mariReport);