import { ArrowRight, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 dark:bg-slate-950">
      <section className="w-full max-w-3xl text-center">
        {/* Logo / Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg">
          <LayoutDashboard className="h-8 w-8 text-white" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          Welcome to Our Platform
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
         A modern, responsive platform with a powerful administration system for managing your application and business data.
        </p>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-500">
          Manage your application, analytics, content, and
          business data from a centralized dashboard.
        </p>

        {/* Admin Access */}
        <div className="mt-8">
          <Link
            to="/admin-login"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-800 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Admin Login
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Admin URL information */}
        <div className="mx-auto mt-10 max-w-md rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Admin access
          </p>
          <code className="mt-2 block rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            /admin-login
          </code>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;