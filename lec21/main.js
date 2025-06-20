// ==================== البحث في المصفوفة  =========================

let test;
test = [1, 2, 3, 'sajjad'];
console.log(test);

// البحث عن العناصر
val = test.indexOf('sajjad');

console.log(val); //3
// يرجعلك الاندكس مالته

// اذا تريد ترو او فولس
t = test.includes('sajjad');
console.log(t); //true
