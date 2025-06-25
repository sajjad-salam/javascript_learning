// local storage and session storage
// مساحات التخزين المحلية والتخزين المؤقت

// local storage == 5MB - 10MB
// session storage == 5MB

// امثلة على اضافة بيانات الى التخزين المحلي
localStorage.setItem('name', 'Ahmed');
localStorage.sajjad = 'Sajjad'; // custom key

// let name_of_user = document.getElementById('name');

// console.log(name_of_user.value);

// امثلة على قراءة البيانات من التخزين المحلي
let name_of_user = localStorage.getItem('name');
console.log(name_of_user); // Ahmed

// طريقة اخرى اسهل
console.log(localStorage.sajjad); // Sajjad
console.log(localStorage.name); // Ahmed

// اضافة مصفوفة الى التخزين المحلي
let arr = ['Ahmed', 'Sajjad', 'Ali'];
localStorage.setItem('users', JSON.stringify(arr)); // تحويل المصفوفة الى نص

// قراءة المصفوفة من التخزين المحلي
let users = JSON.parse(localStorage.getItem('users'));
console.log(users); // ['Ahmed', 'Sajjad', 'Ali']

// اضافة كائن الى التخزين المحلي
let user = {
  name: 'Ahmed',
  age: 30,
  city: 'Cairo',
};
localStorage.setItem('user', JSON.stringify(user)); // تحويل الكائن الى نص

// قراءة الكائن من التخزين المحلي
let userObj = JSON.parse(localStorage.getItem('user'));
console.log(userObj); // {name: 'Ahmed', age: 30, city: 'Cairo'}

// استخدام الkey
console.log(localStorage.key(0)); // products
// لان اني عندي تخزين قديم ب المتصفح ف طلع هذا الاوتبوت

// حذف البيانات من التخزين المحلي
localStorage.removeItem('name'); // حذف عنصر واحد

// حذف كل البيانات من التخزين المحلي
localStorage.clear(); // حذف كل البيانات

// session storage
// session storage يعمل نفس عمل local storage ولكن البيانات تبقى فقط في نفس الجلسة
sessionStorage.setItem('sessionName', 'Ahmed');
console.log(sessionStorage.getItem('sessionName')); // Ahmed
