import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Navigacija from "./komponente/Navigacija";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./stranice/Home";
import About from "./stranice/About";
import Events from "./stranice/Events";
import Teams from "./stranice/Teams";

function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Navigacija />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/teams" element={<Teams />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
