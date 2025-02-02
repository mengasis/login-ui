export type AuthMethod = 
  | 'password'
  | 'otp'
  | 'mfa'
  | 'passkey'
  | 'biometric'
  | 'magic-link';

export interface AuthState {
  email: string;
  isAuthenticated: boolean;
  selectedMethod: AuthMethod | null;
  error: string | null;
}

export interface AuthResponse {
  success: boolean;
  error?: string;
  availableMethods?: AuthMethod[];
}
