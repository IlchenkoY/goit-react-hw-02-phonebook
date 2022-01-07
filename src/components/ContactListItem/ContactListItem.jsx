import PropTypes from 'prop-types';
import { Button } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, onClick }) => {
  return (
    <>
      {name}: {number}
      <Button type="button" onClick={() => onClick(id)}>
        Delete
      </Button>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { ContactListItem };
