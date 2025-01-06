export default {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000',
  ENDPOINTS: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/register',
    PROFILE: '/auth/profile',
    LOGOUT: '/auth/logout'
  }
};
