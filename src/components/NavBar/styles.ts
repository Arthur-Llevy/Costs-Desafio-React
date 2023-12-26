import styled from 'styled-components';

export const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	background: #222;
	padding: 1em;

	ul {
		display: flex;
		list-style: none;
		align-items: center;
		gap: 30px;
	}

	ul a {
		 color: #eee;
  		text-decoration: none;
	}

	ul a:hover {
		color: #ffbb33;
  		text-decoration: none;
	}
`;