import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';

// Import all components and pages
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BookList from './components/BookList';
import Footer from './components/Footer';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import TeamPage from './pages/TeamPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiePage from './pages/CookiePage';
import GenrePage from './pages/GenrePage';
import CheckoutPage from './pages/CheckoutPage';
import PostBook from './pages/PostBook'; // Add the new PostBook component

// --- Layout Components ---
const MainLayout = ({ user, onLogout }) => (
  <div className="font-sans antialiased bg-light-bg flex flex-col min-h-screen">
    <Navbar user={user} onLogout={onLogout} />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const AuthLayout = () => (
    <main><Outlet /></main>
);

const HomePage = () => (
  <>
    <HeroSection />
    <BookList />
  </>
);


// --- Main App ---
function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => setUser(userData);
  const handleLogout = () => setUser(null);

  return (
    <Router>
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route element={<MainLayout user={user} onLogout={handleLogout} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={user ? <ProfilePage user={user} setUser={setUser} /> : <Navigate to="/login" />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiePage />} />
          <Route path="/genre/:genreName" element={<GenrePage />} />
          <Route path="/checkout/:bookId" element={<CheckoutPage />} />
          {/* Add the new PostBook route - protected route */}
          <Route 
            path="/post-book" 
            element={user ? <PostBook user={user} /> : <Navigate to="/login" />} 
          />
        </Route>

        {/* Routes without Navbar and Footer */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <RegisterPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;