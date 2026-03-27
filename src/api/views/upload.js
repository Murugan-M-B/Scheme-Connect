// ─── src/api/views/upload.js ─────────────────────────────────────────────────
import { ApiService } from '../service.js';
import { Navbar } from '../components/navbar.js';

export async function renderUpload(schemeId) {
  const app = document.getElementById('app');
  const [scheme, user] = await Promise.all([ApiService.schemes.getById(schemeId), Promise.resolve(ApiService.auth.getCurrentUser())]);

  app.innerHTML = `
    ${Navbar()}
    <div class="container main-content">
      <button class="btn btn-secondary" onclick="window.history.back()" style="margin-bottom:1rem;">
        <i data-lucide="arrow-left"></i> Back
      </button>
      <div class="card" style="max-width:720px; margin:0 auto;">
        <h2 style="margin-bottom:0.25rem;">Eligibility Check</h2>
        <p style="color:var(--text-muted); margin-bottom:1.5rem;">Checking for: <strong>${scheme.title}</strong></p>
        <div style="background:#f0fdf4; padding:1rem; border-radius:8px; margin-bottom:1.5rem; border-left:4px solid var(--secondary); font-size:0.875rem;">
          <i data-lucide="shield-check" style="width:14px; vertical-align:middle;"></i>
          <strong> Privacy First:</strong> Only basic info is needed here. No Aadhaar, PAN or documents collected at this stage.
        </div>
        <form id="eligibilityForm">
          <h3 style="margin-bottom:1.25rem; display:flex; align-items:center; gap:0.5rem;">
            <i data-lucide="user-check"></i> Your Basic Information
          </h3>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1.5rem;">
            <div class="input-group">
              <label>Age <span style="color:red">*</span></label>
              <input type="number" id="userAge" placeholder="e.g. 25" min="1" max="120" value="${user?.profile?.age || ''}" required>
            </div>
            <div class="input-group">
              <label>Gender <span style="color:red">*</span></label>
              <select id="userGender" required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div class="input-group">
              <label>Annual Income (₹) <span style="color:red">*</span></label>
              <input type="number" id="userIncome" placeholder="e.g. 150000" min="0" value="${user?.profile?.income || ''}" required>
            </div>
            <div class="input-group">
              <label>Residence</label>
              <select id="userResidence">
                <option value="Urban">Urban</option>
                <option value="Rural">Rural</option>
              </select>
            </div>
            <div class="input-group">
              <label>Community</label>
              <select id="userCategory">
                <option value="">Select Community</option>
                <option value="OC">OC</option>
                <option value="BC">BC</option>
                <option value="MBC">MBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
            </div>
            <div class="input-group">
              <label>Occupation</label>
              <select id="userOccupation">
                <option value="">Select Occupation</option>
                <option value="Student">Student</option>
                <option value="Farmer">Farmer</option>
                <option value="Employed">Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Self-Employed">Self-Employed</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block" style="font-size:1rem; padding:1rem;">
            <i data-lucide="check-circle"></i> Verify My Eligibility
          </button>
        </form>
      </div>
    </div>
  `;

  document.getElementById('eligibilityForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.innerHTML = '<i data-lucide="loader-2"></i> Checking...';
    btn.disabled = true;
    try {
      const result = await ApiService.eligibility.check({
        schemeId,
        userData: {
          age: parseInt(document.getElementById('userAge').value),
          gender: document.getElementById('userGender').value,
          income: parseInt(document.getElementById('userIncome').value),
          residence: document.getElementById('userResidence').value,
          category: document.getElementById('userCategory').value,
          occupation: document.getElementById('userOccupation').value
        }
      });
      sessionStorage.setItem('lastResult', JSON.stringify(result));
      window.location.hash = '/result';
    } catch (err) {
      window.Toastify({ text: err.message || 'Error checking eligibility', backgroundColor: 'var(--danger)', duration: 3000 }).showToast();
      btn.innerHTML = '<i data-lucide="check-circle"></i> Verify My Eligibility';
      btn.disabled = false;
    }
    if (window.lucide) window.lucide.createIcons();
  });

  if (window.lucide) window.lucide.createIcons();
}