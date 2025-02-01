import { writable } from 'svelte/store';
import type { AuthState, AuthMethod } from '$lib/types/auth';

const initialState: AuthState = {
  email: '',
  isAuthenticated: false,
  selectedMethod: null,
  error: null
};

function createAuthStore() {
  const { subscribe, set, update } = writable<AuthState>(initialState);

  return {
    subscribe,
    setEmail: (email: string) => update(state => ({ ...state, email })),
    setMethod: (method: AuthMethod) => update(state => ({ ...state, selectedMethod: method })),
    setError: (error: string | null) => update(state => ({ ...state, error })),
    setAuthenticated: (isAuthenticated: boolean) => update(state => ({ ...state, isAuthenticated })),
    reset: () => set(initialState)
  };
}

export const auth = createAuthStore();
