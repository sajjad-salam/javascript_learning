// ==================== عنوان الدرس  =========================
// this keyowrd
// هاي الامر حتى يشغلك الوضع الصارم يعني بدون اي اخطاء ب السينتاكس يعني الجافاسكربت تدقق عليك
'use strict';
let test;
test = {
  name: 'sajjad',
  getname: function () {
    return this.name;
  },
};

console.log(test.getname()); //sajjad
// يعني اكدر استعمل
// test.name
// او
// this.name

// this مع الدوال
function hello() {
  return this;
}
console.log(hello()); //ترجعلك window
