// ─── src/api/views/admin/dashboard.js ────────────────────────────────────────
import { ApiService } from '../../service.js';
import { Navbar } from '../../components/navbar.js';

function getCat(dept) {
  const map = {
    'Social Welfare': "Women's Welfare", 'Skill Development': 'Education & Youth',
    'School Education': 'Education & Youth', 'Higher Education': 'Education & Youth',
    'Transport': "Women's Welfare", 'Public Health': "Women's Welfare",
    'Health & Family Welfare': 'Health & Social Security', 'Revenue': 'Health & Social Security',
    'Agriculture': 'Agriculture & Housing', 'Rural Development': 'Agriculture & Housing',
    'MSME': 'Employment & Entrepreneurship', 'Employment & Training': 'Employment & Entrepreneurship',
  };
  return map[dept] || 'Other';
}

export async function renderAdminDashboard() {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${Navbar()}
    <div class="container main-content">

      <!-- Header -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem; flex-wrap:wrap; gap:1rem;">
        <div>
          <h2 style="margin:0;">Admin Dashboard</h2>
          <p style="color:var(--text-muted); margin:0.25rem 0 0;">Manage Tamil Nadu government schemes and users</p>
        </div>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <button class="btn btn-secondary" id="syncBtn"><i data-lucide="refresh-cw"></i> Sync Schemes</button>
          <button class="btn btn-primary" id="addSchemeBtn"><i data-lucide="plus"></i> Add Scheme</button>
        </div>
      </div>

      <!-- Stats Bar (loads from backend) -->
      <div id="statsBar" style="display:flex; gap:1rem; margin-bottom:2rem; flex-wrap:wrap;"></div>

      <!-- Tab Navigation -->
      <div style="display:flex; gap:0; margin-bottom:1.5rem; border-bottom:2px solid var(--border);">
        <button class="tab-nav active" id="tabSchemes" onclick="window.switchTab('schemes')"
          style="padding:0.75rem 1.5rem; border:none; background:none; cursor:pointer; font-weight:600; color:var(--primary); border-bottom:2px solid var(--primary); margin-bottom:-2px;">
          <i data-lucide="layers" style="width:16px; vertical-align:middle;"></i> Schemes
        </button>
        <button class="tab-nav" id="tabUsers" onclick="window.switchTab('users')"
          style="padding:0.75rem 1.5rem; border:none; background:none; cursor:pointer; font-weight:500; color:var(--text-muted);">
          <i data-lucide="users" style="width:16px; vertical-align:middle;"></i> Users
        </button>
        <button class="tab-nav" id="tabSubs" onclick="window.switchTab('subs')"
          style="padding:0.75rem 1.5rem; border:none; background:none; cursor:pointer; font-weight:500; color:var(--text-muted);">
          <i data-lucide="bell" style="width:16px; vertical-align:middle;"></i> Subscriptions
        </button>
      </div>

      <!-- Tab Content -->
      <div id="tabContent"></div>
    </div>

    <!-- SCHEME MODAL -->
    <div id="schemeModal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.55); z-index:9999; overflow-y:auto; padding:2rem;">
      <div class="card" style="max-width:720px; margin:0 auto; position:relative;">
        <button onclick="window.closeModal()" style="position:absolute; top:1rem; right:1rem; background:none; border:none; font-size:1.5rem; cursor:pointer; color:var(--text-muted);">✕</button>
        <h3 id="modalTitle" style="margin-bottom:1.5rem;">Add New Scheme</h3>
        <form id="schemeModalForm">
          <input type="hidden" id="modalSchemeId">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
            <div class="input-group" style="grid-column:1/-1;">
              <label>Scheme Title *</label>
              <input type="text" id="m_title" required placeholder="e.g. Pudhumai Penn Scheme">
            </div>
            <div class="input-group">
              <label>Department *</label>
              <input type="text" id="m_department" required placeholder="e.g. Social Welfare">
            </div>
            <div class="input-group">
              <label>Category *</label>
              <select id="m_category" required>
                <option value="">Select Category</option>
                <option value="Education & Youth">Education & Youth</option>
                <option value="Women's Welfare">Women's Welfare</option>
                <option value="Health & Social Security">Health & Social Security</option>
                <option value="Agriculture & Housing">Agriculture & Housing</option>
                <option value="Employment & Entrepreneurship">Employment & Entrepreneurship</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div class="input-group" style="grid-column:1/-1;">
              <label>Description *</label>
              <textarea id="m_description" rows="3" required placeholder="Describe the scheme..."></textarea>
            </div>
            <div class="input-group" style="grid-column:1/-1;">
              <label>Official Portal URL *</label>
              <input type="url" id="m_officialUrl" required placeholder="https://www.tn.gov.in/...">
            </div>
            <div class="input-group">
              <label>Deadline</label>
              <input type="date" id="m_deadline">
            </div>
            <div class="input-group">
              <label>Gender Requirement</label>
              <select id="m_gender">
                <option value="">Any Gender</option>
                <option value="Male">Male Only</option>
                <option value="Female">Female Only</option>
              </select>
            </div>
            <div class="input-group">
              <label>Min Age</label>
              <input type="number" id="m_minAge" placeholder="e.g. 18" min="0">
            </div>
            <div class="input-group">
              <label>Max Age</label>
              <input type="number" id="m_maxAge" placeholder="e.g. 60" min="0">
            </div>
            <div class="input-group" style="grid-column:1/-1;">
              <label>Max Annual Income (₹)</label>
              <input type="number" id="m_maxIncome" placeholder="e.g. 200000" min="0">
            </div>
            <div class="input-group" style="grid-column:1/-1;">
              <label>Benefits <span style="font-size:0.8rem; color:var(--text-muted);">(comma separated)</span></label>
              <input type="text" id="m_benefits" placeholder="e.g. Rs.1000 monthly, Bank Transfer">
            </div>
            <div class="input-group" style="grid-column:1/-1;">
              <label>Required Documents <span style="font-size:0.8rem; color:var(--text-muted);">(comma separated)</span></label>
              <input type="text" id="m_documents" placeholder="e.g. Bank Passbook, Student ID">
            </div>
          </div>
          <div style="display:flex; gap:1rem; margin-top:1.5rem; justify-content:flex-end;">
            <button type="button" class="btn btn-secondary" onclick="window.closeModal()">Cancel</button>
            <button type="submit" id="modalSaveBtn" class="btn btn-primary">
              <i data-lucide="save"></i> Save Scheme
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  // Spin style
  if (!document.getElementById('spinStyle')) {
    const s = document.createElement('style');
    s.id = 'spinStyle';
    s.textContent = `.spin{animation:spin 1s linear infinite;display:inline-block;} @keyframes spin{100%{transform:rotate(360deg);}}`;
    document.head.appendChild(s);
  }

  // ── Load Stats from backend ──────────────────────────────────────────────────
  const loadStats = async () => {
    const [schemes, subCount, users] = await Promise.all([
      ApiService.schemes.getAll(),
      ApiService.notifications.getCount(),
      ApiService.adminUsers.getAll().catch(() => [])
    ]);
    document.getElementById('statsBar').innerHTML = `
      <div class="card" style="flex:1;min-width:130px;display:flex;align-items:center;gap:0.75rem;padding:1rem;border-left:4px solid var(--primary);">
        <i data-lucide="layers" style="color:var(--primary);"></i>
        <div><div style="font-size:1.5rem;font-weight:700;color:var(--primary);">${schemes.length}</div><div style="font-size:0.8rem;color:var(--text-muted);">Schemes</div></div>
      </div>
      <div class="card" style="flex:1;min-width:130px;display:flex;align-items:center;gap:0.75rem;padding:1rem;border-left:4px solid var(--secondary);">
        <i data-lucide="bell" style="color:var(--secondary);"></i>
        <div><div style="font-size:1.5rem;font-weight:700;color:var(--secondary);">${subCount}</div><div style="font-size:0.8rem;color:var(--text-muted);">Subscriptions</div></div>
      </div>
      <div class="card" style="flex:1;min-width:130px;display:flex;align-items:center;gap:0.75rem;padding:1rem;border-left:4px solid #8b5cf6;">
        <i data-lucide="users" style="color:#8b5cf6;"></i>
        <div><div style="font-size:1.5rem;font-weight:700;color:#8b5cf6;">${users.filter(u => u.role === 'USER').length}</div><div style="font-size:0.8rem;color:var(--text-muted);">Registered Users</div></div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
  };

  // ── TAB SWITCHING ────────────────────────────────────────────────────────────
  window.switchTab = (tab) => {
    document.querySelectorAll('.tab-nav').forEach(b => {
      b.style.color = 'var(--text-muted)';
      b.style.borderBottom = 'none';
      b.style.fontWeight = '500';
    });
    const active = document.getElementById('tab' + tab.charAt(0).toUpperCase() + tab.slice(1));
    if (active) {
      active.style.color = 'var(--primary)';
      active.style.borderBottom = '2px solid var(--primary)';
      active.style.fontWeight = '600';
    }
    if (tab === 'schemes') renderSchemesTab();
    else if (tab === 'users') renderUsersTab();
    else if (tab === 'subs') renderSubsTab();
  };

  // ── SCHEMES TAB ──────────────────────────────────────────────────────────────
  let allSchemes = [];

  const renderSchemesTab = async () => {
    allSchemes = await ApiService.schemes.getAll();
    const content = document.getElementById('tabContent');
    content.innerHTML = `
      <div class="input-group" style="max-width:400px; margin-bottom:1rem;">
        <input type="text" id="adminSearch" placeholder="Search schemes...">
      </div>
      <div class="card" style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; min-width:600px;">
          <thead>
            <tr style="background:#f8fafc; border-bottom:2px solid var(--border); text-align:left;">
              <th style="padding:1rem;">#</th>
              <th style="padding:1rem;">Scheme Name</th>
              <th style="padding:1rem;">Category</th>
              <th style="padding:1rem;">Deadline</th>
              <th style="padding:1rem; text-align:right;">Actions</th>
            </tr>
          </thead>
          <tbody id="adminSchemeList"></tbody>
        </table>
      </div>
    `;
    renderSchemeTable(allSchemes);

    document.getElementById('adminSearch').addEventListener('input', e => {
      const q = e.target.value.toLowerCase();
      renderSchemeTable(allSchemes.filter(s =>
        s.title.toLowerCase().includes(q) || s.department.toLowerCase().includes(q)
      ));
    });
  };

  const renderSchemeTable = (list) => {
    const tbody = document.getElementById('adminSchemeList');
    if (!tbody) return;
    if (!list.length) {
      tbody.innerHTML = `<tr><td colspan="5" style="padding:2rem;text-align:center;color:var(--text-muted);">No schemes found.</td></tr>`;
      return;
    }
    tbody.innerHTML = list.map((s, i) => `
      <tr style="border-bottom:1px solid var(--border);" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background=''">
        <td style="padding:1rem;color:var(--text-muted);font-size:0.85rem;">${i + 1}</td>
        <td style="padding:1rem;font-weight:500;">${s.title}</td>
        <td style="padding:1rem;"><span class="tag" style="font-size:0.75rem;">${s.category || getCat(s.department)}</span></td>
        <td style="padding:1rem;font-size:0.9rem;">${s.deadline || 'Ongoing'}</td>
        <td style="padding:1rem;text-align:right;">
          <button class="btn btn-secondary" style="padding:0.35rem 0.75rem;font-size:0.8rem;margin-right:0.25rem;" onclick="window.editScheme(${s.id})">
            <i data-lucide="pencil" style="width:12px;"></i> Edit
          </button>
          <button class="btn btn-secondary" style="padding:0.35rem 0.75rem;font-size:0.8rem;color:var(--danger);border-color:var(--danger);" onclick="window.deleteScheme(${s.id},'${s.title.replace(/'/g,"\\'")}')">
            <i data-lucide="trash-2" style="width:12px;"></i> Delete
          </button>
        </td>
      </tr>
    `).join('');
    if (window.lucide) window.lucide.createIcons();
  };

  // ── USERS TAB ────────────────────────────────────────────────────────────────
  const renderUsersTab = async () => {
    const content = document.getElementById('tabContent');
    content.innerHTML = `<div style="padding:2rem; text-align:center; color:var(--text-muted);">Loading users...</div>`;
    try {
      const users = await ApiService.adminUsers.getAll();
      content.innerHTML = `
        <div class="card" style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; min-width:500px;">
            <thead>
              <tr style="background:#f8fafc; border-bottom:2px solid var(--border); text-align:left;">
                <th style="padding:1rem;">#</th>
                <th style="padding:1rem;">Name</th>
                <th style="padding:1rem;">Username</th>
                <th style="padding:1rem;">Email</th>
                <th style="padding:1rem;">Role</th>
                <th style="padding:1rem;">Status</th>
                <th style="padding:1rem; text-align:right;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${users.map((u, i) => `
                <tr style="border-bottom:1px solid var(--border);" id="userRow${u.id}">
                  <td style="padding:1rem;color:var(--text-muted);font-size:0.85rem;">${i + 1}</td>
                  <td style="padding:1rem;font-weight:500;">${u.name}</td>
                  <td style="padding:1rem;font-size:0.9rem;">${u.username}</td>
                  <td style="padding:1rem;font-size:0.9rem;">${u.email}</td>
                  <td style="padding:1rem;">
                    <span class="tag" style="background:${u.role === 'ADMIN' ? '#fef3c7' : '#f0fdf4'}; color:${u.role === 'ADMIN' ? '#92400e' : '#15803d'}; font-size:0.75rem;">
                      ${u.role}
                    </span>
                  </td>
                  <td style="padding:1rem;">
                    <span style="font-size:0.85rem; color:${u.active ? 'var(--secondary)' : 'var(--danger)'}; font-weight:600;">
                      ${u.active ? '● Active' : '● Disabled'}
                    </span>
                  </td>
                  <td style="padding:1rem; text-align:right;">
                    ${u.role !== 'ADMIN' ? `
                      <button class="btn btn-secondary" style="padding:0.35rem 0.75rem;font-size:0.8rem;margin-right:0.25rem;" onclick="window.toggleUser(${u.id})">
                        ${u.active ? 'Disable' : 'Enable'}
                      </button>
                      <button class="btn btn-secondary" style="padding:0.35rem 0.75rem;font-size:0.8rem;color:var(--danger);border-color:var(--danger);" onclick="window.deleteUser(${u.id},'${u.name.replace(/'/g,"\\'")}')">
                        <i data-lucide="trash-2" style="width:12px;"></i>
                      </button>
                    ` : '<span style="font-size:0.8rem; color:var(--text-muted);">Protected</span>'}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
    } catch (err) {
      content.innerHTML = `<p style="color:var(--danger);">Error loading users: ${err.message}</p>`;
    }
  };

  // ── SUBSCRIPTIONS TAB ────────────────────────────────────────────────────────
  const renderSubsTab = async () => {
    const content = document.getElementById('tabContent');
    content.innerHTML = `<div style="padding:2rem; text-align:center; color:var(--text-muted);">Loading subscriptions...</div>`;
    try {
      const subs = await ApiService.notifications.getAll();
      if (!subs.length) {
        content.innerHTML = `<div class="card" style="text-align:center; padding:3rem; color:var(--text-muted);"><i data-lucide="bell-off" style="width:48px; height:48px; margin-bottom:1rem;"></i><p>No subscriptions yet.</p></div>`;
        if (window.lucide) window.lucide.createIcons();
        return;
      }
      content.innerHTML = `
        <div class="card" style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; min-width:500px;">
            <thead>
              <tr style="background:#f8fafc; border-bottom:2px solid var(--border); text-align:left;">
                <th style="padding:1rem;">#</th>
                <th style="padding:1rem;">Email</th>
                <th style="padding:1rem;">Scheme Name</th>
                <th style="padding:1rem;">Subscribed On</th>
              </tr>
            </thead>
            <tbody>
              ${subs.map((s, i) => `
                <tr style="border-bottom:1px solid var(--border);">
                  <td style="padding:1rem;color:var(--text-muted);font-size:0.85rem;">${i + 1}</td>
                  <td style="padding:1rem;font-weight:500;">${s.email}</td>
                  <td style="padding:1rem;">${s.schemeName}</td>
                  <td style="padding:1rem;font-size:0.85rem;color:var(--text-muted);">
                    ${s.subscribedAt ? new Date(s.subscribedAt).toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }) : 'N/A'}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
    } catch (err) {
      content.innerHTML = `<p style="color:var(--danger);">Error loading subscriptions: ${err.message}</p>`;
    }
  };

  // ── USER ACTIONS ─────────────────────────────────────────────────────────────
  window.toggleUser = async (id) => {
    try {
      const res = await ApiService.adminUsers.toggleUser(id);
      window.Toastify({ text: res.message, backgroundColor: 'var(--secondary)', duration: 3000 }).showToast();
      renderUsersTab();
      loadStats();
    } catch (err) {
      window.Toastify({ text: err.message, backgroundColor: 'var(--danger)', duration: 3000 }).showToast();
    }
  };

  window.deleteUser = async (id, name) => {
    if (!confirm(`Delete user "${name}"?\nThis cannot be undone.`)) return;
    try {
      await ApiService.adminUsers.deleteUser(id);
      window.Toastify({ text: `✓ "${name}" deleted`, backgroundColor: 'var(--secondary)', duration: 3000 }).showToast();
      renderUsersTab();
      loadStats();
    } catch (err) {
      window.Toastify({ text: err.message, backgroundColor: 'var(--danger)', duration: 3000 }).showToast();
    }
  };

  // ── SCHEME MODAL ─────────────────────────────────────────────────────────────
  window.openModal = (scheme) => {
    document.getElementById('modalTitle').innerText = scheme ? 'Edit Scheme' : 'Add New Scheme';
    document.getElementById('modalSchemeId').value = scheme?.id || '';
    document.getElementById('m_title').value = scheme?.title || '';
    document.getElementById('m_department').value = scheme?.department || '';
    document.getElementById('m_category').value = scheme?.category || getCat(scheme?.department || '') || '';
    document.getElementById('m_description').value = scheme?.description || '';
    document.getElementById('m_officialUrl').value = scheme?.officialUrl || '';
    document.getElementById('m_deadline').value = scheme?.deadline || '';
    document.getElementById('m_gender').value = scheme?.eligibilityRules?.gender || '';
    document.getElementById('m_minAge').value = scheme?.eligibilityRules?.minAge || '';
    document.getElementById('m_maxAge').value = scheme?.eligibilityRules?.maxAge || '';
    document.getElementById('m_maxIncome').value = scheme?.eligibilityRules?.maxIncome || '';
    document.getElementById('m_benefits').value = Array.isArray(scheme?.benefits) ? scheme.benefits.join(', ') : (scheme?.benefits || '');
    document.getElementById('m_documents').value = Array.isArray(scheme?.documents) ? scheme.documents.join(', ') : (scheme?.documents || '');
    document.getElementById('schemeModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();
  };

  window.closeModal = () => {
    document.getElementById('schemeModal').style.display = 'none';
    document.body.style.overflow = '';
  };

  document.getElementById('schemeModal').addEventListener('click', e => {
    if (e.target.id === 'schemeModal') window.closeModal();
  });

  document.getElementById('addSchemeBtn').addEventListener('click', () => window.openModal(null));

  window.editScheme = async (id) => { window.openModal(await ApiService.schemes.getById(id)); };

  window.deleteScheme = async (id, title) => {
    if (!confirm(`Delete "${title}"?\nThis cannot be undone.`)) return;
    try {
      await ApiService.admin.deleteScheme(id);
      window.Toastify({ text: `✓ "${title}" deleted`, backgroundColor: 'var(--secondary)', duration: 3000 }).showToast();
      renderSchemesTab();
      loadStats();
    } catch (err) {
      window.Toastify({ text: `Error: ${err.message}`, backgroundColor: 'var(--danger)', duration: 3000 }).showToast();
    }
  };

  document.getElementById('schemeModalForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('modalSchemeId').value;
    const saveBtn = document.getElementById('modalSaveBtn');
    saveBtn.disabled = true; saveBtn.innerHTML = 'Saving...';

    const payload = {
      title: document.getElementById('m_title').value.trim(),
      department: document.getElementById('m_department').value.trim(),
      category: document.getElementById('m_category').value,
      description: document.getElementById('m_description').value.trim(),
      officialUrl: document.getElementById('m_officialUrl').value.trim(),
      deadline: document.getElementById('m_deadline').value,
      benefits: document.getElementById('m_benefits').value.split(',').map(s => s.trim()).filter(Boolean),
      documents: document.getElementById('m_documents').value.split(',').map(s => s.trim()).filter(Boolean),
      eligibilityRules: {
        gender: document.getElementById('m_gender').value || undefined,
        minAge: document.getElementById('m_minAge').value ? parseInt(document.getElementById('m_minAge').value) : undefined,
        maxAge: document.getElementById('m_maxAge').value ? parseInt(document.getElementById('m_maxAge').value) : undefined,
        maxIncome: document.getElementById('m_maxIncome').value ? parseInt(document.getElementById('m_maxIncome').value) : undefined,
      }
    };
    Object.keys(payload.eligibilityRules).forEach(k => payload.eligibilityRules[k] === undefined && delete payload.eligibilityRules[k]);

    try {
      if (id) {
        await ApiService.admin.updateScheme(id, payload);
        window.Toastify({ text: `✓ "${payload.title}" updated`, backgroundColor: 'var(--secondary)', duration: 3000 }).showToast();
      } else {
        await ApiService.admin.createScheme(payload);
        window.Toastify({ text: `✓ "${payload.title}" added`, backgroundColor: 'var(--secondary)', duration: 3000 }).showToast();
      }
      window.closeModal();
      renderSchemesTab();
      loadStats();
    } catch (err) {
      window.Toastify({ text: `Error: ${err.message}`, backgroundColor: 'var(--danger)', duration: 4000 }).showToast();
    } finally {
      saveBtn.disabled = false;
      saveBtn.innerHTML = '<i data-lucide="save"></i> Save Scheme';
      if (window.lucide) window.lucide.createIcons();
    }
  });

  // ── SYNC BUTTON ──────────────────────────────────────────────────────────────
  document.getElementById('syncBtn').addEventListener('click', async (e) => {
    const btn = e.target.closest('button');
    const icon = btn.querySelector('i');
    btn.disabled = true; icon.classList.add('spin');
    try {
      const res = await ApiService.admin.syncSchemes();
      window.Toastify({ text: res.message, backgroundColor: res.syncedCount > 0 ? 'var(--secondary)' : 'var(--primary)', duration: 4000 }).showToast();
      renderSchemesTab();
      loadStats();
    } catch (err) {
      window.Toastify({ text: 'Sync failed', backgroundColor: 'var(--danger)', duration: 3000 }).showToast();
    } finally {
      btn.disabled = false; icon.classList.remove('spin');
    }
  });

  // ── Initial Load ─────────────────────────────────────────────────────────────
  await loadStats();
  renderSchemesTab();
  if (window.lucide) window.lucide.createIcons();
}