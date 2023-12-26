import * as S from '../styles.ts';
import { SelectProps } from './types.ts';

export const Select = ({ text, name, options, handleOnChange, value }: SelectProps) => {
	return (
		<S.FormContainer>
			<label htmlFor={name}>{text}:</label>
			<select name={name} id={name} onChange={handleOnChange} value={value || ''}>
				<option>Selecione uma opção</option>
				{options.map(option => (
					<option value={option.id} key={option.id}>{option.name}</option>
				))}
			</select>
		</S.FormContainer>
	);
};