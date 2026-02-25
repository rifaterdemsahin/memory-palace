/**
 * 🏛️ Memory Palace — Shared Navigation Menu
 * Inject this script in every page. Set window.SITE_ROOT before including:
 *   Root pages   → <script>window.SITE_ROOT='./';</script>
 *   Folder pages → <script>window.SITE_ROOT='../';</script>
 */
(function () {
  'use strict';

  const R = (typeof window.SITE_ROOT !== 'undefined') ? window.SITE_ROOT : './';
  const CURRENT = window.CURRENT_SECTION || '';

  const NAV_ITEMS = [
    { label: '🏠 Home',             href: R + 'index.html',                   key: 'home' },
    { type: 'label', text: 'Journey' },
    { label: '❓ 1. Real Unknown',  href: R + '1_Real_Unknown/index.html',    key: '1' },
    { label: '🌍 2. Environment',   href: R + '2_Environment/index.html',     key: '2' },
    { label: '🎨 3. Simulation',    href: R + '3_Simulation/index.html',      key: '3' },
    { label: '📐 4. Formula',       href: R + '4_Formula/index.html',         key: '4' },
    { label: '💻 5. Symbols',       href: R + '5_Symbols/index.html',         key: '5' },
    { label: '🔍 6. Semblance',     href: R + '6_Semblance/index.html',       key: '6' },
    { label: '✅ 7. Testing Known', href: R + '7_Testing_Known/index.html',   key: '7' },
    { type: 'divider' },
    { label: '📖 Markdown Reader',  href: R + 'markdown_renderer.html',       key: 'md' },
  ];

  const EXTERNAL = [
    { label: '🐙 GitHub Repo',   href: 'https://github.com/rifaterdemsahin/memory-palace', icon: '🐙' },
    { label: '💼 LinkedIn',       href: 'https://www.linkedin.com/in/rifaterdemsahin/',      icon: '💼' },
    { label: '🎥 YouTube',        href: 'https://www.youtube.com/@RifatErdemSahin',          icon: '🎥' },
  ];

  function isActive(key) {
    return key === CURRENT;
  }

  function buildMenuHTML() {
    let navItems = '';
    NAV_ITEMS.forEach(item => {
      if (item.type === 'label') {
        navItems += `<li><span class="nav-section-label">${item.text}</span></li>`;
      } else if (item.type === 'divider') {
        navItems += `<li><hr class="nav-divider"></li>`;
      } else {
        const active = isActive(item.key) ? ' active' : '';
        navItems += `<li><a href="${item.href}" class="${active}">${item.label}</a></li>`;
      }
    });

    let extLinks = '';
    EXTERNAL.forEach(e => {
      extLinks += `<a href="${e.href}" target="_blank" rel="noopener">${e.label}</a>`;
    });

    return `
<button class="nav-toggle" id="navToggle" aria-label="Toggle menu">☰</button>
<div class="nav-overlay" id="navOverlay"></div>
<nav class="nav-sidebar" id="navSidebar" role="navigation" aria-label="Main navigation">
  <div class="nav-brand">
    <span class="brand-icon">🏛️</span>
    <div class="brand-name">Memory Palace</div>
    <div class="brand-sub">Roblox · AI · Self-Learning</div>
  </div>
  <ul class="nav-menu" role="list">
    ${navItems}
  </ul>
  <div class="nav-external">${extLinks}</div>
</nav>
<div class="debug-bar" id="debugBar">
  🐛 Debug Mode ON &nbsp;|&nbsp;
  Page: <strong>${window.location.pathname}</strong> &nbsp;|&nbsp;
  Section: <strong>${CURRENT || 'root'}</strong> &nbsp;|&nbsp;
  Root: <strong>${R}</strong>
  <button onclick="toggleDebug()" style="margin-left:1rem;padding:2px 8px;cursor:pointer;">✖ Disable</button>
</div>`;
  }

  function init() {
    // Insert before body content
    const wrapper = document.querySelector('.page-wrapper');
    if (!wrapper) {
      document.body.insertAdjacentHTML('afterbegin', buildMenuHTML());
    } else {
      wrapper.insertAdjacentHTML('afterbegin', buildMenuHTML());
    }

    // Debug mode
    const debugOn = new URLSearchParams(window.location.search).get('debug') === 'true'
      || localStorage.getItem('mp_debug') === 'true';
    if (debugOn) {
      document.getElementById('debugBar').classList.add('visible');
    }

    // Mobile toggle
    const toggle  = document.getElementById('navToggle');
    const sidebar = document.getElementById('navSidebar');
    const overlay = document.getElementById('navOverlay');
    if (toggle) {
      toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
        toggle.textContent = sidebar.classList.contains('open') ? '✖' : '☰';
      });
    }
    if (overlay) {
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
        toggle.textContent = '☰';
      });
    }
  }

  // Global debug toggle
  window.toggleDebug = function () {
    const on = localStorage.getItem('mp_debug') === 'true';
    localStorage.setItem('mp_debug', on ? 'false' : 'true');
    window.location.reload();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
