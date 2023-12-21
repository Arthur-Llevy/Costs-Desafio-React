import './styles.css';
import { InputProps } from './types.ts';

export const Input = ({ type, text, name, placeholder, handleOnChange, value }: InputProps) => {
	return (
		<div className="form-control">
			<label htmlFor={name}>{text}:</label>
			<input 
				type={type}
				placeholder={placeholder} 
				onChange={handleOnChange}
				value={value}
				name={name}
				id={name}
			/>
		</div>
	);
};