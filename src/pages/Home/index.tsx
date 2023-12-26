import * as S from './styles.ts';
import savingsIcon from '../../assets/img/savings.svg';
import { LinkButton } from '../../components/LinkButton/';

export const Home = () => {
	return(
		<S.HomeContainer>
			<h1>Bem-vindo ao <span>Costs</span></h1>
			<p>Comece a gerenciar seus projetos agora mesmo!</p>
			<LinkButton to="/newproject" text="Criar Projeto" />
			<img src={savingsIcon} alt="savings-icon" />
		</S.HomeContainer>
	);
};