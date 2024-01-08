import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import MyButton from './MyButton';
import InputForm from './InputForm';

const Register = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    function handleInput(e) {
        let newUserData = userData;
        newUserData[e.target.name] = e.target.value;
        console.log(newUserData);
        setUserData(newUserData);
    }

    let navigate = useNavigate();

    function handleRegister(e) {
        e.preventDefault();
        axios.post("api/register", userData).then( (response) => {
            alert("You're registered!");
            navigate("/");
        }).catch( (error) => {
            alert("Error");
        }); 
    }
  return (
    
        <div>

        <section className="h-100 h-custom" style={{backgroundImage:"url(https://i.pinimg.com/originals/31/ca/2b/31ca2bcf105003bf97be1aaf9e564df6.jpg)", backgroundSize: 'cover' }}>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
                <div className="card rounded-3">
                <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Kreirajte nalog</h3>

                    <form className="px-md-2">

                        <InputForm type={"name"} name={"name"} id={"form3Example1cg"} text={"Korisničko ime"} field={"Username"}
                        func={(e)=>handleInput(e)}/>

                    <InputForm type={"email"} name={"email"} id={"form3Example3cg"} text={"Email"} field={"Email"}
                        func={(e)=>handleInput(e)}/>    

                        <InputForm type={"password"} name={"password"} id={"form3Example4cg"} text={"Password"} field={"Password"}
                        func={(e)=>handleInput(e)}/>

                        <MyButton label={"Register"} disabled={false} onClick={handleRegister}></MyButton>
                                

                    </form>

                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Register
