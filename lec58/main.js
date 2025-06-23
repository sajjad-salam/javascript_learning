// ==================== عنوان الدرس  =========================
let after = document.getElementById('after');
let before = document.getElementById('before');
let inside = document.getElementById('inside');
let content = document.getElementById('content');
let container = document.getElementById('container');
container.style.border = '1px solid black';
container.style.height = '200px';
container.style.backgroundColor = 'lightgray';

after.addEventListener('click', function () {
  container.after(content);
});

before.addEventListener('click', function () {
  container.before(content);
});
inside.addEventListener('click', function () {
  container.append(content);
});
