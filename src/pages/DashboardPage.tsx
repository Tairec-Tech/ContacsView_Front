import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Alert, Spinner, Form } from 'react-bootstrap';
import { Contact } from '../types';
import { apiService } from '../services/api';
import ContactCard from '../components/contacts/ContactCard';
import ContactModal from '../components/contacts/ContactModal';
import ContactViewModal from '../components/contacts/ContactViewModal';

const DashboardPage: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [showViewModal, setShowViewModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);

  const loadContacts = async () => {
    try {
      setLoading(true);
      const data = await apiService.getContacts();
      setContacts(data);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar contactos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleCreateContact = () => {
    setSelectedContact(null);
    setShowCreateModal(true);
  };

  const handleViewContact = (contact: Contact) => {
    setSelectedContact(contact);
    setShowViewModal(true);
  };

  const handleEditContact = (contact: Contact) => {
    setSelectedContact(contact);
    setShowEditModal(true);
  };

  const handleSaveContact = () => {
    loadContacts();
  };

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (contact.lastname && contact.lastname.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (contact.email && contact.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (contact.phone_number && contact.phone_number.includes(searchTerm));
    
    const matchesFavorites = !showFavoritesOnly || contact.favorite;
    
    return matchesSearch && matchesFavorites;
  });

  if (loading) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando contactos...</span>
          </Spinner>
          <p className="mt-3">Cargando tus contactos...</p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1 className="h2 mb-0">Mis Contactos</h1>
            <Button variant="primary" onClick={handleCreateContact}>
              <i className="bi bi-plus-circle me-1"></i>
              Nuevo Contacto
            </Button>
          </div>

          {error && (
            <Alert variant="danger" className="mb-3">
              {error}
            </Alert>
          )}

          <Row className="mb-3">
            <Col md={8}>
              <Form.Control
                type="text"
                placeholder="Buscar contactos por nombre, apellido, email o teléfono..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col md={4}>
              <Form.Check
                type="checkbox"
                label="Solo favoritos"
                checked={showFavoritesOnly}
                onChange={(e) => setShowFavoritesOnly(e.target.checked)}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      {filteredContacts.length === 0 ? (
        <Row>
          <Col>
            <div className="text-center py-5">
              <div className="mb-3">
                <i className="bi bi-person-plus" style={{ fontSize: '4rem', color: '#6c757d' }}></i>
              </div>
              <h3 className="text-muted">
                {contacts.length === 0 ? 'No tienes contactos aún' : 'No se encontraron contactos'}
              </h3>
              <p className="text-muted">
                {contacts.length === 0 
                  ? 'Comienza agregando tu primer contacto' 
                  : 'Intenta con otros términos de búsqueda'
                }
              </p>
              {contacts.length === 0 && (
                <Button variant="primary" onClick={handleCreateContact}>
                  Crear Primer Contacto
                </Button>
              )}
            </div>
          </Col>
        </Row>
      ) : (
        <Row>
          {filteredContacts.map((contact) => (
            <Col key={contact.id} lg={4} md={6} className="mb-4">
              <ContactCard
                contact={contact}
                onView={handleViewContact}
                onEdit={handleEditContact}
              />
            </Col>
          ))}
        </Row>
      )}

      {/* Modales */}
      <ContactModal
        show={showCreateModal}
        onHide={() => setShowCreateModal(false)}
        onSave={handleSaveContact}
      />

      <ContactModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        contact={selectedContact}
        onSave={handleSaveContact}
      />

      <ContactViewModal
        show={showViewModal}
        onHide={() => setShowViewModal(false)}
        contact={selectedContact}
      />
    </Container>
  );
};

export default DashboardPage;
