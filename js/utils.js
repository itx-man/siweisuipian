// ── Back to Top Button ──
(function () {
  var btn = document.createElement('a');
  btn.className = 'back-to-top';
  btn.href = '#';
  btn.setAttribute('aria-label', '返回顶部');
  btn.innerHTML = '↑';
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.body.appendChild(btn);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });
})();
