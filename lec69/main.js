// مشروع حفظ اسم المستخدم في المتصفح
let user = document.getElementById('name');

// اون لود حتى اجيب البيانات من التخزين القديم واخليها ب الحقل
onload = function () {
  // عند تحميل الصفحة، نتحقق إذا كان هناك اسم مخزن في localStorage
  if (localStorage.getItem('name')) {
    user.value = localStorage.getItem('name'); // إذا كان موجود، نضعه في حقل الإدخال
  }
};

user.addEventListener('keyup', function () {
  localStorage.setItem('name', user.value);
});

// نفس الشي لكن باستخدام sessionStorage الفرق الوحيد انو البيانات تبقى فقط في نفس الجلسة
//  بحيث اذا قمت باغلاق المتصفح وفتحته مرة اخرى لن تجد البيانات
