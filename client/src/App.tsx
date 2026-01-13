import { useEffect } from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ServicePage from "./components/ServicePage";
import HomePage from "./pages/HomePage";
import TrackPage from "./pages/TrackPage";
import TrackPromptPage from "./pages/TrackPromptPage";

import AdminLayout from "./admin/AdminLayout";
import CreateShipment from "./admin/CreateShipment";
import Dashboard from "./admin/Dashboard";
import LoginPage from "./admin/LoginPage";
import { RequireAuth } from "./admin/RequireAuth";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout wrapper for public pages
const PublicLayout = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* ================= PUBLIC SITE ================= */}
        <Route path="/*" element={<PublicLayout />}>
          <Route index element={<HomePage />} />

          {/* Tracking */}
          <Route path="track" element={<TrackPromptPage />} />
          <Route path="track/:id" element={<TrackPage />} />

          {/* Pages */}
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Public 404 */}
          <Route path="*" element={<HomePage />} />
        </Route>

        {/* ================= ADMIN ================= */}
        <Route path="/admin/login" element={<LoginPage />} />
        <Route
          path="/admin/*"
          element={
            <RequireAuth>
              <AdminLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="create-shipment" element={<CreateShipment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
