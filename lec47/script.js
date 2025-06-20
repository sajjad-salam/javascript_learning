let test;
test = document.querySelector('#head'); // للوصول إلى عنصر باستخدام معرفه
test.style.color = 'red';
console.log(test);
let sajjad = document.querySelectorAll('h1');
console.log(sajjad);
// الوصول الى عنصر باستخدام صنفه
let sss = document.querySelector('.sss');
sss.style.color = 'blue';
console.log(sss);

// الوصول الى كل العناصر بداخل الكلاس نيم
let sss2 = document.querySelectorAll('.sss'); /// هنا اذا عندك اكثر من عنصر بنفس الكلاس نيم راح يحددهن كلهن

// اذا تريد تحدد عنصر معين من الكلاس
let sss3 = document.querySelectorAll('.sss')[0]; // هنا راح يحدد العنصر الاول من الكلاس نيم
sss3.style.color = 'green';

// ايضا اكدر اوصل للعناصر الرئيسية ب الدوكيومنت
let body = document.body; // للوصول الى جسم الصفحة
console.log(body);
let title = document.title; // للوصول الى عنوان الصفحة
console.log(title); //Document

// اكدر اغير عنوان الصفحة
document.title = 'مرحبا بكم في الدرس 47 من دورة تعلم جافاسكريبت';
// راح تتغير مباشرة

// الوصول الى الصور
let images = document.querySelectorAll('img'); // للوصول الى جميع الصور
console.log(images);
// اذا تريد تحدد صورة معينة
let firstImage = document.querySelector('img'); // للوصول الى اول صورة

// للوصول الى صورة معينة محددة
let imag = document.querySelectorAll('img')[0]; // للوصول الى اول صورة

// الوصول الى الروابط في الصفحة
let links = document.links; // للوصول الى جميع الروابط
console.log(links);
links[0].style.color = 'red'; // لتغيير لون اول رابط في الصفحة

// الوصول الى href
let href = links[0].href; // للوصول الى رابط اول رابط في الصفحة
console.log(href); // https://www.example.com/

// طبعا اكدر اعدل الhref
links[0].href = 'https://www.google.com'; // لتغيير رابط اول رابط
console.log(links[0].href); // https://www.google.com

// الوصول الى الفورم في الصفحة
let forms = document.forms; // للوصول الى جميع الفورمات في الصفحة
console.log(forms); // HTMLCollection(0) []

let form1 = document.forms[0]; // للوصول الى اول فورم في الصفحة
console.log(form1); // <form id="form1">...</form>
