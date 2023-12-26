import styled from 'styled-components';

export const ProjectDetailsContainer = styled.div`
	padding: 2em;

	h1, h2, p {
		margin-bottom: .5em;
	}

	h1 {
		background: #222;
		color: #ffbb33;
		padding: .4em;
	}

	span {
		font-weight: bold;
	}
`

export const DetailsContainer = styled.div`
	border-bottom: 1px solid #7a7a7a;
	margin-bottom: 1.2em;
	padding-bottom: 1.2em;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

export const ServiceFormContainer = styled.div`
	border-bottom: 1px solid #7a7a7a;
	margin-bottom: 1.2em;
	padding-bottom: 1.2em;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export const Button = styled.button`
	background: #222;
	color: #fff;
	padding: 0.5em 1em;
	text-decoration: none;
	transition: .5s;
	margin-top: 0.5em;
	cursor: pointer;
	max-height: 40px;
	border: none;

	&:hover {
		color: #ffbb22
	}
`;

export const ProjectInfo = styled.div`
	width: 100%;
`;