import './style.css';
import loadingIcon from '../../assets/img/loading.svg';

export const Loading = () => {
	return(
		<div className="loader-container">
			<img className="loader" src={loadingIcon} alt="loading-icon"/>
		</div>
	);
};