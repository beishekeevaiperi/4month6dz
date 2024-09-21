import React from "react";

const UserTable = ({ users, deleteUser, clearTable }) => {
  return (
    <div>
      <button onClick={clearTable}>Очистить таблицу</button>
      <h3>Таблица пользователей</h3>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Логин</th>
              <th>Email</th>
              <th>Телефон</th>
              <th>Веб-сайт</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website || "Не указано"}</td>
                <td>
                  <button onClick={() => deleteUser(index)}>Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Таблица пуста.</p>
      )}
    </div>
  );
};

export default UserTable;
