import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import QuizEvents from "./pages/QuizEvents";
import Teams from "./pages/Teams";
import { useState } from 'react';


function App() {
  const [token, setToken] = useState(null);

  function addToken(auth_token) {
    setToken(auth_token);
  }

  return (
    <div className="App">
         <BrowserRouter>
            <NavBar />
            
            <Routes>
                <Route path="/" element={<Home addToken={addToken} token={token}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/quiz_events" element={<QuizEvents />} />
                <Route path="/teams" element={<Teams/> } />
            </Routes>
            
        </BrowserRouter>
    </div>
  );
}

export default App;
