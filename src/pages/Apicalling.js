import React, { useEffect, useState } from "react";

function Apicalling() {
  const [users, setUsers] = useState([]);

  // API Calling
  useEffect(() => {
    fetch("https://fashionstore-backend-niaq.onrender.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>User Table</h1>

      <table
        border="1"
        cellPadding="10"
        width="100%"
        style={{ textAlign: "center" }}
      >
        <thead>
          <tr>
            <th align="center">ID</th>
            <th align="center">Name</th>
            <th align="center">Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td align="center">{user._id}</td>
              <td align="center">{user.username}</td>
              <td align="center">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Apicalling;

