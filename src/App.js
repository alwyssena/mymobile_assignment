
import React, { useState } from 'react';
import Login from './components/login';
import Homepage from './components/jokesapi';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (name, password) => {
    // Dummy validation logic for demonstration
    if (name === 'demo' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <div>
      {isLoggedIn ? <Homepage /> : <Login onLogin={handleLogin} />}
    </div>
  );
}



 export default App



