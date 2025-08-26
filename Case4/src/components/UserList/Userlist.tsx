import React, { useState } from "react";
import styles from "./UserList.module.css";
import type { User } from "../../types/user";

interface UserListProps {
  users: User[];
  onDeleteUser?: (email: string) => void;
  searchTerm?: string;
}

const UserList: React.FC<UserListProps> = ({ users, onDeleteUser, searchTerm }) => {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [pressTimeout, setPressTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseDown = (email: string) => {
    const timeout = setTimeout(() => {
      setSelectedCards(prev => 
        prev.includes(email) 
          ? prev.filter(e => e !== email)
          : [...prev, email]
      );
    }, 500); // 500ms için basılı tutma
    setPressTimeout(timeout);
  };

  const handleMouseUp = () => {
    if (pressTimeout) {
      clearTimeout(pressTimeout);
      setPressTimeout(null);
    }
  };

  const handleMouseLeave = () => {
    if (pressTimeout) {
      clearTimeout(pressTimeout);
      setPressTimeout(null);
    }
  };

  console.log("UserList rendered with users:", users);
  
  // Kullanıcıları arama terimine göre filtrele (isim ve soyisim)
  const filteredUsers = users.filter(user => {
    if (!searchTerm) return true; // Arama terimi yoksa tüm kullanıcıları göster
    
    const searchLower = searchTerm.toLowerCase();
    const fullName = `${user.name} ${user.surname}`.toLowerCase();
    
    return fullName.includes(searchLower);
  });
  
  // Filtrelenmiş kullanıcıları yaşa göre sırala
  const sortedUsers = [...filteredUsers].sort((a, b) => a.age - b.age);

  return (
    <div className={styles.userList}>
      {sortedUsers.length === 0 ? (
        <div className={styles.noResultsContainer}>
          <div className={styles.noResultsMessage}>
            {searchTerm ? 
              `"${searchTerm}" için kimse bulunamadı` : 
              "Henüz kullanıcı eklenmemiş"
            }
          </div>
        </div>
      ) : (
        sortedUsers.map((user) => (
        <div 
          key={user.email} 
          className={`${styles.userCard} ${selectedCards.includes(user.email) ? styles.userCardSelected : ''}`}
          onMouseDown={() => handleMouseDown(user.email)}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={() => handleMouseDown(user.email)}
          onTouchEnd={handleMouseUp}
        >
          {selectedCards.includes(user.email) ? (
            <div className={styles.deleteIconContainer}>
              <div 
                className={styles.deleteIcon}
                onClick={(e) => {
                  e.stopPropagation();
                  if (onDeleteUser) {
                    onDeleteUser(user.email);
                  }
                  setSelectedCards(prev => prev.filter(email => email !== user.email));
                }}
              >
                🗑️
              </div>
            </div>
          ) : (
            <>
              <div className={styles.contents}>
                <div className={styles.name}>
                  <h3 className={styles.firstName}>{user.name}</h3>
                  <h3 className={styles.lastName}>{user.surname}</h3>
                </div>
                <div className={styles.ageMailContainer}>
                  <div className={styles.age}>
                    <p className={styles.ageLabel}>Age:</p>
                    <p className={styles.ageValue}>{user.age}</p>
                  </div>
                  <div className={styles.email}>
                    <p>
                      <span className={styles.emailLabel}>Email: </span>
                      <span className={styles.emailValue}>{user.email}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.totalSpendingcontainer}>
                <p className={styles.totalSpending}>Total Spending:</p>
                <p className={styles.spendingAmount}>${user.totalSpending}</p>
              </div>
            </>
          )}
        </div>
        ))
      )}
    </div>
  );
};

export default UserList;
