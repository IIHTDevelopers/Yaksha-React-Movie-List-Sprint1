import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.css';

const Checkbox = (props) => {
  

  const onCheckboxClick =()=> {
    
  }

  return (
    <span></span>
  )
};

Checkbox.propTypes = {
  // item: PropTypes.object,
  item: PropTypes.exact({
    name: PropTypes.string,
    checked: PropTypes.bool
  })
};

Checkbox.defaultProps = {};

export default Checkbox;
