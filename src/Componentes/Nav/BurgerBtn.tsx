import "./BurguerBtn.css"

export default function BurgerBtn(props:IBurgerBtn) {
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

interface IBurgerBtn{
	handleClick:()=>void,
	clicked: boolean

}