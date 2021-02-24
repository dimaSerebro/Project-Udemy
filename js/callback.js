'use strict';
 
function first() {
 //Do something
 setTimeout(function () {
    console.log(1);
 }, 500);
}

function second() {
   console.log(2);
}

first();
second();
                                 /* CallBack это функция которая должна быть выполнена после того 
                                 как другая функция завершила свое выполнение  */

function learnJS(lang, callBack) {
   console.log(`Я учу ${lang}`);
   callBack();
}

function done () {
    console.log('Я все таки начал учить его!');
}

learnJS('JavaScript', done);