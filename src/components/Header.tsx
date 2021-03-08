import React from 'react';
import styled from 'styled-components';

interface Props {
	text: string;
}

const Header = ({ text }: Props) => {
	return (
		<Container>
			<h2>{text}</h2>
		</Container>
	);
};

export default Header;

const Container = styled.header`
	background-color: #282c34;
	height: 70px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
	padding: 20px;
	cursor: pointer;
	h2 {
		margin: 0;
	}
`;
