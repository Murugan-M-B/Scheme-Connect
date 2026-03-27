// ─── src/api/views/login.js ───────────────────────────────────────────────────
import { ApiService } from '../service.js';

export function renderLogin() {
  const app = document.getElementById('app');

  const renderLoginForm = () => {
    app.innerHTML = `
      <div class="auth-layout">
        <div class="card auth-card">
          <div style="text-align:center; margin-bottom:2rem;">
            <i data-lucide="shield-check" style="width:56px; height:56px; color:var(--primary);"></i>
            <h2 style="margin-top:1rem;">Scheme Connect</h2>
            <p style="color:var(--text-muted);">Tamil Nadu Government Schemes Eligibility Checking Portal</p>
          </div>

          <form id="loginForm">
            <div class="input-group">
              <label>Username</label>
              <input type="text" id="loginUsername" placeholder="Enter your username" required autocomplete="off"/>
            </div>
            <div class="input-group">
              <label>Password</label>
              <input type="password" id="loginPassword" placeholder="Enter your password" required/>
            </div>
            <button type="submit" class="btn btn-primary btn-block" style="font-size:1rem; padding:0.875rem;">
              <i data-lucide="lock"></i> Login
            </button>
          </form>

          <div style="text-align:center; margin-top:1.25rem;">
            <p style="color:var(--text-muted); font-size:0.9rem;">
              Don't have an account?
              <a href="#" id="showRegister" style="color:var(--primary); font-weight:600; text-decoration:none;"> Create Account</a>
            </p>
          </div>
        </div>
      </div>
    `;

    document.getElementById('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = e.target.querySelector('button');
      const orig = btn.innerHTML;
      btn.innerHTML = 'Logging in...'; btn.disabled = true;
      try {
        const user = await ApiService.auth.login(
          document.getElementById('loginUsername').value.trim(),
          document.getElementById('loginPassword').value
        );
        window.Toastify({ text: `Welcome, ${user.name}!`, backgroundColor: 'var(--secondary)', duration: 2000 }).showToast();
        window.location.hash = user.role === 'ADMIN' ? '/admin/dashboard' : '/dashboard';
      } catch (err) {
        window.Toastify({ text: err.message || 'Login failed', backgroundColor: 'var(--danger)', duration: 3000 }).showToast();
        btn.innerHTML = orig; btn.disabled = false;
      }
      if (window.lucide) window.lucide.createIcons();
    });

    document.getElementById('showRegister').addEventListener('click', (e) => {
      e.preventDefault();
      renderRegisterForm();
    });

    if (window.lucide) window.lucide.createIcons();
  };

  const renderRegisterForm = () => {
    app.innerHTML = `
      <div class="auth-layout">
        <div class="card auth-card">
          <div style="text-align:center; margin-bottom:2rem;">
            <i data-lucide="user-plus" style="width:56px; height:56px; color:var(--primary);"></i>
            <h2 style="margin-top:1rem;">Create Account</h2>
            <p style="color:var(--text-muted);">Register to access Tamil Nadu Government Schemes</p>
          </div>

          <form id="registerForm">
            <div class="input-group">
              <label>Full Name <span style="color:red">*</span></label>
              <input type="text" id="regName" placeholder="e.g. Your Name" required/>
            </div>
            <div class="input-group">
              <label>Email Address <span style="color:red">*</span></label>
              <input type="email" id="regEmail" placeholder="yourname@gmail.com" required/>
            </div>
            <div class="input-group">
              <label>Username <span style="color:red">*</span></label>
              <input type="text" id="regUsername" placeholder="Choose a username" required autocomplete="off"/>
            </div>
            <div class="input-group">
              <label>Password <span style="color:red">*</span></label>
              <input type="password" id="regPassword" placeholder="Minimum 6 characters" required/>
            </div>
            <div class="input-group">
              <label>Confirm Password <span style="color:red">*</span></label>
              <input type="password" id="regConfirm" placeholder="Re-enter password" required/>
            </div>
            <button type="submit" class="btn btn-primary btn-block" style="font-size:1rem; padding:0.875rem;">
              <i data-lucide="user-plus"></i> Create Account
            </button>
          </form>

          <div style="text-align:center; margin-top:1.25rem;">
            <p style="color:var(--text-muted); font-size:0.9rem;">
              Already have an account?
              <a href="#" id="showLogin" style="color:var(--primary); font-weight:600; text-decoration:none;"> Login here</a>
            </p>
          </div>
        </div>
      </div>
    `;

    document.getElementById('registerForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = e.target.querySelector('button');
      const orig = btn.innerHTML;

      const name     = document.getElementById('regName').value.trim();
      const email    = document.getElementById('regEmail').value.trim();
      const username = document.getElementById('regUsername').value.trim();
      const password = document.getElementById('regPassword').value;
      const confirm  = document.getElementById('regConfirm').value;

      if (password !== confirm) {
        window.Toastify({ text: 'Passwords do not match!', backgroundColor: 'var(--danger)', duration: 3000 }).showToast();
        return;
      }
      if (password.length < 6) {
        window.Toastify({ text: 'Password must be at least 6 characters', backgroundColor: 'var(--danger)', duration: 3000 }).showToast();
        return;
      }

      btn.innerHTML = 'Creating Account...'; btn.disabled = true;
      try {
        await ApiService.auth.register({ name, email, username, password });
        window.Toastify({ text: '✓ Account created! Please login.', backgroundColor: 'var(--secondary)', duration: 3000 }).showToast();
        renderLoginForm();
      } catch (err) {
        window.Toastify({ text: err.message || 'Registration failed', backgroundColor: 'var(--danger)', duration: 3000 }).showToast();
        btn.innerHTML = orig; btn.disabled = false;
      }
      if (window.lucide) window.lucide.createIcons();
    });

    document.getElementById('showLogin').addEventListener('click', (e) => {
      e.preventDefault();
      renderLoginForm();
    });

    if (window.lucide) window.lucide.createIcons();
  };

  renderLoginForm();
}