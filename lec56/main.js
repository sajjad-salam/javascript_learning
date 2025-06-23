// ==================== عنوان الدرس  =========================

let test;
let btn = document.getElementById('clickButton');
btn.addEventListener('click', function () {
  console.log('Button clicked!');
  test = 'Button was clicked!';
});

// on mouseup
btn.addEventListener('mouseup', function () {
  console.log('Mouse button released'); // لما ترفع اصبعك عن الزر تشتغل هاي
});

// mousedown
btn.addEventListener('mousedown', function () {
  console.log('Mouse button pressed down'); // اول ما تضغط على الزر تشتغل هاي
});

// on mouseover
btn.addEventListener('mouseover', function () {
  console.log('Mouse is over the button'); // اول ما الماوس يمر فوق الزر تشتغل هاي
});

// mosemove
btn.addEventListener('mousemove', function () {
  console.log('Mouse is moving over the button'); // كل ما تحرك الماوس فوق الزر تشتغل هاي
});
