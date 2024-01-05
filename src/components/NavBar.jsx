import React from 'react';
import {Link} from "react-router-dom"
import { MdEmojiPeople  } from "react-icons/md";
import { FaMugHot  } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdEventNote } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";

const NavBar = () => {
    return (
        <>
            <div className="NavBar">
                
                    <Link className="NavBar-link" to="/"><FaMugHot style={{marginRight:10}}/>PUB QUIZ</Link>
                    
                        <Link to="/" className="NavBar-link"><FaHouse style={{marginRight:10}}/>Home</Link>
                        <Link to="/about" className="NavBar-link"><GrContactInfo style={{marginRight:10}} />About</Link>
                        <Link to="/quiz_events" className="NavBar-link"><MdEventNote style={{marginRight:10}}/>Events</Link>
                        <Link to="/teams" className="NavBar-link"><MdEmojiPeople className="quizIcons"/>Teams</Link>
                    
                
            </div>
        </>
    );
};

export default NavBar;