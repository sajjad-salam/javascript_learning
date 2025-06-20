// ==================== عنوان الدرس  =========================

let test;

console.log(x());

function x() {
  function y() {
    return 1;
  }
  return y();
  function y() {
    return 0;
  }
}

// راح ترجعلك صفر
// لان الفنكشن الاخيرة راح يصير الها هويستنك ب البداية
// يعني الجافاسكربت راح تقرة الدالة هيج
function x() {
  function y() {
    return 1;
  }
  function y() {
    return 0;
  }
  return y();
}
console.log(x());
