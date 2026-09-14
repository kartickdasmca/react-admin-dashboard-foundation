import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from =
    location.state?.from?.pathname ||
    "/admin/dashboard";

  const handleLogin = () => {
    login();
    navigate(from, { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-xl border p-8 shadow-lg">
        <h1 className="mb-6 text-2xl font-bold">
          Login
        </h1>

        <button
          type="button"
          onClick={handleLogin}
          className="w-full rounded-lg bg-orange-600 px-4 py-3 text-white"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;