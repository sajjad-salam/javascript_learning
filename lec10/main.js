document.writeln('<br>');
// convert the strings into numbers
console.log(+'4');
// طريقة الفنكشن

console.log(Number('4'));

// في حالة ضفت نص عادي وية الارقام
console.log(+'4 asdf'); //nan
// طريقة الفنكشن

console.log(Number('4 asdf')); //nan

// لذا راح نستخدم parseint

console.log(parseInt('4 asdf;asdf')); // 4
// لكن بيها عيوب همات
// واهم عيب هو انو اذا انخلي كلام قبل الرقم ف مراح يقراه

console.log(parseInt('asfasdf 4 asdfsadf')); //nan

// عيب ال parseInt فقط للانتجر
// اكو وحدة للفلوت خاصة

console.log(parseFloat('4.5 asdfas')); // 4.5
