import Projects from "../utilidades/ProjectItem";
import "./Portafolio.css"
export default function Portafolio() {
	return (
		<section className="portafolio" id="portfolio">
			<h2 className="section__title">Portafolio</h2>
			<div className="portafolio_content"></div>
			<h3>Here you can see the projects I have worked on.</h3>
			<div className="grid_projects">

				
				<Projects
					imgName="ecommerce-frontend1"
					title="Ecommerces Page"
					description="Front-End Page: HTML, CSS and JS."
					urlRepostitory="https://github.com/JeremyAyza/ecommerce-frontend"
					urlWebsite="https://frontend-ecommerce-page.netlify.app/"
				></Projects>
				

				
				<Projects
					imgName="calculadora-react"
					title="React Calculator"
					description="Web Application: React JS"
					urlRepostitory="https://github.com/JeremyAyza/calculadora-react"
					urlWebsite="https://calculator-react-fcc.herokuapp.com/"
				></Projects>


				<Projects
					imgName="todolist-app-js"
					title="ToDo List JS"
					description="Web Application: HTML, CSS and JS (using local storage)."
					urlRepostitory="https://github.com/JeremyAyza/todolist-app-js"
					urlWebsite="https://todolist-app-js1.netlify.app/todolist"
				></Projects>

				

				
				
				<Projects
					imgName="todo-react"
					title="React Todo List"
					description="Web Application: React JS."
					urlRepostitory="https://github.com/JeremyAyza/todo-react"
					urlWebsite="https://react-app-todolist1.herokuapp.com/"
				></Projects>

				<Projects
					imgName="all-star-apps"
					title="ALL STAR APP's"
					description="Website: Handlebars, NodeJS and Express."
					urlRepostitory="https://github.com/JeremyAyza/all-star-apps"
					urlWebsite="https://all-star-apps.herokuapp.com/"
				></Projects>
				
				<Projects
					imgName="front-end-system"
					title="JCUBA SYSTEM"
					description="Front-End Web Application: Bootstrap, React and TypeScript."
					urlRepostitory="https://github.com/JeremyAyza/front-end-system"
					urlWebsite="https://front-end-system.herokuapp.com/"
				></Projects>

				

				



			</div>

		</section>
	)
}