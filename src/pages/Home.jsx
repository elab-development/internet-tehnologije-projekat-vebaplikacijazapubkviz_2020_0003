import React from 'react';
import Login from '../components/Login';
import { useState } from 'react';
import MyButton from '../components/MyButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import InputForm from '../components/InputForm';

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
    const [randomFact, setRandomFact] = useState('');

    const generateRandomFact = () => {
      const apiUrl = 'http://numbersapi.com/random/trivia';
  
      axios.get(apiUrl)
        .then(response => setRandomFact(response.data))
        .catch(error => {});
    };
  
    useEffect(() => {
      generateRandomFact();
    }, []); 

    //do ovde
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [amountOfQuestions, setAmountOfQuestions] = useState(3);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
    
    const getCategories = () => {
      axios.get('https://opentdb.com/api_category.php')
        .then(response => {
          const fetchedCategories = response.data.trivia_categories;
          setCategories(fetchedCategories);
        })
        .catch(error => {
          console.log('Error while selecting the category');
        });
    };

    getCategories();
  }, []);

  const getQuestions = () => {
    axios.get(`https://opentdb.com/api.php`, {
      params: {
        amount: amountOfQuestions,
        category: selectedCategory,
        type: 'multiple',
      },
    })
    .then(response => {
      const data = response.data;
      console.log(data);
      setQuestions(data.results);
    })
    .catch(error => {
      console.log('Error while selecting questions');
    });
  };

  
    const [memberData, setMemberData] = useState({
      id:"",
      first_name: "",
      last_name: "",
    });
  
    function handleInput(e) {
      let newMemberData = memberData;
      newMemberData[e.target.name] = e.target.value;
      setMemberData(newMemberData);
    }

    function deleteMember(){
      let config = {
        method: 'delete',
        url: 'api/members/'+memberData.id+'/delete',
        headers: {
          Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
        }
      };
      
      axios.request(config)
      .then((response) => {
        alert("Successfully deleted member!");
            })
      .catch((error) => {
        console.log(token)
        alert("Error while deleting member")
      });
    }

    function updateMember(){
      let data=JSON.stringify({
        "first_name": memberData.first_name,
        "last_name": memberData.last_name
      });
      let config = {
        method: 'put',
        url: 'api/members/'+memberData.id+'/update',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
        },
        data :data
      };
      
      axios.request(config)
      .then((response) => {
        alert("Successfully updated member!");
            })
      .catch((error) => {
        console.log(token)
        alert("Error while updating member")
      });
    }

    function insertMember(){
      let data=JSON.stringify({
        "first_name": memberData.first_name,
        "last_name": memberData.last_name
      });
      console.log("Ovde "+data);
      let config = {
        method: 'post',
        url: 'api/members/insert',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
        },
        data: data
      };
      axios.request(config)
        .then((response) => {
          alert("Successfully inserted member!");
          console.log(response)
              })
        .catch((error) => {
          console.log(token)
          alert("Error while inserting member")
        });
    }

    return (
      
        <div>
           {window.sessionStorage.getItem("auth_token")===null?
            (<Login addToken={addToken} />) : (<div>
              
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div className="card" style={{width:500}}>
              
            <div className="card-header">
                Member
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> 
                  <MyButton label={"Delete member"} disabled={false} onClick={deleteMember} ></MyButton></li>
                
                      
                      <InputForm type={"name"} name={"id"} id={"form4Example7cg"} field={"Member ID:"}
                        func={(e)=>handleInput(e)}/>

                       <InputForm type={"name"} name={"first_name"} id={"form4Example5cg"} field={"First name"}
                        func={(e)=>handleInput(e)}/>
                      
                      <InputForm type={"name"} name={"last_name"} id={"form4Example6cg"} field={"Last name"}
                        func={(e)=>handleInput(e)}/>
                        <MyButton label={"Insert member"} disabled={false} onClick={insertMember}></MyButton>
                        <MyButton label={"Update member"} disabled={false} onClick={updateMember}></MyButton>
                        
              </ul>
              </div>
        </div>

              
            <p>Random question:  <span dangerouslySetInnerHTML={{ __html: randomQuestion }} /></p>
             <MyButton label={"Random question:"} disabled={false} onClick={generateRandomQuestion}></MyButton>
              <p>{randomFact}</p>

              <div>
                <label htmlFor="categorySelect">Choose a category:</label>
                <select
                  id="categorySelect"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  value={selectedCategory}
                >
                  <option value="">Select a category:</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <button onClick={getQuestions}>Get questions</button>
              </div>
              {questions.length > 0 && (
                <div>
                  <h2>Questions:</h2>
                  <ul>
                    {questions.map((question, index) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: question.question }} />
                    ))}
                  </ul>
                </div>
              )}
              <MyButton label={"Logout"} onClick={handleLogout}/>


              </div>
              )}
            
        </div>
        
    );
};

export default Home;