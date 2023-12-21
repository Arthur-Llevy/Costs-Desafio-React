import './styles.css';
import { SubmitButtonProps } from './types.ts';

export const SubmitButton = ({ text }: SubmitButtonProps) => {
	return (
		<div className="form-control">
			<button className="btn">{text}</button>
		</div>
	);
};