export function isEmailValid(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isPasswordValid(password: string): boolean {
  return password.length >= 6;
}

export function getEmailError(email: string) {
  return isEmailValid(email) ? '' : 'Please enter a valid email address.';
}

export function getPasswordError(password: string) {
  return isPasswordValid(password) ? '' : 'Password must be at least 6 characters long.';
}

export function getVerificationCodeError(code: string): string {
  if (!code) {
    return 'Verification code is required';
  }
  
  if (!/^\d{6}$/.test(code)) {
    return 'Verification code must be 6 digits';
  }
  
  return '';
}
