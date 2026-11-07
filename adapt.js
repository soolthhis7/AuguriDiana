/**
 * Окрема система гамбургер-панелі
 */
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navbar = document.querySelector('.navbar');

  if (!menuToggle || !navLinks || !navbar) return;

  // Функція відкриття/закриття меню
  function toggleMenu() {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('menu-open');
  }

  // Клік по кнопці гамбургера
  menuToggle.addEventListener('click', toggleMenu);

  // Закриття меню при кліку на будь-яке посилання всередині нього
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
      navbar.classList.remove('menu-open');
    });
  });

  // Закриття меню при кліку поза його межами (опціонально для зручності)
  document.addEventListener('click', (event) => {
    const isClickInside = navbar.contains(event.target);
    if (!isClickInside && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
      navbar.classList.remove('menu-open');
    }
  });
});