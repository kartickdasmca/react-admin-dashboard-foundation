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
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-600 text-xl font-bold text-white shadow-lg">
            ⚡
          </div>

          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Admin Portal
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Sign in to access your dashboard
          </p>
        </div>

        {/* Login Form */}
        <div className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={`admin@kartickdas.com`}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
            />
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Password
              </label>

              <button
                type="button"
                className="text-sm font-medium text-orange-600 hover:text-orange-700 dark:text-orange-400"
              >
                Forgot password?
              </button>
            </div>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={`123456allgood`}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
            />

            <label
              htmlFor="remember"
              className="text-sm text-slate-600 dark:text-slate-400"
            >
              Remember me
            </label>
          </div>

          {/* Sign In */}
          <button
            type="button"
            onClick={handleLogin}
            className="w-full rounded-xl bg-orange-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            Sign in
          </button>

          {/* Secondary Button */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Back to Home
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-slate-400">
          © 2026 Multi Purpose Admin Panel
        </p>
      </div>
    </div>
  );
};

export default Login;