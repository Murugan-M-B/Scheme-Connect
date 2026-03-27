import { ApiService } from './src/api/service.js';
import { renderLogin } from './src/api/views/login.js';
import { renderDashboard } from './src/api/views/dashboard.js';
import { renderDetails } from './src/api/views/details.js';
import { renderUpload } from './src/api/views/upload.js';
import { renderResult } from './src/api/views/result.js';
import { renderAdminDashboard } from './src/api/views/admin/dashboard.js';
import { renderSchemeForm } from './src/api/views/admin/scheme-form.js';

const routes = {
  '/login': renderLogin,
  '/dashboard': renderDashboard,
  '/details/:id': renderDetails,
  '/upload/:id': renderUpload,
  '/result': renderResult,
  '/admin/dashboard': renderAdminDashboard,
  '/admin/scheme/new': () => renderSchemeForm(),
  '/admin/scheme/edit/:id': (id) => renderSchemeForm(id),
  '/': renderDashboard
};

export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

function handleRoute() {
  const hash = window.location.hash.slice(1) || '/';
  const user = ApiService.auth.getCurrentUser();

  if (!user && hash !== '/login') {
    window.location.hash = '/login';
    return;
  }

  if (hash.startsWith('/admin') && user?.role !== 'ADMIN') {
    window.location.hash = '/dashboard';
    return;
  }

  let matched = false;

  if (routes[hash]) {
    routes[hash]();
    matched = true;
  } else {
    for (const route in routes) {
      if (route.includes(':')) {
        const regex = new RegExp('^' + route.replace(/:\w+/g, '(\\w+)') + '$');
        const match = hash.match(regex);
        if (match) {
          routes[route](match[1]);
          matched = true;
          break;
        }
      }
    }
  }

  if (!matched) {
    window.location.hash = user?.role === 'ADMIN' ? '/admin/dashboard' : '/dashboard';
  }

  setTimeout(() => { if (window.lucide) window.lucide.createIcons(); }, 100);
}

export function navigate(path) {
  window.location.hash = path;
}