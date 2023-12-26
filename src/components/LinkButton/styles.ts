import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
	background: #222;
	color: #fff;
	padding: 0.5em 1em;
	text-decoration: none;
	transition: .5s;
	margin-top: 0.5em;

	&:hover {
		color: #ffbb22;
	}
`;
