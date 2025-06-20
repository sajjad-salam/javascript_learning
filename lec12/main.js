let x = -10;
let test;
// ثوابت الرياضيات
test = Math.PI;
console.log(test); //3.141592653589793

// المطلق
test = Math.abs(-10); // 10
console.log(test); //

// الجذر التربيعي

test = Math.sqrt(16); // 4
console.log(test); //

// الاس
// (method) Math.pow(x: number, y: number): number
// انتبه هذا الميثود ياخذ رقمين مو رقم واحد
test = Math.pow(2, 3); // 8
console.log(test); //

// تقريب الارقام

test = Math.round(4.6); // 5
test = Math.round(4.5); // 5
console.log(test); //

// لتقريب الرقم فوك دائما
test = Math.ceil(4.2); // 5
console.log(test); //

// للتقريب ليجوة
test = Math.floor(4.6); // 4
console.log(test); //

// اقل رقم بين الارقام
test = Math.min(10, 20, 340); // 4
console.log(test); //
