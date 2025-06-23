let hello = document.getElementById('hello');

// on click event
hello.addEventListener('click', function () {
  console.log('Hello, world!');
  hello.classList.add('name');
});
// console.log(hello.classList);

// on textmenue
hello.addEventListener('contextmenu', function (event) {
  event.preventDefault();
  console.log('Right click detected!');
  hello.classList.remove('name');
});
// on toggle
let ttogle = document.getElementById('ttogle');
ttogle.addEventListener('click', function () {
  ttogle.classList.toggle('name');
});
