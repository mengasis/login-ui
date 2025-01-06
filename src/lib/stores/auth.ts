import { writable } from 'svelte/store';
import axios from 'axios';
import api from '$lib/config/api';
export const isAuthenticated = writable<boolean>(false);

export const logout = async () => {
  await axios.post(
    `${api.BASE_URL}${api.ENDPOINTS.LOGOUT}`,
    {},
    {
      withCredentials: true
    }
  );
  isAuthenticated.set(false);
};

export const login = () => {
  isAuthenticated.set(true);
};
