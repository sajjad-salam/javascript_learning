// ==================== عنوان الدرس  =========================

let test;

console.log(test);
function hello_user(username) {
  // التحقق من ان المستخدم ادخل يوزرنيم وليس فراغ
  if (username) {
    console.log(`hello user ${username}`);
  } else {
    console.log('there is no user name input');
  }
}

hello_user(); //there is no user name input
hello_user('sajjad'); //hello user sajjad

// شلون اخلي الدالة تستقبل عدد لانهائي من المتغيرات
function calc(...numbers) {
  console.log(numbers);
}
calc(1, 2, 34, 5, 5); //(5) [1, 2, 34, 5, 5]

function calc(...numbers) {
  let sum;
  sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    let element = numbers[index];
    sum += element;
  }

  console.log(numbers);
  console.log(`the summitaion is : ${sum}`);
  return sum;
}
calc(1, 2, 34, 5, 5); //the summitaion is : 47
