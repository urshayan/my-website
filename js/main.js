/* ═══════════════════════════════════════════════
   SHAYAN IJAZ — SHARED JS  (js/main.js)
   Highlights the active nav link on every page.
   ═══════════════════════════════════════════════ */

(function () {
  const path = window.location.pathname;

  // Map URL segments → nav href values to match
  const rules = [
    { test: /\/focus\.html$/,    href: 'focus.html'    },
    { test: /\/projects\.html$/, href: 'projects.html' },
    { test: /\/blog(\.html|\/)/,  href: 'blog.html'    },
    { test: /\/contact\.html$/,  href: 'contact.html'  },
  ];

  document.querySelectorAll('.nav-links a').forEach(function (a) {
    const href = a.getAttribute('href');
    for (let i = 0; i < rules.length; i++) {
      if (rules[i].test.test(path) && href.includes(rules[i].href)) {
        a.classList.add('active');
        break;
      }
    }
  });
})();
