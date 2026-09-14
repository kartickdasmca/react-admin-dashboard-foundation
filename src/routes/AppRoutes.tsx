import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../components/layout/AdminLayout/MainLayout";

import LandingPage from "../pages/public/LandingPage";
import Dashboard from "../pages/admin/Dashboard";
import AnalyticsOverview from "../pages/admin/AnalyticsOverview";
import AnalyticsReports from "../pages/admin/AnalyticsReports";
import AnalyticsInsights from "../pages/admin/AnalyticsInsights";
import AdminLogin from "../pages/admin/login"; 
import ProtectedRoute from "./ProtectedRoute";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public pages */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      
      {/* Protected admin routes */}
      <Route element={<ProtectedRoute />}>
      <Route element={<MainLayout />}>
        <Route
          path="/admin"
          element={<Navigate to="/dashboard" replace />}
        />

        <Route
          path="/admin/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/admin/analytics/overview"
          element={<AnalyticsOverview />}
        />

        <Route
          path="/admin/analytics/reports"
          element={<AnalyticsReports />}
        />

        <Route
          path="/admin/analytics/insights"
          element={<AnalyticsInsights />}
        />
        <Route
          path="/admin/users/all-users"
          element={<AnalyticsInsights />}
        />
        <Route
          path="/admin/users/roles-permissions"
          element={<AnalyticsInsights />}
        />
        <Route
          path="/admin/users/user-activity"
          element={<AnalyticsInsights />}
        />
        <Route
          path="/admin/messages"
          element={<AnalyticsInsights />}
        />
        <Route
          path="/admin/settings"
          element={<AnalyticsInsights />}
        />
      </Route>
      </Route>
      {/* Fallback */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
};

export default AppRoutes;