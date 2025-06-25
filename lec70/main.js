let cards = document.getElementsByClassName('card');
let btn = document.getElementById('changeColor');

// هنا اذا جان اليوزر خازن لون في التخزين المحلي، نستخدمه لتغيير لون البطاقات
onload = function () {
  if (localStorage.getItem('color')) {
    let color = localStorage.getItem('color');
    for (let card of cards) {
      card.style.backgroundColor = color;
    }
  }
};

// اذا داس المستخدم على الزر، نطلب منه ادخال لون جديد
// ونعيد تعيين لون البطاقات الى اللون الجديد
btn.addEventListener('click', function () {
  let color = prompt('Enter a color:');
  // في حالة انو المستخدم قام ب ادخال لون
  if (color) {
    for (let card of cards) {
      card.style.backgroundColor = color;
    }
    // بعدها لازم احفظ اللون في التخزين المحلي
    // حتى من تحمل الصفحة مرة اخرى، يبقى اللون محفوظ حتى لو سديت المتصفح
    localStorage.setItem('color', color);
  }
  // ملاحضة اذا ارسل المستخدم كلمة عشوائية او غير صحيحة
  // راح يظل اللون كما هو، لانو ما غيرنا اي شي في التخزين المحلي
});
