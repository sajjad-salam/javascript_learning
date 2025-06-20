// ==================== عنوان الدرس  =========================

let test;

console.log(test);
let user = {
  name: 'sajjad salam',
  email: 'test@gmail.com',
  age: 22,
  skills: ['python', 'js'],
  active: true,
  // لنفرض المستخدم عندة اكثر من رقم تلفون
  // تلفون للعمل وتلفون خاص
  // ف نسوي اوبجكت
  // هيج راح يسموها نستد اوبجكت
  phone_numbers: {
    home: '07748820206',
    work: '022234234',
  },
  isActive: function () {
    if (this.active) {
      // طبعا تكدر تكول
      // user.active
      return 'yes';
    } else {
      return 'no';
    }
  },
};

console.log(user.phone_numbers.home); //07748820206
console.log(user.isActive()); //yes
// طبعا تكدر تستعمل غير طريقة حتى توصل للعناصر
console.log(user['name']); //sajjad salam
