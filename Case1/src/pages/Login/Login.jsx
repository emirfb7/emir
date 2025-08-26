import React from 'react';
import styles from './Login.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Login = () => {
  const handleLogin = () => {
    console.log('Login button clicked');
  };

  return (
    <div className={styles.grandCard}>
      <div className={styles.leftSection}>
      </div>
      <div className={styles.secondCard}>
        <div className={styles.loginGroup}>
          <h2 className={styles.loginTitle}>Giriş Yap</h2>
          <div className={styles.divider}></div>
          <div className={styles.inputContainer}>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </div>
          <div className={styles.buttonContainer}>
            <Button onClick={handleLogin}>GİRİŞ YAP</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 