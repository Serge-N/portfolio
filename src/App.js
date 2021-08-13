import React from 'react';
import "./index.css"
import Home from './Home';
import { Container }from '@material-ui/core';

//const Name = () => <span>Serge Nalishiwa</span>

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
