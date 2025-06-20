// ==================== عنوان الدرس  =========================

let test, ages;
test = ['sajjad', 'salam', 'teama'];
ages = [22, 40, 80];

for (let index = 0; index < test.length; index++) {
  const element = test[index];
  console.log(element);

  for (let index = 0; index < ages.length; index++) {
    const element = ages[index];
    console.log(element);
  }
}
console.log(test);
