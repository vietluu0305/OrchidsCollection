import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Orchids from './components/Orchids';
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Orchids />
      </div>
    </ThemeProvider>
  );
}

export default App;
