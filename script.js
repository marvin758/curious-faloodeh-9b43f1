const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuButton?.addEventListener('click', () => {
  const open = nav?.classList.toggle('open');
  menuButton?.setAttribute('aria-expanded', String(Boolean(open)));
});
document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  nav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, { threshold: 0.12 }) : null;
document.querySelectorAll('.reveal').forEach((el) => observer ? observer.observe(el) : el.classList.add('visible'));
const year = document.querySelector('#year'); if (year) year.textContent = new Date().getFullYear();
