"use strict";


let num =20;

function showFirsMassage(text) {
   console.log(text);
   let num = 15;

}

showFirsMassage("Hello world");
console.log(num);


// Function declaration - создается до ночала выполнения скрипта, можно вызвать перед объявлением
function calc(a, b) {
   return (a + b);
}
console.log(calc(4, 13));
console.log(calc(8, 33));
console.log(calc(7, 28));


function ret() {
   let num = 50;


   //
   return num;
}

const anotherNum = ret();
console.log(anotherNum);

//  пример Function Expression - создается только только тогда когда доходит 
const logger = function() {
   console.log("Hello")
};

logger();

// Стерлочная функция не имеет своего контекста this

const Cal = (a, b) => a + b ;// можно записывать в таком ввиде одной строки или
 /* const Cal = (a, b) => {
    console.log("Cal")
   return (
      a + b
   )   
} */