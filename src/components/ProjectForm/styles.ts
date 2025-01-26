import styled from 'styled-components';

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	margin-bottom: 1em;

	label {
		margin-bottom: 0.6em;
		font-weight: bold;
	}

	input {
		padding: 0.7em;
		border-radius: 0;
		border: none;
	}

	input::placeholder {
		color: #7b7b7b;
	}

	select {
		padding: 0.7em;
		border-radius: 0;
		border: none;
		background: #fff;
	}

	
`;

export const SubmitButton = styled.button`
	background: #222;
	color: #fff;
	padding: 0.7em 1.2em;
	text-decoration: none;
	transition: .5s;
	cursor: pointer;
	border: none;

	&:hover {
		color: #ffbb22;
	}
`