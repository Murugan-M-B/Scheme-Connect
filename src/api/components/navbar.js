// ─── src/api/components/navbar.js ────────────────────────────────────────────
import { ApiService } from '../service.js';

export function Navbar() {
  const user = ApiService.auth.getCurrentUser();
  const isAdmin = user?.role === 'ADMIN';
  return `
    <nav class="navbar">
      <div class="container nav-content">
        <div class="logo" onclick="window.location.hash='${isAdmin ? '/admin/dashboard' : '/dashboard'}'" style="cursor:pointer;">
          <i data-lucide="shield-check"></i>
          Scheme Connect ${isAdmin ? '<span class="tag">Admin</span>' : ''}
        </div>
        <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap;">
          ${isAdmin ? `<button class="btn btn-secondary" onclick="window.location.hash='/admin/dashboard'"><i data-lucide="layout-dashboard"></i> Dashboard</button>` : ''}
          <span style="font-size:0.9rem;">Welcome, <b>${user ? user.name : 'Guest'}</b></span>
          <button class="btn btn-secondary" onclick="window.logout()"><i data-lucide="log-out"></i> Logout</button>
        </div>
      </div>
    </nav>
  `;
}

window.logout = async () => {
  await ApiService.auth.logout();
  window.location.hash = '/login';
};