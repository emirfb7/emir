import React from "react";
import UserList from "../components/UserList/Userlist";
import type { User } from "../types/user";

interface UserPageProps {
  users: User[];
  onDeleteUser?: (email: string) => void;
  searchTerm?: string;
}

const UserPage: React.FC<UserPageProps> = ({ users, onDeleteUser, searchTerm }) => {
  console.log('UserPage rendered with users:', users);
  return (
    <div>
      <UserList users={users} onDeleteUser={onDeleteUser} searchTerm={searchTerm} />
    </div>
  );
};

export default UserPage;
