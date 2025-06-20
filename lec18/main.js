// ==================== عنوان الدرس  =========================

let test;
test = [1, 2, 3, 4, 5];

// التعديل على المصفوفة

console.log();
test[4] = '';
console.log(test);
//

// الحذف من المصفوفة

test.pop(4);

console.log(test); //(4) [1, 2, 3, 4]

// للاضافة
test.push('tess');

console.log(test); //(5) [1, 2, 3, 4, 'tess']

// للاضافة في البداية
test.unshift('sajjad');

console.log(test); //(6) ['sajjad', 1, 2, 3, 4, 'tess']
