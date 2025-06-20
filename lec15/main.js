// ==================== عنوان الدرس  =========================

let test;
test = 'sajjad';

// تكرار السترنك
console.log(test.repeat(2)); //sajjadsajjad

// البحث والاستبدال
console.log(test.replace('s', 'a')); //aajjad

// اذا تريد فقط بحث تكدر تستعمل الدالة هيج
let s = 's';

console.log(test.replace(s, s));

// جعل الحروف كلها كبار
console.log(test.toUpperCase()); //SAJJAD

// جعل الحروف كلها صغار
console.log(test.toLowerCase()); //sajjad

//معرفة عدد حروف النص
console.log(test.length); // 6

let nn = 'sajjad salam';
// للبحث عن شيء اعتمادا على اندكس معين
console.log(test.charAt(2)); // j

// دالة ترجعلك كل كاركتر وين موجود لوكيشنه ب الرام
console.log(test.charCodeAt(2)); // 106

//
console.log(test.search('d')); //يرجعلك اللوكيشن وين موجود ب السترنك
// 5

// اذا اريد اخذ شريحة من النص
console.log(test.slice(1, 3)); // aj

//يقطعلك النص الى شرائح
console.log(nn.split(' '));
// output
// [
//     "sajjad",
//     "salam"
// ]

// ايضا تابع لدرس تحويل الارقام الى نصوص
let num = 39;
console.log(typeof num.toString()); //string

//تقطع
console.log(nn.trim()); //sajjad
