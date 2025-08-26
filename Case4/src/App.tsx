import './App.css';
import UserPage from './pages/UserPage';
import AppBar from './components/AppBar/Appbar';
import AddUserModal from './components/AddUser/AddUser';
import type { User } from "./types/user";
import { useState, useEffect } from "react";
import { getUsers, addUser, removeUser } from "./utils/userHelpers";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setUsers(getUsers()); // sayfa yüklenince localStorage'dan yükle
  }, []);

  const handleAddUser = (newUser: User) => {
    addUser(newUser); // localStorage’a kaydet
    setUsers(prev => [...prev, newUser]); // state’e ekle
    setIsModalOpen(false); // modal kapansın
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteUser = (email: string) => {
    removeUser(email); // localStorage'dan sil
    setUsers(prev => prev.filter(user => user.email !== email)); // state'ten sil
  };

  return (
    <>
      <AppBar 
        onAddUser={() => setIsModalOpen(true)} 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        users={users}
      />
      <div style={{ paddingTop: "100px" }}>
        <UserPage users={users} onDeleteUser={handleDeleteUser} searchTerm={searchTerm} />
      </div>

      {isModalOpen && (
        <AddUserModal
          onClose={handleCloseModal}
          onSave={handleAddUser}
        />
      )}
    </>
  );
}

export default App;
