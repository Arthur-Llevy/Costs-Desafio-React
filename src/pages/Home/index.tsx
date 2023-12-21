import './styles.css';
import savingsIcon from '../../assets/img/savings.svg';
import { LinkButton } from '../../components/LinkButton/';

export const Home = () => {
	return(
		<section className="home-container">
			<h1>Bem-vindo ao <span>Costs</span></h1>
			<p>Comece a gerenciar seus projetos agora mesmo!</p>
			<LinkButton to="/newproject" text="Criar Projeto" />
			<img src={savingsIcon} alt="savings-icon" />
		</section>
	);
};