import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="register-container">
      <h2>Register Page</h2>

      <div className="register-card">
        <form className="register-form">
          <div>
            <label>Name:</label>
            <input type="name" placeholder="name" />
          </div>

          <div>
            <label>Email:</label>
            <input type="email" placeholder="Email" />
          </div>

          <div>
            <label>Password:</label>
            <input type="password" placeholder="Password" />
          </div>

          <button type="submit">Create Account</button>
        </form>
        <div>
          <p>
            Already have an account? <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
