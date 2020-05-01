import React from 'react';
import './../App.css';
import Header from './Header.js'
import Main from './Main';
function App() {
  return (
    <div className="App">
        <div className="container">
            <Header></Header>
            <hr/>
            <Main></Main>
        </div>
    </div>
  );
}

export default App;
