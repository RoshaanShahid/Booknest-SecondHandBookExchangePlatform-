import React from 'react';
import { Link } from 'react-router-dom';

// --- Local Icons for this component ---
const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-text-dark group-hover:text-primary transition-colors">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
  </svg>
);

const ProfileIcon = ({ user }) => (
    <Link to="/profile">
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg cursor-pointer ring-2 ring-offset-2 ring-primary/50">
            {/* Display user's initials */}
            {user?.name?.charAt(0).toUpperCase() || 'U'}
        </div>
    </Link>
);

const Navbar = ({ user, onLogout }) => {
  return (
    <header className="bg-white/80 backdrop-blur-lg w-full border-b border-border-color sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <BookIcon />
            <span className="text-3xl font-extrabold text-primary">BookNest</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-text-dark font-semibold hover:text-primary transition-colors">Home</Link>
            <Link to="/#search-section" className="text-text-dark font-semibold hover:text-primary transition-colors">Browse Books</Link>
            {user ? (
              <Link to="/post-book" className="text-text-dark font-semibold hover:text-primary transition-colors">
                Post Book
              </Link>
            ) : (
              <Link to="/login" className="text-text-dark font-semibold hover:text-primary transition-colors">
                Post Book
              </Link>
            )}
          </nav>
          
          <div className="flex items-center space-x-5">
            {user ? (
              // --- Logged-in view ---
              <>
               
                <div className="relative group">
                    <ProfileIcon user={user} />
                    {/* Dropdown Menu */}
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                        <Link to="/profile" className="block px-4 py-2 text-sm text-text-dark hover:bg-light-bg">My Profile</Link>
                        <Link to="/post-book" className="block px-4 py-2 text-sm text-text-dark hover:bg-light-bg md:hidden">
                          Post Book
                        </Link>
                        <button onClick={onLogout} className="w-full text-left block px-4 py-2 text-sm text-text-dark hover:bg-light-bg">
                            Logout
                        </button>
                    </div>
                </div>
              </>
            ) : (
              // --- Logged-out view ---
              <>
               
                <Link to="/register" className="bg-primary text-white font-bold py-2 px-5 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;