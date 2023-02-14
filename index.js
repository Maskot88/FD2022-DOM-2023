"use strict";

const promise = fetch("./assets/js/data.json").then((response) =>
  response.json().then((data) => {
    console.table(data);
  })
);
// console.log(promise);

// promise.then(
//   (response) => {
//     const responsePromise = response.json();
//     console.log("ok", responsePromise);
//     responsePromise.then(
//       (data) => {
//         console.table(data);
//       },
//       () => {
//         console.log('error responsrPromise')
//       }
//     );
//   },
//   () => {
//     console.log("error promise");
//   }
// );

// const responsrPromise = promise.then((response) => {
//   return response.json();
// });

// responsrPromise.then((data) => {
//   console.table(data);
// });
