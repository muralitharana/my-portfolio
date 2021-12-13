import React from 'react'
import "./Header.css"
import {useState} from "react"
import { NavLink } from 'react-router-dom'
const Header = () => {
    const [topBarHeight, settopBarHeight] = useState("0px")
    return (
        <div className='headerContainer'>
            <div className='topBar' style={{height:topBarHeight}}>
                <button onClick={()=>settopBarHeight("0px")}>Close</button>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Skills">Skills</NavLink>
                <NavLink to="/Education">Education</NavLink>
                <NavLink to="/Certificates">Certificates</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
                <NavLink to="/About">About</NavLink>
            </div>
            <div className='topBarButton'>
                <button onClick={()=>settopBarHeight("60%")}>Top</button>
            </div>
            <header>
                Header
            </header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Skills">Skills</NavLink>
                <NavLink to="/Education">Education</NavLink>
                <NavLink to="/Certificates">Certificates</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
                <NavLink to="/About">About</NavLink>
            </nav>
        </div>
    )
}

export default Header
