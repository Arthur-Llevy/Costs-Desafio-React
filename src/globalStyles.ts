import { createGlobalStyle }  from 'styled-components'

export const GobalStyles = createGlobalStyle`
	
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: "Open sans", "sans-serif";
	}

	html, body, #root {
		background-color: #efefef;
		height: 100%;
	}
`