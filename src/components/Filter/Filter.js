import React from 'react';
import PropTypes from 'prop-types';
// import s from './Filter.module.css';

const Filter = ({ handleChange, filter }) => (
  <>
    <form>
      <br />
      <label>
        Fined contacts by name
        <br />
        <input
          onChange={handleChange}
          value={filter}
          name="filter"
          type="text"
          placeholder="Input fined contacts"
        />
      </label>
    </form>
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
export default Filter;
