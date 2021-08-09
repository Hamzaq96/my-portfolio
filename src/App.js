import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
// import axios from 'axios';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import NavBar from './components/NavBar';

function App() {

  return (
    <BrowserRouter>
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="flex-1 overflow-y-auto p-5">
        <switch>
          <Route component={Home} path='/' exact />
          <Route component={About} path='/about' />
          <Route component={Project} path='/project' />
        </switch>
      </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
