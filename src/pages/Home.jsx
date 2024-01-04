import React from 'react';
import Login from '../components/Login';
import { useState } from 'react';
import MyButton from '../components/MyButton';

const Home = () => {
    const [token, setToken] = useState(null);

  function addToken(auth_token) {
    setToken(auth_token);
  }
    return (
      
        <div>
           {window.sessionStorage.getItem("auth_token")===null?
            (<Login addToken={addToken} />) : (<div><MyButton label={"Logout"}/></div>)}
        </div>
    );
};

export default Home;