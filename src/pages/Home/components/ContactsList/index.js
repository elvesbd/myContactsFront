import { memo } from 'react';
import { Link } from 'react-router-dom';

import Proptypes from 'prop-types';
import { ListHeader, Card } from './styles';
import edit from '../../../../assets/images/icons/edit.svg';
import arrow from '../../../../assets/images/icons/arrow.svg';
import trash from '../../../../assets/images/icons/trash.svg';

function ContactsList({
  orderBy,
  onToggleOrderBy,
  onDeleteContact,
  filteredContacts,
}) {
  return (
    <>
      {filteredContacts.length > 0 && (
      <ListHeader orderBy={orderBy}>
        <button type="button" onClick={onToggleOrderBy}>
          <span>Nome</span>
          <img src={arrow} alt="Arrow" />
        </button>
      </ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category.name && (
              <small>{contact.category.name}</small>)}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button" onClick={() => onDeleteContact(contact)}>
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}
    </>
  );
}

ContactsList.propTypes = {
  filteredContacts: Proptypes.arrayOf(Proptypes.shape({
    id: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    email: Proptypes.string,
    phone: Proptypes.string,
    category: Proptypes.shape({
      name: Proptypes.string,
    }),
  })).isRequired,
  orderBy: Proptypes.string.isRequired,
  onToggleOrderBy: Proptypes.func.isRequired,
  onDeleteContact: Proptypes.func.isRequired,
};

export default memo(ContactsList);
