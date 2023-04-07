import logo from './logo.svg';
import './App.css';
import { AuthrizationContext } from './Components/Context';
import { useContext, useState } from 'react';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {

  const {islogin} = useContext(AuthrizationContext);
  {console.log(islogin)}

  return (
    <div >
       {islogin ? (
        <div>
          <Nav />
          <Home />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
