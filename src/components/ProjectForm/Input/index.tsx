import * as S from '../styles.ts';
import { InputProps } from './types.ts';

export const Input = ({ type, text, name, placeholder, handleOnChange, value }: InputProps) => {
	return (
		<S.FormContainer>
			<label htmlFor={name}>{text}:</label>
			<input 
				type={type}
				placeholder={placeholder} 
				onChange={handleOnChange}
				value={value}
				name={name}
				id={name}
			/>
		</S.FormContainer>
	);
};