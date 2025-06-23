// كل شي ينخزن داخل الwindow
// الوندو هي الام لكل شي
// الwindow هو object
// الwindow هو object موجود في الglobal scope

// مثلا  اذا عندك دالة اسمها sayHello
// وداخلها عندك متغير اسمه name
function sayHello() {
  let name = 'John';
  console.log('Hello, ' + name);
}

// ف هاي الدالة تكدر مباشرة تستدعيها

sayHello(); // Hello, John

// وتكدر هم تستدعيها من الwindow
window.sayHello(); // Hello, John

// ايضا  المتغيرات
let age = 30;
console.log(age); // 30

// تكدر تستدعيها من الwindow
console.log(window.age); // 30

// بس اذا متغير داخل الدالة مايصير
function greet() {
  let message = 'Hello, World!';
  console.log(message);
}
greet(); // Hello, World!
// console.log(window.message); // undefined

// فقط المتغيرات الدكلريشن والدوال الدكلريشن يصير

let sajjad = function () {
  console.log('Hello, ');
};

// هذا النوع من الدوال يسمى function expression
// اكسبرشن
// مايصير تستدعيها من الwindow
console.log(window.sajjad); // undefined
