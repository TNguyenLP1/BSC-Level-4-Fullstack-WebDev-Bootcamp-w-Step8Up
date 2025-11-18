import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const UserSettings = () => {
  const { userId, theme, toggleTheme } = useContext(AppContext);

  return (
    <div>
      <p>User ID: {userId}</p>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default UserSettings;