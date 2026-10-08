import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login-container">
      <h2>Login Page</h2>

      <div className="login-card">
        <form className="login-form">
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Email" />
          </div>

          <div>
            <label>Password:</label>
            <input type="password" placeholder="Password" />
          </div>

          <button type="submit">Login</button>
        </form>
        <div>
          <p>
            Don't have an account? <Link to="/register"> Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
