import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ items, onClickDelete }) =>
  items.length > 0 && (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <span>{item.name}: </span>
          <span>{item.number}</span>
          <button type="button" onClick={onClickDelete} id={item.id}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  // onClickDelete: PropTypes.func.isRequired,
};
export default ContactList;
