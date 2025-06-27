import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Icon is defined locally to prevent import errors.
const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
);

// A simple popup component for success messages
const SuccessPopup = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-xl text-center">
      <h3 className="text-2xl font-bold text-primary mb-4">Success!</h3>
      <p className="text-text-dark mb-6">{message}</p>
      <button onClick={onClose} className="bg-primary text-white font-bold py-2 px-6 rounded-lg">OK</button>
    </div>
  </div>
);

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !password2) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== password2) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    setError('');
    // --- MOCK API CALL ---
    // In a real app, you would use axios to call your backend:
    // axios.post('/api/users', { name, email, password })
    //   .then(() => setShowSuccess(true))
    //   .catch(err => setError('Registration failed. Please try again.'));

    // For demonstration, we'll just simulate a successful registration
    console.log('Registering user:', { name, email });
    setShowSuccess(true);
  };

  const handlePopupClose = () => {
    setShowSuccess(false);
    navigate('/login'); // Redirect to login page after closing popup
  };

  return (
    <>
      {showSuccess && <SuccessPopup message="You have signed up successfully!" onClose={handlePopupClose} />}
      <div className="min-h-screen bg-light-bg flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <BookIcon />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-text-light">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary hover:text-accent">
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-dark">Full Name</label>
                <input id="name" name="name" type="text" required value={name} onChange={onChange} className="mt-1 appearance-none block w-full px-3 py-2 border border-border-color rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-dark">Email address</label>
                <input id="email" name="email" type="email" required value={email} onChange={onChange} className="mt-1 appearance-none block w-full px-3 py-2 border border-border-color rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-text-dark">Password</label>
                <input id="password" name="password" type="password" required value={password} onChange={onChange} className="mt-1 appearance-none block w-full px-3 py-2 border border-border-color rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
              </div>

              <div>
                <label htmlFor="password2" className="block text-sm font-medium text-text-dark">Confirm Password</label>
                <input id="password2" name="password2" type="password" required value={password2} onChange={onChange} className="mt-1 appearance-none block w-full px-3 py-2 border border-border-color rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
              </div>

              {error && <p className="text-sm text-red-600 text-center">{error}</p>}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
