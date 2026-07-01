
(function () {
  var KEY = 'climbe-specs-theme';
  var root = document.documentElement;
  var saved = localStorage.getItem(KEY);
  if (saved) root.setAttribute('data-theme', saved);
  else if (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) root.setAttribute('data-theme', 'dark');
  window.toggleTheme = function () {
    var cur = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', cur);
    localStorage.setItem(KEY, cur);
  };
})();
document.addEventListener('DOMContentLoaded', function () {
  var search = document.getElementById('search');
  if (!search) return;
  search.addEventListener('input', function () {
    var q = search.value.trim().toLowerCase();
    document.querySelectorAll('[data-card]').forEach(function (c) {
      c.style.display = c.getAttribute('data-search').indexOf(q) !== -1 ? '' : 'none';
    });
    document.querySelectorAll('[data-group]').forEach(function (g) {
      var any = Array.prototype.slice.call(g.querySelectorAll('[data-card]')).some(function (c) { return c.style.display !== 'none'; });
      g.style.display = any ? '' : 'none';
    });
  });
});
