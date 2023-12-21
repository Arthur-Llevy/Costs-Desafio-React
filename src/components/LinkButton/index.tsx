import './styles.css';
import { LinkButtonProps } from './types.ts';
import { Link } from 'react-router-dom';

export const LinkButton = ({ to, text }: LinkButtonProps) => {
	return(
		<Link className="btn" to={to}>
			{text}
		</Link>
	);
};