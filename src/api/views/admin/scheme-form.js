// ─── src/api/views/admin/scheme-form.js ──────────────────────────────────────
// Add/Edit form is now a modal inside admin/dashboard.js
// This file redirects back to admin dashboard
export function renderSchemeForm(id = null) {
  window.location.hash = '/admin/dashboard';
  if (id) {
    setTimeout(() => {
      if (typeof window.editScheme === 'function') window.editScheme(id);
    }, 400);
  }
}