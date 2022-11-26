import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

export function Header({ hasError, qtyOfContacts, qtyOfFilteredContacts }) {
  const alignContacts = qtyOfContacts > 0
    ? 'space-between'
    : 'center';

  const alignment = hasError
    ? 'flex-end'
    : alignContacts;

  return (
    <Container justifyContent={alignment}>
      {(!hasError && qtyOfContacts > 0) && (
      <strong>
        {qtyOfFilteredContacts}
        {qtyOfFilteredContacts === 1 ? ' contato' : ' contatos'}
      </strong>
      )}
      <Link to="/new">Novo contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  qtyOfContacts: PropTypes.number.isRequired,
  qtyOfFilteredContacts: PropTypes.number.isRequired,
};
