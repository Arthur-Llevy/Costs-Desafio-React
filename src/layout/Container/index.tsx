import { ContainerProps } from './types.ts';
import * as S from './styles.ts';

export const Container = ({ children, customClass }: ContainerProps ) => {
	return(
		<S.Container className={`container ${customClass}`}>
			{children}
		</S.Container>
	);
}