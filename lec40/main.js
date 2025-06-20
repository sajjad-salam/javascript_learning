// ==================== عنوان الدرس  =========================

// حتى ننشى اوبجكت
let car = {
  title: 'bmw',
  price: 1000,
  color: ['white', 'black'],
  model: 2010,

  // حتى دوال تكدر تخلي هنا
  hello: function (username) {
    return `hello ${username}`;
  },
};
console.log(typeof car); //object

// هسة اذا اريد اطبع لون السيارة
console.log(car.color); //(2) ['white', 'black']
console.log(car.model); //2010
console.log(car.hello('sajjad')); //hello sajjad

console.log(test);
