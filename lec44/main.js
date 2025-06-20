// ==================== عنوان الدرس  =========================

let test;
// انشاء اوبجكت جديد اعتمادا على اوبجكت قديم
test = {
  name: 'sajjad',
  getname: function () {
    return `hello ${this.name}`;
  },
};
console.log(test.name); //sajjad

// الانشاء
let user2 = Object.create(test);
console.log(user2.name); //sajjad
// هنا الاوبجكت الجديد ورث من الاوبجكت القديم كل البيانات

// التعديل والاضافة على الاوبجكت الجديد
user2.name = 'ali';
console.log(user2.name); //ali

// اضافة بيانات جديدة للاوبجكت الجديد
user2.age = 19;
console.log(user2.age); //19
