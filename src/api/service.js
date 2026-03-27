// ─── src/api/service.js ───────────────────────────────────────────────────────

const BASE_URL = 'http://localhost:8080/api/v1';

export const ApiService = {

  // ─── SCHEMES ────────────────────────────────────────────────────────────────
  schemes: {
    async getAll() {
      const response = await fetch(`${BASE_URL}/schemes`);
      if (!response.ok) throw new Error('Failed to load schemes');
      const data = await response.json();
      return data.filter(s => s.active);
    },
    async getById(id) {
      const response = await fetch(`${BASE_URL}/schemes/${id}`);
      if (!response.ok) throw new Error('Scheme not found');
      const s = await response.json();
      return {
        ...s,
        benefits: Array.isArray(s.benefits)
          ? s.benefits
          : (s.benefits ? s.benefits.split(',').map(b => b.trim()) : []),
        documents: Array.isArray(s.documents)
          ? s.documents
          : (s.documents ? s.documents.split(',').map(d => d.trim()) : []),
        eligibilityRules: s.eligibilityRules || s.eligibilityRule || {},
        officialUrl: s.officialUrl || 'https://www.tn.gov.in/'
      };
    }
  },

  // ─── AUTH ────────────────────────────────────────────────────────────────────
  auth: {
    async login(username, password) {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Login failed');
      sessionStorage.setItem('user', JSON.stringify(data));
      return data;
    },
    async register({ name, email, username, password }) {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, username, password })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Registration failed');
      return data;
    },
    async logout() {
      sessionStorage.removeItem('user');
      return true;
    },
    getCurrentUser() {
      const str = sessionStorage.getItem('user');
      return str ? JSON.parse(str) : null;
    }
  },

  // ─── ELIGIBILITY — fetches scheme from MySQL then checks ────────────────────
  eligibility: {
    async check({ schemeId, userData }) {
      const response = await fetch(`${BASE_URL}/schemes/${schemeId}`);
      if (!response.ok) throw new Error('Scheme not found');
      const scheme = await response.json();

      const rules = scheme.eligibilityRules || scheme.eligibilityRule || {};
      const reasons = [];

      if (rules.minAge && userData.age < rules.minAge)
        reasons.push(`Minimum age required is ${rules.minAge} (your age: ${userData.age})`);
      if (rules.maxAge && userData.age > rules.maxAge)
        reasons.push(`Maximum age allowed is ${rules.maxAge} (your age: ${userData.age})`);
      if (rules.maxIncome && userData.income > rules.maxIncome)
        reasons.push(`Annual income must be below ₹${rules.maxIncome.toLocaleString()} (yours: ₹${userData.income.toLocaleString()})`);
      if (rules.gender && rules.gender !== '' && userData.gender && userData.gender !== rules.gender)
        reasons.push(`This scheme is only for ${rules.gender} applicants`);

      const eligible = reasons.length === 0;
      return {
        schemeId: scheme.id,
        schemeName: scheme.title,
        officialUrl: scheme.officialUrl || 'https://www.tn.gov.in/',
        status: eligible ? 'ELIGIBLE' : 'NOT_ELIGIBLE',
        eligible,
        reasons: eligible ? [] : reasons
      };
    }
  },

  // ─── NOTIFICATIONS ───────────────────────────────────────────────────────────
  notifications: {
    async subscribe({ email, schemeId, schemeName }) {
      if (!email || !email.includes('@')) throw new Error('Please enter a valid email address');
      const response = await fetch(`${BASE_URL}/notifications/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, schemeId, schemeName })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Subscription failed');
      return data;
    },
    async getCount() {
      try {
        const response = await fetch(`${BASE_URL}/notifications/count`);
        const data = await response.json();
        return data.count || 0;
      } catch { return 0; }
    },
    async getAll() {
      try {
        const response = await fetch(`${BASE_URL}/notifications/all`);
        return await response.json();
      } catch { return []; }
    }
  },

  // ─── ADMIN USERS ─────────────────────────────────────────────────────────────
  adminUsers: {
    async getAll() {
      const response = await fetch(`${BASE_URL}/admin/users`);
      if (!response.ok) throw new Error('Failed to load users');
      return response.json();
    },
    async toggleUser(id) {
      const response = await fetch(`${BASE_URL}/admin/users/${id}/toggle`, { method: 'PUT' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to toggle user');
      return data;
    },
    async deleteUser(id) {
      const response = await fetch(`${BASE_URL}/admin/users/${id}`, { method: 'DELETE' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to delete user');
      return data;
    }
  },

  // ─── ADMIN SCHEMES ───────────────────────────────────────────────────────────
  admin: {
    async createScheme(data) {
      if (!data.title?.trim()) throw new Error('Scheme title is required');
      if (!data.department?.trim()) throw new Error('Department is required');
      if (!data.officialUrl?.trim()) throw new Error('Official Portal URL is required');
      const response = await fetch(`${BASE_URL}/schemes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Failed to create scheme');
      return result;
    },
    async updateScheme(id, data) {
      const response = await fetch(`${BASE_URL}/schemes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Failed to update scheme');
      return result;
    },
    async deleteScheme(id) {
      const response = await fetch(`${BASE_URL}/schemes/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete scheme');
      return { success: true };
    },
    async syncSchemes() {
      return { success: true, syncedCount: 0, message: 'All schemes are managed from MySQL database!' };
    }
  }
};