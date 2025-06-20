// ==================== عنوان الدرس  =========================

let test;
// اضافة البيانات من برة
test = {
  lastname: 'salam',
};
test.name = 'sajjad';
test.age = 19;
console.log(test.age); //19
console.log(test.name); //sajjad

console.log(test); //{name: 'sajjad', age: 19}age: 19name: "sajjad"[[Prototype]]: Object

// اذا كان المتغير موجود ضمن الاوبجكت ف راح يتم التعديل عليه

test.lastname = 'ss';
console.log(test.lastname); //ss

// طريقة ثانية لعمل الاوبجكت
let oo = new String();
oo.sajjad = 'sadf';
console.log(oo); //String {'', sajjad: 'sadf'}
