
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').replace('#', '');
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
    const targetSection = document.getElementById(targetId);
    if (targetSection) targetSection.style.display = 'block';
  });
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
  const defaultSection = document.getElementById('about');
  if (defaultSection) defaultSection.style.display = 'block';
});
