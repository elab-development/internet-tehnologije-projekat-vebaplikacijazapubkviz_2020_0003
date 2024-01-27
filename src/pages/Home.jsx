import React from 'react';
import Login from '../components/Login';
import { useState } from 'react';
import MyButton from '../components/MyButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = ({addToken,token}) => {
  let navigate = useNavigate();

  function handleLogout() {
    let myUrl=null;
    if(window.sessionStorage.getItem("role")==="admin"){
      myUrl="api/admin/logout";

    }else{
      myUrl="api/logout";
    }

    let config = {
      method: "post",
      url: myUrl,
      headers: {
        Authorization: "Bearer " + token,
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        
        window.sessionStorage.setItem("auth_token", null);
        window.sessionStorage.removeItem("role");
        window.sessionStorage.removeItem("auth_token");
        
        navigate("/");
      })
      
      .catch((error) => {
        console.log(error);
      });
    }
    const [randomQuestion, setRandomQuestion] = useState('');

    const generateRandomQuestion = () => {
      //OPEN TRIVIA DB service
      const url = 'https://opentdb.com/api.php?amount=1'; 
      axios.get(url)
        .then(response => {
          const question = response.data.results[0].question;
          setRandomQuestion(question);
        })
        .catch(error => {
          
        });
    };

    return (
      
        <div>
           {window.sessionStorage.getItem("auth_token")===null?
            (<Login addToken={addToken} />) : (<div><MyButton label={"Logout"} onClick={handleLogout}/>
            <p>Random question:  <span dangerouslySetInnerHTML={{ __html: randomQuestion }} /></p>
             <MyButton label={"Random question:"} disabled={false} onClick={generateRandomQuestion}></MyButton></div>)}
        </div>
    );
};

export default Home;