import React from 'react'
import MyButton from '../components/MyButton';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = ({addToken} ) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function handleInput(e) {
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  }

  let navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    axios
      .post("api/login", userData)
      .then((response) => {
        console.log(response.data.access_token);

        if (response.data.success ===true) {
          window.sessionStorage.setItem(
            "auth_token",
            response.data.access_token
          );
          addToken(response.data.access_token);
          navigate("/");
        }
        
        alert("Ulogovali ste se");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="login text-center">
       <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0 justify-content-center">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img className="image"
                        src="https://c4.ahra.org.ar/wp-content/uploads/2023/06/inscripcion.png"
                        style={{ width: '200px' }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">Prijava</h4>
                    </div>

                    <form>
                      <p>Ulogujte se na nalog</p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          name="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Broj telefona ili email"
                          onInput={(e) => handleInput(e)}
                        />
                        <label className="form-label" htmlFor="form2Example11">
                          Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="password"
                          id="form2Example22"
                          className="form-control"
                          onInput={handleInput}

                        />
                        <label className="form-label" htmlFor="form2Example22">
                          Password
                        </label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <MyButton label={"Login"} disabled={false} onClick={handleLogin}></MyButton>
                         
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Nemate nalog?</p>
                        <MyButton label={"Registracija"}></MyButton>
                      </div>
                    </form>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Login
