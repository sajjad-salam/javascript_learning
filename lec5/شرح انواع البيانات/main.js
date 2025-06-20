// string
// number
// boolean
// undifiend
// null
// object
let hello = 'sajjad';
document.writeln(hello);

// معرفة نوع البيانات
// عندك ب البايثون
// type(var)
// هنا يرجعلك نوع البيانات
// نفس الشي عندك بلغة الجافاسكربت

document.writeln(typeof hello);
document.writeln('<br>');

let x = 10;
document.writeln(x);
document.writeln(typeof x);

let y = 20;

document.writeln('<br>');
document.writeln('the sum of the numbers is : ', x * y);

document.writeln('<br>');

document.writeln('this is not sum : ', 'x * y');

let bol = true;

document.writeln('<br>');
document.writeln(typeof bol);

// اذا عندك متغير انت مامعرفة اصلا ب الخزن وتريد تعرف نوعة المفروض يرجعلك undefind
// undefind

// مثلا

let sajjad;

document.writeln('<br>');
document.writeln(typeof sajjad); // output : undefined
// لان اني مامنطي قيمة للمتغير
//واصلا اذا اريد اطبعة

document.writeln(sajjad); // output : undefined
// هماتين راح يرجعلك undefined

document.writeln('<br>');

// شرح النول

let ss = null;

document.writeln('<br>');
document.writeln(ss); //output : null
document.writeln('<br>');
document.writeln(typeof ss); //output : opject
document.writeln('<br>');
