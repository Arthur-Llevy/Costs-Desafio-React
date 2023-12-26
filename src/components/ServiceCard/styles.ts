import styled from 'styled-components';

export const ProjectCardContainer = styled.div`
	padding: 1em;
	border: 1px solid #7a7a7a;
	border-radius: 5px;
	width: 24%;
	margin: 0.5%;

	h4 {
		background: #222;
		color: #ffbb33;
		padding: 0.4em;
		margin-bottom: 1.3em;
	}

	p {
		color: #7a7a7a;
		margin-bottom: 1em;
	}

	p span {
		font-weight: bold;
	}
`;

export const ProjectCardActions = styled.div`
	margin-top: 1.2em;
	display: flex;
	align-items: center;

	a, button {
		text-decoration: none;
		border: none;
		background: #fff;
		color: #222;
		font-size: 0.9em;
		padding: .6em 1em;
		cursor: pointer;
		margin-right: 1em;
		border: 1px solid #222;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: .5s;
	}

	svg {
		margin-right: .5em;
	}

	:is(button, a):hover {
		background: #222;
		color: #ffbb33;
	}
`;