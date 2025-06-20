// ==================== dom css style  =========================

let test;

test = document.getElementById('test'); // للوصول الى عنصر باستخدام معرفه
console.log(test);

// تغيير لون الخلفية
test.style.backgroundColor = 'red';

// تغيير لون النص
test.style.color = 'white';

// تغيير حجم الخط
test.style.fontSize = '27px';

// طباعة ماذا يحتوى test
// console.log(test);
console.log(test.innerHTML);
// <h3>first</h3>
// <h3>second</h3>
// <h3>third</h3>

// حذف خصائص معينه مثلا حجم الخط
test.style.fontSize = '';
