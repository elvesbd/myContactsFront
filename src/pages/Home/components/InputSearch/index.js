import Proptypes from 'prop-types';
import { Container } from './styles';

export function InputSearch({ value, onChange }) {
  return (
    <Container>
      <input
        value={value}
        type="text"
        placeholder="Pesquisar contato pelo nome..."
        onChange={onChange}
      />
    </Container>
  );
}

InputSearch.propTypes = {
  value: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
};
