// ==================== عنوان الدرس  =========================

let test;
let type = document.getElementById('inputField');
// on keyup
type.addEventListener('keyup', function (event) {
  console.log('Key released:', event.key); // لما ترفع اصبعك عن الكيبورد
  // تشتغل هاي
  test = 'Key released: ' + event.key;
});

// on focus
type.addEventListener('focus', function () {
  console.log('Input field focused'); // لما تركز على حقل الإدخال
  type.style.backgroundColor = 'lightblue'; // تغيير لون الخلفية
  test = 'Input field focused';
});
// on blur
type.addEventListener('blur', function () {
  // لما تخرج من حقل الإدخال
  console.log('Input field blurred'); // لما تخرج من حقل الإدخال
  console.log(test);
  type.style.backgroundColor = ''; // إعادة لون الخلفية إلى الوضع الافتراضي
});

// on window load
window.addEventListener('load', function () {
  console.log('Window loaded');
  this.document.body.style.backgroundColor = 'lightgreen'; // تغيير لون الخلفية للصفحة
  test = 'Window loaded';
});

// on window resize
window.addEventListener('resize', function () {
  console.log('Window resized');
  this.document.body.style.backgroundColor = 'lightcoral'; // تغيير لون الخلفية عند تغيير حجم النافذة
  test = 'Window resized';
});
