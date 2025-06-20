// ==================== البحث في السترنك  =========================

let test;
test = 'i love java script';

console.log(test.search('i')); // 0

// البحث عن شي ماموجود
console.log(test.search('z')); // -1
console.log(test.search('333سشيب')); // -1
//  دائما ترجعلك -1
// اذا جنت تبحث عن شي ماموجود

// اذا تريد دالة ترجعلك ترو او فولس للبحث استخدم
console.log(test.includes('i')); //false

if (test.includes('z') == true) {
  console.log('hello world');
}
