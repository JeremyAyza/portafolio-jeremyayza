import React, { useState } from "react"
import BurgerBtn from "./BurgerBtn"
import "./Nav.css"




export default function Nav() {


	const [clicked, setClicked] = useState(false)

	const handleClick = () => {
		setClicked(!clicked)
	}

	return (

		<nav className="nav" >

			<h2 className="nav-header" ><span className="simbol">&lt;</span>Jeremy Ayza Matias<span className="simbol">/&gt;</span></h2>
			<div className={`links ${clicked ? 'active' : ''}`}>
				<a onClick={() => setClicked(false)} className="nav-item" href="#home" rel="noopener noreferrer">Home</a>
				<a onClick={() => setClicked(false)} className="nav-item" href="#about" rel="noopener noreferrer">About</a>
				<a onClick={() => setClicked(false)} className="nav-item" href="#services" rel="noopener noreferrer">Services</a>
				<a onClick={() => setClicked(false)} className="nav-item" href="#portfolio" rel="noopener noreferrer">Portfolio</a>
				<a onClick={() => setClicked(false)} className="nav-item" href="#contact" rel="noopener noreferrer">Contact</a>

			</div>
			<div className="burger">
				<BurgerBtn
					handleClick={handleClick}
					clicked={clicked}
				/>
			</div>
			<div className={`bg-nav ${clicked ? "active" : ""}`}></div>
		</nav>


	)
}