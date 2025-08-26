import React from "react";
import styles from "./AppBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import AddIcon from "../../assets/Group 3 (4).svg";
import type { User } from "../../types/user";

interface AppBarProps {
  onAddUser: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  users: User[];
}

const AppBar: React.FC<AppBarProps> = ({ onAddUser, searchTerm, onSearchChange, users }) => {
  // 18 yaş altı kullanıcı sayısını hesapla
  const under18Count = users.filter(user => user.age < 18).length;
  
  // Ortalama harcama hesapla
  const averageSpending = users.length > 0 
    ? (users.reduce((sum, user) => sum + user.totalSpending, 0) / users.length).toFixed(2).replace(/\.?0+$/, '')
    //sondaki kısmı anlamadım!!!
    : "0";

  return (
    <header className={styles.appBar}>
      <div className={styles.appBarContainer}>
        <h1 className={styles.title}>User Management System</h1>
        <div className={styles.statsContainer}>
          <div className={styles.statBox}>
            <span className={styles.statLabel}>Under 18</span>
            <span className={styles.statValue}>{under18Count}</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statLabel}>Average Spending</span>
            <span className={styles.statValue}>${averageSpending}</span>
          </div>
        </div>
        <div className={styles.appBarButtonContainer}>
          <button className={styles.appBarButton} onClick={onAddUser}>
            <img src={AddIcon} alt="Add" className={styles.appBarButtonIcon} />
          </button>
          <SearchBar
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="İsim ile ara..."
          />
        </div>
      </div>
    </header>
  );
};

export default AppBar;
