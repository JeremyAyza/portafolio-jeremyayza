import ContactItem from "../utilidades/ContactItem";
import { FaLinkedinIn, FaGithub, FaTelegram } from "react-icons/fa";
import { SiGmail} from "react-icons/si";
import "./Contact.css"


export default function Contact() {
	return (
		<section className="contact" id="contact">
			<h2 className="section__title">Contact</h2>
			<div className="contact_content">
				<h3>Contáctame para trabajar juntos</h3>
				<div className="container-contact">

					<ContactItem
						iconName={<FaGithub className="contact-icon" />}
						description="GitHub"
						link="https://github.com/JeremyAyza" 
						color="#000"
					/>
					<ContactItem
						iconName={<SiGmail className="contact-icon" />}
						description="Mail"
						link="mailto:jeremy.ayza@gmail.com?subject=I%20want%20to%20contact%20you" 
						color="#f22"
					/>
					
					<ContactItem
						iconName={<FaLinkedinIn className="contact-icon" />}
						description="Linkedin"
						link="https://www.linkedin.com/in/JeremyAyzaMatias/" 
						color="#0A66C2"
					/>
					
					<ContactItem
						iconName={<FaTelegram className="contact-icon" />}
						description="Telegram"
						link="https://t.me/JeremyAyza" 
						color="#2AABEE "
					/>
					

				</div>
			</div>

		</section>

	)
}