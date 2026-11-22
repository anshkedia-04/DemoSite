/**
 * Main Application Logic
 * Supports dynamic demo projects rendering, modal management, filtering, and smooth interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.querySelector('.header');
  const projectsContainer = document.getElementById('projectsGrid');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  
  // Modals
  const quoteModal = document.getElementById('quoteModal');
  const projectModal = document.getElementById('projectModal');
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  // 1. Sticky Header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    highlightActiveNav();
  });

  // 2. Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightActiveNav() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // 3. Render Project Cards
  function renderProjects(category = 'all') {
    if (!projectsContainer) return;
    
    // Filter projects based on selected category
    const filtered = (category === 'all') 
      ? demoProjects 
      : demoProjects.filter(p => p.category.toLowerCase() === category.toLowerCase());

    projectsContainer.innerHTML = '';

    filtered.forEach((project) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-id', project.id);
      
      // Render tag badges
      const tagsHtml = project.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('');

      card.innerHTML = `
        <div class="card-thumbnail-wrap">
          <img src="${project.image}" alt="${project.title} Web Design Mockup" loading="lazy">
          <div class="card-hover-overlay">
            <span class="preview-pill">
              Explore Demo 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </div>
        </div>
        <div class="card-content">
          <div class="card-title-row">
            <h3 class="card-title">${project.title}</h3>
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="card-arrow-icon" title="Open live demo in new tab" aria-label="Open ${project.title} in new tab">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
          <p class="card-description">${project.description}</p>
          <div class="card-tags">
            ${tagsHtml}
          </div>
        </div>
      `;

      // Open project preview modal on card click
      card.addEventListener('click', (e) => {
        // If clicked on direct link icon, do not open modal
        if (e.target.closest('.card-arrow-icon')) {
          return;
        }
        openProjectModal(project);
      });

      projectsContainer.appendChild(card);
    });
  }

  // 4. Category Filter Tabs Setup
  function setupFilterTabs() {
    const tabsContainer = document.querySelector('.filter-tabs-container');
    if (tabsContainer && typeof projectCategories !== 'undefined' && projectCategories.length) {
      tabsContainer.innerHTML = projectCategories.map((cat, idx) => `
        <button type="button" class="filter-tab ${idx === 0 ? 'active' : ''}" data-category="${cat.id}" role="tab">
          ${cat.label}
        </button>
      `).join('');
    }

    const currentFilterTabs = document.querySelectorAll('.filter-tab');
    currentFilterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        currentFilterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const cat = tab.getAttribute('data-category');
        renderProjects(cat);
      });
    });
  }

  // Initial render & tabs setup
  setupFilterTabs();
  renderProjects('all');

  // 5. Project Preview Modal
  function openProjectModal(project) {
    if (!projectModal) return;
    
    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalProjectDesc').textContent = project.longDescription || project.description;
    document.getElementById('modalProjectImage').src = project.image;
    document.getElementById('modalProjectClient').textContent = project.client || 'Client Project';
    
    // Tags in modal
    const modalTags = document.getElementById('modalProjectTags');
    modalTags.innerHTML = project.tags.map(t => `<span class="tag-badge">${t}</span>`).join('');

    // Features list
    const featuresContainer = document.getElementById('modalProjectFeatures');
    if (project.features && project.features.length) {
      featuresContainer.innerHTML = project.features.map(f => `
        <li style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.4rem; font-size:0.88rem; color:#4B5563;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${f}</span>
        </li>
      `).join('');
    } else {
      featuresContainer.innerHTML = '';
    }

    // Live link button
    const liveLinkBtn = document.getElementById('modalLiveLinkBtn');
    if (project.liveUrl && project.liveUrl !== '#') {
      liveLinkBtn.href = project.liveUrl;
      liveLinkBtn.target = '_blank';
      liveLinkBtn.innerHTML = `
        Launch Live Demo 
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      `;
      liveLinkBtn.style.opacity = '1';
      liveLinkBtn.style.pointerEvents = 'auto';
    } else {
      liveLinkBtn.href = '#';
      liveLinkBtn.target = '_self';
      liveLinkBtn.innerHTML = `
        Demo Link Ready Upon Request
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      `;
      liveLinkBtn.onclick = (e) => {
        e.preventDefault();
        showToast('Live link is pending. You can update it in js/projects-data.js anytime!');
      };
    }

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // 6. Quote Modal Open/Close
  window.openQuoteModal = function(preselectedService = '') {
    if (quoteModal) {
      if (preselectedService) {
        const serviceSelect = document.getElementById('quoteServiceSelect');
        if (serviceSelect) serviceSelect.value = preselectedService;
      }
      quoteModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeModal = function(modalId) {
    const m = document.getElementById(modalId);
    if (m) {
      m.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Close modals on backdrop click
  [quoteModal, projectModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [quoteModal, projectModal].forEach(m => {
        if (m && m.classList.contains('active')) {
          m.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  });

  // 7. Mobile Menu Toggle
  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
      });
    });
  }

  // 8. Quote Form Submission (generates customized email inquiry & opens mail client)
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName').value;
      const email = document.getElementById('clientEmail').value;
      const service = document.getElementById('quoteServiceSelect').value;
      const budget = document.getElementById('clientBudget').value;
      const details = document.getElementById('clientMessage').value;

      const subject = encodeURIComponent(`Website Inquiry from ${name} [${service}]`);
      const body = encodeURIComponent(
        `Hi Ansh,\n\nI would like to discuss a project with you:\n\n` +
        `• Name: ${name}\n` +
        `• Email: ${email}\n` +
        `• Project Type: ${service}\n` +
        `• Budget Estimate: ${budget}\n\n` +
        `Project Overview:\n${details}\n\nLooking forward to hearing from you!`
      );

      // Open Gmail web composer directly (bypassing Outlook / desktop mail clients)
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ansh.kedia.dev@gmail.com&su=${subject}&body=${body}`;
      window.open(gmailUrl, '_blank');

      closeModal('quoteModal');
      showToast('Opening Gmail to send your inquiry...');
    });
  }

  // 9. Toast Helper
  window.showToast = function(msg) {
    if (!toastNotice || !toastMessage) return;
    toastMessage.textContent = msg;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 4000);
  };

  // 10. Copy to Clipboard for email & phone
  window.copyText = function(text, label) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied ${label} to clipboard: ${text}`);
    }).catch(() => {
      showToast(`${label}: ${text}`);
    });
  };
});
