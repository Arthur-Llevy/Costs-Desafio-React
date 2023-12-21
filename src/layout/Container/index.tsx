import { ContainerProps } from './types.ts';
import './styles.css';

export const Container = ({ children, customClass }: ContainerProps ) => {
	return(
		<div className={`container ${customClass}`}>
			{children}
		</div>
	);
}