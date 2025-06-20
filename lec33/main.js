// ==================== عنوان الدرس  =========================

let test;
test = ['sajjad', 'salam', 'ali'];
// شلون نسوي فور لوب لكل المصفوفة عدا سلام

for (let index = 0; index < test.length; index++) {
  const element = test[index];
  if (element == 'salam') {
    continue;
  } else {
    console.log(element);
  }
}
// اعلاه راح يطبعلك فقط الاسم الاول والاخير ويستثني الاسم الثاني
console.log(test);

// اذا اريد اتوقف عد ما اجد متغير معين
// مثلا اذا لكيت كلمة سلام راح اتوقف او اوقف اللوب كلها
for (let index = 0; index < test.length; index++) {
  const element = test[index];
  if (element == 'salam') {
    console.log(element);
    break;
  } else {
    console.log('no one');
  }
}
