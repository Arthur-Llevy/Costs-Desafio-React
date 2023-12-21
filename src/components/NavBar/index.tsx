import { Link } from 'react-router-dom';
import costsLogo from '../../assets/img/costs_logo.png';
import './styles.css';

export const NavBar = () => {
	return (
		<nav className="navBar">
			<Link to="/">
				<img src={costsLogo} alt="costs-logo" />
			</Link>		
			<ul className="list">
				<li><Link to="/">Home</Link></li>					
				<li><Link to="/contact">Contato</Link></li>
				<li><Link to="/company">Empresa</Link></li>
				<li><Link to="/projects">Projeto</Link></li>
			</ul>	
		</nav>
	);
}