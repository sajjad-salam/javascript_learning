// تغيير لون الخط ل
// h1
// في ملف ال
// html
document.querySelector('h1').style.color = 'red';
// او اكو حل ثاني انو بعد ما الصفحة تلود كل الاكواد ف نخلي الجافاسكربت تشتغل
// اي ان هذا الكود الي راح اكتبه يشتغل بعد ما الصفحة تتحمل
onload = function () {
  document.querySelector('h1').style.color = 'red';
};
