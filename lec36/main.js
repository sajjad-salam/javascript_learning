// ==================== عنوان الدرس  =========================

let test;
// هنا راح نعرف الفرق بين
// let , var

console.log(i); //undefined
var i = 10;

// هنا راح ينطبعلك  undefined
// لان المتغير راح ينرفع ليفوك ب الكود
// يسويله تهيئة

// بس اذا ماتريد تسوي تهيئة للمتغير استعمل let

// زين والدوال ؟

sajjad('sajjad'); //sajjad
// راح يطبع طبيعي
function sajjad(arguments) {
  // return arguments;
  console.log(arguments);
}

// زين اذا اريد الدالة متتهيئ ب البداية ؟

// هنا الحل
let ff = function (arguments) {
  console.log(arguments);
};
ff('sajjad'); //sajjad
// هنا الدالة اذا استخدمتها قبل السطر مالتها راح يطلع عندك خطا
