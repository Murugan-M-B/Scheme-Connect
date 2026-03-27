// ─── src/api/views/details.js ────────────────────────────────────────────────
import { ApiService } from '../service.js';
import { Navbar } from '../components/navbar.js';

export async function renderDetails(id) {
  const app = document.getElementById('app');
  try {
    const s = await ApiService.schemes.getById(id);
    app.innerHTML = `
      ${Navbar()}
      <div class="container main-content">
        <button class="btn btn-secondary" onclick="window.history.back()" style="margin-bottom:1rem;">
          <i data-lucide="arrow-left"></i> Back
        </button>
        <div class="card">
          <div class="tag" style="width:fit-content;">${s.department}</div>
          <h1 style="margin:0.5rem 0; color:var(--primary);">${s.title}</h1>
          <p style="font-size:1.05rem; color:var(--text-muted);">${s.description}</p>

          <div class="details-section">
            <h3><i data-lucide="gift"></i> Benefits</h3>
            <ul style="margin-left:1.5rem; margin-top:0.5rem; line-height:2;">
              ${(Array.isArray(s.benefits) 
                ? s.benefits.flatMap(b => b.split('|').map(x => x.trim()).filter(Boolean))
                : String(s.benefits||'').split('|').map(b => b.trim()).filter(Boolean)
              ).map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>

          <div class="details-section">
            <h3><i data-lucide="file-check"></i> Eligibility Criteria</h3>
            <div style="background:#f8fafc; padding:1rem; border-radius:8px; border:1px solid var(--border);">
              ${Object.keys(s.eligibilityRules || {}).length === 0
                ? '<p style="color:var(--text-muted);">Open to all eligible citizens.</p>'
                : Object.entries(s.eligibilityRules).map(([k, v]) => `
                <div style="display:flex; justify-content:space-between; padding:0.5rem 0; border-bottom:1px solid #eee;">
                  <span style="color:var(--text-muted);">${k.replace(/([A-Z])/g,' $1').trim()}</span>
                  <strong>${v}</strong>
                </div>`).join('')}
            </div>
          </div>

          <div class="details-section">
            <h3><i data-lucide="files"></i> Required Documents <span style="font-size:0.8rem; color:var(--text-muted); font-weight:400;">(submit on official portal)</span></h3>
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:0.5rem;">
              ${(s.documents || []).length > 0
                ? s.documents.map(d => `<span class="tag" style="background:#f3f4f6;">${d}</span>`).join('')
                : '<span style="color:var(--text-muted);">No specific documents listed.</span>'}
            </div>
            <div style="margin-top:1rem; background:#fffbeb; border-left:4px solid #f59e0b; padding:0.75rem; border-radius:4px; font-size:0.875rem;">
              <i data-lucide="info" style="width:14px; vertical-align:middle;"></i>
              <strong>Note:</strong> Scheme Connect does not collect documents. Submit them on the official portal after verification.
            </div>
          </div>

          <div style="display:flex; gap:0.5rem; align-items:center; background:#f0f9ff; padding:1rem; border-radius:8px; margin-bottom:1.5rem;">
            <i data-lucide="calendar" style="color:var(--primary);"></i>
            <span>Deadline: <strong>${s.deadline || 'Ongoing'}</strong></span>
          </div>

          <div style="display:flex; gap:1rem; justify-content:flex-end; flex-wrap:wrap; border-top:1px solid var(--border); padding-top:1.5rem;">
            <a href="${s.officialUrl || 'https://www.tn.gov.in/'}" target="_blank" class="btn btn-secondary">
              <i data-lucide="external-link"></i> Official Portal
            </a>
            <button class="btn btn-primary" onclick="window.location.hash='/upload/${s.id}'">
              Check My Eligibility <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
  } catch (err) {
    app.innerHTML = `${Navbar()}<div class="container main-content"><p style="color:var(--danger); margin-top:2rem;">Scheme not found.</p></div>`;
  }
}