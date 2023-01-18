import QualitiesItem from "../utilidades/QualitiesItem";
import { FaMobileAlt, FaPalette, FaCode, FaCogs } from "react-icons/fa";
import "./Qualities.css"


export default function Qualities() {
	return (
		<section className="services" id="qualities">
			<h2 className="section__title">Qualities</h2>
			<div className="services_content">
				<h3>Cualidades como programador</h3>
				<div className="container-services">

					<QualitiesItem
						iconName={<FaMobileAlt className="services-icon" />}
						description="Sigo el principio de Responsive Design a la hora de desarrollar una página para mantener el orden y adaptabilidad."
						title="Responsive Design" 
						color="#3e5287"/>

					<QualitiesItem
						iconName={<FaCode className="services-icon" />} 
						description="Mantengo mi código limpio y entendible, siguiendo las buenas prácticas para un buen desarrollo del programa." 
						title="Clean Code"
						color="#6db7bf"/>

					<QualitiesItem
						iconName={<FaCogs className="services-icon" />} 
						description="Ante problemas nuevos me mantengo en calma para idear soluciones creativas, utilizando mi conocimiento para escribir código eficiente." 
						title="Pensamiento Creativo"
						color="#ffdb94"
					/>




				</div>
			</div>

		</section>

	)
}