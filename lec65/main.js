function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
let btn = document.getElementById('scrollToTopBtn');
window.onscroll = function () {
  if (window.scrollY >= 400) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
};
