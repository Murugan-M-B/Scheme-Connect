// ─── src/api/views/dashboard.js ──────────────────────────────────────────────
import { ApiService } from '../service.js';
import { Navbar } from '../components/navbar.js';

const CATEGORIES = ['Education & Youth', "Women's Welfare", 'Health & Social Security', 'Agriculture & Housing', 'Employment & Entrepreneurship', 'Other'];
const DEPT_TO_CAT = {
  'Social Welfare': "Women's Welfare", 'Skill Development': 'Education & Youth',
  'School Education': 'Education & Youth', 'Higher Education': 'Education & Youth',
  'Special Programme Implementation': "Women's Welfare", 'Transport': "Women's Welfare",
  'Public Health': "Women's Welfare", 'Health & Family Welfare': 'Health & Social Security',
  'Revenue': 'Health & Social Security', 'Agriculture': 'Agriculture & Housing',
  'Rural Development': 'Agriculture & Housing', 'MSME': 'Employment & Entrepreneurship',
  'Employment & Training': 'Employment & Entrepreneurship',
};
const CAT_ICONS = {
  'Education & Youth': 'graduation-cap', "Women's Welfare": 'heart',
  'Health & Social Security': 'activity', 'Agriculture & Housing': 'home',
  'Employment & Entrepreneurship': 'briefcase', 'Other': 'layers'
};

export async function renderDashboard() {
  const app = document.getElementById('app');
  app.innerHTML = `${Navbar()}<div class="container main-content"><p style="margin-top:2rem; text-align:center;">Loading schemes...</p></div>`;
  if (window.lucide) window.lucide.createIcons();

  try {
    const schemes = await ApiService.schemes.getAll();
    const grouped = {};
    CATEGORIES.forEach(c => { grouped[c] = []; });
    schemes.forEach(s => {
      const cat = s.category || DEPT_TO_CAT[s.department] || 'Other';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(s);
    });

    const sections = CATEGORIES.filter(c => grouped[c].length > 0).map(cat => `
      <div class="cat-section" data-cat="${cat}" style="margin-bottom:3rem;">
        <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1.25rem; padding-bottom:0.5rem; border-bottom:2px solid var(--primary);">
          <i data-lucide="${CAT_ICONS[cat]}" style="color:var(--primary); width:20px; height:20px;"></i>
          <h3 style="color:var(--primary); margin:0;">${cat}</h3>
          <span style="margin-left:auto; font-size:0.8rem; color:var(--text-muted);">${grouped[cat].length} scheme(s)</span>
        </div>
        <div class="scheme-grid">
          ${grouped[cat].map(s => `
            <div class="card scheme-card" style="display:flex; flex-direction:column; gap:0.5rem;">
              <div class="tag" style="width:fit-content;">${s.department}</div>
              <h3 style="margin:0;">${s.title}</h3>
              <p style="color:var(--text-muted); font-size:0.9rem; flex:1;">${s.description}</p>
              <div style="font-size:0.85rem; color:var(--text-muted); display:flex; align-items:center; gap:0.4rem;">
                <i data-lucide="calendar" style="width:13px; height:13px;"></i> ${s.deadline || 'Ongoing'}
              </div>
              <button class="btn btn-primary btn-block" onclick="window.viewScheme(${s.id})">View Details</button>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    app.innerHTML = `
      ${Navbar()}
      <div class="container main-content">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.5rem;">
          <div>
            <h2 style="margin:0;">Government Schemes</h2>
            <p style="color:var(--text-muted); margin:0.25rem 0 0;">Browse Tamil Nadu welfare schemes by category</p>
          </div>
          <input type="text" placeholder="🔍 Search schemes..." id="searchSchemes"
            style="padding:0.75rem 1rem; border:1px solid var(--border); border-radius:var(--radius); width:260px; font-size:0.9rem;">
        </div>

        <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:2rem;">
          <button class="btn btn-primary tab-btn" data-cat="all" onclick="window.filterCat('all')">All (${schemes.length})</button>
          ${CATEGORIES.filter(c => grouped[c].length > 0).map(c =>
            `<button class="btn btn-secondary tab-btn" data-cat="${c}" onclick="window.filterCat('${c.replace(/'/g, "\\'")}')">${c} (${grouped[c].length})</button>`
          ).join('')}
        </div>

        <div id="schemeSections">${sections}</div>
      </div>
    `;

    window.viewScheme = id => { window.location.hash = `/details/${id}`; };

    document.getElementById('searchSchemes').addEventListener('input', e => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('.scheme-card').forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(q) ? '' : 'none';
      });
    });

    window.filterCat = cat => {
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.className = b.dataset.cat === cat ? 'btn btn-primary tab-btn' : 'btn btn-secondary tab-btn';
      });
      document.querySelectorAll('.cat-section').forEach(s => {
        s.style.display = (cat === 'all' || s.dataset.cat === cat) ? '' : 'none';
      });
    };

    if (window.lucide) window.lucide.createIcons();
  } catch (err) {
    app.innerHTML = `${Navbar()}<div class="container main-content"><p style="color:var(--danger); margin-top:2rem;">Error: ${err.message}</p></div>`;
    if (window.lucide) window.lucide.createIcons();
  }
}