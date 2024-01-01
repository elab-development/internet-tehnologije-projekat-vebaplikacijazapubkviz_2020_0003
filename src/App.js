import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Teams from "./pages/Teams";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <NavBar />
            <Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/teams" element={<Teams />} />
            </Routes>
            </Container>
        </BrowserRouter>
    </div>
  );
}

export default App;
