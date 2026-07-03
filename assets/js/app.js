/* ============================================================
   DSA Mastery - Main Application JavaScript
   Handles: theme, sidebar, search, progress, scroll spy,
            back-to-top, collapsibles, tabs, component loading
   ============================================================ */

(function () {
  'use strict';

  // ---- Utility ----
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  // Determine base path relative to current page
  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/topics/') || path.includes('/patterns/') ||
        path.includes('/cheatsheets/') || path.includes('/challenges/') ||
        path.includes('/tips/') || path.includes('/revision/')) {
      return '../';
    }
    return './';
  }

  const BASE = getBasePath();

  // ---- Progress Manager ----
  const Progress = {
    KEY: 'dsa_mastery_progress',
    
    getAll() {
      try {
        return JSON.parse(localStorage.getItem(this.KEY)) || {};
      } catch { return {}; }
    },

    isCompleted(topicId) {
      return !!this.getAll()[topicId];
    },

    toggle(topicId) {
      const data = this.getAll();
      if (data[topicId]) {
        delete data[topicId];
      } else {
        data[topicId] = Date.now();
      }
      localStorage.setItem(this.KEY, JSON.stringify(data));
      this.updateUI();
      return !!data[topicId];
    },

    getCompletedCount() {
      return Object.keys(this.getAll()).length;
    },

    getTotalTopics() {
      if (typeof DSA_CURRICULUM === 'undefined') return 1;
      let total = 0;
      DSA_CURRICULUM.phases.forEach(p => total += p.topics.length);
      return total || 1;
    },

    getPercentage() {
      return Math.round((this.getCompletedCount() / this.getTotalTopics()) * 100);
    },

    updateUI() {
      const pct = this.getPercentage();
      const fill = $('.progress-bar-fill');
      const text = $('.progress-completed');
      if (fill) fill.style.width = pct + '%';
      if (text) text.textContent = this.getCompletedCount();

      // Update sidebar check icons
      $$('#sidebar .nav-link').forEach(link => {
        const id = link.dataset.topicId;
        const icon = link.querySelector('.check-icon');
        if (icon && id) {
          if (this.isCompleted(id)) {
            icon.classList.add('completed');
            icon.textContent = '✓';
          } else {
            icon.classList.remove('completed');
            icon.textContent = '';
          }
        }
      });

      // Update topic complete button
      const btn = $('.topic-complete-btn');
      if (btn) {
        const id = btn.dataset.topicId;
        if (this.isCompleted(id)) {
          btn.classList.add('completed');
          btn.innerHTML = '✓ Completed';
        } else {
          btn.classList.remove('completed');
          btn.innerHTML = '☐ Mark Complete';
        }
      }
    },

    getLastVisited() {
      try {
        return localStorage.getItem('dsa_last_visited') || '';
      } catch { return ''; }
    },

    setLastVisited(topicId) {
      try {
        localStorage.setItem('dsa_last_visited', topicId);
      } catch {}
    }
  };

  // ---- Challenge Progress ----
  const ChallengeProgress = {
    KEY: 'dsa_challenge_progress',

    getAll() {
      try {
        return JSON.parse(localStorage.getItem(this.KEY)) || {};
      } catch { return {}; }
    },

    isCompleted(day) {
      return !!this.getAll()['day_' + day];
    },

    toggle(day) {
      const data = this.getAll();
      const key = 'day_' + day;
      if (data[key]) {
        delete data[key];
      } else {
        data[key] = Date.now();
      }
      localStorage.setItem(this.KEY, JSON.stringify(data));
      return !!data[key];
    },

    getCompletedCount() {
      return Object.keys(this.getAll()).length;
    }
  };

  // ---- Theme Manager ----
  const Theme = {
    KEY: 'dsa_theme',

    init() {
      const saved = localStorage.getItem(this.KEY);
      if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
      this.updateIcon();
    },

    toggle() {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem(this.KEY, next);
      this.updateIcon();
    },

    updateIcon() {
      const btn = $('.theme-toggle');
      if (!btn) return;
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      btn.textContent = isDark ? '☀️' : '🌙';
      btn.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
  };

  // ---- Sidebar Builder ----
  function buildSidebar() {
    const sidebar = $('#sidebar');
    if (!sidebar || typeof DSA_CURRICULUM === 'undefined') return;

    const currentPage = window.location.pathname.split('/').pop();

    let html = `
      <div class="sidebar-header">
        <a href="${BASE}index.html" class="sidebar-logo">
          <div class="logo-icon">⟨/⟩</div>
          <span>DSA Mastery</span>
        </a>
        <button class="sidebar-close" onclick="toggleSidebar()" aria-label="Close sidebar">✕</button>
      </div>
      <div class="sidebar-progress">
        <div class="progress-text">
          <span><span class="progress-completed">${Progress.getCompletedCount()}</span> / ${Progress.getTotalTopics()} topics</span>
          <span>${Progress.getPercentage()}%</span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${Progress.getPercentage()}%"></div>
        </div>
      </div>
      <nav class="sidebar-nav">
    `;

    DSA_CURRICULUM.phases.forEach(phase => {
      html += `<div class="nav-phase">
        <div class="phase-header" onclick="togglePhase(this)">
          <span class="phase-arrow">▼</span>
          <span>${phase.name}: ${phase.title}</span>
        </div>
        <div class="phase-topics">`;

      phase.topics.forEach(topic => {
        const isActive = currentPage === topic.file;
        const isCompleted = Progress.isCompleted(topic.id);
        html += `<a href="${BASE}topics/${topic.file}" 
                    class="nav-link ${isActive ? 'active' : ''}" 
                    data-topic-id="${topic.id}">
          <span class="check-icon ${isCompleted ? 'completed' : ''}">${isCompleted ? '✓' : ''}</span>
          <span>${topic.title}</span>
        </a>`;
      });

      html += `</div></div>`;
    });

    // Special pages
    html += `<div class="nav-phase" style="margin-top: 16px; border-top: 1px solid var(--border); padding-top: 8px;">
      <div class="phase-header" onclick="togglePhase(this)">
        <span class="phase-arrow">▼</span>
        <span>Resources</span>
      </div>
      <div class="phase-topics">`;

    DSA_CURRICULUM.specialPages.forEach(page => {
      const url = page.file.startsWith('../') ? BASE + page.file.substring(3) : BASE + page.file;
      html += `<a href="${url}" class="nav-link">
        <span class="check-icon">${page.icon}</span>
        <span>${page.title}</span>
      </a>`;
    });

    html += `</div></div></nav>`;
    sidebar.innerHTML = html;
  }

  // ---- Header Builder ----
  function buildHeader() {
    const header = $('#header');
    if (!header) return;

    header.innerHTML = `
      <div class="header-left">
        <button class="menu-toggle" onclick="toggleSidebar()" aria-label="Toggle sidebar">☰</button>
        <button class="search-btn" onclick="openSearch()" aria-label="Search">
          🔍 <span>Search topics...</span> <kbd>Ctrl+K</kbd>
        </button>
      </div>
      <div class="header-right">
        <button class="theme-toggle" onclick="Theme.toggle()" aria-label="Toggle theme">🌙</button>
      </div>
    `;
    Theme.updateIcon();
  }

  // ---- Search ----
  function buildSearchModal() {
    let modal = $('#search-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'search-modal';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="search-dialog" role="dialog" aria-label="Search">
        <div class="search-input-wrapper">
          <span class="search-icon">🔍</span>
          <input type="text" class="search-input" placeholder="Search topics, algorithms, patterns..." 
                 autocomplete="off" autofocus aria-label="Search input">
        </div>
        <div class="search-results"></div>
      </div>
    `;

    // Close on backdrop click
    modal.addEventListener('click', e => {
      if (e.target === modal) closeSearch();
    });

    // Search input handler
    const input = modal.querySelector('.search-input');
    input.addEventListener('input', e => {
      performSearch(e.target.value);
    });

    input.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeSearch();
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        navigateResults(e.key === 'ArrowDown' ? 1 : -1);
      }
      if (e.key === 'Enter') {
        const sel = modal.querySelector('.search-result-item.selected');
        if (sel) {
          window.location.href = sel.href;
        }
      }
    });
  }

  function performSearch(query) {
    const results = $('#search-modal .search-results');
    if (!results || typeof SEARCH_INDEX === 'undefined') return;

    if (!query.trim()) {
      results.innerHTML = '<div class="search-empty">Type to search topics, algorithms, and patterns</div>';
      return;
    }

    const q = query.toLowerCase();
    let matches = [];

    // Search main index
    SEARCH_INDEX.forEach(item => {
      const score = getSearchScore(item, q);
      if (score > 0) matches.push({ ...item, score });
    });

    // Search keywords
    if (typeof SEARCH_KEYWORDS !== 'undefined') {
      SEARCH_KEYWORDS.forEach(kw => {
        if (kw.term.toLowerCase().includes(q)) {
          const existing = SEARCH_INDEX.find(i => i.id === kw.topicId);
          if (existing && !matches.find(m => m.id === kw.topicId)) {
            matches.push({ ...existing, score: 5 });
          }
        }
      });
    }

    // Sort by score
    matches.sort((a, b) => b.score - a.score);
    matches = matches.slice(0, 15);

    if (matches.length === 0) {
      results.innerHTML = '<div class="search-empty">No results found</div>';
      return;
    }

    const basePath = getBasePath();
    results.innerHTML = matches.map((m, i) => `
      <a href="${basePath}${m.url}" class="search-result-item ${i === 0 ? 'selected' : ''}">
        <div class="result-title">${highlightMatch(m.title, query)}</div>
        <div class="result-category">${m.category}${m.difficulty ? ' · ' + m.difficulty : ''}</div>
      </a>
    `).join('');
  }

  function getSearchScore(item, query) {
    const title = item.title.toLowerCase();
    const cat = item.category.toLowerCase();
    if (title === query) return 100;
    if (title.startsWith(query)) return 80;
    if (title.includes(query)) return 60;
    if (cat.includes(query)) return 30;
    // Fuzzy: check if all query words appear
    const words = query.split(/\s+/);
    const combined = (title + ' ' + cat).toLowerCase();
    if (words.every(w => combined.includes(w))) return 20;
    return 0;
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }

  function navigateResults(direction) {
    const items = $$('#search-modal .search-result-item');
    if (!items.length) return;
    const current = items.findIndex(i => i.classList.contains('selected'));
    items.forEach(i => i.classList.remove('selected'));
    let next = current + direction;
    if (next < 0) next = items.length - 1;
    if (next >= items.length) next = 0;
    items[next].classList.add('selected');
    items[next].scrollIntoView({ block: 'nearest' });
  }

  // ---- Back to Top ----
  function initBackToTop() {
    let btn = $('#back-to-top');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'back-to-top';
      btn.innerHTML = '↑';
      btn.setAttribute('aria-label', 'Back to top');
      document.body.appendChild(btn);
    }

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });
  }

  // ---- Sidebar Overlay ----
  function initSidebarOverlay() {
    let overlay = $('.sidebar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      overlay.addEventListener('click', () => toggleSidebar());
      document.body.appendChild(overlay);
    }
  }

  // ---- Collapsibles ----
  function initCollapsibles() {
    $$('.collapsible-header').forEach(header => {
      header.addEventListener('click', () => {
        header.classList.toggle('active');
        const body = header.nextElementSibling;
        if (body) body.classList.toggle('active');
      });
    });
  }

  // ---- Tabs ----
  function initTabs() {
    $$('.tabs').forEach(tabGroup => {
      const headers = $$('.tab-header', tabGroup);
      const contents = $$('.tab-content', tabGroup);

      headers.forEach((header, i) => {
        header.addEventListener('click', () => {
          headers.forEach(h => h.classList.remove('active'));
          contents.forEach(c => c.classList.remove('active'));
          header.classList.add('active');
          if (contents[i]) contents[i].classList.add('active');
        });
      });
    });
  }

  // ---- Flash Cards ----
  function initFlashCards() {
    $$('.flashcard').forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
  }

  // ---- Topic Complete Button ----
  function initTopicCompleteBtn() {
    const btn = $('.topic-complete-btn');
    if (!btn) return;
    const topicId = btn.dataset.topicId;
    if (!topicId) return;

    // Set initial state
    if (Progress.isCompleted(topicId)) {
      btn.classList.add('completed');
      btn.innerHTML = '✓ Completed';
    }

    btn.addEventListener('click', () => {
      Progress.toggle(topicId);
    });

    // Set last visited
    Progress.setLastVisited(topicId);
  }

  // ---- Copy Code Buttons ----
  function initCopyButtons() {
    $$('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pre = btn.closest('.code-header') ?
          btn.closest('.code-header').nextElementSibling :
          btn.closest('pre');
        if (!pre) return;
        const code = pre.querySelector('code') || pre;
        const text = code.textContent;
        navigator.clipboard.writeText(text).then(() => {
          btn.textContent = 'Copied!';
          setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
        }).catch(() => {
          btn.textContent = 'Failed';
          setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
        });
      });
    });
  }

  // ---- Scroll Spy ----
  function initScrollSpy() {
    const headings = $$('.topic-content h2, .topic-content h3');
    if (headings.length === 0) return;

    // Build mini TOC if container exists
    const toc = $('#table-of-contents');
    if (toc) {
      let tocHtml = '<ul>';
      headings.forEach(h => {
        if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const level = h.tagName === 'H3' ? 'padding-left: 16px;' : '';
        tocHtml += `<li style="${level}"><a href="#${h.id}" class="scroll-spy-link">${h.textContent}</a></li>`;
      });
      tocHtml += '</ul>';
      toc.innerHTML = tocHtml;
    }

    // Spy on scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $$('.scroll-spy-link').forEach(l => l.classList.remove('active'));
          const link = $(`.scroll-spy-link[href="#${entry.target.id}"]`);
          if (link) link.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -80% 0px' });

    headings.forEach(h => {
      if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      observer.observe(h);
    });
  }

  // ---- Challenge Day Handlers ----
  function initChallenges() {
    $$('.challenge-day-header').forEach(header => {
      header.addEventListener('click', e => {
        // Don't toggle if clicking the checkbox
        if (e.target.classList.contains('day-check')) return;
        const body = header.nextElementSibling;
        if (body) body.classList.toggle('active');
      });
    });

    $$('.day-check').forEach(check => {
      check.addEventListener('click', e => {
        e.stopPropagation();
        const day = check.dataset.day;
        const completed = ChallengeProgress.toggle(day);
        if (completed) {
          check.classList.add('completed');
          check.textContent = '✓';
        } else {
          check.classList.remove('completed');
          check.textContent = '';
        }
      });
    });
  }

  // ---- Global Functions ----
  window.toggleSidebar = function () {
    const sidebar = $('#sidebar');
    const overlay = $('.sidebar-overlay');
    if (sidebar) sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('active');
  };

  window.togglePhase = function (el) {
    el.classList.toggle('collapsed');
    const topics = el.nextElementSibling;
    if (topics) topics.classList.toggle('collapsed');
  };

  window.openSearch = function () {
    const modal = $('#search-modal');
    if (modal) {
      modal.classList.add('active');
      const input = modal.querySelector('.search-input');
      if (input) {
        input.value = '';
        input.focus();
        performSearch('');
      }
    }
  };

  window.closeSearch = function () {
    const modal = $('#search-modal');
    if (modal) modal.classList.remove('active');
  };

  // Expose Theme globally for the onclick handler
  window.Theme = Theme;

  // Expose Progress and ChallengeProgress
  window.Progress = Progress;
  window.ChallengeProgress = ChallengeProgress;

  // ---- Keyboard Shortcuts ----
  document.addEventListener('keydown', e => {
    // Ctrl+K or Cmd+K to open search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    // Escape to close search
    if (e.key === 'Escape') {
      closeSearch();
    }
  });

  // ---- Visualization Helpers ----
  window.DSAViz = {
    // Create array visualization
    createArrayViz(container, arr, options = {}) {
      const el = typeof container === 'string' ? $(container) : container;
      if (!el) return;

      el.innerHTML = arr.map((val, i) => `
        <div class="array-cell" data-index="${i}">
          <span class="index-label">${i}</span>
          ${val}
        </div>
      `).join('');
    },

    // Animate sorting step
    async animateStep(container, highlights, delay = 500) {
      return new Promise(resolve => {
        const cells = $$(`.array-cell`, typeof container === 'string' ? $(container) : container);
        cells.forEach(c => {
          c.classList.remove('highlight', 'comparing', 'sorted', 'swapping');
        });
        if (highlights) {
          highlights.forEach(h => {
            if (cells[h.index]) {
              cells[h.index].classList.add(h.type || 'highlight');
            }
          });
        }
        setTimeout(resolve, delay);
      });
    },

    // Create linked list visualization
    createLinkedListViz(container, values) {
      const el = typeof container === 'string' ? $(container) : container;
      if (!el) return;

      el.innerHTML = values.map((val, i) => `
        <div class="ll-node">
          <div class="ll-node-box">
            <div class="ll-node-data">${val}</div>
            <div class="ll-node-next">${i < values.length - 1 ? '●' : '∅'}</div>
          </div>
        </div>
        ${i < values.length - 1 ? '<span class="ll-arrow">→</span>' : '<span class="ll-arrow">→</span><div class="ll-null">NULL</div>'}
      `).join('');
    },

    // Create stack visualization
    createStackViz(container, values) {
      const el = typeof container === 'string' ? $(container) : container;
      if (!el) return;

      el.innerHTML = `
        <div style="text-align:center">
          <div class="stack-label">← Top</div>
          <div class="stack-viz">
            ${values.map((v, i) => `<div class="stack-item">${v}</div>`).join('')}
          </div>
          <div class="stack-label">Bottom</div>
        </div>
      `;
    },

    // Create queue visualization
    createQueueViz(container, values) {
      const el = typeof container === 'string' ? $(container) : container;
      if (!el) return;

      el.innerHTML = `
        <div class="queue-viz">
          <div class="queue-label">Front →</div>
          <div class="queue-items">
            ${values.map(v => `<div class="queue-item">${v}</div>`).join('')}
          </div>
          <div class="queue-label">← Rear</div>
        </div>
      `;
    }
  };

  // ---- Initialize Everything ----
  function init() {
    Theme.init();
    buildSidebar();
    buildHeader();
    buildSearchModal();
    initBackToTop();
    initSidebarOverlay();
    initCollapsibles();
    initTabs();
    initFlashCards();
    initTopicCompleteBtn();
    initCopyButtons();
    initScrollSpy();
    initChallenges();
    Progress.updateUI();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
