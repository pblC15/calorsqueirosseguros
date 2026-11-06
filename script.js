const menuToggle = document.getElementById('menuToggle');
const navlinks = document.getElementById('navlinks');
menuToggle.addEventListener('click', () => {
  const open = navlinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
navlinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navlinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
}));
document.getElementById('year').textContent = new Date().getFullYear();
