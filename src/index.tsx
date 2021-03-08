import React from 'react';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import store from 'redux/store';
import theme from 'styles/theme';
import App from './App';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<Helmet>
			<title>영화 정보 APP - Ham Jun Ho</title>
			<link href="%PUBLIC_URL%/favicon.ico" rel="shortcut icon" />
			<link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" rel="stylesheet" />
			<link
				href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap"
				rel="stylesheet"
			/>
		</Helmet>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root'),
);
