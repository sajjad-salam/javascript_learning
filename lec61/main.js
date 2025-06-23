let usernameInput = document.getElementById('username');
// automatically focus on the input field when the page loads
let button = document.getElementById('submit');

onload = function () {
  usernameInput.focus();
  // usernameInput.value = 'القيمة الافتراضية'; // Set a default value
  // تكدر تخلي قيمة افتراضية ب input
  button.disabled = true; // ايقاف الزر حتى يتم ادخال اسم المستخدم
};

// on context menu event then blur the input field
usernameInput.oncontextmenu = function () {
  usernameInput.blur();
  // هنا المستخدم بعد مايكدر ينسخ ايشي من الحقل مال الادخلا
  // alert('Right-click is disabled on this input field.');
};

button.addEventListener('click', function () {
  let username = usernameInput.value;
  if (username === '') {
    alert('Please enter a username');
  } else {
    alert(`Welcome, ${username}!`);
  }
});
