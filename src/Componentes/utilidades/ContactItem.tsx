import { ComponentElement, ReactComponentElement, ReactNode } from "react";
import { FaMobileAlt } from "react-icons/fa";
import "./ContactItem.css"


export default function ContactItem(props:ContactItemProps) {
	return (
		<a className="contact-item" href={props.link} target="_blank" >
			<div style={{color:props.color}}>{props.iconName}</div>
			<p>{props.description}</p>
		</a>


        
  )
}

interface ContactItemProps{
    link:string,
	iconName:ReactNode,
	description:string,
	color:string
}