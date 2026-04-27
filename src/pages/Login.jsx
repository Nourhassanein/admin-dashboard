import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("auth", "true");
    navigate("/");
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Admin Login</h2>

      <button className="btn btn-primary mt-3" onClick={login}>
        Login
      </button>
    </div>
  );
}