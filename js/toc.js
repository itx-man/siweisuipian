(function () {
  // Only run on article pages with content
  var content = document.querySelector('.article-content');
  if (!content) return;

  var headings = content.querySelectorAll('h2');
  if (headings.length < 2) return; // skip short articles

  // Build TOC element
  var toc = document.createElement('nav');
  toc.className = 'toc';
  toc.setAttribute('aria-label', '文章目录');

  var label = document.createElement('p');
  label.className = 'toc-label';
  label.textContent = '目录';
  toc.appendChild(label);

  var ul = document.createElement('ul');
  ul.className = 'toc-list';

  headings.forEach(function (h, i) {
    // Ensure heading has an id
    if (!h.id) h.id = 'heading-' + i;

    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    a.addEventListener('click', function (e) {
      e.preventDefault();
      h.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, null, '#' + h.id);
    });
    li.appendChild(a);
    ul.appendChild(li);
  });

  toc.appendChild(ul);
  document.body.appendChild(toc);

  // Show TOC after scrolling past hero / article header
  var articleHeader = document.querySelector('.article-header');
  var showThreshold = articleHeader
    ? articleHeader.offsetTop + articleHeader.offsetHeight
    : 200;

  // Active section highlight via IntersectionObserver
  var items = ul.querySelectorAll('li');
  var activeIndex = -1;

  function setActive(index) {
    if (index === activeIndex) return;
    items.forEach(function (li) { li.classList.remove('active'); });
    if (index >= 0) items[index].classList.add('active');
    activeIndex = index;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var idx = Array.from(headings).indexOf(entry.target);
      if (entry.isIntersecting) setActive(idx);
    });
  }, { rootMargin: '-10% 0px -80% 0px', threshold: 0 });

  headings.forEach(function (h) { observer.observe(h); });

  // Show/hide TOC on scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > showThreshold + 60) {
      toc.classList.add('visible');
    } else {
      toc.classList.remove('visible');
    }
  }, { passive: true });
})();
