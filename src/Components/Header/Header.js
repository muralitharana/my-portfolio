import React from 'react'
import "./Header.css"
import {useState} from "react"
import { NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'
const Header = () => {
    const [topBarHeight, settopBarHeight] = useState("0px")
    return (
        <>
        <div className='headerContainer'>
            <div className='topBar' style={{height:topBarHeight,overflow:"auto"}}>
                <button onClick={()=>settopBarHeight("0px")}>&times;</button>
                <NavLink className="navLink" to="/my-portfolio/">Home</NavLink>
                <NavLink className="navLink" to="/my-portfolio/Skills">Skills</NavLink>
                <NavLink className="navLink" to="/my-portfolio/Education">Education</NavLink>
                <NavLink className="navLink" to="/my-portfolio/Certificates">Certificates</NavLink>
                <NavLink className="navLink" to="/my-portfolio/Projects">Projects</NavLink>
                <NavLink className="navLink" to="/my-portfolio/Contact">Contact</NavLink>
                <NavLink className="navLink" to="/my-portfolio/About">About</NavLink>
            </div>
            <div className='topBarButton'>
                <button onClick={()=>settopBarHeight("50%")}>&#9776;</button>
            </div>
            <header>
                <h1>MURALITHARAN A</h1>
            </header>
           
        </div>
        <div className='navBar'>
             <nav>
                <NavLink className="navLink" to="/my-portfolio/">Home</NavLink>
                <NavLink className="navLink" to="/my-portfolio/Skills">Skills</NavLink>
                <NavLink className="navLink" to="/my-portfolio/Education">Education</NavLink>
                <NavLink className="navLink" to="/my-portfolio/Certificates">Certificates</NavLink>
                <NavLink className="navLink" to="/my-portfolio/Projects">Projects</NavLink>
                <NavLink className="navLink" to="/my-portfolio/Contact">Contact</NavLink>
                <NavLink className="navLink" to="/my-portfolio/About">About</NavLink>
                <hr/>
            </nav>
            
        </div>
        
        </>
    )
}

export default Header
