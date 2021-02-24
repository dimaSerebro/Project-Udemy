"use strict";





const str = "test";
const array = [1, 2, 3];
console.log(str[3]);
console.log(array[1]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));//indexOf - наз. поиском подстроки
console.log(fruit.indexOf("l"));// выдаст значение -1 говорит о том что нет такого элемента 

const hello = "Hi, how are you?";
console.log(hello.slice(3, 7));
console.log(hello.slice(0, 2));
console.log(hello.slice(7, 16));
console.log(hello.slice(-16, -8));


const by = "Good by";
console.log(by.substring(0, 4));//если поставить минус возле аргумента тогда js прочитает как 0 

console.log(by.substr(0, 5));// substr первый аргумент от куда хотим начать вторым задаем длину для вырезки

const num = 15.5;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
