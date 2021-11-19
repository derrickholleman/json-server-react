import "./App.css";
import { useState } from "react";
const axios = require("axios");

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  async function loadUsers() {
    const usersRes = await axios.get("http://localhost:5000/users");
    const usersJSON = usersRes.data;
    setUsers(usersJSON);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users", {
        name: name,
      })
      .then(loadUsers);
    setName("");
  };

  return (
    <div className="App">
      <h1>JSON-Server and React Integration</h1>
      <button onClick={loadUsers}>Load Users</button>

      <form onSubmit={handleSubmit}>
        <label htmlFor="newUser">Name: </label>
        <input
          type="text"
          id="newUser"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Create User</button>
      </form>

      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default App;
