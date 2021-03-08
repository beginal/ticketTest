import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import store from 'redux/store';
import theme from 'styles/theme';
import App from './App';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root'),
);
