import Projects from "../utilidades/ProjectItem";
import "./Portafolio.css"
export default function Portafolio() {
	return (
		<section className="portafolio" id="portfolio">
			<h2 className="section__title">Portfolio</h2>
			<div className="portafolio_content"></div>
			<h3>Proyectos que he realizado</h3>
			<div className="grid_projects">

				

				<Projects
					imgName="todo-react"
					title="React Todo List"
					description="Web Application: React JS."
					urlRepostitory="https://github.com/JeremyAyza/todo-react"
					urlWebsite="https://todo-react-ja.netlify.app/"
				></Projects> 

				
				

				<Projects
					imgName="ecommerce-frontend1"
					title="Ecommerces Page"
					description="Front-End Page: HTML, CSS and JS."
					urlRepostitory="https://github.com/JeremyAyza/ecommerce-frontend"
					urlWebsite="https://frontend-ecommerce-page.netlify.app/"
				></Projects>
				
				<Projects
					imgName="pokedex_page"
					title="POKÉDEX PAGE"
					description="Front-End Web Application: React and Tailwind."
					urlRepostitory="https://github.com/JeremyAyza/Pokedex-consumption-api"
					urlWebsite="https://pokedex-5add.onrender.com/"
				></Projects>

				

				<Projects
					imgName="api-joe"
					title="API - Joe Inventory"
					description="Web Backend: Node, Express and MongoDB"
					urlRepostitory="https://github.com/JeremyAyza/api-joi-inventory2"
					urlWebsite="https://api-joi-inventory2.onrender.com/api/producto"
				></Projects>


				

				

							
				<Projects
					imgName="front-end-system"
					title="JCUBA SYSTEM"
					description="Front-End Web Application: Bootstrap, React and TypeScript."
					urlRepostitory="https://github.com/JeremyAyza/front-end-system"
					urlWebsite="https://front-end-sys.onrender.com"
				></Projects>

				

				
				
				<Projects
					imgName="shaddai_page"
					title="Ecommerce Shaddai Import"
					description="Full Stack Web App: React, Node, Express, MongoDB & BootStrap"
					urlRepostitory="https://github.com/JeremyAyza/front-end-shaddai"
					urlWebsite="https://frontend-shaddai.onrender.com/"
				></Projects>

				



			</div>

		</section>
	)
}
