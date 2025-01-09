import { useState } from "react";
import FAQ from "./pages/faq";
import React from 'react';

import './App.css';
import './/dropdownmenu.css';




import { useNavigate } from "react-router-dom";

function DropdownMenu() {
    
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleclick= () =>{
        navigate("/faq");

        
    } 

    return (
        <ul className="dropmenu">
            <li
                className="dropmenu-list"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                
                {open && (
                    <ul className="dropdown">
                        <li className="dropdown-item" onClick={handleclick}>FAQ</li>
                        <li className="dropdown-item">BLOG</li>
                    </ul>
                )}
            </li>
        </ul>
    );
}

export default DropdownMenu;
