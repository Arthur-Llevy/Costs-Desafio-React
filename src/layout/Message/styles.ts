import styled from 'styled-components';

export const MessageContainer = styled.div<{ className: string }>`
	width: 100%;
	padding: 1em;
	border: 1px solid #000;
	margin: 0 auto;
	text-align: center;
	margin-bottom: 2em;
	border-radius: 5px;

	${props => {
		if(props.className === "message sucess"){
			return `
				color: #155724;
				background-color: #d4edda;
				border-color: #c3e6cb;
			`
		}else if(props.className === "message error"){
			return `
				color: #721c24;
				background-color: #f8d7da;
				border-color: #f5c6cb;
			`
		}
	}}
`;