// ==================== الدمج بين المصفوفات  =========================

let a1;
let a2;

a1 = ['sajjad', 'salal', 'mazen'];
a2 = ['qwer', 'asdf', 'asdf'];

console.log(a1);
console.log(a2);

lll = a1.join(a2);
console.log(lll); //sajjadqwer,asdf,asdfsalalqwer,asdf,asdfmazen

// دمج بين مصفوفتين
console.log(a1.concat(a2)); //(6) ['sajjad', 'salal', 'mazen', 'qwer', 'asdf', 'asdf']

// ملاحضة ان ال كونتاكت تاخذ اكثر من عنصر عادي

console.log(a1.concat(a2, 'sajjjjjjj')); //(7) ['sajjad', 'salal', 'mazen', 'qwer', 'asdf', 'asdf', 'sajjjjjjj']

// تحويل المصوفة الى سترنك

ssss = a1.join();

console.log(ssss); //sajjad,salal,mazen
console.log(typeof ssss); //string

// اكو فيكة انو اكدر اشيل علامة ,

test2 = a1.join('-');

console.log(test2); //sajjad-salal-mazen
// وبكيفك بعد انت شنو تريد تضيف
