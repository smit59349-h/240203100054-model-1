function Login() {
  return (
    <div className="auth-container">
      <h2>Login</h2>

      <input type="email" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />

      <button>Login</button>
    </div>
  );
}

export default Login;