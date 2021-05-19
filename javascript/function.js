// function printAll(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log(args[i]);
//   }

// function printUsers(...users) {
//   for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//   }
// }

const printUsers = (...users) => {
  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
  }
};

const hi = {
  name: 'name',
  color: '#ff0077',
};

const deleteUser = function (user) {
  users = users.filter(function (aUser) {
    aUser !== user;
  });
};

printUsers(hi.color, 'im', 'users~');

//   args.forEach((arg) => console.log(arg));
// }

// printAll('hi', "i'm", 'yunkuk');

// // bad
// function upgradeUser(user) {
//   if (user.point > 10) {
//     //long upgrade logic
//   }
// }

// // good
// function upgradeUser(user) {
//   if (user.point <= 10) {
//     return;
//   }
//   // long upgrade logic...
// }

// const print = function () {
//   // 익명함수
//   console.log('print');
// };

// print();
// const printAgain = print;
// printAgain();

// function randomQuiz(answer, printYes, printNo) {
//   if (answer === 'love you') {
//     printYes();
//   } else {
//     printNo();
//   }
// }

// // anonymous function
// const printYes = function () {
//   console.log('yes');
// };

// // named function
// // better debugging in debugger's stack traces
// const printNo = function print() {
//   console.log('no');
// };

// randomQuiz('wrong', printYes, printNo);
// randomQuiz('love you', printYes, printNo);

// const simplePrint = function print() {
//   console.log('simplePrint!');
// };

// Arrow function
// always anonymous

// const simplePrint = () => console.log('simplePrint!');

// const add = (a, b) => a + b;

// (function hello() {
//   console.log('IIFE');
// })();

// (() => {
//   console.log('IIFE2');
// })();
