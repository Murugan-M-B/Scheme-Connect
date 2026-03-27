// ─── src/api/views/result.js ─────────────────────────────────────────────────
import { ApiService } from '../service.js';
import { Navbar } from '../components/navbar.js';

export function renderResult() {
  const app = document.getElementById('app');
  const resultStr = sessionStorage.getItem('lastResult');
  const user = ApiService.auth.getCurrentUser();
  if (!resultStr) { window.location.hash = '/dashboard'; return; }

  const result = JSON.parse(resultStr);
  const isEligible = result.status === 'ELIGIBLE' || result.eligible === true;
  const officialUrl = result.officialUrl || 'https://www.tn.gov.in/';
  const refId = `TN-SC-${Date.now().toString().slice(-6)}`;

  if (isEligible) {
    app.innerHTML = `
      ${Navbar()}
      <div class="container main-content">
        <div class="card result-container" style="max-width:640px; margin:0 auto; text-align:center;">
          <div style="width:90px; height:90px; background:#f0fdf4; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 1rem;">
            <i data-lucide="check-circle" style="width:52px; height:52px; color:var(--secondary);"></i>
          </div>
          <h2 style="color:var(--secondary);">You are Eligible! 🎉</h2>
          <p style="color:var(--text-muted);">You meet all criteria for</p>
          <p style="font-weight:700; font-size:1.1rem; color:var(--primary); margin-bottom:1.5rem;">${result.schemeName}</p>

          <div style="background:#f0f9ff; padding:0.75rem 1rem; border-radius:8px; margin-bottom:1.5rem; font-size:0.875rem;">
            Verification Reference: <strong style="color:var(--primary);">${refId}</strong>
          </div>

          <div style="background:#f0fdf4; padding:1.25rem; border-radius:8px; margin-bottom:1.5rem; border:1px solid #bbf7d0; text-align:left;">
            <h4 style="color:var(--secondary); margin-bottom:0.75rem;"><i data-lucide="list-checks" style="width:16px; vertical-align:middle;"></i> Next Steps</h4>
            <ol style="margin-left:1.5rem; line-height:2.2; font-size:0.9rem;">
              <li>Click below to go to the <strong>official Tamil Nadu Government portal</strong></li>
              <li>Create an account or log in on the portal</li>
              <li>Complete the application and upload your documents</li>
              <li>Submit and track your application status</li>
            </ol>
          </div>

          <div style="display:flex; flex-direction:column; gap:0.75rem; margin-bottom:1.25rem;">
            <button class="btn btn-success btn-block" style="padding:0.875rem; font-size:1rem;" onclick="window.open('${officialUrl}','_blank')">
              <i data-lucide="external-link"></i> Redirect to Official Portal
            </button>
            <button id="notifyToggleBtn" class="btn btn-secondary btn-block" style="border-color:var(--primary); color:var(--primary);">
              <i data-lucide="bell"></i> Get Email Updates & Deadline Reminders
            </button>
          </div>

          <div id="emailSubscribeForm" style="display:none; background:#f8fafc; padding:1.25rem; border-radius:8px; border:1px solid var(--border); text-align:left; margin-bottom:1rem;">
            <label style="font-weight:600; display:block; margin-bottom:0.5rem;">
              <i data-lucide="mail" style="width:14px; vertical-align:middle;"></i> Enter your email address
            </label>
            <div style="display:flex; gap:0.5rem;">
              <input type="email" id="notifyEmailInput" placeholder="yourname@email.com" value="${user?.email || ''}"
                style="flex:1; padding:0.75rem; border:1px solid var(--border); border-radius:var(--radius); font-size:0.95rem;">
              <button id="subscribeSubmitBtn" class="btn btn-primary" style="white-space:nowrap;">
                <i data-lucide="send"></i> Subscribe
              </button>
            </div>
            <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.5rem; margin-bottom:0;">
              You'll receive: deadline reminders, scheme updates & eligibility rule changes.
            </p>
          </div>

          <button class="btn btn-secondary" onclick="window.location.hash='/dashboard'" style="width:100%; border:none; color:var(--text-muted);">
            ← Back to Dashboard
          </button>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    // Toggle email form
    document.getElementById('notifyToggleBtn').addEventListener('click', () => {
      const form = document.getElementById('emailSubscribeForm');
      form.style.display = form.style.display === 'none' ? 'block' : 'none';
      if (form.style.display === 'block') {
        document.getElementById('notifyEmailInput').focus();
        if (window.lucide) window.lucide.createIcons();
      }
    });

    // Subscribe
    document.getElementById('subscribeSubmitBtn').addEventListener('click', async () => {
      const email = document.getElementById('notifyEmailInput').value.trim();
      const btn = document.getElementById('subscribeSubmitBtn');
      if (!email || !email.includes('@')) {
        window.Toastify({ text: 'Please enter a valid email address', backgroundColor: 'var(--danger)', duration: 3000 }).showToast();
        return;
      }
      btn.disabled = true; btn.innerHTML = 'Subscribing...';
      try {
        const res = await ApiService.notifications.subscribe({ email, schemeId: result.schemeId, schemeName: result.schemeName });
        if (res.alreadySubscribed) {
          window.Toastify({ text: `Already subscribed for "${result.schemeName}"`, backgroundColor: 'var(--primary)', duration: 3000 }).showToast();
        } else {
          window.Toastify({ text: `✓ Subscribed! Updates will be sent to ${email}`, backgroundColor: 'var(--secondary)', duration: 4000 }).showToast();
        }
        const toggleBtn = document.getElementById('notifyToggleBtn');
        toggleBtn.innerHTML = '<i data-lucide="check-circle"></i> Subscribed for Updates';
        toggleBtn.classList.replace('btn-secondary', 'btn-success');
        toggleBtn.disabled = true;
        document.getElementById('emailSubscribeForm').style.display = 'none';
      } catch (err) {
        window.Toastify({ text: `Error: ${err.message}`, backgroundColor: 'var(--danger)', duration: 3000 }).showToast();
        btn.disabled = false; btn.innerHTML = '<i data-lucide="send"></i> Subscribe';
      }
      if (window.lucide) window.lucide.createIcons();
    });

    document.getElementById('notifyEmailInput').addEventListener('keypress', e => {
      if (e.key === 'Enter') document.getElementById('subscribeSubmitBtn').click();
    });

  } else {
    const reasons = result.reasons?.length > 0 ? result.reasons : [result.reason || 'You do not meet the eligibility criteria.'];
    app.innerHTML = `
      ${Navbar()}
      <div class="container main-content">
        <div class="card result-container" style="max-width:580px; margin:0 auto; text-align:center;">
          <div style="width:90px; height:90px; background:#fef2f2; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 1rem;">
            <i data-lucide="x-circle" style="width:52px; height:52px; color:var(--danger);"></i>
          </div>
          <h2 style="color:var(--danger);">Not Eligible</h2>
          <p style="color:var(--text-muted);">You do not currently meet the criteria for</p>
          <p style="font-weight:700; font-size:1.1rem; color:var(--primary); margin-bottom:1.5rem;">${result.schemeName}</p>

          <div style="background:#fef2f2; padding:1.25rem; border-radius:8px; border:1px solid #fecaca; text-align:left; margin-bottom:1.5rem;">
            <h4 style="color:var(--danger); margin-bottom:0.75rem;"><i data-lucide="alert-circle" style="width:16px; vertical-align:middle;"></i> Reason(s):</h4>
            <ul style="margin-left:1.5rem; color:#b91c1c; line-height:2;">
              ${reasons.map(r => `<li>${r}</li>`).join('')}
            </ul>
          </div>

          <div style="background:#f0f9ff; padding:1rem; border-radius:8px; margin-bottom:1.5rem; font-size:0.875rem; color:var(--text-muted);">
            <i data-lucide="info" style="width:14px; vertical-align:middle;"></i>
            You may be eligible for other schemes. Browse the dashboard to find ones matching your profile.
          </div>

          <div style="display:flex; flex-direction:column; gap:0.75rem;">
            <button class="btn btn-secondary btn-block" onclick="window.history.back()">
              <i data-lucide="refresh-cw"></i> Update My Information & Retry
            </button>
            <button class="btn btn-primary btn-block" onclick="window.location.hash='/dashboard'">
              <i data-lucide="search"></i> Browse Other Schemes
            </button>
          </div>
        </div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
  }
}