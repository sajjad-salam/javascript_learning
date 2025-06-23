let navbarbuttonopen = document.getElementById('navbaropen');
let navbarbuttonclose = document.getElementById('navbarclose');
console.log(navbarbuttonopen);
console.log(navbarbuttonclose);

let container = document.getElementById('navbar');
console.log(container);

// ok click then open navbar
navbarbuttonopen.addEventListener('click', function () {
  container.classList.remove('hide');
  navbarbuttonclose.classList.remove('hide');
  navbarbuttonopen.classList.add('hide');
});

navbarbuttonclose.addEventListener('click', function () {
  container.classList.add('hide');
  navbarbuttonopen.classList.remove('hide');
  navbarbuttonclose.classList.add('hide');
});
