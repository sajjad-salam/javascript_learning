// ==================== عنوان الدرس  =========================
// دمج الاوبجكت
let test;
let test1;
test = {
  num1: 1,
};
test1 = {
  num2: 12,
};

let result = Object.assign(test1, test);

console.log(result);
