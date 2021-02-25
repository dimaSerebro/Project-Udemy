'use strict';

const arr = [51, 82, 33, 15, 7, 1];
arr.sort(compairNum);
console.log(arr);
// выполняет сортировку наших чисел 
function compairNum(a, b) {
   return a - b;
}

//arr[99] = 0;// так делать не стоит так как наши жлементы в масиве будут работать не попорядку 
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//    console.log(`${i}: ${item}: внутри массива: ${arr}`);
// });


//arr.pop();
// arr.push(11);
// console.log(arr);

// выполняем переборку нашего массива
// for (let i = 0; i < arr.length; i++) { 
//    console.log(arr[i]);
// }

///for of работает в массивах 
// for (let value of arr) {
//    console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));


// Псевдомасивы отличаються от обычних массивов тем что у него не будет всех этих методов  "forEach", "pop", "push" и так далее 