import React from 'react';
import Home from './components/Home';

//Components
import Header from "./components/Header/Header";

//Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
