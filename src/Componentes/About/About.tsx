

import React from "react"
import { FaFileDownload } from "react-icons/fa"
import Skills from "../utilidades/Skills"
import "./About.css"





export default function About() {
	return (
		<section className="about" id="about">
			<h2 className="section__title">About me</h2>
			<div className="about_content">

				<div className="about_item ">
					<h3>Soy Jeremy Ayza, Web Developer.</h3>
					<div className="about_description">
						<p>Me gusta aprender cosas nuevas y practicar constantemente lo que aprendo, estudio diariamente para perfeccionarme y ampliar mis conocimientos.</p>
						<p>
							Soy un entusiasta del desarrollo web que encuentra motivación en la búsqueda constante de proyectos desafiantes que me permitan crecer profesionalmente.
							<br />
							Me complace continuar expandiendo mis habilidades y abordar nuevos retos en este campo en constante evolución.
						</p>


						<div className="container_btn-cv">
							<a href="https://drive.google.com/uc?export=download&id=1z9NaNi2gXSx2CuCnh9OSUHcl2RHpYG9i" target={"_blank"} rel="noreferrer" className="btn-cv"><FaFileDownload /> Descargar CV</a>
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
						<Skills name="Git" imgName="git"></Skills>
						<Skills name="GitHub" imgName="gh"></Skills>
						<Skills name="BootStrap" imgName="bs"></Skills>
						<Skills name="NodeJS" imgName="node"></Skills>
						{/*<Skills name="Express" imgName="express"></Skills>*/}
					</div>
				</div>
			</div>
		</section>



	)


}
