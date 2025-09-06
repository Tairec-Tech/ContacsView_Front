import React from 'react';
import { Modal, Row, Col, Badge } from 'react-bootstrap';
import { Contact } from '../../types';

interface ContactViewModalProps {
  show: boolean;
  onHide: () => void;
  contact: Contact | null;
}

const ContactViewModal: React.FC<ContactViewModalProps> = ({ show, onHide, contact }) => {
  if (!contact) return null;

  const getFullName = () => {
    return contact.lastname ? `${contact.name} ${contact.lastname}` : contact.name;
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {getFullName()}
          {contact.favorite && (
            <Badge bg="warning" className="ms-2">
              ⭐ Favorito
            </Badge>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6}>
            <div className="mb-3">
              <h6 className="text-muted mb-1">Nombre</h6>
              <p className="mb-0">{contact.name}</p>
            </div>
          </Col>
          {contact.lastname && (
            <Col md={6}>
              <div className="mb-3">
                <h6 className="text-muted mb-1">Apellido</h6>
                <p className="mb-0">{contact.lastname}</p>
              </div>
            </Col>
          )}
        </Row>

        {contact.phone_number && (
          <div className="mb-3">
            <h6 className="text-muted mb-1">Teléfono</h6>
            <p className="mb-0">
              <a href={`tel:${contact.phone_number}`} className="text-decoration-none">
                {contact.phone_number}
              </a>
            </p>
          </div>
        )}

        {contact.email && (
          <div className="mb-3">
            <h6 className="text-muted mb-1">Correo Electrónico</h6>
            <p className="mb-0">
              <a href={`mailto:${contact.email}`} className="text-decoration-none">
                {contact.email}
              </a>
            </p>
          </div>
        )}

        {contact.address && (
          <div className="mb-3">
            <h6 className="text-muted mb-1">Dirección</h6>
            <p className="mb-0">{contact.address}</p>
          </div>
        )}

        {contact.notes && (
          <div className="mb-3">
            <h6 className="text-muted mb-1">Notas</h6>
            <p className="mb-0">{contact.notes}</p>
          </div>
        )}

        <hr />

        <Row>
          <Col md={6}>
            <div className="mb-2">
              <h6 className="text-muted mb-1">Fecha de Creación</h6>
              <p className="mb-0 small">
                {new Date(contact.created_at).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-2">
              <h6 className="text-muted mb-1">Última Actualización</h6>
              <p className="mb-0 small">
                {new Date(contact.updated_at).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-secondary" onClick={onHide}>
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactViewModal;
