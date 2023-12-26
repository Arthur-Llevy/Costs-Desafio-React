import * as S from './styles.ts';
import loadingIcon from '../../assets/img/loading.svg';

export const Loading = () => {
	return(
		<S.LoadingContainer >
			<img src={loadingIcon} alt="loading-icon"/>
		</S.LoadingContainer>
	);
};