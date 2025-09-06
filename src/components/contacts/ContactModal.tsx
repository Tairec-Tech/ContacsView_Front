import React, { useState, useEffect } from 'react';
import { Modal, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { Contact, ContactFormData } from '../../types';
import { apiService } from '../../services/api';

interface ContactModalProps {
  show: boolean;
  onHide: () => void;
  contact?: Contact | null;
  onSave: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ show, onHide, contact, onSave }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    lastname: '',
    phone_number: '',
    email: '',
    address: '',
    notes: '',
    favorite: false,
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const isEdit = !!contact;
  const title = isEdit ? 'Editar Contacto' : 'Nuevo Contacto';

  useEffect(() => {
    if (contact) {
      setFormData({
        name: contact.name,
        lastname: contact.lastname || '',
        phone_number: contact.phone_number || '',
        email: contact.email || '',
        address: contact.address || '',
        notes: contact.notes || '',
        favorite: contact.favorite,
      });
    } else {
      setFormData({
        name: '',
        lastname: '',
        phone_number: '',
        email: '',
        address: '',
        notes: '',
        favorite: false,
      });
    }
    setError('');
  }, [contact, show]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isEdit && contact) {
        await apiService.updateContact(contact.id, formData);
      } else {
        await apiService.createContact(formData);
      }
      onSave();
      onHide();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al guardar contacto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {error && (
            <Alert variant="danger" className="mb-3">
              {error}
            </Alert>
          )}

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre *</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nombre del contacto"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Apellido del contacto"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="Número de teléfono"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="correo@ejemplo.com"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Dirección completa"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Notas</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Notas adicionales sobre el contacto"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              name="favorite"
              label="Marcar como favorito"
              checked={formData.favorite}
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? 'Guardando...' : (isEdit ? 'Actualizar' : 'Crear')}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ContactModal;
