import { writable } from 'svelte/store';

export const theme = writable('light');

export const toggleTheme = () => {
  theme.update((current) => {
    const newTheme = current === 'light' ? 'dark' : 'light';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    return newTheme;
  });
};
