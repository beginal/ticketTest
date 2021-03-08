import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
 * {
   box-sizing: border-box;
 }
 body {
  font-family: 'Spoqa Han Sans','Noto Sans KR', sans-serif;
 }
 ol,ul,li {
   list-style: none;
 }
 a {
			text-decoration: none;
			color: inherit;
		}
    
 img {
   width: 100%;
   height: 100%;
 }

`;

export default GlobalStyle;
