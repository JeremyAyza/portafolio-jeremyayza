import "./Home.css";

export default function Home() {
	return (
			<section id="home" className="home">
				<div className="home__bg"></div>
				<picture>
					
					<img className="home__profile"  src="../assets/imgs/perfil.jpg" alt="Jeremy Ayza" />
				</picture>

				<div className="home__description">
					<span className="home__title--primary">Hi!</span>
					<h1 className="home__title" >I'm Jeremy Ayza</h1>
					<span className="home__title--secondary">Web Developer</span>
				</div>
			</section>

        
    )
}
