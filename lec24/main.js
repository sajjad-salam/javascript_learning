// ==================== عنوان الدرس  =========================

let test;

console.log(test);
console.log(4 == '4'); //true هنا تقارن بس قيم ماعليه بنوع البيانات
console.log(4 === '4'); // false هنا تقارن القيمة ونوع البيانات

// الاكبر والاصغر

console.log(4 > 5); // false

console.log(4 >= 3); //true

// وهكذا ...

// مشروع بسيط
let product = 'tv';
let size = 50;
let cost = 10000;

console.log(cost > 10000); //false
console.log(cost >= 10000); //true

console.log(cost >= 10000 && size == 50); //true
console.log(cost >= 10000 && size == 30); //false
// الفوك هي علامة ال
// and

// or condition
console.log(cost >= 10000 || size == 30); //true
