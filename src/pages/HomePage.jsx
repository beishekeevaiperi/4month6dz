import React, { useState } from "react";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const clearTable = () => {
    setUsers([]);
  };

  return (
    <div>
      <h2>Создать пользователя</h2>
      <UserForm onSubmit={handleAddUser} />
      <UserTable users={users} deleteUser={deleteUser} clearTable={clearTable} />
    </div>
  );
};

export default HomePage;
