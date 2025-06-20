// ==================== عنوان الدرس  =========================

let test;
test = 'sajjad';
let test2 = 'sajjad';

if (test == test2) {
  console.log('yes'); // will print 🙃
}
console.log(test == test2); //true

console.log(test);

// برنامج التحقق من اسم المستخدم مثلا
let admin = 'admin';
let check_admin = prompt('enter the admin pass ');

console.log(admin == check_admin); //true

if (admin == check_admin) {
  console.log('hello world'); //hello world
  //  will print if the user enter "admin"
}
