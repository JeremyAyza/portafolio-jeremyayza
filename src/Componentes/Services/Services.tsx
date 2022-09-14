import ServicesItem from "../utilidades/ServicesItem";
import { FaMobileAlt, FaPalette, FaCode } from "react-icons/fa";
import "./Services.css"


export default function Services() {
	return (
		<section className="services" id="services">
			<h2 className="section__title">Services</h2>
			<div className="services_content">
				<h3>Services I offer.</h3>
				<div className="container-services">

					<ServicesItem
						iconName={<FaMobileAlt className="services-icon" />}
						description="Your site will display properly on any device, including desktop computers, tablets and mobile phones."
						title="Fully Resposive" 
						color="#3e5287"/>

					<ServicesItem
						iconName={<FaCode className="services-icon" />} 
						description=" I know the importance of web design and can help you create a website you’ll love." 
						title="Development"
						color="#6db7bf"/>

					<ServicesItem
						iconName={<FaPalette className="services-icon" />} 
						description="A good and attractive web design helps you keep your leads on your site, which is the digital face of your business. " 
						title="Creative Design"
						color="#ffdb94"
					/>




				</div>
			</div>

		</section>

	)
}