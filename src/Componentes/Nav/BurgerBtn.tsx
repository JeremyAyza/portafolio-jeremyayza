import { HookCallbacks } from "async_hooks"
import "./BurguerBtn.css"

export default function BurgerBtn(props:BurgerBtn) {
	return (
		<div 
			onClick={props.handleClick} 
			className={`icon nav-icon-5 ${props.clicked? "open":""}`}
			>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

interface BurgerBtn{
	handleClick:()=>void,
	clicked: boolean

}