import { writable } from 'svelte/store';

const mockUser = {
  id: '12345',
  email: 'user@example.com',
  sessionId: 'mock-session-id'
};

export const user = writable<typeof mockUser | null>(mockUser);

export const logout = () => {
  user.set(null);
};

export const login = (email: string, password: string) => {
  if (email === 'user@example.com' && password === 'password') {
    user.set(mockUser);
    return true;
  }
  return false;
};
