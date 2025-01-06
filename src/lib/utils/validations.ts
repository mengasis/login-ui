export function isEmailValid(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isPasswordValid(password: string): boolean {
  return password.length >= 6;
}

export function getEmailError(email: string) {
  return isEmailValid(email) ? '' : 'Please enter a valid email address.';
}

export function getPasswordError(email: string) {
  return isPasswordValid(email) ? '' : 'Password must be at least 6 characters long.';
}
