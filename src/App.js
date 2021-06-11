import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import Home from './components/Home';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/hamzaq96')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
    
  }, []);

  if(!user) {
    return <div />
  }

  return (
    <div >
      {/* <h1>Helloo {user.basics.name}</h1> */}
      <Home />
    </div>
  );
}

export default App;
