import React from 'react';
import styles from './Input.module.css';

const Input = ({ type = 'text', placeholder, ...props }) => {
  return (
    <input
      type={type}
      className={styles.inputField}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input; 