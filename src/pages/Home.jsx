import React from 'react';
import Login from '../components/Login';
import { useState } from 'react';
import MyButton from '../components/MyButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = ({addToken,token}) => {
  let navigate = useNavigate();

  function handleLogout() {

    let config = {
      method: "post",
      url: "api/logout",
      headers: {
        Authorization: "Bearer " + token,
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        
      window.sessionStorage.setItem("auth_token", null);
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