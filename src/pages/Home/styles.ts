import styled from 'styled-components';

export const HomeContainer = styled.section`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 4em;

	h1 {
		font-size: 2.5em;
		margin-bottom: 0.5em;
	}

	h1 span {
		color: #ffbb33;
		padding: 0 0.2em;
		background: #222;	
	}

	p {
		color: #7b7b7b;
		font-size: 1.5em;
	}

	img {
		width: 350px;
		margin: 2em 0;
	}
`;