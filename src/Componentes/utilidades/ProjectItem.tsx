import "./ProjectItem.css"
import {FaGithub,FaGlobeAmericas} from "react-icons/fa"
export default function ProjectItem(props:projectsProps) {
	return (
		<div className="project-item">
			<img className="project-img" src={`assets/pages/${props.imgName}.jpg`} alt={props.imgName} />
			<div className="bg-project">
				<h3 className="" >{props.title}</h3>
				<p className="description-projects">{props.description}</p>
				<div className="containers-btns-projects">
					<a href={props.urlWebsite} className="btn_project" target="_blank" rel="noopener noreferrer"><FaGlobeAmericas></FaGlobeAmericas> Website</a>
					<a href={props.urlRepostitory} className="btn_project" target="_blank" rel="noopener noreferrer"><FaGithub></FaGithub> Repository</a>
				</div>

			</div>



		</div>
	)
}
interface projectsProps{
	imgName:string,
	title:string,
	description:string,
	urlWebsite:string,
	urlRepostitory:string
}