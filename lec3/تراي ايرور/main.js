document.write('<p> test </p>');
document.write('<p> test </p>');
// اني سويت غلط هنا ب السينتاكس ف مراح يقرة كل الرايت الجوة
// راح يطبع بس الفوك
try {
  document.wriste('<p> test </p>'); // ف لازم تحذف هذا السطر حتى تشتغل الاسطر البقية
} catch (error) {
  window.alert(error);
}
// هنا الكود راح ينطيك تحذير ب النافذة ويهمل السطر لان ما اشتغل
// بعدها يكمل على بقية الاسطر
document.write('<p> test </p>');
document.write('<p> test </p>');
document.write('<p> test </p>');
document.write('<p> test </p>');

// الاوتبوت

// 6 اسطر من كلمة test
