import { ComponentElement, ReactComponentElement, ReactNode } from "react";
import { FaMobileAlt } from "react-icons/fa";
import "./QualitiesItem.css"


export default function ServicesItem(props:ServicesItemProps) {
	return (
		<div className="services-item">
			<div style={{color:props.color}}>{props.iconName}</div>
			<h4>{props.title}</h4>
			<p>{props.description}</p>
		</div>


        
  )
}

interface ServicesItemProps{
	iconName:ReactNode,
	title:string,
	description:string,
	color:string
}