// ==================== عنوان الدرس  =========================

let test;

function hello_user(name) {
  // console.log(sajjad);
  return `hello user : ${name}`;
}
test = hello_user('sajjad');

console.log(test);

// برنامج يحسب عمر الشخص ب الايام
function calcAge(age) {
  let age_days;
  let years = 360; // عدد الايام ب السنة الوحدة
  age_days = age * years;
  return age_days;
}

let sajjad;
sajjad = calcAge(20);
console.log(sajjad); //7200

// مطلوب برنامج يضيف سعر الضرائب وسعر الاعلانات الى سعر المنتج لكي يباع
// والارباح كذلك

// الكود  :
let product = 500; // سعر المنتج الاصلي
let taxes = 200; //ضرائب
let ads = 100; // اعلانات
let prof = 300; // هامش الربح

function calc_product_price(product, taxes, ads, profit) {
  return product + taxes + ads + profit;
}
let result = calc_product_price(product, taxes, ads, prof);
console.log(result); //1100
