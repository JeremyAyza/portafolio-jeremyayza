import "./Skills.css"


export default function Skills(props:itemSkill) {
	return (
		<div className="skill__item">
			<span className="skill__icon"><img src={`/assets/tec-icons/icon-${props.imgName}.png`} alt="" /></span>
			<span className="skill__name">{props.name}</span>
		</div>
	)

}

interface itemSkill{
	imgName:string,
	name:string
}


