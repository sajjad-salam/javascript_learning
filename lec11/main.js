document.writeln('<br>');
// Number function

console.log(Number('4')); // 4

// هاي الفنكشن بيها هواي شغلات
// لان بكل بساطة النمبر هذا هو اوبجكت
//
//

// هاي مراح تستخدمها

// اكبر رقم امن
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// اكبر رقم امن  ب الجافاسكربت
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
// كذلك اقل رقم امن
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991

// حيث انو اني اكدر اسوي دالة تتحقق من انو هل الرقم امن او لا
// كلش سهلة

// وتكدر اكو دالة اصلا جوة ال نمبر تسوي هذا الشي
console.log(Number.isSafeInteger(9007199254740991)); //true
console.log(Number.isSafeInteger(9007199254740992)); // false
// وهكذا

console.log(Number.NEGATIVE_INFINITY); //-Infinity

console.log(Number.POSITIVE_INFINITY); //Infinity

// هاي مهمة كلش
// ===================================
// هاي الدالة تتحقق من انو هل الرقم المدخل هو انتجر او فلوت وغيرها
// تفيدك بعدين
console.log(Number.isInteger(4.5)); //false

//
console.log(Number.isInteger(4)); //false
