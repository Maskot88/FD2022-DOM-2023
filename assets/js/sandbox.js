"use strict";

//1 Вариант
// let count = 0;
// function counter() {
//   count++;
//   return count;
// }

//2 Вариант
//Чистая фунция высшего порядка
//Это инкапсуляция JS никто внешне не может её изменить
// function createCounter(initialValue = 0) {
//   let count = initialValue; //замкнутая переменная
//   return function() {
//     count++;
//     return count;
//   }
// }
// const counter1 = createCounter();
// const counter2 = createCounter(20);
// const counter3 = createCounter(50);

//3 Вариант
// function createCounter(initialValue = 0){
//     let count = initialValue;
//     return {
//         increment(){
//             return ++count
//         },
//         decrement(){
//             return --count
//         }
//     }
// }
// const counter1 = createCounter();
// const counter2 = createCounter(200);

//4 Вариант
// function createAdder(initialValue) {
//   return function(value){
//     return (initialValue += value)
//   }
// }
//2 Вариант
// const createAdder = (initial)=> (value)=> initial += value;

// const adder = createAdder(100);
// adder(15);
