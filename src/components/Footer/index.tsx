import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './styles.css';

export const Footer = () => {
	return (
		<footer className="footer">
			<ul>
				<li>
					<FaFacebook />
				</li>
				<li>
					<FaInstagram />
				</li>
				<li>
					<FaLinkedin />
				</li>
			</ul>
			<p className="copy-right"><span>Costs</span> &copy; 2023</p>
		</footer>
	);
}