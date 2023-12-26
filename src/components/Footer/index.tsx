import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import * as S from './styles.ts';

export const Footer = () => {
	return (
		<S.FooterContainer>
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
			<S.CopyRight><span>Costs</span> &copy; 2023</S.CopyRight>
		</S.FooterContainer>
	);
}