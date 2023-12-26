import { Link } from 'react-router-dom';
import costsLogo from '../../assets/img/costs_logo.png';
import * as S from './styles.ts';

export const NavBar = () => {
	return (
		<S.NavContainer>
			<Link to="/">
				<img src={costsLogo} alt="costs-logo" />
			</Link>		
			<ul>
				<li><Link to="/">Home</Link></li>					
				<li><Link to="/contact">Contato</Link></li>
				<li><Link to="/company">Empresa</Link></li>
				<li><Link to="/projects">Projeto</Link></li>
			</ul>	
		</S.NavContainer>
	);
}