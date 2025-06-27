import React, { useState, useEffect } from 'react';

const ProfilePage = ({ user, setUser }) => {
  // A single state variable to control the component's mode: 'view', 'editInfo', or 'editPassword'
  const [mode, setMode] = useState('view');
  
  const [infoData, setInfoData] = useState({
    name: '',
    email: '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [passwordError, setPasswordError] = useState('');

  // This effect ensures the form data is always in sync with the user prop,
  // even if it changes.
  useEffect(() => {
    if (user) {
      setInfoData({
        name: user.name || '',
        email: user.email || '',
      });
    }
  }, [user]);

  const handleInfoChange = (e) => {
    setInfoData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting updated user data:", infoData);
    // In a real app, you would send this to your backend API
    setUser({ ...user, ...infoData }); // Update the global user state
    setMode('view'); // Return to view mode
  };

  const handlePasswordChange = (e) => {
    setPasswordData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setPasswordError('');

    if (passwordData.newPassword.length < 6) {
        setPasswordError('New password must be at least 6 characters.');
        return;
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
        setPasswordError('New passwords do not match.');
        return;
    }

    // In a real app, send all 3 password fields to the backend for validation
    console.log("Submitting new password...");
    alert("Password changed successfully! (mock)");
    setMode('view'); // Return to view mode
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: ''});
  };

  const handleCancel = () => {
    console.log("Canceling edit.");
    // Reset form data to the original user state when canceling
    setInfoData({ name: user?.name || '', email: user?.email || '' });
    setPasswordError('');
    setMode('view');
  };
  
  const handleEditClick = () => {
    console.log("'Edit Profile' button clicked. Changing mode to 'editInfo'.");
    setMode('editInfo');
  }
  
  const handleChangePasswordClick = () => {
    console.log("'Change Password' button clicked. Changing mode to 'editPassword'.");
    setMode('editPassword');
  }

  // Debugging line to see the current mode on every render
  console.log('Rendering ProfilePage with mode:', mode);

  return (
    <div className="bg-light-bg py-12">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="bg-white p-8 rounded-xl shadow-md">
          
          {mode === 'editPassword' && (
            // --- Change Password Form ---
            <form onSubmit={handlePasswordSubmit}>
              <h1 className="text-3xl font-bold text-primary mb-6">Change Password</h1>
              <div className="space-y-4">
                <div>
                  <label htmlFor="currentPassword" className="text-sm font-medium text-text-light">Current Password</label>
                  <input type="password" id="currentPassword" name="currentPassword" value={passwordData.currentPassword} onChange={handlePasswordChange} required className="mt-1 w-full p-3 border border-border-color rounded-md focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="newPassword" className="text-sm font-medium text-text-light">New Password</label>
                  <input type="password" id="newPassword" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} required className="mt-1 w-full p-3 border border-border-color rounded-md focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="text-sm font-medium text-text-light">Confirm New Password</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" value={passwordData.confirmPassword} onChange={handlePasswordChange} required className="mt-1 w-full p-3 border border-border-color rounded-md focus:ring-primary focus:border-primary" />
                </div>
              </div>
              {passwordError && <p className="text-sm text-red-600 mt-4">{passwordError}</p>}
              <div className="mt-8 flex justify-end space-x-4">
                <button type="button" onClick={handleCancel} className="py-2 px-4 bg-gray-200 text-text-dark font-semibold rounded-lg hover:bg-gray-300">Cancel</button>
                <button type="submit" className="py-2 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90">Save Password</button>
              </div>
            </form>
          )}
          
          {mode !== 'editPassword' && (
            // --- Main Profile View & Edit Form ---
            <form onSubmit={handleInfoSubmit}>
              <h1 className="text-3xl font-bold text-primary mb-6">My Profile</h1>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-text-light">Full Name</label>
                  <input type="text" id="name" name="name" value={infoData.name} onChange={handleInfoChange} disabled={mode === 'view'} className="mt-1 w-full p-3 border border-border-color rounded-md focus:ring-primary focus:border-primary disabled:bg-gray-100" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-text-light">Email Address</label>
                  <input type="email" id="email" name="email" value={infoData.email} onChange={handleInfoChange} disabled={mode === 'view'} className="mt-1 w-full p-3 border border-border-color rounded-md focus:ring-primary focus:border-primary disabled:bg-gray-100" />
                </div>
              </div>
              <div className="mt-8 flex justify-end space-x-4">
                {mode === 'editInfo' && (
                  <>
                    <button type="button" onClick={handleCancel} className="py-2 px-4 bg-gray-200 text-text-dark font-semibold rounded-lg hover:bg-gray-300">Cancel</button>
                    <button type="submit" className="py-2 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90">Save Changes</button>
                  </>
                )}
                {mode === 'view' && (
                  <>
                    <button type="button" onClick={handleChangePasswordClick} className="py-2 px-4 text-primary font-semibold rounded-lg hover:bg-gray-100">Change Password</button>
                    <button type="button" onClick={handleEditClick} className="py-2 px-4 bg-accent text-primary font-semibold rounded-lg hover:opacity-90">Edit Profile</button>
                  </>
                )}
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
