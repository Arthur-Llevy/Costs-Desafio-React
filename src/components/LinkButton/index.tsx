import * as S from './styles.ts';
import { LinkButtonProps } from './types.ts';

export const LinkButton = ({ to, text }: LinkButtonProps) => {
	return(
		<S.StyledLink to={to}>
			{text}
		</S.StyledLink>
	);
};