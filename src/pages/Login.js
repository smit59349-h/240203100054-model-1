import { useState } from "react";
import axios from "axios";

console.log("Login Page Loaded");
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
  try {
    const res = await axios.post(
      "https://fashionstore-backend-niaq.onrender.com/login",
      {
        email,
        password,
      }
    );

    if (res.data.success) {
      alert("Login Successful");
    } else {
      alert("Invalid Email or Password");
    }
  } catch (error) {
    console.log(error);
    alert("Login Error");
  }
};

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;