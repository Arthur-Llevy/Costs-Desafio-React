import styled from 'styled-components';

export const FooterContainer = styled.footer`
	background: #222;
	color: #fff;
	padding: 3em;
	text-align: center;
	list-style: none;
	width: 100vw;
	height: 120px;
	display: flex;
	flex-direction: column;

	ul {
		display: flex;
		justify-content: center;
		list-style: none;
		gap: 30px;
	}

	ul li:hover {
		color: #ffbb22;
	}

	ul li svg {
		font-size: 1.5em;
		cursor: pointer;
	}
}
`;

export const CopyRight = styled.p`
	margin-top: 10px;

	span {
		font-weight: bold;
		color: #ffbb22;
	}
`;