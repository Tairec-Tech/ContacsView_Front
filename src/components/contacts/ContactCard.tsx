import React from 'react';
import { Card, Badge, Button, ButtonGroup } from 'react-bootstrap';
import { Contact } from '../../types';

interface ContactCardProps {
  contact: Contact;
  onView: (contact: Contact) => void;
  onEdit: (contact: Contact) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, onView, onEdit }) => {
  const getFullName = () => {
    return contact.lastname ? `${contact.name} ${contact.lastname}` : contact.name;
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="mb-0 h5">
            {getFullName()}
            {contact.favorite && (
              <Badge bg="warning" className="ms-2">
                ⭐
              </Badge>
            )}
          </Card.Title>
        </div>

        <div className="flex-grow-1">
          {contact.phone_number && (
            <div className="mb-1">
              <small className="text-muted">📞</small>
              <small className="ms-1">{contact.phone_number}</small>
            </div>
          )}
          
          {contact.email && (
            <div className="mb-1">
              <small className="text-muted">✉️</small>
              <small className="ms-1 text-truncate d-block">{contact.email}</small>
            </div>
          )}
          
          {contact.address && (
            <div className="mb-1">
              <small className="text-muted">📍</small>
              <small className="ms-1 text-truncate d-block">{contact.address}</small>
            </div>
          )}
        </div>

        <ButtonGroup className="mt-3">
          <Button 
            variant="outline-primary" 
            size="sm"
            onClick={() => onView(contact)}
          >
            Ver
          </Button>
          <Button 
            variant="outline-secondary" 
            size="sm"
            onClick={() => onEdit(contact)}
          >
            Editar
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
