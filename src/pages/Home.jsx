import React from 'react';
import Login from '../components/Login';
import { useState } from 'react';
import MyButton from '../components/MyButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [token, setToken] = useState(null);

  function addToken(auth_token) {
    setToken(auth_token);
  }

  let navigate = useNavigate();

  function handleLogout() {

    let config = {
      method: "post",
      url: "api/logout",
      headers: {
        Authorization: "Bearer " + token,
      }
    };
    window.sessionStorage.setItem("auth_token", null);

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        window.sessionStorage.removeItem("auth_token");
        
        navigate("/");
      })
      
      .catch((error) => {
        console.log(error);
      });
    }
    return (
      
        <div>
           {window.sessionStorage.getItem("auth_token")===null?
            (<Login addToken={addToken} />) : (<div><MyButton label={"Logout"} onClick={handleLogout}/></div>)}
        </div>
    );
};

export default Home;