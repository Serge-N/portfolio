import React from 'react';
import "./index.css"
import Home from './pages/Home';
import { Container }from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Home />
      </Container>
    </div>
  );
}

export default App;
