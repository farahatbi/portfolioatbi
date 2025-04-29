const navLinks = document.querySelectorAll('nav ul li a ');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('nav ul').classList.remove('show');
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});
