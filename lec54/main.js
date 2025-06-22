// ==================== events  =========================

let test;
test = document.getElementById('btn1');
test.onclick = openConsole;
function openConsole() {
  console.log('hello world');
}
// console.log(test);

// دائما استخدم هاي

let ll;
ll = document.getElementById('btn2');
ll.addEventListener('click', openConsole);
function openConsole() {
  console.log('hello world');
}
