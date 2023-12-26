import * as S from '../styles.ts';
import { SubmitButtonProps } from './types.ts';

export const SubmitButton = ({ text }: SubmitButtonProps) => {
	return (
		<S.FormContainer>
			<button>{text}</button>
		</S.FormContainer>
	);
};