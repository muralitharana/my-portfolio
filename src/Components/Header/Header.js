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
                <NavLink to="/my-portfolio/">Home</NavLink>
                <NavLink to="/my-portfolio/Skills">Skills</NavLink>
                <NavLink to="/my-portfolio/Education">Education</NavLink>
                <NavLink to="/my-portfolio/Certificates">Certificates</NavLink>
                <NavLink to="/my-portfolio/Projects">Projects</NavLink>
                <NavLink to="/my-portfolio/Contact">Contact</NavLink>
                <NavLink to="/my-portfolio/About">About</NavLink>
            </div>
            <div className='topBarButton'>
                <button onClick={()=>settopBarHeight("60%")}>Top</button>
            </div>
            <header>
                Header
            </header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/my-portfolio/Skills">Skills</NavLink>
                <NavLink to="/my-portfolio/Education">Education</NavLink>
                <NavLink to="/my-portfolio/Certificates">Certificates</NavLink>
                <NavLink to="/my-portfolio/Projects">Projects</NavLink>
                <NavLink to="/my-portfolio/Contact">Contact</NavLink>
                <NavLink to="/my-portfolio/About">About</NavLink>
            </nav>
        </div>
    )
}

export default Header
