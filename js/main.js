// BlackStorm, LLC — Main JavaScript

const THEME_KEY = 'bs-theme';
const html = document.documentElement;

const SVG_SUN = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
const SVG_MOON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
const SVG_MENU = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
const SVG_X = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.innerHTML = theme === 'light' ? SVG_MOON : SVG_SUN;
    btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    btn.title = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
  }
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const pref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  applyTheme(saved || pref);
}

function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  toggle.innerHTML = SVG_MENU;
  toggle.setAttribute('aria-label', 'Open menu');

  function openMenu() {
    menu.classList.add('open');
    toggle.innerHTML = SVG_X;
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('open');
    toggle.innerHTML = SVG_MENU;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    menu.classList.contains('open') ? closeMenu() : openMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) closeMenu();
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    const item = btn.closest('.faq-item');
    const answer = item?.querySelector('.faq-answer');
    const id = answer?.id || `faq-${Math.random().toString(36).slice(2)}`;
    if (answer) {
      answer.id = id;
      btn.setAttribute('aria-controls', id);
    }
    btn.setAttribute('aria-expanded', item?.classList.contains('open') ? 'true' : 'false');

    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initDropdowns() {
  document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector('.nav-dropdown-trigger');
    const links = dropdown.querySelectorAll('.nav-dropdown-menu a');
    if (!trigger) return;

    dropdown.addEventListener('focusin', () => {
      trigger.setAttribute('aria-expanded', 'true');
    });

    dropdown.addEventListener('focusout', (event) => {
      if (!dropdown.contains(event.relatedTarget)) {
        trigger.setAttribute('aria-expanded', 'false');
      }
    });

    dropdown.addEventListener('mouseenter', () => {
      trigger.setAttribute('aria-expanded', 'true');
    });

    dropdown.addEventListener('mouseleave', () => {
      trigger.setAttribute('aria-expanded', 'false');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        trigger.setAttribute('aria-expanded', 'false');
      });
    });
  });
}

function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu-link').forEach(link => {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 60 ? 'var(--shadow-md)' : 'none';
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initFAQ();
  initDropdowns();
  setActiveNav();
  initHeaderScroll();

  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
});
