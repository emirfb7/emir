import React, { useState } from "react";
import styles from "./AddUser.module.css";
import type { User } from "../../types/user";
import { isEmailUnique } from "../../utils/userHelpers";

interface AddUserModalProps {
  onClose: () => void;
  onSave: (user: User) => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState<User>({
    name: "",
    surname: "",
    age: 0,
    email: "",
    totalSpending: 0,
  });

  const [emailError, setEmailError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email benzersizlik kontrolü
    if (!isEmailUnique(formData.email)) {
      setEmailError("Bu e-mail adresi zaten kullanılıyor!");
      return;
    }
    
    setEmailError("");
    onSave(formData);
    onClose();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
    
    // Hata mesajını temizle
    if (emailError) {
      setEmailError("");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Add User</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              placeholder="Ad"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Soyad"
              value={formData.surname}
              onChange={(e) =>
                setFormData({ ...formData, surname: e.target.value })
              }
              required
            />
            <div className={styles.emailContainer}>
              <input
                className={`${styles.input} ${emailError ? styles.inputError : ''}`}
                type="email"
                placeholder="E-posta"
                value={formData.email}
                onChange={handleEmailChange}
                required
              />
              {emailError && <div className={styles.errorMessage}>{emailError}</div>}
            </div>
            <input
              className={styles.input}
              type="number"
              placeholder="Yaş"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: Number(e.target.value) })
              }
              required
            />
            <input
              className={styles.input}
              type="number"
              placeholder="Harcama"
              value={formData.totalSpending}
              onChange={(e) =>
                setFormData({ ...formData, totalSpending: Number(e.target.value) })
              }
              required
            />
          </div>
          <div className={styles.buttons}>
            <button type="submit" className={styles.addButton}>
              Ekle
            </button>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              İptal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
