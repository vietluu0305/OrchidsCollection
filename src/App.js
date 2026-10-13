import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Orchids from './components/Orchids';
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Orchids />
      </ThemeProvider>
    </div>
  );
}

export default App;
