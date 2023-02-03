"use strict";

function logMessage() {
  console.log("messege: click");
}
// const button = document.getElementsByTagName("button")[0];
const [button] = document.getElementsByTagName("button");
button.addEventListener("click", logMessage);
//По id считаеться самым быстрым
const test = document.getElementById("test");
// const test = document.querySelector('#test')
console.log(test);
//По name
// const input = document.getElementsByName("input");
const [input] = document.getElementsByName("input");
console.log(input);
//По class
const lis = document.getElementsByClassName("item");
console.log(lis);
//По селектору
const h1 = document.querySelector("h1");
// const h1 = document.querySelectorAll('h1') //возвращ набор
console.log(h1);
//
const ps = document.querySelector("p");
// const ps = document.querySelectorAll("p");
// const ps = document.querySelector("p+p");
console.log(ps)
