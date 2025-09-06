export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: number;
  user_id: number;
  name: string;
  lastname?: string;
  phone_number?: string;
  email?: string;
  address?: string;
  notes?: string;
  favorite: boolean;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  user: User;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name?: string;
  username: string;
  email: string;
  password: string;
}

export interface ContactFormData {
  name: string;
  lastname?: string;
  phone_number?: string;
  email?: string;
  address?: string;
  notes?: string;
  favorite?: boolean;
}
