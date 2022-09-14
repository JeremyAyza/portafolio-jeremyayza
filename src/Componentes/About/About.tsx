

import React from "react"
import Skills from "../utilidades/Skills"
import "./About.css"





export default function About() {
	return (
		<section className="about" id="about">
				<h2 className="section__title">About me</h2>
				<div className="about_content">

					<div className="about_item ">
						<h3>I'm Jeremy Ayza, Front-end Developer.</h3>
						<div className="about_description">
							<p>I am a Front-end developer with experience building websites and web applications. I specialize in JavaScript, and have professional experience working with React.</p>
							<p>I am always seeking to improve my skills and continue growing professionally in order to make valuable contributions at the working group I am part of. Therefore I use the modern development workflow with CodeStream in order to increase productivity and improve communication inside our development team.</p>
							<div className="container_btn-cv">
								{/* <a href="http://" className="btn-cv"><FaFileDownload /> Descargar CV</a> */}
							</div>
						</div>
					</div>
					<div className="about_item ">
						<h3 className="about_title-skills" >My Skills</h3>
						<div className="container__skills">
							<Skills name="HTML" imgName="html"></Skills>
							<Skills name="CSS" imgName="css"></Skills>
							<Skills name="JavaScript" imgName="js"></Skills>
							<Skills name="React" imgName="react"></Skills>
							<Skills name="TypeScript" imgName="ts"></Skills>
							<Skills name="GIT" imgName="git"></Skills>
							<Skills name="GITHUB" imgName="gh"></Skills>
							<Skills name="Bootstrap" imgName="bs"></Skills>
							{/* <Skills name="NodeJS" imgName="node"></Skills>
							<Skills name="Express" imgName="express"></Skills> */}
						</div>
					</div>
				</div>
		</section>



	)


}