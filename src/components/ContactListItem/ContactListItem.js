import PropTypes from 'prop-types'

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li key={id}>
      {name} : {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };
