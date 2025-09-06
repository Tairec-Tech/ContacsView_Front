
import { AuthResponse, LoginData, RegisterData, Contact, ContactFormData, User } from '../types';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

class ApiService {
  // 🔹 Headers de autorización y JSON
  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json', // ✅ importante para que Laravel devuelva JSON
      'Authorization': token ? `Bearer ${token}` : '',
    };
  }

  // 🔹 Auth endpoints
  async login(data: LoginData): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json', // ✅ agregar Accept
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al iniciar sesión');
    }

    return response.json();
  }

  async register(data: RegisterData): Promise<User> {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json', // ✅ agregar Accept
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al registrarse');
    }

    return response.json();
  }

  async logout(): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/logout`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Error al cerrar sesión');
    }
  }

  // 🔹 Contact endpoints
  async getContacts(): Promise<Contact[]> {
    const response = await fetch(`${API_BASE_URL}/contacts`, {
      headers: this.getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Error al obtener contactos');
    }

    return response.json();
  }

  async getContact(id: number): Promise<Contact> {
    const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
      headers: this.getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Error al obtener contacto');
    }

    return response.json();
  }

  async createContact(data: ContactFormData): Promise<Contact> {
    const response = await fetch(`${API_BASE_URL}/contacts`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al crear contacto');
    }

    return response.json();
  }

  async updateContact(id: number, data: ContactFormData): Promise<Contact> {
    const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al actualizar contacto');
    }

    return response.json();
  }

  // 🔹 User endpoints
  async updateUser(id: number, data: Partial<RegisterData>): Promise<User> {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al actualizar usuario');
    }

    return response.json();
  }
}

export const apiService = new ApiService();
