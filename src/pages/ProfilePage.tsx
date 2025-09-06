import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { RegisterData } from '../types';

const ProfilePage: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState<Partial<RegisterData>>({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        username: user.username,
        email: user.email,
        password: '',
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validar contraseña si se proporciona
    if (formData.password) {
      if (formData.password.length < 6) {
        setError('La contraseña debe tener al menos 6 caracteres');
        return;
      }
      if (formData.password !== confirmPassword) {
        setError('Las contraseñas no coinciden');
        return;
      }
    }

    setLoading(true);

    try {
      const updateData: Partial<RegisterData> = {
        name: formData.name,
        username: formData.username,
        email: formData.email,
      };

      // Solo incluir contraseña si se proporciona
      if (formData.password) {
        updateData.password = formData.password;
      }

      await updateUser(updateData);
      setSuccess('Perfil actualizado correctamente');
      setFormData(prev => ({ ...prev, password: '' }));
      setConfirmPassword('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al actualizar perfil');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <Alert variant="warning">Usuario no encontrado</Alert>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h2 className="fw-bold text-primary">Mi Perfil</h2>
                <p className="text-muted">Actualiza tu información personal</p>
              </div>

              {error && (
                <Alert variant="danger" className="mb-3">
                  {error}
                </Alert>
              )}

              {success && (
                <Alert variant="success" className="mb-3">
                  {success}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre Completo</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Nombre de Usuario *</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    placeholder="tu_usuario"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Correo Electrónico *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </Form.Group>

                <hr className="my-4" />

                <h5 className="mb-3">Cambiar Contraseña</h5>
                <p className="text-muted small mb-3">
                  Deja estos campos vacíos si no quieres cambiar tu contraseña
                </p>

                <Form.Group className="mb-3">
                  <Form.Label>Nueva Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Nueva contraseña (mínimo 6 caracteres)"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Confirmar Nueva Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirma tu nueva contraseña"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? 'Actualizando...' : 'Actualizar Perfil'}
                </Button>
              </Form>

              <div className="text-center mt-4">
                <small className="text-muted">
                  Miembro desde: {new Date(user.created_at).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
